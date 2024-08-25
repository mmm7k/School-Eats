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
  background-image: url('/backarrow.png');
  background-size: cover;
  height: 1.625rem;
  width: 1.625rem;
  cursor: pointer;
`;

export const HomeButton = styled.a`
  background-image: url('/homebutton.svg');
  background-size: cover;
  height: 1.6875rem;
  width: 1.6875rem;
  cursor: pointer;
`;

export const Title = styled.div`
  font-size: 1.5625rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 0.625rem;
`;

export const KakaoButtonWrapper = styled.div`
  width: 100%;
  height: 3.125rem;
  background-color: #fee500;
  border-radius: 0.3125rem;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #191919;
  margin-top: 7.5%;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
`;

export const KakaoLogo = styled.img`
  width: 1.375rem;
  height: 1.375rem;
  margin-right: 0.3125rem;
`;

export const Line = styled.div`
  font-size: 0.875rem;
  color: #848484;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 0.625rem;
  margin-top: 10%;
`;

export const IdInput = styled.input`
  width: 100%;
  border-radius: 0.3125rem;
  border: 1px solid #e6e6e6;
  height: 3.25rem;
  margin-top: 10%;
  padding-left: 3%;
  margin-bottom: 2%;

  &:focus {
    border-color: #a4a4a4;
    outline: none;
  }

  ::placeholder {
    color: #bdbdbd;
    font-size: 0.875rem;
  }
`;

export const FindPassword = styled.span`
  font-size: 0.875rem;
  color: #6e6e6e;
  font-weight: 400;
  height: auto;
  margin-top: 5%;
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
`;

export const PwInput = styled.input`
  width: 100%;
  border-radius: 0.3125rem;
  border: 1px solid #e6e6e6;
  height: 3.25rem;
  margin-top: 2%;
  padding-left: 3%;
  margin-bottom: 2%;

  &:focus {
    border-color: #a4a4a4;
    outline: none;
  }

  ::placeholder {
    color: #bdbdbd;
    font-size: 0.875rem;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  border-radius: 0.3125rem;
  border: none;
  background-color: #f6786f;
  height: 3.375rem;
  margin-top: 2%;
  color: white;
  font-size: 0.9375rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const SignUpText = styled.a`
  font-size: 0.875rem;
  color: #6e6e6e;
  font-weight: 400;
  height: auto;
  margin-top: 5%;
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
`;

export const CouponDiv = styled.div`
  width: 106.3%;
  height: 3.4375rem;
  font-size: 0.875rem;
  font-weight: 500;
  margin-top: 10%;
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

export const Error = styled.p`
  font-size: 0.8125rem;
  color: #a4a4a4;
  margin-left: 2%;
  margin-bottom: 2%;
`;

export const Form = styled.form`
  width: 100%;
`;
