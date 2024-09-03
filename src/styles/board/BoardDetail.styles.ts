import styled from '@emotion/styled';

export const HeaderWrapper = styled.div`
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 3%;
  padding-right: 3%;
  width: 100%;
  box-shadow: 0px 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
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
  font-size: 1.125rem;
  font-weight: 600;
  position: absolute;
  left: 42%;
`;

export const BackButton = styled.a`
  background-image: url('/common/backarrow.png');
  background-size: cover;
  height: 1.625rem;
  width: 1.625rem;
  cursor: pointer;
`;

export const SearchIcon = styled.div`
  width: 1.9375rem;
  height: 1.9375rem;
  background-image: url('/common/searchicon.png');
  background-size: cover;
  cursor: pointer;
`;

export const TitleBookmarkIcon = styled.div`
  width: 1.8125rem;
  height: 1.8125rem;
  background-image: url('/common/bookmark.png');
  background-size: cover;
  margin-top: 3%;
  margin-left: 0.4375rem;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 3%;
`;

export const Infor = styled.div`
  width: 100%;
  height: 2.5rem;
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
  font-size: 0.875rem;
  font-weight: 700;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const EditButton = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  right: 2.5%;
  top: 0%;
`;

export const Timestamp = styled.span`
  color: #848484;
  font-size: 0.75rem;
  font-weight: 500;
`;

export const ContentsWrapper = styled.div`
  padding: 3% 0;
  min-height: 3.125rem;
  max-width: 100%;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  word-break: break-word;
  display: flex;
  flex-direction: column;
`;

export const ContentsTitle = styled.span`
  font-size: 1rem;
  font-weight: 700;
`;

export const Contents = styled.span`
  margin-top: 4%;
  font-size: 0.8125rem;
`;

export const LikeCommentCount = styled.div`
  width: 100%;
  display: flex;
`;

export const LikeCount = styled.div`
  color: #f6786f;
  font-size: 0.9375rem;
  display: flex;
  margin-right: 5%;
`;

export const CommentCount = styled.div`
  color: #2eccfa;
  font-size: 0.9375rem;
  display: flex;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 4%;
  align-items: center;
`;

export const LikeButton = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 0.4375rem;
  width: 5.3125rem;
  height: 2.1875rem;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1%;
  color: #848484;
  cursor: pointer;
`;

export const ScrapButton = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 0.4375rem;
  border: none;
  width: 5rem;
  height: 2.1875rem;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #848484;
  cursor: pointer;
`;

export const CommentsTitle = styled.div`
  font-size: 1rem;
  font-weight: 700;
  margin-top: 5%;
`;

export const CommentsInput = styled.textarea`
  min-height: 3.125rem;
  height: auto;
  max-width: 100%;
  min-width: 100%;
  border-radius: 0.9375rem;
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
    font-size: 0.8125rem;
  }
`;

export const SubmitWrapper = styled.div`
  font-size: 0.8125rem;
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
  height: 2.1875rem;
  border-radius: 0.625rem;
  width: 3.125rem;
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
  height: 2.1875rem;
  border-radius: 0.625rem;
  width: 3.125rem;
  border: 1px solid #f6786f;
  background-color: white;
  margin-left: 3%;
  margin-bottom: 4%;
`;

export const CommentsWrapper = styled.div`
  width: 100%;
  min-height: 5.3125rem;
  border-bottom: 1px solid #e0e0e0;
  padding: 1.5% 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const CommentsUser = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CommentsUserEmail = styled.div`
  font-size: 0.8125rem;
  font-weight: 700;
  width: 100%;
`;

export const Comments = styled.span`
  font-size: 0.8125rem;
  margin-left: 1%;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  word-break: break-word;
`;

export const CommentsTimestamp = styled.span`
  color: #848484;
  font-size: 0.75rem;
  font-weight: 500;
`;

export const ImgWrapper = styled.div`
  height: 10rem;
  width: 9.375rem;
  cursor: pointer;
  border-radius: 0.4375rem;
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
    background: rgba(0, 0, 0, 0.2);
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

export const StyledSkeleton = styled.div`
  height: 25rem;
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 10%;
`;

export const CloseButton = styled.span`
  position: fixed;
  top: 0.3125rem;
  right: 1.25rem;
  border: none;
  cursor: pointer;
  font-size: 1.6875rem;
  font-weight: 400;
  color: white;
`;
