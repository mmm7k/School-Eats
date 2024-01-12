import React, { ChangeEvent, useEffect, useState } from 'react';
import { useMoveToPage } from './useMoveToPage';
import { useRouter } from 'next/router';
import { authInstance, db, firebaseapp } from '../../../pages/_app';
import {
  DocumentData,
  QueryDocumentSnapshot,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';
import { Modal } from 'antd';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isLoggedIn, userEmail } from '../../commons/globalstate/globalstate';
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

  useEffect(() => {
    if (postId) {
      getBookmark();
    }
  }, [postId]);

  const deleteBookmark = async (bookmarkId: any) => {
    const comments: any = doc(db, 'bookmark', bookmarkId);

    await deleteDoc(comments);
  };
  return { addBookmark, deleteBookmark, getBookmark, bookmark };
};
