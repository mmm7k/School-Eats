import styled from '@emotion/styled';

export const SearchWrapper = styled.div`
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

export const SearchDiv = styled.div`
  width: 100%;
  height: 35px;
  background-color: #e6e6e6;
  border: none;
  border-radius: 10px;
  padding: 0 4%;
  margin-left: 3%;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: auto;
  background: none;
  border: none;
  outline: none;
  margin-left: 2%;
  ::placeholder {
    color: #848484;
    font-size: 13px;
    font-weight: 700;
  }
`;
export const BackButton = styled.a`
  background-image: url('/backarrow.png');
  background-size: cover;
  height: 26px;
  width: 26px;
  cursor: pointer;
`;

//검색결과

export const Bookmarktitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
`;
export const BookmarkText = styled.span`
  font-size: 13px;
`;

export const BookmarkWrapper = styled.div`
  line-height: 1.5;
  margin-top: 4%;
  height: auto;
  border: 2px solid #e6e6e6;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3% 0;
  padding-left: 3%;
  margin: 3% 3%;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.03); // slightly darken on hover
  }
`;

export const RateWrapper = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 1px;
`;
