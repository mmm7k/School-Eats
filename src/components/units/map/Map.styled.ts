import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 5%;
  padding-left: 3%;
  padding-right: 3%;
`;

export const SubTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-top: 2%;
  color: #8f8f8f;
  padding-left: 3%;
  padding-right: 3%;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 4%;
  margin-bottom: 3%;
  padding-left: 3%;
  padding-right: 3%;
`;

export const SelectButton = styled.button`
  border-radius: 17px;
  border: none;
  color: white;
  /* width: 56px; */
  min-width: 56px;
  height: 34px;
  background-color: #f6786f;
  font-weight: 600;
  font-size: 12px;
  margin-right: 1.5%;
  cursor: pointer;
  white-space: nowrap; /* 텍스트 줄 바꿈 방지 */
  text-align: center; /* 텍스트 중앙 정렬 */
`;

export const Button = styled.button`
  border-radius: 17px;
  border: 1px solid #bdbdbd;
  color: #2f2f2f;
  min-width: 56px;
  height: 34px;
  background-color: white;
  font-weight: 600;
  font-size: 12px;
  margin-right: 1.5%;
  cursor: pointer;
  white-space: nowrap; /* 텍스트 줄 바꿈 방지 */
  text-align: center; /* 텍스트 중앙 정렬 */
`;

export const Map = styled.div`
  height: 47vh;
  width: 97%;
  margin-top: 6%;
  margin-left: 1.5%;
  border-radius: 15px;
  border: 1px solid #e6e6e6;
`;
