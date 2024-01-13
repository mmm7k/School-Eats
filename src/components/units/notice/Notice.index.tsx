import React from 'react';
import Link from 'next/link';
import * as S from './Notice.styles';
import { useRouter } from 'next/router';

export default function Notice() {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  return (
    <>
      <S.TitleWrapper>
        <S.IconWrapper onClick={goBack}>
          <S.BackButton />
        </S.IconWrapper>
        <S.Title>공지사항</S.Title>
      </S.TitleWrapper>
      <S.Wrapper>
        <S.Notice>등록된 공지사항이 없습니다.</S.Notice>
        <S.SubNotice>관리자 이메일: computerking0646@gmail.com</S.SubNotice>
      </S.Wrapper>
    </>
  );
}
