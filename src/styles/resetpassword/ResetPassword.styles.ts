import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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
  background-repeat: no-repeat;
  height: 1.6875rem;
  width: 1.6875rem;
  cursor: pointer;
`;

export const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
`;

export const InputTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  width: 100%;
  margin-bottom: 3%;
  margin-top: 5%;
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

export const ContentsTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  margin-top: 10%;
  margin-bottom: 5%;
`;

export const ContentsSubTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: #8f8f8f;
  margin-bottom: 4%;
`;

export const Error = styled.p`
  font-size: 0.8125rem;
  color: #a4a4a4;
  margin-left: 2%;
  margin-bottom: 2%;
`;

export const form = styled.form``;
