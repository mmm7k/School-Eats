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
import { db } from '../../pages/_app';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isLoggedIn, userEmail } from '../commons/globalstate/globalstate';
import { Modal } from 'antd';

interface Comment {
  likecount: number;
  id: string;
  text?: string;
  email?: string;
  timestamp?: string;
}

export const useBoardComments = () => {
  const router = useRouter();
  const data = JSON.stringify(router.query); // boardId를 추출
  const jsonObject = JSON.parse(data);
  const postId = jsonObject.boardid;
  const [comments, setComments] = useState<Comment[]>([]);
  const [login] = useRecoilState(isLoggedIn);
  const [newComment, setNewComment] = useState<string>('');

  const email = useRecoilValue(userEmail);

  const formatDate = (date: any) => {
    const year = date.getFullYear().toString().slice(-2); // 뒤의 두 자리 숫자만 추출
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 월 (0부터 시작하므로 1을 더함)
    const day = date.getDate().toString().padStart(2, '0'); // 일
    const hours = date.getHours().toString().padStart(2, '0'); // 시간
    const minutes = date.getMinutes().toString().padStart(2, '0'); // 분

    return `${year}/${month}/${day} ${hours}:${minutes}`;
  };

  const getComments = async () => {
    let q;
    q = query(collection(db, 'boardcomment'), orderBy('timestamp', 'desc'), where('boardId', '==', postId));
    const snapshot = await getDocs(q);
    const commentsArr = snapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => {
      const data = doc.data();
      // Firestore 타임스탬프를 Date 객체로 변환
      const date = data.timestamp ? formatDate(data.timestamp.toDate()) : '';

      return {
        ...data,
        id: doc.id,

        timestamp: date, // 포맷된 날짜 사용
      };
    });
    //@ts-ignore
    setComments(commentsArr);
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

  // 사용자에게 먼저 ui 보여주고 백그라운드에서 add 진행
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

    // 댓글 객체 생성
    const newCommentObj = {
      id: tempId,
      text: newComment,
      email,
      timestamp: formatDate(new Date()),
    };

    // 댓글 UI 즉시 업데이트
    //@ts-ignore
    setComments([newCommentObj, ...comments]);

    // 데이터베이스에 댓글 저장
    try {
      // const commentsRef = collection(db, 'board', postId, 'comment');
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
        prevComments.map((comment) =>
          //@ts-ignore
          comment.id === tempId ? { ...comment, id: docRef.id } : comment
        )
      );
    } catch (error) {
      console.error('Error adding comment:', error);
      // 실패 시 UI에서 댓글 제거
      //@ts-ignore
      setComments(comments.filter((comment) => comment !== newCommentObj));
    }
  };

  const deleteComment = async (commentId: string) => {
    // 먼저 UI에서 댓글을 제거

    setComments((prevComments) => prevComments.filter((comment) => comment.id !== commentId));
    try {
      // 데이터베이스에서 댓글 삭제

      const commentDoc = doc(db, 'boardcomment', commentId);
      await deleteDoc(commentDoc);
      deletemodal();
    } catch (error) {
      console.error('Error deleting comment:', error);
      // 실패 시 오류 메시지 표시
      Modal.error({
        title: '댓글 삭제에 실패했습니다.',
      });
      // 실패 시 UI를 원래 상태로 복구
      getComments();
    }
  };

  const updateCount = async (commentCount: number) => {
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

      // UI 업데이트
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
      console.log(error);
      Modal.error({
        title: '댓글 수정에 실패했습니다.',
      });
    }
  };

  useEffect(() => {
    if (comments.length > 0) {
      const commentCount = comments.length;
      // 백그라운드에서 데이터베이스 업데이트
      updateCount(commentCount);
    } else {
      const commentCount = 0;
      updateCount(commentCount);
    }
  }, [comments]);

  useEffect(() => {
    if (postId) {
      getComments();
    }
  }, [postId]);

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
