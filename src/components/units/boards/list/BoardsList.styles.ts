import styled from '@emotion/styled';
import { SearchOutlined } from '@ant-design/icons';
export const Wrapper = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 5%;
  padding-left: 3%;
  padding-right: 3%;
`;

export const SubTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-top: 2%;
  color: #8f8f8f;
  padding-left: 3%;
  padding-right: 3%;
  margin-bottom: 5%;
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  padding: 0 3%;
  flex-direction: column;
  justify-content: center;
  border-top: 1px solid #e6e6e6;
  line-height: 1.4;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.03); // slightly darken on hover
  }
  position: relative;
`;

export const Image = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  overflow: hidden;
  right: 5%;
`;
export const ContentsTitle = styled.div`
  width: 80%;
  font-size: 12px;
  font-weight: 800;
  overflow: hidden; /* 내용이 넘칠 경우 숨김 처리 */
  white-space: nowrap; /* 내용을 한 줄로만 표시 */
  text-overflow: ellipsis; /* 넘치는 내용을 ... 으로 표시 */
`;

export const Contents = styled.div`
  width: 80%;
  font-size: 11px;
  font-weight: 600;
  color: #585858;
  overflow: hidden; /* 내용이 넘칠 경우 숨김 처리 */
  white-space: nowrap; /* 내용을 한 줄로만 표시 */
  text-overflow: ellipsis; /* 넘치는 내용을 ... 으로 표시 */
`;

export const ContentsInfor = styled.div`
  font-size: 10px;
  color: #a4a4a4;
`;

export const SpinDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Searchbar = styled.div`
  width: 50%;
  height: 35px;
  border-radius: 10px;
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
    font-size: 12px;
    font-weight: 600;
  }
`;
