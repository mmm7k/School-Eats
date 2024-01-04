import * as S from './LayoutHeader.styles';

export default function LayoutHeader(): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.Logo>
          <S.LogoImage />
          <S.Title>School Eats!</S.Title>
        </S.Logo>
        <S.IconWrapper>
          <S.SearchIcon />
          <S.StarIcon />
        </S.IconWrapper>
      </S.Wrapper>
    </>
  );
}
