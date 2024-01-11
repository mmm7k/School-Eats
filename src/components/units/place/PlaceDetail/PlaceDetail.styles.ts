import styled from '@emotion/styled';
import { Rate } from 'antd';

export const Wrapper = styled.div`
  width: 100%;
`;

export const TitleWrapper = styled.div`
  padding-left: 3%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 4%;
  padding-bottom: 4%;
`;
export const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  height: 30px;
`;

export const RateWrapper = styled.div`
  margin-top: 2%;
  display: flex;
  align-items: center;
`;

export const RateStar = styled(Rate)`
  font-size: 14px;
  padding-bottom: 3px;
`;

export const RateNum = styled.p`
  /* color: #ffe226; */
  margin-left: 2%;
  font-size: 17px;
`;

export const CommentsCount = styled.p`
  margin-left: 2%;
  font-size: 14px;
  font-weight: 500;
  text-decoration: underline;
`;
export const Divine = styled.div`
  background-color: #eaecf4;
  height: 8px;
  width: 100%;
`;
export const Infor = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4%;
  font-size: 14px;
`;

export const InforText = styled.p`
  font-size: 14px;
`;
export const InforImg = styled.img`
  margin-right: 2%;
`;
export const InforTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

export const InforWrapper = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 3%;
  padding-top: 4%;
  padding-bottom: 4%;
  padding-right: 3%;
`;

export const ReviewRate = styled(Rate)`
  font-size: 12px;
  margin-left: 2%;
  margin-bottom: 4px;
`;

export const ReviewTitle = styled.div`
  font-size: 14px;
  font-weight: 600;

  display: flex;
  align-items: center;
`;
export const ReviewText = styled.span`
  font-size: 14px;
`;

export const ReviewInput = styled.textarea`
  min-height: 50px;
  height: auto;
  max-width: 100%;
  min-width: 100%;
  border-radius: 15px;
  border: 1px solid #e7e7e7;
  padding-left: 3%;
  margin-top: 3%;
  padding-top: 3.5%;
  &:focus {
    border-color: #a4a4a4;
    outline: none;
  }
  ::placeholder {
    color: #bdbdbd;
    font-size: 13px;
  }
`;

export const deleteIcon = styled.div`
  background-image: url('/deleteicon.png');
  width: 14px;
  height: 14px;
  background-size: cover;
  margin-left: 10px;
`;

export const ReviewWrapper = styled.div`
  margin-top: 4%;
  height: auto;
  background-color: #f9f9f9;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3% 0;
  padding-left: 3%;
`;

export const ReviewInputRate = styled(Rate)`
  font-size: 15px;
`;

export const SubmitWrapper = styled.div`
  font-size: 13px;
  color: #bdbdbd;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 2%;
`;
export const SubmitButton = styled.button`
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
  height: 35px;
  border-radius: 10px;
  width: 50px;
  border: none;
  background-color: #f6786f;
  margin-left: 3%;
`;
