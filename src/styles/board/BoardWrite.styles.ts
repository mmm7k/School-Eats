import styled from '@emotion/styled';

export const TitleWrapper = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 3%;
  padding-right: 3%;
  width: 100%;
  box-shadow: 0px 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
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
  font-size: 1.125rem;
  font-weight: 600;
  flex-grow: 1;
  text-align: center;
`;

export const BackButton = styled.a`
  background-image: url('/backarrow.png');
  background-size: cover;
  height: 1.625rem;
  width: 1.625rem;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding-left: 3%;
  padding-right: 3%;
`;

export const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  margin-top: 10%;
`;

export const SubTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  margin-top: 4%;
  color: #8f8f8f;
  height: 2.5rem;
`;

export const InputTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  width: 100%;
  margin-top: 3%;
  margin-bottom: 3%;
`;

export const Form = styled.form`
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
    font-size: 0.8125rem;
  }
`;

export const ContentsInput = styled.textarea`
  min-height: 12.5rem;
  height: auto;
  max-width: 100%;
  min-width: 100%;
  border-radius: 0.3125rem;
  border: 1px solid #e6e6e6;
  padding-top: 3.5%;
  padding-left: 3%;
  &:focus {
    border-color: #a4a4a4;
    outline: none;
  }
  ::placeholder {
    color: #bdbdbd;
    font-size: 0.8125rem;
  }
`;

export const SubmitButton = styled.button`
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

export const UploadLabel = styled.label`
  display: inline-block;
  cursor: pointer;
  background-color: #f0f0f0;
  border: 1px dashed #ccc;
  border-radius: 0.3125rem;
  text-align: center;
  padding-top: 5.5%;
  font-size: 0.8125rem;
  line-height: 1.375rem;
  color: #333;
  height: 5rem;
  width: 5rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:hover {
    background-color: #e9e9e9;
  }
`;

export const HiddenFileInput = styled.input`
  display: none;
`;
