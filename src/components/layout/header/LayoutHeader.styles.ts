import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 3%;
  padding-right: 3%;
  width: 100%;
  box-shadow: 0px 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const LogoImage = styled.div`
  width: 3.125rem;
  height: 3.125rem;
  background-image: url('/logo.png');
  background-size: cover;
`;

export const Title = styled.div`
  font-size: 1.0625rem;
  font-weight: 900;
  color: #f6786f;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchIcon = styled.div`
  width: 1.9375rem;
  height: 1.9375rem;
  background-image: url('/searchicon.png');
  background-size: cover;
  cursor: pointer;
`;

export const BookmarkIcon = styled.div`
  width: 1.8125rem;
  height: 1.8125rem;
  background-image: url('/bookmark.png');
  background-size: cover;
  margin-top: 3%;
  margin-left: 0.4375rem;
  cursor: pointer;
`;
