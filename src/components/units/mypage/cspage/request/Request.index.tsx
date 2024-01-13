import React from 'react';
import Link from 'next/link';
import * as S from '../CsPage.styles';
import { useWritePost } from '../../../../hooks/useWritePost';

export default function Request() {
  const { register, handleSubmit, errors, onSubmit } = useWritePost(
    'request',
    '맛집 추가 요청이 등록되었습니다.',
    '/mypage'
  );
  return (
    <>
      <S.TitleWrapper>
        <S.IconWrapper>
          <Link href="/mypage">
            <S.BackButton />
          </Link>
        </S.IconWrapper>
        <S.TitleText>맛집 추가 요청</S.TitleText>
      </S.TitleWrapper>
      <S.Wrapper>
        <S.Title>여러분의 맛집을 알려주세요!</S.Title>
        <S.SubTitle>요청을 등록하시면 빠른 시일 내 검토 후 반영됩니다.</S.SubTitle>
        <S.form onSubmit={handleSubmit(onSubmit)}>
          <S.InputTitle>맛집 이름</S.InputTitle>
          <S.Input {...register('title')} placeholder="맛집 이름을 입력해주세요." />
          {errors.title && <p>{errors.title.message}</p>}
          <S.InputTitle>특징 및 기타 사항</S.InputTitle>
          <S.ContentsInput {...register('contents')} placeholder="이 맛집을 추천하는 특별한 이유를 알려주세요!" />
          {errors.contents && <p>{errors.contents.message}</p>}

          <S.SubmitButton type="submit">등록하기</S.SubmitButton>
        </S.form>
      </S.Wrapper>
    </>
  );
}
