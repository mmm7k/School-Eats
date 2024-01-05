import * as S from './Navbar.styles';
import HomeButton from '../../../../public/homebutton.svg';
import PlaceButton from '../../../../public/placebutton.svg';
import BoardButton from '../../../../public/boardbutton.svg';
import MypageButton from '../../../../public/mypagebutton.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar(): JSX.Element {
  const router = useRouter();

  return (
    <>
      <S.Wrapper>
        <S.ButtonWrapper>
          <S.Button>
            <Link href="/">
              <S.Div style={{ color: router.pathname === '/' ? '#f6786f' : '#000000' }}>
                <HomeButton style={{ fill: router.pathname === '/' ? '#f6786f' : '#000000' }} />
                <S.LineDiv />홈
              </S.Div>
            </Link>
          </S.Button>
          <S.Button>
            <Link href="/place">
              <S.Div style={{ color: router.pathname === '/place' ? '#f6786f' : '#000000' }}>
                <PlaceButton style={{ fill: router.pathname === '/place' ? '#f6786f' : '#000000' }} />
                <S.LineDiv />
                맛집투어
              </S.Div>
            </Link>
          </S.Button>
          <S.Button>
            <Link href="/boards">
              <S.Div style={{ color: router.pathname === '/boards' ? '#f6786f' : '#000000' }}>
                <BoardButton style={{ fill: router.pathname === '/boards' ? '#f6786f' : '#000000' }} />
                <S.LineDiv />
                커뮤니티
              </S.Div>
            </Link>
          </S.Button>
          <S.Button>
            <Link href="/login">
              <S.Div style={{ color: router.pathname === '/login' ? '#f6786f' : '#000000' }}>
                <MypageButton style={{ fill: router.pathname === '/login' ? '#f6786f' : '#000000' }} />
                <S.LineDiv />
                마이페이지
              </S.Div>
            </Link>
          </S.Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  );
}
