import React, { useEffect } from 'react';
import Link from 'next/link';
import * as S from '../../../src/styles/writepost/WritePost.styles';
import { useRecoilValue } from 'recoil';
import { Modal } from 'antd';
import { useWritePost } from '../../../src/services/etc/useWritePost';
import { useMoveToPage } from '../../../src/hooks/useMoveToPage';
import { isLoggedIn } from '../../../src/commons/globalstate/globalstate';

export default function Question() {
  const { register, handleSubmit, errors, onSubmit } = useWritePost(
    'question',
    '1:1 문의가 등록되었습니다.',
    '/mypage'
  );

  const { onClickMoveToPage } = useMoveToPage();

  const login = useRecoilValue(isLoggedIn);
  const alert = () => {
    Modal.error({
      title: '로그인이 필요합니다!',
    });
  };

  useEffect(() => {
    if (login === null) {
      alert();
      onClickMoveToPage('/login')();
    }
  }, []);

  return (
    <>
      <S.TitleWrapper>
        <S.IconWrapper>
          <Link href="/mypage">
            <S.BackButton />
          </Link>
        </S.IconWrapper>
        <S.TitleText>1:1 문의</S.TitleText>
      </S.TitleWrapper>
      <S.Wrapper>
        <S.Title>1:1 문의를 남겨주세요.</S.Title>
        <S.SubTitle>문의를 등록하시면 빠른 시일 내 이메일로 답변을 보내드리겠습니다.</S.SubTitle>
        <S.form onSubmit={handleSubmit(onSubmit)}>
          <S.InputTitle>제목</S.InputTitle>
          <S.Input {...register('title')} placeholder="제목을 입력해주세요." />
          {errors.title && <p>{errors.title.message}</p>}
          <S.InputTitle>문의 내용</S.InputTitle>
          <S.ContentsInput {...register('contents')} placeholder="내용을 입력해주세요." />
          {errors.contents && <p>{errors.contents.message}</p>}

          <S.SubmitButton type="submit">등록하기</S.SubmitButton>
        </S.form>
      </S.Wrapper>
    </>
  );
}
