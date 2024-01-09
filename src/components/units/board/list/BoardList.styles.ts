import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 800px;
  margin: 80px;
  margin-bottom: 150px;
  @media only screen and (max-width: 480px) {
    width: 80vw;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 80vw;
  }
  @media only screen and (min-width: 769px) and (max-width: 1280px) {
    width: 60vw;
  }
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const WriteButton = styled.button`
  background-color: #6a75ca;
  border: #6a75ca;
  border-radius: 15px;
  height: 40px;
  width: 80px;
  color: white;
  cursor: pointer;
  :hover {
    background-color: #5e68b5;
  }
  @media only screen and (max-width: 480px) {
    width: 30%;
  }
`;

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  height: 105px;
  line-height: 30px;
  border-bottom: 1px solid gray;
  :hover {
    background-color: #f2f2f2;
  }
`;

export const Title = styled.div`
  margin-top: 5px;
  font-size: 20px;
  font-weight: 600;
`;

export const Contents = styled.div`
  margin-top: 5px;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Writer = styled.div`
  margin-top: 1px;
  font-size: 12px;
  font-weight: 400;
  color: #808080;
`;

export const SpinDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
