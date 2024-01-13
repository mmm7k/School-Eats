import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';
import { Modal } from 'antd';
import { useRecoilState, useRecoilValue } from 'recoil';
import { autoLogin, isLoggedIn, layoutEmail, userEmail } from '../../commons/globalstate/globalstate';
import { authInstance } from '../../../pages/_app';

// 유효성 검사 스키마
const schema = yup
  .object({
    email: yup.string().email('유효한 이메일 주소가 아닙니다').required('이메일 주소는 필수입니다'),
    password: yup.string().required('비밀번호는 필수입니다'),
  })
  .required();

export const useLogin = () => {
  const [, setLoggedin] = useRecoilState<boolean | null>(isLoggedIn);
  const [, setLayoutEmail] = useRecoilState<string | null | undefined>(layoutEmail);
  const [, setUserEmailState] = useRecoilState<string | null | undefined>(userEmail);
  const router = useRouter();
  const autologin = useRecoilValue(autoLogin);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    const { email, password } = data;

    signInWithEmailAndPassword(authInstance, email, password)
      .then((userCredential) => {
        setUserEmailState(userCredential.user.email);
        setLayoutEmail(userCredential.user.email?.split('@')[0]);
        setLoggedin(true);
        if (!autologin) {
          // 자동로그인이 활성화된 경우만 세션 만료 시간 설정
          const now = new Date();
          // const sessionExpiry = now.getTime() + 3600000;
          const sessionExpiry = now.getTime() + 5000;
          // 현재 시간에서 1시간 후
          localStorage.setItem('sessionExpiry', sessionExpiry.toString());
        }

        router.push('/');
      })
      .catch(() => {
        Modal.error({ title: '회원 정보가 올바르지 않습니다.' });
      });
  };

  const onClickLogout = () => {
    authInstance
      .signOut()
      .then(() => {
        window.location.href = '/';
        setLoggedin(null); // Recoil 상태를 초기화
        setLayoutEmail(null);
        setUserEmailState(null);
        localStorage.removeItem('sessionExpiry');
        localStorage.removeItem('recoil-persist');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    onClickLogout,
  };
};
