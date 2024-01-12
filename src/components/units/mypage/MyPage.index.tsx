import Link from 'next/link';
import * as S from './MyPage.styles';
import { useRecoilValue } from 'recoil';
import { KakaoLoggedIn, layoutEmail } from '../../../commons/globalstate/globalstate';
import { useKakaoLogin } from '../../hooks/useKakoLogin';
import { useLogin } from '../../hooks/useLogin';

export default function MyPage(): JSX.Element {
  const user = useRecoilValue(layoutEmail);
  const kakaoLogin = useRecoilValue(KakaoLoggedIn);
  const { kakaoLogout } = useKakaoLogin();
  const { onClickLogout } = useLogin();
  const logout = () => {
    if (kakaoLogin) {
      kakaoLogout();
    } else {
      onClickLogout();
    }
  };
  return (
    <>
      <S.TitleWrapper>
        <S.IconWrapper>
          <Link href="/">
            <S.BackButton />
          </Link>
        </S.IconWrapper>
        <S.Title>마이페이지</S.Title>
        <S.IconWrapper>
          <S.SearchIcon />
          <Link href="/bookmark">
            <S.BookmarkIcon />
          </Link>
        </S.IconWrapper>
      </S.TitleWrapper>
      <S.Wrapper>
        <S.UserWrapper>
          <S.User>{user}님, 반갑습니다!</S.User>
          <S.Logout onClick={() => logout()}>로그아웃</S.Logout>
        </S.UserWrapper>
      </S.Wrapper>
    </>
  );
}
