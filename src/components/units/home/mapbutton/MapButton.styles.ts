import styled from '@emotion/styled';

export const SubTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 200;
  width: 100%;
  padding-left: 3%;
  color: #696d84;
  margin-top: 6.25rem;
  margin-bottom: 0.375rem;
`;

export const Title = styled.div`
  font-size: 1.375rem;
  font-weight: 900;
  width: 100%;
  margin-left: 3%;
  color: #2b2e3b;
  margin-bottom: 0.9375rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 3%;
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.span`
  color: gray;
  font-size: 0.9375rem;
  margin-top: 0.5rem;
`;

export const ButtonWrapper = styled.div`
  margin-top: 1.5625rem;
  width: 3.125rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 50%;
  border: 1px solid #d9d9d9;
  cursor: pointer;
  :hover {
    background-color: #f2f2f2;
  }
`;

export const ImageWrapper = styled.div`
  width: 3.125rem;
  height: 3.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
