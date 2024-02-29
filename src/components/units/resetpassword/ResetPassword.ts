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
  background-repeat: no-repeat;
  height: 27px;
  width: 27px;
  cursor: pointer;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

export const InputTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  margin-bottom: 3%;
  margin-top: 5%;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #e6e6e6;
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

export const ContentsTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 10%;
  margin-bottom: 5%;
`;
export const ContentsSubTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #8f8f8f;
  margin-bottom: 4%;
`;

export const error = styled.p`
  font-size: 13px;
  color: #a4a4a4;
  margin-left: 2%;
  margin-bottom: 2%;
`;

export const form = styled.form``;
