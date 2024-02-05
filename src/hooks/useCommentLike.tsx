import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { authInstance, db } from '../../pages/_app';
import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { Modal } from 'antd';
import { isLoggedIn, userEmail } from '../commons/globalstate/globalstate';

interface Like {
  id: string;
  email?: string;
  commnetId?: string;
}

export const useCommentLike = (commentId: string) => {
  const [login] = useRecoilState(isLoggedIn);
  const email = useRecoilValue(userEmail);
  const [commentLike, setCommentLike] = useState<Like[]>([]);
  const [isCommentLiked, setIsCommentLiked] = useState(false);

  const getCommentLike = async () => {
    let q;
    q = query(collection(db, 'commentlike'), where('commentId', '==', commentId));
    const snapshot = await getDocs(q);
    const getCommentedLikes = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setCommentLike(getCommentedLikes);
  };

  const addLike = async () => {
    if (!login) {
      Modal.error({ title: '로그인이 필요합니다!' });
      return;
    }

    // '좋아요' 객체 생성 및 UI 업데이트
    const newLikeObj = {
      email,
      // 임시 ID 할당
      id: Date.now().toString(),
      commentId: commentId,
    };
    //@ts-ignore
    setCommentLike([...commentLike, newLikeObj]);
    setIsCommentLiked(true);

    // 데이터베이스에 '좋아요' 추가
    try {
      const likeRef = collection(db, 'commentlike');
      await addDoc(likeRef, { email, commentId: commentId });
      getCommentLike(); // 최신 '좋아요' 상태를 다시 불러옴
    } catch (error) {
      console.error('Error adding like:', error);
      setCommentLike(commentLike.filter((l) => l.id !== newLikeObj.id)); // 실패 시 UI에서 '좋아요' 제거
      setIsCommentLiked(false);
    }
  };
  const deleteLike = async (likeId: string) => {
    // UI에서 '좋아요' 제거
    setCommentLike(commentLike.filter((l) => l.id !== likeId));
    setIsCommentLiked(false);

    // 데이터베이스에서 '좋아요' 삭제
    try {
      const deletelike = doc(db, 'commentlike', likeId);

      await deleteDoc(deletelike);
      getCommentLike(); // 최신 '좋아요' 상태를 다시 불러옴
    } catch (error) {
      console.error('Error deleting like:', error);
      // 실패 시 오류 메시지 표시
      Modal.error({
        title: '좋아요 삭제에 실패했습니다.',
      });
    }
  };
  const handleCommentLike = async () => {
    const currentLike = commentLike.find((l) => l.email === email);
    if (currentLike) {
      await deleteLike(currentLike.id);
    } else {
      await addLike();
    }
  };

  const updateLike = async (likeCount: number) => {
    const board = doc(db, 'boardcomment', commentId);
    await updateDoc(board, {
      likecount: likeCount,
    });
  };

  useEffect(() => {
    getCommentLike();
  }, [commentId]);

  useEffect(() => {
    const isUserLiked = commentLike.some((l) => l.email === email);
    setIsCommentLiked(isUserLiked);

    // 백그라운드에서 데이터베이스 업데이트
    const likeCount = commentLike.length;
    updateLike(likeCount);
  }, [commentLike, email]);

  return { addLike, deleteLike, getCommentLike, commentLike, handleCommentLike, isCommentLiked };
};
