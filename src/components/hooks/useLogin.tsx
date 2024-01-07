import { ChangeEvent, useEffect, useState } from 'react';
import { UserCredential, signInWithEmailAndPassword } from 'firebase/auth';

import { useRouter } from 'next/router';
import { authInstance } from '../../../pages/_app';
import { Modal } from 'antd';
import { useRecoilState } from 'recoil';
import { isLoggedIn, layoutEmail, userEmail } from '../../commons/globalstate/globalstate';

export const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [, setLoggedin] = useRecoilState<boolean | null>(isLoggedIn);
  const [, setLayoutEmail] = useRecoilState<string | null | undefined>(layoutEmail);
  const [, setUserEmail] = useRecoilState<string | null | undefined>(userEmail);

  const router = useRouter();
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };
  const onChangeCheckPassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setCheckPassword(event.target.value);
  };

  const success = () => {
    Modal.success({
      content: '로그인에 성공하였습니다!',
    });
  };

  const loginError = () => {
    Modal.error({
      title: '회원 정보가 올바르지 않습니다.',
    });
  };

  const onClickLogin = (event: React.FormEvent) => {
    event.preventDefault();

    signInWithEmailAndPassword(authInstance, email, password)
      .then((userCredential: UserCredential) => {
        const currentTime: number = new Date().getTime();

        const user = userCredential.user;
        const email = user.email;
        setUserEmail(email);
        const atIndex = email?.indexOf('@');
        const emailPrefix = atIndex !== -1 ? email?.substring(0, atIndex) : email;
        setLayoutEmail(emailPrefix);
        setLoggedin(true);
        success();
        router.push('/');
        setTimeout(() => {
          alert('로그인 세션이 만료 되었습니다.');
          setLoggedin(false);
          setLayoutEmail(null);
          setUserEmail(null);
        }, 3600000);
      })
      .catch((error: any) => {
        loginError();
      });
  };

  return {
    onChangeEmail,
    onChangePassword,
    onChangeCheckPassword,
    onClickLogin,
    userEmail,
  };
};
