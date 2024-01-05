import { SearchOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

export const Searchbar = styled.div`
  width: 500px;
  height: 40px;
  border-radius: 15px;
  background-color: #f5f2fc;

  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SearchOutlinedIcon = styled(SearchOutlined)``;
export const SearchbarInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  margin: 0px 20px;
`;
