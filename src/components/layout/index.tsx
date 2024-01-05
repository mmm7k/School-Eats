import styled from '@emotion/styled';
import LayoutHeader from './header/LayoutHeader.index';

import { useAuth } from '../hooks/useAuth';
import LayoutFooter from './footer/LayoutFooter.index';

import SideBanner from './sidebanner/SideBanner.index';
import Navbar from './navbar/Navbar.index';
import ScrollButton from './scrollbutton/ScrollButton.index';

interface ILayoutProps {
  children: JSX.Element;
}

const Body = styled.div`
  flex: 1;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  min-height: 100vh;
`;
const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;

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

        <Body>{props.children}</Body>
        <LayoutFooter />
        <ScrollButton />
        <Navbar />
      </MainWrapper>
      <RightWrapper></RightWrapper>
    </Wrapper>
  );
}
