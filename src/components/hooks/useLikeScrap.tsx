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
  updateDoc,
  where,
} from 'firebase/firestore';
import { Modal } from 'antd';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isLoggedIn, userEmail } from '../../commons/globalstate/globalstate';
interface LikeScrap {
  id: string;
  email?: string;
}

export const useLikeScrap = () => {
  const [login] = useRecoilState(isLoggedIn);
  const email = useRecoilValue(userEmail);
  const router = useRouter();
  const data = JSON.stringify(router.query);
  const jsonObject = JSON.parse(data);
  const postId = jsonObject.boardid;
  const [like, setLike] = useState<LikeScrap[]>([]);
  const [scrap, setScrap] = useState<LikeScrap[]>([]);
  const getLike = async () => {
    let q;

    q = query(collection(db, 'board', postId, 'like'));
    const snapshot = await getDocs(q);
    const likeArr = snapshot.docs.map((doc: any) => ({
      ...doc.data(),
      id: doc.id,
    }));

    setLike(likeArr);
  };

  const getScrap = async () => {
    let q;

    q = query(collection(db, 'board', postId, 'scrap'));
    const snapshot = await getDocs(q);
    const scrapArr = snapshot.docs.map((doc: any) => ({
      ...doc.data(),
      id: doc.id,
    }));

    setScrap(scrapArr);
  };

  const addLike = async () => {
    if (login) {
      const likeRef = collection(db, 'board', postId, 'like');
      await addDoc(likeRef, {
        email,
      });
    } else {
      Modal.error({
        title: '로그인이 필요합니다!',
      });
    }
  };

  const addScrap = async () => {
    if (login) {
      const scrapRef = collection(db, 'board', postId, 'scrap');
      await addDoc(scrapRef, {
        email,
      });
    } else {
      Modal.error({
        title: '로그인이 필요합니다!',
      });
    }
  };

  const deleteLike = async (likeId: any) => {
    const deletelike: any = doc(db, 'board', postId, 'like', likeId);

    await deleteDoc(deletelike);
  };

  const deleteScrap = async (scrapId: any) => {
    const deletescrap: any = doc(db, 'board', postId, 'scrap', scrapId);

    await deleteDoc(deletescrap);
  };

  let count: number;
  const updateCount = async () => {
    const board = doc(db, 'board', postId);
    await updateDoc(board, {
      likecount: count,
    });
  };

  useEffect(() => {
    if (like.length > 0) {
      count = like.length;
      updateCount();
    } else {
      count = 0;
      updateCount();
    }
  }, [like]);

  useEffect(() => {
    if (postId) {
      getScrap();
      getLike();
    }
  }, [postId]);

  return { addLike, deleteLike, getLike, getScrap, deleteScrap, addScrap, scrap, like };
};
