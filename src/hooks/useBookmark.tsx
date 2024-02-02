import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { db } from '../../pages/_app';
import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
import { Modal } from 'antd';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isLoggedIn, userEmail } from '../commons/globalstate/globalstate';
interface Bookmark {
  id: string;
  placeId?: string;
  email?: string;
}

export const useBookmark = () => {
  const [login] = useRecoilState(isLoggedIn);
  const email = useRecoilValue(userEmail);
  const router = useRouter();
  const data = JSON.stringify(router.query); // boardId를 추출
  const jsonObject = JSON.parse(data);
  const postId = jsonObject.placeid;
  const [bookmark, setBookmark] = useState<Bookmark[]>([]);

  const getBookmark = async () => {
    let q;

    q = query(collection(db, 'bookmark'), where('placeId', '==', postId));
    const snapshot = await getDocs(q);
    const bookmarkArr = snapshot.docs.map((doc: any) => ({
      ...doc.data(),
      id: doc.id,
    }));

    setBookmark(bookmarkArr);
  };

  const addBookmark = async () => {
    if (login) {
      const bookmarkRef = collection(db, 'bookmark');
      await addDoc(bookmarkRef, {
        placeId: postId,
        email,
      });
    } else {
      Modal.error({
        title: '로그인이 필요합니다!',
      });
    }
  };

  const deleteBookmark = async (bookmarkId: any) => {
    const comments: any = doc(db, 'bookmark', bookmarkId);

    await deleteDoc(comments);
  };

  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    (async () => {
      if (postId) {
        await getBookmark();
        setIsBookmarked(bookmark.some((b) => b.email === email));
      }
    })();
  }, [postId, bookmark]);

  const handleBookmark = async () => {
    if (isBookmarked) {
      const bookmarkId = bookmark.find((b) => b.email === email)?.id;
      if (bookmarkId) await deleteBookmark(bookmarkId);
    } else {
      await addBookmark();
    }
    await getBookmark();
    setIsBookmarked(!isBookmarked);
  };

  return { addBookmark, deleteBookmark, getBookmark, bookmark, handleBookmark, isBookmarked };
};
