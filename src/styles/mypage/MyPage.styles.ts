import styled from '@emotion/styled';

export const TitleWrapper = styled.div`
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

export const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
  position: absolute;
  left: 40%;
`;

export const BackButton = styled.a`
  background-image: url('/backarrow.png');
  background-size: cover;
  height: 1.625rem;
  width: 1.625rem;
  cursor: pointer;
`;

export const SearchIcon = styled.div`
  width: 1.9375rem;
  height: 1.9375rem;
  background-image: url('/searchicon.png');
  background-size: cover;
  cursor: pointer;
`;

export const TitleBookmarkIcon = styled.div`
  width: 1.8125rem;
  height: 1.8125rem;
  background-image: url('/bookmark.png');
  background-size: cover;
  margin-top: 3%;
  margin-left: 0.4375rem;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const UserWrapper = styled.div`
  margin-top: 8%;
  height: auto;
  border: 0.125rem solid #e6e6e6;
  border-radius: 0.8125rem;
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
  font-size: 0.8125rem;
  font-weight: 600;
`;

export const Logout = styled.span`
  font-size: 0.75rem;
  color: #848484;
  text-decoration: underline;
  cursor: pointer;
`;

export const ContentsWrapper = styled.div`
  margin-top: 4%;
  height: auto;
  border: 0.125rem solid #e6e6e6;
  border-radius: 0.8125rem;
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
  height: 3.75rem;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.03); // slightly darken on hover
  }
  border-bottom: 1px solid rgba(0, 0, 0, 0.1); // faint horizontal line

  &:last-child {
    border-bottom: none; // no line on the last item
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

export const ContentsText = styled.span`
  font-size: 0.8125rem;
  font-weight: 700;
`;

export const BookmarkIcon = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  background-image: url('/bookmark.png');
  background-size: cover;
  margin-right: 3%;
`;

export const ContentsTitle = styled.span`
  font-size: 0.9375rem;
  font-weight: 600;
`;

export const Divine = styled.div`
  background-color: #eaecf4;
  height: 0.375rem;
  width: 100%;
  margin-top: 6%;
`;
