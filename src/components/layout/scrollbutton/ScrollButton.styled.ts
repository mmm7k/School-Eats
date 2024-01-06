import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 67px;
  position: fixed;
  bottom: 75px;
  z-index: 1000;
  width: 500px;

  padding-right: 32px;

  display: flex;
  justify-content: flex-end;
  @media only screen and (max-width: 500px) {
    width: 100vw;
  }
`;

export const Button = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  color: gray;
  border: none;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
