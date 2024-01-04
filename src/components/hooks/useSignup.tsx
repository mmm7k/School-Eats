import { ChangeEvent, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { authInstance } from '../../../pages/_app';
import { Modal } from 'antd';
import { useMoveToPage } from './useMoveToPage';
import { Router } from 'react-router-dom';
import { useRouter } from 'next/router';

export const useSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [match, setMatch] = useState(null);
  const router = useRouter();
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeCheckPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckPassword(event.target.value);
  };

  const success = () => {
    Modal.success({
      content: '회원가입에 성공하였습니다!',
    });
  };

  const signupError = () => {
    Modal.error({
      title: '회원가입 정보가 올바르지 않습니다.',
    });
  };

  const passwordError = () => {
    Modal.error({
      title: '비밀번호가 일치하지 않습니다.',
    });
  };
  const onClickSignup = (event: React.FormEvent) => {
    event.preventDefault();
    if (password !== checkPassword) {
      passwordError();
      return;
    } else {
      createUserWithEmailAndPassword(authInstance, email, password)
        .then((userCredential) => {
          // Signed in
          success();
          router.push('/');
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          signupError();
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
  };
  return {
    onChangeEmail,
    onChangePassword,
    onChangeCheckPassword,
    onClickSignup,
    password,
    match,
  };
};
