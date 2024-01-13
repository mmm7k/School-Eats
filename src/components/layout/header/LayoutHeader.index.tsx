import Link from 'next/link';
import * as S from './LayoutHeader.styles';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isLoggedIn } from '../../../commons/globalstate/globalstate';
import { useRouter } from 'next/router';
import { Modal } from 'antd';

export default function LayoutHeader(): JSX.Element {
  const [login] = useRecoilState(isLoggedIn);
  const router = useRouter();
  const goBookmark = () => {
    if (!login) {
      Modal.error({
        title: '로그인이 필요합니다!',
      });
    } else {
      router.push('/mypage/bookmark');
    }
  };
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
          <S.BookmarkIcon onClick={goBookmark} />
        </S.IconWrapper>
      </S.Wrapper>
    </>
  );
}
