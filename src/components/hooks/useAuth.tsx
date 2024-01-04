// hooks/useAuth.js
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { authInstance } from '../../../pages/_app';
import { isLoggedIn, layoutEmail } from '../../commons/globalstate/globalstate';
import { useRecoilState } from 'recoil';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [, setLogin] = useRecoilState(isLoggedIn);
  const [, setLayoutEmail] = useRecoilState(layoutEmail);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authInstance, (authUser: any) => {
      if (authUser) {
        // 사용자가 로그인한 경우
        setUser(authUser);
        setUserEmail(authUser.email);
        const email = authUser.email;
        const atIndex = email?.indexOf('@');
        const emailPrefix = atIndex !== -1 ? email?.substring(0, atIndex) : email;
        setLayoutEmail(emailPrefix);
        //@ts-ignore
        setLogin(true);
      } else {
        // 사용자가 로그아웃한 경우 또는 인증되지 않은 경우
        setUser(null);
        //@ts-ignore
        setLogin(false);
      }
      // setLoading(false);
    });

    // 컴포넌트가 언마운트될 때 리스너를 정리합니다.
    return () => {
      unsubscribe();
    };
  }, []);

  return { user, userEmail };
};
