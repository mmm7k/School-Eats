import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 4.1875rem;
  position: fixed;
  bottom: 4.6875rem;
  z-index: 1000;
  width: 31.25rem;
  padding-right: 2rem;
  display: flex;
  justify-content: flex-end;

  @media only screen and (max-width: 31.25rem) {
    width: 100vw;
  }
`;

export const Button = styled.div`
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 50%;
  background-color: white;
  color: gray;
  border: none;
  cursor: pointer;
  box-shadow: 0px 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
`;
