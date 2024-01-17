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
  text?: string;
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

    // q = query(collection(db, 'bookmark'), where('placeId', '==', postId));
    q = query(collection(db, 'all', postId, 'bookmark'));
    const snapshot = await getDocs(q);
    const bookmarkArr = snapshot.docs.map((doc: any) => ({
      ...doc.data(),
      id: doc.id,
    }));

    setBookmark(bookmarkArr);
  };

  const addBookmark = async () => {
    if (login) {
      // const bookmarkRef = collection(db, 'bookmark');
      const bookmarkRef = collection(db, 'all', postId, 'bookmark');
      await addDoc(bookmarkRef, {
        // placeId: postId,
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
    const deletebookmark: any = doc(db, 'all', postId, 'bookmark', bookmarkId);

    await deleteDoc(deletebookmark);
  };
  return { addBookmark, deleteBookmark, getBookmark, bookmark };
};
