import styled from 'styled-components';

export const TitleWrapper = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 3%;
  padding-right: 3%;
  width: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  position: absolute;
`;

export const TitleText = styled.span`
  font-size: 18px;
  font-weight: 600;
  flex-grow: 1;
  text-align: center;
`;

export const BackButton = styled.a`
  background-image: url('/backarrow.png');
  background-size: cover;
  height: 26px;
  width: 26px;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding-left: 3%;
  padding-right: 3%;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 10%;
`;
export const SubTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-top: 4%;
  color: #8f8f8f;

  height: 40px;
`;

export const InputTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  width: 100%;

  margin-top: 3%;
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
    font-size: 13px;
  }
`;

export const ContentsInput = styled.textarea`
  min-height: 200px;
  height: auto;
  max-width: 100%;
  min-width: 100%;
  border-radius: 5px;
  border: 1px solid #e6e6e6;
  padding-top: 3.5%;
  padding-left: 3%;
  &:focus {
    border-color: #a4a4a4;
    outline: none;
  }
  ::placeholder {
    color: #bdbdbd;
    font-size: 13px;
  }
`;

export const SubmitButton = styled.button`
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
