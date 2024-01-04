import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 1100px;
  height: auto;
  min-height: 450px;
  width: 1100px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 300px;
  @media only screen and (max-width: 480px) {
    width: 95vw;
  }
  @media only screen and (max-width: 768px) {
    width: 95vw;
  }
  @media only screen and (min-width: 769px) and (max-width: 1280px) {
    width: 80vw;
  }
`;

export const Title = styled.div`
  height: 30px;
  font-size: 25px;
  font-weight: 900;
`;

export const SubTitle = styled.div`
  margin-top: 30px;
  height: 30px;
  font-size: 20px;
  font-weight: 500;
`;

export const PayList = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  @media only screen and (max-width: 480px) {
  }
`;

export const Pay = styled.div`
  width: 275px;
  @media only screen and (max-width: 480px) {
    width: 20%;
    white-space: nowrap; /* 텍스트가 줄 바꿈되지 않도록 설정 */
    overflow: hidden; /* 내용이 div의 영역을 넘어가면 숨기도록 설정 */
    text-overflow: ellipsis; /* 텍스트가 div를 넘어갈 때 "..."으로 표시 */
  }
  @media only screen and (max-width: 768px) {
    width: 20%;
    white-space: nowrap; /* 텍스트가 줄 바꿈되지 않도록 설정 */
    overflow: hidden; /* 내용이 div의 영역을 넘어가면 숨기도록 설정 */
    text-overflow: ellipsis; /* 텍스트가 div를 넘어갈 때 "..."으로 표시 */
  }
  @media only screen and (min-width: 769px) and (max-width: 1280px) {
    width: 20%;
    white-space: nowrap; /* 텍스트가 줄 바꿈되지 않도록 설정 */
    overflow: hidden; /* 내용이 div의 영역을 넘어가면 숨기도록 설정 */
    text-overflow: ellipsis; /* 텍스트가 div를 넘어갈 때 "..."으로 표시 */
  }
`;
