import Link from 'next/link';
import * as S from '../../src/styles/resetpassword/ResetPassword.styles';
import React from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { Modal } from 'antd';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const auth = getAuth();

const schema = yup
  .object({
    email: yup.string().email('유효한 이메일 주소가 아닙니다').required('이메일 주소는 필수입니다'),
  })
  .required();

export default function ResetPassword(): JSX.Element {
  const router = useRouter();

  // 유효성 검사 스키마 설정
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: { email: string }) => {
    const { email } = data;
    try {
      await sendPasswordResetEmail(auth, email);
      Modal.success({ content: '이메일을 확인해주세요!' });
      router.push('/login');
    } catch (error) {
      Modal.error({ title: '이메일이 올바르지 않습니다.' });
    }
  };

  return (
    <S.Wrapper>
      <S.HomeButtonWrapper>
        <Link href="/login">
          <S.BackButton />
        </Link>
        <S.Title>비밀번호 찾기</S.Title>
        <Link href="/">
          <S.HomeButton />
        </Link>
      </S.HomeButtonWrapper>
      <S.ContentsTitle>비밀번호 재설정</S.ContentsTitle>
      <S.ContentsSubTitle>입력하신 이메일로 비밀번호 재설정 링크를 보내드려요.</S.ContentsSubTitle>
      <S.ContentsSubTitle>*메일이 보이지 않을 시 스팸 메일함을 확인해보세요!</S.ContentsSubTitle>
      <S.form onSubmit={handleSubmit(onSubmit)}>
        <S.InputTitle>이메일</S.InputTitle>
        <S.Input {...register('email')} type="email" placeholder="이메일을 입력해주세요." />
        {errors.email && <S.error>{errors.email.message}</S.error>}
        <S.SignupButton type="submit">비밀번호 재설정</S.SignupButton>
      </S.form>
    </S.Wrapper>
  );
}
