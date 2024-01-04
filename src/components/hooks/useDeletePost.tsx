import { useState } from 'react';
import { useRouter } from 'next/router';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../../pages/_app';

export const useDeletePost = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();
  const data = JSON.stringify(router.query); // boardId를 추출
  const jsonObject = JSON.parse(data);
  const postId = jsonObject.boadid;

  const onClickDeletePost = async () => {
    try {
      //   setIsDeleting(true);
      const postRef = doc(db, 'board', postId);
      await deleteDoc(postRef);
      //   setIsDeleting(false);
      router.push('/boards');
    } catch (error) {
      console.error('게시물 삭제 중 오류 발생:', error);
      //   setIsDeleting(false);
    }
  };

  return { onClickDeletePost, isDeleting };
};
