import styled from '@emotion/styled';
import { Rate } from 'antd';

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
`;

export const TitleWrapper = styled.div`
  padding-left: 3%;
  height: 7.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 4%;
  padding-bottom: 4%;
`;

export const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  height: 1.875rem;
`;

export const RateWrapper = styled.div`
  margin-top: 2%;
  display: flex;
  align-items: center;
`;

export const RateStar = styled(Rate)`
  font-size: 0.875rem;
  padding-bottom: 0.1875rem;
`;

export const RateNum = styled.p`
  margin-left: 2%;
  font-size: 1.0625rem;
`;

export const CommentsCount = styled.p`
  margin-left: 2%;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: underline;
`;

export const Divine = styled.div`
  background-color: #eaecf4;
  height: 0.5rem;
  width: 100%;
`;

export const Infor = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4%;
  font-size: 0.875rem;
`;

export const InforText = styled.p`
  font-size: 0.8125rem;
  margin-left: 2%;
`;

export const InforImg = styled.img`
  margin-right: 2%;
`;

export const InforTitle = styled.div`
  font-size: 1rem;
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
  font-size: 0.75rem;
  margin-left: 2%;
  margin-bottom: 0.25rem;
  margin-right: 0.09375rem;
`;

export const ReviewTitle = styled.div`
  margin-top: 1%;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
`;

export const ReviewText = styled.span`
  font-size: 0.8125rem;
  font-weight: 600;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  word-break: break-word;
`;

export const ReviewInput = styled.textarea`
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

export const ReviewWrapper = styled.div`
  margin-top: 4%;
  height: auto;
  background-color: #f9f9f9;
  border-radius: 0.9375rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3% 0;
  padding-left: 3%;
  position: relative;
`;

export const ReviewInputRate = styled(Rate)`
  font-size: 0.9375rem;
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
`;

export const BookmarkIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-image: url('/common/bookmark.png');
  background-size: cover;
  margin-left: 10%;
  cursor: pointer;
  margin-top: 10%;
`;

export const ColorBookmarkIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-image: url('/common/colorbookmark.png');
  background-size: cover;
  margin-left: 10%;
  cursor: pointer;
  margin-top: 10%;
`;

export const BookmarkWrapper = styled.div`
  display: flex;
  align-items: center;
`;
