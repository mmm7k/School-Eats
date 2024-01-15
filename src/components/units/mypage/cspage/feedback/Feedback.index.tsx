import React from 'react';
import Link from 'next/link';
import * as S from '../CsPage.styles';
import { useWritePost } from '../../../../hooks/useWritePost';
import { useRouter } from 'next/router';

export default function Feedback() {
  const { register, handleSubmit, errors, onSubmit } = useWritePost(
    'feedback',
    '요청 사항이 등록되었습니다.',
    '/mypage'
  );

  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  return (
    <>
      <S.TitleWrapper>
        <S.IconWrapper>
          <S.BackButton onClick={goBack} />
        </S.IconWrapper>
        <S.TitleText>개선 사항 요청</S.TitleText>
      </S.TitleWrapper>
      <S.Wrapper>
        <S.Title>여러분의 소중한 의견을 남겨주세요!</S.Title>
        <S.SubTitle>요청을 등록하시면 빠른 시일 내 검토 후 반영됩니다.</S.SubTitle>
        <S.form onSubmit={handleSubmit(onSubmit)}>
          <S.InputTitle>제목</S.InputTitle>
          <S.Input {...register('title')} placeholder="제목을 입력해주세요." />
          {errors.title && <p>{errors.title.message}</p>}
          <S.InputTitle>요청 사항</S.InputTitle>
          <S.ContentsInput {...register('contents')} placeholder="내용을 입력해주세요." />
          {errors.contents && <p>{errors.contents.message}</p>}

          <S.SubmitButton type="submit">등록하기</S.SubmitButton>
        </S.form>
      </S.Wrapper>
    </>
  );
}
