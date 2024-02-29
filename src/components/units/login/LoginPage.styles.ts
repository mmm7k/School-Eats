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
  font-size: 25px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 10px;
`;

export const KakaoButtonWrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fee500;
  border-radius: 5px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #191919;
  margin-top: 7.5%;
  font-size: 14px;
  font-weight: 00;
  cursor: pointer;
`;

export const KakaoLogo = styled.img`
  width: 22px;
  height: 22px;
  margin-right: 5px;
`;

export const Line = styled.div`
  font-size: 14px;
  color: #848484;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 10px;
  margin-top: 10%;
`;

export const IdInput = styled.input`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #e6e6e6;
  /* background-color: red; */
  height: 52px;
  margin-top: 10%;
  padding-left: 3%;
  margin-bottom: 2%;

  &:focus {
    border-color: #a4a4a4;
    outline: none;
  }
  ::placeholder {
    color: #bdbdbd;
    font-size: 14px;
  }
`;

export const FindPassword = styled.span`
  font-size: 14px;
  color: #6e6e6e;
  font-weight: 400;
  width: 100%;
  height: auto;
  margin-top: 5%;
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
`;

export const PwInput = styled.input`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #e6e6e6;
  /* background-color: red; */
  height: 52px;
  margin-top: 2%;
  padding-left: 3%;
  margin-bottom: 2%;
  &:focus {
    border-color: #a4a4a4;
    outline: none;
  }
  ::placeholder {
    color: #bdbdbd;
    font-size: 14px;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  border-radius: 5px;
  border: none;
  background-color: #f6786f;
  height: 54px;
  margin-top: 2%;
  color: white;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const SignUpText = styled.a`
  font-size: 14px;
  color: #6e6e6e;
  font-weight: 400;
  width: 100%;
  height: auto;
  margin-top: 5%;
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
`;

export const CouponDiv = styled.div`
  width: 106.3%;
  height: 55px;
  font-size: 14px;
  font-weight: 500;
  margin-top: 10%;
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

export const error = styled.p`
  font-size: 13px;
  color: #a4a4a4;
  margin-left: 2%;
  margin-bottom: 2%;
`;

export const form = styled.form`
  width: 100%;
`;
