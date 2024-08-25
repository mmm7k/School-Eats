import styled from '@emotion/styled';
import { SearchOutlined } from '@ant-design/icons';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  margin-top: 5%;
  padding-left: 3%;
  padding-right: 3%;
`;

export const SubTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  margin-top: 2%;
  color: #8f8f8f;
  padding-left: 3%;
  padding-right: 3%;
  margin-bottom: 5%;
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  padding: 0 3%;
  flex-direction: column;
  justify-content: center;
  border-top: 1px solid #e6e6e6;
  line-height: 1.6;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
  position: relative;
`;

export const Image = styled.div`
  position: absolute;
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 0.5rem;
  overflow: hidden;
  right: 5%;
`;

export const ContentsTitle = styled.div`
  width: 80%;
  font-size: 0.75rem;
  font-weight: 800;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Contents = styled.div`
  width: 80%;
  font-size: 0.6875rem;
  font-weight: 600;
  color: #585858;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ContentsInfor = styled.div`
  font-size: 0.75rem;
  color: #a4a4a4;
`;

export const SpinDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.25rem;
`;

export const Searchbar = styled.div`
  width: 50%;
  height: 2.1875rem;
  border-radius: 0.625rem;
  background-color: #e6e6e6;
  border: none;
  padding: 0 4%;
  display: flex;
  align-items: center;
  margin-left: 3%;
  margin-bottom: 2%;
`;

export const SearchOutlinedIcon = styled(SearchOutlined)``;

export const SearchbarInput = styled.input`
  width: 100%;
  height: auto;
  border: none;
  outline: none;
  background: none;
  margin-left: 2%;
  ::placeholder {
    color: #848484;
    font-size: 0.75rem;
    font-weight: 600;
  }
`;

export const WriteButtonWrapper = styled.div`
  height: 4.1875rem;
  position: fixed;
  bottom: 4.6875rem;
  z-index: 2000;
  width: 31.25rem;
  padding-right: 2rem;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  @media only screen and (max-width: 31.25rem) {
    width: 100vw;
  }
`;

export const Button = styled.div`
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 50%;
  background-color: #f6786f;
  border: none;
  cursor: pointer;
  box-shadow: 0px 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
`;

export const StyledSkeleton = styled.div`
  height: 25rem;
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 10%;
`;
