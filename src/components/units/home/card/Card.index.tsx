import * as S from './Card.styles';
import React from 'react';
export default function Card(): JSX.Element {
  return (
    <S.Wrapper>
      <S.CardImage>
        <S.Text>
          새로운 음식과
          <br />
          우리가 만나는 공간, School Eats
        </S.Text>
        <S.Text2>자세히 보러가기 →</S.Text2>
      </S.CardImage>
    </S.Wrapper>
  );
}
