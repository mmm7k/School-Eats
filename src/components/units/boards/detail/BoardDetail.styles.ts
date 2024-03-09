import styled from '@emotion/styled';

import { Skeleton } from 'antd';

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
  padding: 0 3%;
`;
export const Infor = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 5%;
  display: flex;
  align-items: center;
`;

export const InforUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.5;
  width: 100%;
  position: relative;
`;

export const UserEmail = styled.div`
  font-size: 14px;
  font-weight: 700;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const EditButton = styled.div`
  /* background-color: red; */
  position: absolute;
  display: flex;
  justify-content: space-between;
  right: 2.5%;
  top: 0%;
`;
export const Timestamp = styled.span`
  color: #848484;
  font-size: 12px;
  font-weight: 500;
`;

export const ContentsWrapper = styled.div`
  padding: 3% 0;
  min-height: 50px;
  max-width: 100%;
  white-space: pre-wrap; /* 공백과 줄바꿈을 유지하면서 필요에 따라 줄바꿈 */
  overflow-wrap: break-word; /* 긴 단어가 요소의 너비를 넘어갈 때 줄바꿈 */
  word-break: break-word; /* 긴 단어를 끊어서 줄바꿈 */
  display: flex;
  flex-direction: column;
`;
0;
export const ContentsTitle = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

export const Contents = styled.span`
  margin-top: 4%;
  font-size: 13px;
`;

export const LikeCommentCount = styled.div`
  width: 100%;
  display: flex;
`;

export const LikeCount = styled.div`
  color: #f6786f;
  font-size: 15px;
  display: flex;
  margin-right: 5%;
`;

export const CommentCount = styled.div`
  color: #2eccfa;
  font-size: 15px;
  display: flex;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 4%;
  align-items: center;
`;

export const LikeButton = styled.div`
  font-size: 12px;
  font-weight: 600;
  border-radius: 7px;
  width: 85px;
  height: 35px;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1%;
  color: #848484;
  cursor: pointer;
`;
export const ScrapButton = styled.div`
  font-size: 12px;
  font-weight: 600;
  border-radius: 7px;
  border: none;
  width: 80px;
  height: 35px;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #848484;
  cursor: pointer;
`;

export const CommentsTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-top: 5%;
`;

export const CommentsInput = styled.textarea`
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
  margin-bottom: 4%;
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
  margin-bottom: 4%;
`;
export const CommentsWrapper = styled.div`
  width: 100%;
  min-height: 85px;
  border-bottom: 1px solid #e0e0e0;
  padding: 1.5% 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const CommentsUser = styled.div`
  font-size: 14px;
  font-weight: 700;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CommentsUserEmail = styled.div`
  font-size: 13px;
  font-weight: 700;
  width: 100%;
`;

export const Comments = styled.span`
  font-size: 13px;
  margin-left: 1%;
  white-space: pre-wrap; /* 공백과 줄바꿈을 유지하면서 필요에 따라 줄바꿈 */
  overflow-wrap: break-word; /* 긴 단어가 요소의 너비를 넘어갈 때 줄바꿈 */
  word-break: break-word; /* 긴 단어를 끊어서 줄바꿈 */
`;

export const CommentsTimestamp = styled.span`
  color: #848484;
  font-size: 12px;
  font-weight: 500;
`;

export const ImgWrapper = styled.div`
  height: 160px;
  width: 150px;
  cursor: pointer;
  border-radius: 7px;
  overflow: hidden;
  margin-top: 1%;
  position: relative;
  &:hover::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2); /* 마우스 오버 시 어둡게 처리 */
    z-index: 2;
  }
`;

export const ImgModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1100;
`;

export const ImgModal = styled.div`
  position: relative;
  width: 70vw;
  height: 70vh;
`;

export const StyledSkeleton = styled(Skeleton)`
  margin-top: 10%;
`;
