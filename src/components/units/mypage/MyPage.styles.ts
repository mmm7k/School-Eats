import styled from '@emotion/styled';

export const TitleWrapper = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 3%;
  padding-right: 3%;
  width: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
`;

export const Title = styled.span`
  font-size: 18px;
  font-weight: 600;
  position: absolute;
  left: 40%;
`;
export const BackButton = styled.a`
  background-image: url('/backarrow.png');
  background-size: cover;
  height: 26px;
  width: 26px;
  cursor: pointer;
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

export const Wrapper = styled.div`
  width: 100%;
  padding-left: 3%;
  padding-right: 3%;
`;

export const UserWrapper = styled.div`
  width: 100%;

  margin-top: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const User = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

export const Logout = styled.span`
  font-size: 15px;
  color: #a5a5a5;
  text-decoration: underline;
  cursor: pointer;
`;
