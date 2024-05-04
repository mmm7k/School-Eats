import styled from '@emotion/styled';

export const SubTitle = styled.div`
  font-size: 14px;
  font-weight: 200;
  width: 100%;
  padding-left: 3%;
  color: #696d84;
  margin-top: 100px;
  margin-bottom: 6px;
`;
export const Title = styled.div`
  font-size: 22px;
  font-weight: 900;
  width: 100%;
  margin-left: 3%;
  color: #2b2e3b;
  margin-bottom: 15px;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 3%;
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.span`
  color: gray;
  font-size: 15px;
  margin-top: 8px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 25px;
  width: 50px;
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
  width: 50px;
  height: 50px;
  border-radius: 50%;
  height: auto;
  border: 1px solid #d9d9d9;
  /* background-color: red; */
  cursor: pointer;
  :hover {
    background-color: #f2f2f2;
  }
`;

export const ImageWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
