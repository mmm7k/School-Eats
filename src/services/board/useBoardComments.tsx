import {
  DocumentData,
  QueryDocumentSnapshot,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Modal } from 'antd';
import { db } from '../../../pages/_app';
import { isLoggedIn, userEmail } from '../../commons/globalstate/globalstate';

interface Comment {
  likecount?: number;
  id?: number | string;
  text?: string;
  email?: string | null | undefined;
  timestamp: string;
}

interface NewComment extends Omit<Comment, 'likecount' | 'id'> {
  id: number | string;
  email: string | null | undefined;
  timestamp: string;
}

export const useBoardComments = () => {
  const router = useRouter();
  const postId = router.query.boardid as string; // 바로 postId 추출
  const [comments, setComments] = useState<Comment[]>([]);
  const [login] = useRecoilState(isLoggedIn);
  const [newComment, setNewComment] = useState<string>('');
  const email = useRecoilValue(userEmail);

  const formatDate = (date: Date) => {
    const year = date.getFullYear().toString().slice(-2); // 뒤의 두 자리 숫자만 추출
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 월 (0부터 시작하므로 1을 더함)
    const day = date.getDate().toString().padStart(2, '0'); // 일
    const hours = date.getHours().toString().padStart(2, '0'); // 시간
    const minutes = date.getMinutes().toString().padStart(2, '0'); // 분

    return `${year}/${month}/${day} ${hours}:${minutes}`;
  };

  const getComments = async () => {
    if (!postId) return; // postId가 없으면 함수 종료
    try {
      const q = query(collection(db, 'boardcomment'), orderBy('timestamp', 'desc'), where('boardId', '==', postId));
      const snapshot = await getDocs(q);
      const commentsArr: Comment[] = snapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => {
        const data = doc.data();
        const date = data.timestamp ? formatDate(data.timestamp.toDate()) : '';

        return {
          ...data,
          id: doc.id,
          timestamp: date,
        };
      });
      setComments(commentsArr);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const success = () => {
    Modal.success({
      content: '댓글 등록에 성공하였습니다!',
    });
  };

  const deletemodal = () => {
    Modal.success({
      content: '댓글 삭제에 성공하였습니다!',
    });
  };

  const addDocError = () => {
    Modal.error({
      title: '로그인이 필요합니다!',
    });
  };

  const addComment = async () => {
    if (!login) {
      addDocError();
      return;
    }

    if (newComment.length === 0) {
      Modal.error({
        title: '댓글을 작성해주세요.',
      });
      return;
    }

    if (newComment.length > 150) {
      Modal.error({
        title: '댓글은 150자 이내로 작성해주세요.',
      });
      return;
    }

    const tempId = Date.now();
    const newCommentObj: NewComment = {
      id: tempId,
      text: newComment,
      email,
      timestamp: formatDate(new Date()),
    };

    setComments([newCommentObj, ...comments]);

    try {
      const commentsRef = collection(db, 'boardcomment');
      const docRef = await addDoc(commentsRef, {
        text: newComment,
        email,
        timestamp: new Date(),
        boardId: postId,
      });
      success();
      setNewComment('');
      setComments((prevComments) =>
        prevComments.map((comment) => (comment.id === tempId ? { ...comment, id: docRef.id } : comment))
      );
    } catch (error) {
      console.error('Error adding comment:', error);
      setComments(comments.filter((comment) => comment !== newCommentObj));
    }
  };

  const deleteComment = async (commentId: any) => {
    setComments((prevComments) => prevComments.filter((comment) => comment.id !== commentId));
    try {
      const commentDoc = doc(db, 'boardcomment', commentId);
      await deleteDoc(commentDoc);
      deletemodal();
    } catch (error) {
      console.error('Error deleting comment:', error);
      Modal.error({
        title: '댓글 삭제에 실패했습니다.',
      });
      getComments(); // 실패 시 댓글 다시 가져오기
    }
  };

  const updateCount = async (commentCount: number) => {
    if (!postId) {
      console.error('postId is undefined');
      return; // postId가 undefined인 경우 함수를 종료
    }
    const board = doc(db, 'board', postId);
    await updateDoc(board, {
      commentscount: commentCount,
    });
  };

  const updateComment = async (commentId: string, newText: string) => {
    try {
      const commentDocRef = doc(db, 'boardcomment', commentId);
      await updateDoc(commentDocRef, {
        text: newText,
      });

      setComments(
        comments.map((comment) => {
          if (comment.id === commentId) {
            return { ...comment, text: newText };
          }
          return comment;
        })
      );

      Modal.success({
        content: '댓글이 수정되었습니다!',
      });
    } catch (error) {
      console.error('Error updating comment:', error);
      Modal.error({
        title: '댓글 수정에 실패했습니다.',
      });
    }
  };

  useEffect(() => {
    if (postId) {
      getComments();
    }
  }, [postId]);

  useEffect(() => {
    if (postId && comments.length > 0) {
      const commentCount = comments.length;
      updateCount(commentCount);
    } else if (postId && comments.length === 0) {
      updateCount(0);
    }
  }, [comments, postId]);

  return {
    comments,
    newComment,
    setNewComment,
    addComment,
    deleteComment,
    deletemodal,
    updateComment,
  };
};
