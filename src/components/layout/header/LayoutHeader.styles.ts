import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  width: 500px;
  @media only screen and (max-width: 500px) {
    width: 100vw;
  }
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

export const StarIcon = styled.div`
  width: 27px;
  height: 27px;
  background-image: url('/staricon.png');
  background-size: cover;
  margin-bottom: 1px;
  margin-left: 7px;
  cursor: pointer;
`;
