import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Modal } from 'antd';
import { useRouter } from 'next/router';
import { authInstance } from '../../../pages/_app';

// 유효성 검사 스키마 설정
const schema = yup
  .object({
    email: yup.string().email('유효한 이메일 주소가 아닙니다').required('이메일 주소는 필수입니다'),
    password: yup.string().min(6, '비밀번호는 최소 6자 이상이어야 합니다').required('비밀번호는 필수입니다'),
    //@ts-ignore
    checkPassword: yup.string().oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다'),
  })
  .required();

export const useSignup = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    const { email, password } = data;
    try {
      await createUserWithEmailAndPassword(authInstance, email, password);
      Modal.success({ content: '회원가입에 성공하였습니다!' });
      router.push('/login');
    } catch (error) {
      Modal.error({ title: '회원가입 정보가 올바르지 않습니다.' });
    }
  };

  return { register, handleSubmit: handleSubmit(onSubmit), errors };
};
