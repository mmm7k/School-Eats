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
import { db } from '../../../pages/_app';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isLoggedIn, userEmail } from '../../commons/globalstate/globalstate';
import { Modal } from 'antd';

interface Comment {
  id: string;
  text?: string;
  email?: string;
  rating?: number;
}

export const useComments = () => {
  const router = useRouter();
  const data = JSON.stringify(router.query); // boardId를 추출
  const jsonObject = JSON.parse(data);
  const postId = jsonObject.placeid;
  const [comments, setComments] = useState<Comment[]>([]);
  const [login] = useRecoilState(isLoggedIn);
  const [newComment, setNewComment] = useState<string>('');
  const [newRating, setNewRating] = useState<number>(0);

  const email = useRecoilValue(userEmail);
  const getComments = async () => {
    let q;

    //@ts-ignore
    q = query(collection(db, 'comment'), orderBy('timestamp', 'desc'), where('placeId', '==', postId));
    const snapshot = await getDocs(q);
    const commentsArr = snapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => ({
      ...doc.data(),
      id: doc.id,
    }));

    setComments(commentsArr);
  };

  const success = () => {
    Modal.success({
      content: '리뷰 등록에 성공하였습니다!',
    });
  };

  const deletemodal = () => {
    Modal.success({
      content: '리뷰 삭제에 성공하였습니다!',
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

    if (newRating === 0) {
      Modal.error({
        title: '별점은 필수항목입니다.',
      });
      return;
    }

    if (newComment.length > 150) {
      Modal.error({
        title: '리뷰는 150자 이내로 작성해주세요.',
      });
      return;
    }

    const tempId = Date.now();

    // 댓글 객체 생성
    const newCommentObj = {
      id: tempId,
      text: newComment,
      email,
      rating: newRating,
      timestamp: new Date(),
      placeId: postId,
    };

    // 댓글 UI 즉시 업데이트
    //@ts-ignore
    setComments([newCommentObj, ...comments]);

    // 데이터베이스에 댓글 저장
    try {
      const commentsRef = collection(db, 'comment');

      const docRef = await addDoc(commentsRef, newCommentObj);
      success();
      setNewComment('');
      setNewRating(0);
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
      const commentDoc = doc(db, 'comment', commentId);

      await deleteDoc(commentDoc);
      deletemodal();
    } catch (error) {
      console.error('Error deleting comment:', error);
      // 실패 시 오류 메시지 표시
      Modal.error({
        title: '리뷰 삭제에 실패했습니다.',
      });
      // 실패 시 UI를 원래 상태로 복구
      getComments();
    }
  };

  // // 별점 평균을 계산하고 해당 포스트에 별점을 반영

  const [averageRating, setAverageRating]: any = useState(0);

  useEffect(() => {
    if (comments.length > 0) {
      // 평균 평점 계산
      const totalRating = comments.reduce((acc, comment) => acc + (comment.rating || 0), 0);
      const avgRating = totalRating / comments.length;
      setAverageRating(avgRating);

      // 평균 평점과 댓글 수를 UI에 반영
      const commentCount = comments.length;

      // 백그라운드에서 데이터베이스 업데이트
      updateRate(avgRating, commentCount);
    } else {
      setAverageRating(0);
      updateRate(0, 0);
    }
  }, [comments]);

  const updateRate = async (avgRating: number, commentCount: number) => {
    const board = doc(db, 'all', postId);

    await updateDoc(board, {
      rate: avgRating,
      commentscount: commentCount,
    });
  };

  const updateComment = async (commentId: string, updatedText: string, updatedRating: number) => {
    if (updatedRating === 0) {
      Modal.error({
        title: '별점은 필수항목입니다.',
      });
      return;
    }

    if (updatedText.length > 150) {
      Modal.error({
        title: '리뷰는 150자 이내로 작성해주세요.',
      });
      return;
    }

    try {
      const commentRef = doc(db, 'comment', commentId);
      await updateDoc(commentRef, {
        text: updatedText,
        rating: updatedRating,
        // 이 부분에 필요한 다른 필드 업데이트를 추가할 수 있습니다.
      });
      // 로컬 상태 업데이트
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === commentId ? { ...comment, text: updatedText, rating: updatedRating } : comment
        )
      );
      Modal.success({
        content: '리뷰가 수정되었습니다!',
      });
    } catch (error) {
      console.error('Error updating comment:', error);
      Modal.error({
        title: '리뷰 수정에 실패했습니다.',
      });
    }
  };

  useEffect(() => {
    if (postId) {
      getComments();
    }
  }, [postId]);

  return {
    comments,
    newComment,
    newRating,
    setNewRating,
    setNewComment,
    addComment,
    deleteComment,
    averageRating,
    updateComment,
  };
};
