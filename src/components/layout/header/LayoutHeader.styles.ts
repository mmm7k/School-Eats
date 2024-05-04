import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 3%;
  padding-right: 3%;
  width: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const LogoImage = styled.div`
  width: 50px;
  height: 50px;

  background-image: url('/logo.png');
  background-size: cover;
`;

export const Title = styled.div`
  font-size: 17px;
  font-weight: 900;
  color: #f6786f;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SearchIcon = styled.div`
  width: 31px;
  height: 31px;
  background-image: url('/searchicon.png');
  background-size: cover;
  cursor: pointer;
`;

export const BookmarkIcon = styled.div`
  width: 29px;
  height: 29px;
  background-image: url('/bookmark.png');
  background-size: cover;
  /* margin-bottom: 1px; */
  margin-top: 3%;
  margin-left: 7px;
  cursor: pointer;
`;
