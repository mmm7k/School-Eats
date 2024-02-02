import React, { ChangeEvent, useState } from 'react';
import { useMoveToPage } from './useMoveToPage';
import { useRouter } from 'next/router';
import { authInstance, db, firebaseapp } from '../../pages/_app';
import { addDoc, collection, doc, getFirestore, updateDoc } from 'firebase/firestore';

export const useEditPost = () => {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const router = useRouter();
  const data = JSON.stringify(router.query); // boardId를 추출
  const jsonObject = JSON.parse(data);
  const postId = jsonObject.boadid;
  const onChangeContents = (value: string) => {
    setContents(value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onClickSubmit = async (): Promise<void> => {
    const board = doc(db, 'board', postId);
    await updateDoc(board, {
      title,
      contents,
      timestamp: new Date(),
    });
    router.push(`/boards/${postId}`);
  };

  return { onChangeContents, onChangeTitle, onClickSubmit };
};
