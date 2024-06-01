import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 3%;
  padding-right: 3%;
`;
export const HomeButtonWrapper = styled.div`
  width: 100%;
  height: 50px;

  margin-top: 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled.a`
  background-image: url('/backarrow.png');
  background-size: cover;
  height: 26px;
  width: 26px;
  cursor: pointer;
`;

export const HomeButton = styled.a`
  background-image: url('/homebutton.svg');
  /* background-size: cover; */
  background-repeat: no-repeat;
  height: 27px;
  width: 27px;
  cursor: pointer;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

export const Button = styled.div`
  width: 50px; /* 버튼의 너비 */
  height: 50px; /* 버튼의 높이 */
  border-radius: 50%; /* 동그란 모양을 만들기 위한 border-radius */
  background-color: #fee500; /* 버튼의 배경색 */
  color: gray; /* 버튼 내 텍스트 색상 */
  border: none; /* 테두리 없애기 */
  cursor: pointer; /* 마우스 오버 시 포인터 모양으로 변경 */
  display: flex; /* flexbox를 사용하여 */
  justify-content: center; /* 내용물 가운데 정렬 - 가로 */
  align-items: center; /* 내용물 가운데 정렬 - 세로 */
  font-size: 20px; /* 글자 크기 */
  margin-top: 5%;
`;

export const logo = styled.img`
  max-width: 45%; // 원 안에 맞게 이미지 크기 조정
  max-height: 45%; // 원 안에 맞게 이미지 크기 조정
  object-fit: contain; // 이미지 비율을 유지하면서 원 안에 맞춤
`;

export const kakaoText = styled.div`
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  width: 100%;
  margin-top: 10%;
`;

export const Line = styled.span`
  margin-top: 5%;
`;
export const InputTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  margin-left: 2%;
  margin-bottom: 3%;
`;

export const form = styled.form`
  width: 100%;
`;
export const Input = styled.input`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #e6e6e6;
  /* background-color: red; */
  height: 52px;
  margin-bottom: 3%;
  padding-left: 3%;
  &:focus {
    border-color: #a4a4a4;
    outline: none;
  }
  ::placeholder {
    color: #bdbdbd;
    font-size: 14px;
  }
`;

export const SignupButton = styled.button`
  width: 100%;
  border-radius: 26px;
  border: none;
  background-color: #f6786f;
  height: 54px;
  margin-top: 3%;
  color: white;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const CouponDiv = styled.div`
  width: 106.3%;
  height: 55px;
  font-size: 14px;
  font-weight: 500;
  margin-top: 1.5%;
  color: #424242;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
`;

export const CouponImg = styled.div`
  font-size: 12px;
  margin-right: 5px;
  margin-bottom: 1px;
`;
export const ColorText = styled.span`
  color: #f6786f;
`;

export const LoginRouter = styled.span`
  margin-top: 12%;
  font-size: 14px;
  color: #585858;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UnderLine = styled.a`
  color: #2e2e2e;
  font-weight: 900;
  text-decoration: underline;
  cursor: pointer;
`;

export const error = styled.p`
  font-size: 13px;
  color: #a4a4a4;
  margin-left: 2%;
  margin-bottom: 2%;
`;
