import styled from '@emotion/styled';

export const Base = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 70px;
  height: 700px;
  margin-bottom: 150px;
`;
export const Wrapper = styled.div`
  height: 500px;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignupHeadText = styled.div`
  height: 50px;
  width: 350px;
  padding: 20px;
  text-align: center;
  font-size: 25px;
  color: #6a75ca;
  font-weight: 900;
`;

export const SignupText = styled.div`
  height: 50px;
  width: 350px;
  padding-top: 20px;
  text-align: left;
  font-size: 12px;
  font-weight: 600;
  color: #6e6e6e;
  margin-top: 20px;
`;

export const SignupInput = styled.input`
  border: none; /* 테두리 없애기 */
  border-bottom: 1px solid #6e6e6e; /* 아래쪽 테두리만 설정 */
  border-radius: 0; /* border-radius 제거 */
  height: 35px;
  width: 350px;
  outline: none;

  &:focus {
    border-bottom: 2px solid #6a75ca; /* 입력 필드에 포커스 됐을 때 밑줄 색상 변경 */
  }
`;

export const SignupButton = styled.button`
  background-color: white;
  border: 1px solid #6a75ca;
  border-radius: 7px;
  height: 50px;
  width: 350px;
  margin-top: 30px;
  font-size: 14px;
  font-weight: 700;
  color: #6a75ca;

  cursor: pointer;
  :hover {
    background-color: #eff2f8;
  }
`;
export const PasswordText = styled.div`
  color: gray;
  font-weight: 500;
  font-size: 12px;
  text-align: left;
  width: 350px;
  padding-top: 5px;
`;
