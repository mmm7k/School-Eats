import React from 'react';
import * as S from './Notice.styles';
import { useBackToPage } from '../../src/hooks/useBackToPage';

export default function Notice() {
  const { onClickBackToPage } = useBackToPage();
  return (
    <>
      <S.TitleWrapper>
        <S.IconWrapper onClick={onClickBackToPage}>
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
