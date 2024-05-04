import styled from '@emotion/styled';

export const Wrapper = styled.div<{ isScrolled: boolean }>`
  height: 67px;
  position: fixed;
  bottom: ${(props) => (props.isScrolled ? '131px' : '75px')};
  z-index: 2000;
  width: 500px;
  padding-right: 32px;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  @media only screen and (max-width: 500px) {
    width: 100vw;
  }
`;

export const Button = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f6786f;
  border: none;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
