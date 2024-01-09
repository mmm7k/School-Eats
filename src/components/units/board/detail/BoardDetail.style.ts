import styled from '@emotion/styled';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 150px;
  width: 750px;
  height: auto;
  margin-top: 60px;

  @media only screen and (max-width: 480px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media only screen and (min-width: 769px) and (max-width: 1280px) {
    align-items: center;
  }
`;

export const PostWrapper = styled.div`
  width: 750px;
  height: auto;
  display: flex;
  flex-direction: column;

  border: 1px solid #ccc;
  border-radius: 5px;
  @media only screen and (max-width: 480px) {
    width: 80%;
  }
  @media only screen and (max-width: 768px) {
    width: 80%;
  }
  @media only screen and (min-width: 769px) and (max-width: 1280px) {
    width: 80%;
  }
`;

export const Header = styled.div`
  border-bottom: 1px solid #ccc;
  height: 120px;
  @media only screen and (max-width: 480px) {
    height: 120px;
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.div`
  padding-top: 10px;
  padding-left: 8px;
  font-size: 30px;
  font-weight: 800;
`;

export const WriterWrapper = styled.div`
  font-size: 15px;
  height: 30px;
  color: gray;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  padding-left: 8px;
`;

export const Writer = styled.span`
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
`;

export const Body = styled.div`
  min-height: 600px;
  padding-left: 8px;
`;

export const Contents = styled.div`
  margin-top: 20px;
`;

export const EditWrapper = styled.div`
  font-size: 16px;
  padding-right: 10px;
`;
export const EditIcon = styled(EditOutlined)``;

export const DeleteIcon = styled(DeleteOutlined)`
  margin-left: 10px;
`;

export const CommentsWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    width: 80%;
  }
  @media only screen and (max-width: 768px) {
    width: 80%;
  }
  @media only screen and (min-width: 769px) and (max-width: 1280px) {
    width: 80%;
  }
`;

export const CommentsHeader = styled.div`
  font-size: 25px;
  font-weight: 700;
`;

export const CommentsInput = styled.input`
  width: 750px;
  height: 50px;
  border-radius: 7px;
  border: 1px solid #ccc;
  margin-top: 10px;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  @media only screen and (min-width: 769px) and (max-width: 1280px) {
    width: 100%;
  }
`;

export const CancelButton = styled.button`
  background-color: #eff2f8;
  border: #eff2f8;
  border-radius: 10px;
  height: 40px;
  width: 50px;
  color: #6a75ca;
  cursor: pointer;
  font-size: 13px;
  margin-right: 7px;
  :hover {
    background-color: #e6e9f0;
  }
`;
export const SubmitButton = styled.button`
  background-color: #6a75ca;
  border: #6a75ca;
  border-radius: 10px;
  height: 40px;
  width: 50px;
  color: white;
  cursor: pointer;
  font-size: 13px;
  :hover {
    background-color: #5e68b5;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  margin-top: 5px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 70px;
  line-height: 30px;
  border-bottom: 1px solid gray;
  margin-top: 10px;
  :hover {
    background-color: #f2f2f2;
  }
`;

export const Comments = styled.div`
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CommentsWriter = styled.div`
  margin-top: 1px;
  font-size: 12px;
  font-weight: 400;
  color: #808080;
`;

export const CommentsButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CommentsEditWrapper = styled.div`
  color: #808080;
  font-size: 18px;
`;

export const CommentsDeleteIcon = styled(DeleteOutlined)``;
