import styled from '@emotion/styled';

export const SearchWrapper = styled.div`
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

export const SearchDiv = styled.div`
  width: 100%;
  height: 2.1875rem;
  background-color: #e6e6e6;
  border: none;
  border-radius: 0.625rem;
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
    font-size: 0.8125rem;
    font-weight: 700;
  }
`;

export const BackButton = styled.a`
  background-image: url('/backarrow.png');
  background-size: cover;
  height: 1.625rem;
  width: 1.625rem;
  cursor: pointer;
`;

// 검색결과

export const BookmarkTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

export const BookmarkText = styled.span`
  font-size: 0.8125rem;
`;

export const BookmarkWrapper = styled.div`
  line-height: 1.5;
  margin-top: 4%;
  height: auto;
  border: 0.125rem solid #e6e6e6;
  border-radius: 0.9375rem;
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
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1px;
`;
