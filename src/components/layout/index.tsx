import styled from '@emotion/styled';
import LayoutHeader from './header/LayoutHeader.index';
import LayoutBanner from './banner/LayoutBanner.index';
import { useAuth } from '../hooks/useAuth';
import LayoutFooter from './footer/LayoutFooter.index';
import { useRecoilState } from 'recoil';
import { isLoggedIn } from '../../commons/globalstate/globalstate';
import SideBanner from './sidebanner/SideBanner.index';
import Navbar from './navbar/Navbar.index';

interface ILayoutProps {
  children: JSX.Element;
}

const Body = styled.div``;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f9f9f9;
  width: 100%;
`;
const MainWrapper = styled.div`
  background-color: white;
  min-height: 1000px;
  width: 500px;
`;

const LeftWrapper = styled.div`
  width: calc((100% - 500px) / 2);
  background-color: #f9f9f9;
  display: flex;
  justify-content: flex-end;
`;

const RightWrapper = styled.div`
  width: calc((100% - 500px) / 2);
  background-color: #f9f9f9;
`;
export default function Layout(props: ILayoutProps): JSX.Element {
  useAuth();
  return (
    <Wrapper>
      <LeftWrapper>
        <SideBanner />
      </LeftWrapper>
      <MainWrapper>
        <LayoutHeader />
        <LayoutBanner />
        <Body>{props.children}</Body>
        <LayoutFooter />
        <Navbar />
      </MainWrapper>
      <RightWrapper></RightWrapper>
    </Wrapper>
  );
}
