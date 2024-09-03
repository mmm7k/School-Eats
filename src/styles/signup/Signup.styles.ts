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
  height: 3.125rem;
  margin-top: 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled.a`
  background-image: url('/common/backarrow.png');
  background-size: cover;
  height: 1.625rem;
  width: 1.625rem;
  cursor: pointer;
`;

export const HomeButton = styled.a`
  background-image: url('/common/homebutton.svg');
  background-size: cover;
  height: 1.6875rem;
  width: 1.6875rem;
  cursor: pointer;
`;

export const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
`;

export const Button = styled.div`
  width: 3.125rem; /* 버튼의 너비 */
  height: 3.125rem; /* 버튼의 높이 */
  border-radius: 50%; /* 동그란 모양을 만들기 위한 border-radius */
  background-color: #fee500; /* 버튼의 배경색 */
  color: gray; /* 버튼 내 텍스트 색상 */
  border: none; /* 테두리 없애기 */
  cursor: pointer; /* 마우스 오버 시 포인터 모양으로 변경 */
  display: flex; /* flexbox를 사용하여 */
  justify-content: center; /* 내용물 가운데 정렬 - 가로 */
  align-items: center; /* 내용물 가운데 정렬 - 세로 */
  font-size: 1.25rem; /* 글자 크기 */
  margin-top: 5%;
`;

export const logo = styled.img`
  max-width: 45%; // 원 안에 맞게 이미지 크기 조정
  max-height: 45%; // 원 안에 맞게 이미지 크기 조정
  object-fit: contain; // 이미지 비율을 유지하면서 원 안에 맞춤
`;

export const kakaoText = styled.div`
  font-size: 0.9375rem;
  font-weight: 600;
  text-align: center;
  width: 100%;
  margin-top: 10%;
`;

export const Line = styled.span`
  margin-top: 5%;
`;

export const InputTitle = styled.div`
  font-size: 0.875rem;
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
  border-radius: 0.3125rem;
  border: 1px solid #e6e6e6;
  height: 3.25rem;
  margin-bottom: 3%;
  padding-left: 3%;
  &:focus {
    border-color: #a4a4a4;
    outline: none;
  }
  ::placeholder {
    color: #bdbdbd;
    font-size: 0.875rem;
  }
`;

export const SignupButton = styled.button`
  width: 100%;
  border-radius: 1.625rem;
  border: none;
  background-color: #f6786f;
  height: 3.375rem;
  margin-top: 3%;
  color: white;
  font-size: 0.9375rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const CouponDiv = styled.div`
  width: 106.3%;
  height: 3.4375rem;
  font-size: 0.875rem;
  font-weight: 500;
  margin-top: 1.5%;
  color: #424242;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
`;

export const CouponImg = styled.div`
  font-size: 0.75rem;
  margin-right: 0.3125rem;
  margin-bottom: 0.0625rem;
`;

export const ColorText = styled.span`
  color: #f6786f;
`;

export const LoginRouter = styled.span`
  margin-top: 12%;
  font-size: 0.875rem;
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
  font-size: 0.8125rem;
  color: #a4a4a4;
  margin-left: 2%;
  margin-bottom: 2%;
`;
