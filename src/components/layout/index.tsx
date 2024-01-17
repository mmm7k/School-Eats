import styled from '@emotion/styled';
import LayoutHeader from './header/LayoutHeader.index';
import LayoutFooter from './footer/LayoutFooter.index';
import SideBanner from './sidebanner/SideBanner.index';
import Navbar from './navbar/Navbar.index';
import ScrollButton from './scrollbutton/ScrollButton.index';
import { useRouter } from 'next/router';

interface ILayoutProps {
  children: JSX.Element;
}

const Body = styled.div`
  flex: 1;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100vw;
  min-height: 100vh;
  /* height: 3000px; */
  @media only screen and (max-width: 500px) {
  }
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 500px;
  @media only screen and (max-width: 500px) {
    width: 100vw;
  }
`;

const LeftWrapper = styled.div`
  width: calc((100vw - 500px) / 2);
  background-color: #f9f9f9;
  display: flex;
  justify-content: flex-end;
`;

const RightWrapper = styled.div`
  width: calc((100vw - 500px) / 2);
  background-color: #f9f9f9;
`;

export default function Layout(props: ILayoutProps): JSX.Element {
  // useAuth();
  const router = useRouter();
  const isLoginPage = router.pathname === '/login';
  const isSignupPage = router.pathname === '/signup';
  const isMyPage = router.pathname === '/mypage' || router.pathname.startsWith('/mypage/');
  const isNoticePage = router.pathname === '/notice';
  const isGuidePage = router.pathname === '/guide';
  const isSearchPage = router.pathname === '/search';
  const isFeedbackPage = router.pathname === '/feedback';
  const isRequestPage = router.pathname === '/request';
  const isPlaceDetailPage = router.pathname.startsWith('/place/');
  const isBoardsDetailPage = router.pathname.startsWith('/boards/');
  const showLayout = !isLoginPage && !isSignupPage;

  return (
    <Wrapper>
      <LeftWrapper>
        <SideBanner />
      </LeftWrapper>
      <MainWrapper>
        {showLayout &&
          !isBoardsDetailPage &&
          !isMyPage &&
          !isNoticePage &&
          !isGuidePage &&
          !isSearchPage &&
          !isFeedbackPage &&
          !isPlaceDetailPage &&
          !isRequestPage && <LayoutHeader />}

        <Body>{props.children}</Body>
        {showLayout && !isSearchPage && <LayoutFooter />}
        <ScrollButton />
        {showLayout && <Navbar />}
      </MainWrapper>
      <RightWrapper></RightWrapper>
    </Wrapper>
  );
}
