import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 4.1875rem;
  position: fixed;
  bottom: 0;
  z-index: 1000;
  width: 31.25rem;
  box-shadow: 0px -0.3125rem 0.3125rem rgba(0, 0, 0, 0.05);
  background-color: white;

  @media only screen and (max-width: 31.25rem) {
    width: 100vw;
  }
`;

export const ButtonWrapper = styled.div`
  width: 31.25rem;
  height: 4.1875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8%;
  padding-right: 8%;

  @media only screen and (max-width: 25rem) {
    width: 100vw;
    padding-left: 1%;
    padding-right: 1%;
  }

  @media only screen and (max-width: 31.25rem) {
    width: 100vw;
  }
`;

export const Button = styled.div`
  width: 3.75rem;
  height: 3.125rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 900;
  color: #000000;
  cursor: pointer;
`;

export const Div = styled.a`
  width: 3.75rem;
  height: 3.125rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LineDiv = styled.div`
  width: 3.75rem;
  height: 0.3125rem;
`;
