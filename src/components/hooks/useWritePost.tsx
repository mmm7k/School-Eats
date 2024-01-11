import React, { ChangeEvent, useState } from 'react';
import { useMoveToPage } from './useMoveToPage';
import { useRouter } from 'next/router';
import { authInstance, db, firebaseapp } from '../../../pages/_app';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Modal } from 'antd';
import { useRecoilValue } from 'recoil';
import { userEmail } from '../../commons/globalstate/globalstate';

export const useWritePost = () => {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const router = useRouter();
  const user = authInstance.currentUser;

  const email = useRecoilValue(userEmail);

  const success = () => {
    Modal.success({
      content: '게시물 등록에 성공하였습니다!',
    });
  };
  const onChangeContents = (value: string) => {
    setContents(value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onClickSubmit = async (): Promise<void> => {
    const board = collection(db, 'board');
    await addDoc(board, {
      title,
      contents,
      timestamp: new Date(),
      email,
    });
    success();
    router.push('/boards');
  };

  return { onChangeContents, onChangeTitle, onClickSubmit };
};
