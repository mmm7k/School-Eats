import styled from '@emotion/styled';

export const TitleWrapper = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

export const Title = styled.span`
  font-size: 18px;
  font-weight: 600;
  position: absolute;
  left: 40%;
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

export const UserWrapper = styled.div`
  margin-top: 8%;
  height: auto;
  border: 2px solid #e6e6e6;
  border-radius: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3% 3%;
  margin-left: 3%;
  margin-right: 3%;
`;

export const User = styled.div`
  width: 70%;
`;
export const UserEmail = styled.span`
  font-size: 13px;
  font-weight: 600;
`;
export const Logout = styled.span`
  font-size: 12px;
  color: #a5a5a5;
  text-decoration: underline;
  cursor: pointer;
`;

export const ContentsWrapper = styled.div`
  margin-top: 4%;
  height: auto;
  border: 2px solid #e6e6e6;
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  margin-left: 3%;
  margin-right: 3%;
`;

export const Contents = styled.div`
  padding: 3% 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.03); // slightly darken on hover
  }
  border-bottom: 1px solid rgba(0, 0, 0, 0.1); // 희미한 가로선 추가

  &:last-child {
    border-bottom: none; // 마지막 아이템에는 선을 표시하지 않음
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;
export const ContentsText = styled.span`
  font-size: 13px;
  font-weight: 700;
`;
export const BookmarkIcon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url('/bookmark.png');
  background-size: cover;
  margin-right: 3%;
`;

export const ContentsTitle = styled.span`
  font-size: 15px;
  font-weight: 600;
`;

export const Divine = styled.div`
  background-color: #eaecf4;
  height: 6px;
  width: 100%;
  margin-top: 6%;
`;
