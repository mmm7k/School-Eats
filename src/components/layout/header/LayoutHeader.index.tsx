import Link from 'next/link';
import * as S from './LayoutHeader.styles';

export default function LayoutHeader(): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <Link href="/">
          <S.Logo>
            <S.LogoImage />
            <S.Title>School Eats!</S.Title>
          </S.Logo>
        </Link>
        <S.IconWrapper>
          <S.SearchIcon />
          <Link href="/bookmark">
            <S.BookmarkIcon />
          </Link>
        </S.IconWrapper>
      </S.Wrapper>
    </>
  );
}
