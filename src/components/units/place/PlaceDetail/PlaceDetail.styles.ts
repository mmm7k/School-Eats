import styled from 'styled-components';
import { Rate } from 'antd';

export const HeaderWrapper = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 3%;
  padding-right: 3%;
  width: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1000;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
`;

export const HeaderText = styled.span`
  font-size: 18px;
  font-weight: 600;
  position: absolute;
  left: 42%;
`;
export const BackButton = styled.a`
  background-image: url('/backarrow.png');
  background-size: cover;
  height: 26px;
  width: 26px;
  cursor: pointer;
`;

export const SearchIcon = styled.div`
  width: 31px;
  height: 31px;
  background-image: url('/searchicon.png');
  background-size: cover;
  cursor: pointer;
`;

export const TitleBookmarkIcon = styled.div`
  width: 29px;
  height: 29px;
  background-image: url('/bookmark.png');
  background-size: cover;
  /* margin-bottom: 1px; */
  margin-top: 3%;
  margin-left: 7px;
  cursor: pointer;
`;

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
  font-size: 13px;
  margin-left: 2%;
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
  margin-right: 1.5%;
`;

export const ReviewTitle = styled.div`
  /* font-size: 14px;
  font-weight: 600; */
  margin-top: 1%;
  font-size: 12px;
  display: flex;
  align-items: center;
`;
export const ReviewText = styled.span`
  /* font-size: 14px; */
  font-size: 13px;
  font-weight: 600;
  white-space: pre-wrap; /* 공백과 줄바꿈을 유지하면서 필요에 따라 줄바꿈 */
  overflow-wrap: break-word; /* 긴 단어가 요소의 너비를 넘어갈 때 줄바꿈 */
  word-break: break-word; /* 긴 단어를 끊어서 줄바꿈 */
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

  position: relative;
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

export const CancelButton = styled.button`
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #f6786f;
  height: 35px;
  border-radius: 10px;
  width: 50px;
  border: 1px solid #f6786f;
  background-color: white;
  margin-left: 3%;
`;

export const BookmarkIcon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url('/bookmark.png');
  background-size: cover;
  margin-left: 10%;
  cursor: pointer;
  margin-top: 10%;
`;

export const ColorBookmarkIcon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url('/colorbookmark.png');
  background-size: cover;
  margin-left: 10%;
  cursor: pointer;
  margin-top: 10%;
`;

export const BookmarkWrapper = styled.div`
  display: flex;

  align-items: center;
`;
