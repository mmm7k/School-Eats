import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin-top: 50px;
  width: 800px;
  margin-bottom: 150px;
  @media only screen and (max-width: 480px) {
    width: 80%;
  }
  @media only screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const Title = styled.input`
  height: 50px;
  border: none;
  font-size: 30px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: flex-end;
`;

export const CancelButton = styled.button`
  background-color: #eff2f8;
  border: #eff2f8;
  border-radius: 15px;
  height: 50px;
  width: 100px;
  color: #6a75ca;
  cursor: pointer;
  font-size: 15px;
  margin-right: 7px;
  :hover {
    background-color: #e6e9f0;
  }
  @media only screen and (max-width: 480px) {
    margin-top: 30px;
  }
`;
export const SubmitButton = styled.button`
  background-color: #6a75ca;
  border: #6a75ca;
  border-radius: 15px;
  height: 50px;
  width: 100px;
  color: white;
  cursor: pointer;
  font-size: 15px;
  :hover {
    background-color: #5e68b5;
  }
  @media only screen and (max-width: 480px) {
    margin-top: 30px;
  }
`;
