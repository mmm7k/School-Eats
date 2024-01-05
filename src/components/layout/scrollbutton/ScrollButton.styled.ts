import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 67px;
  position: fixed;
  bottom: 75px;
  z-index: 1000;
  width: 500px;

  padding-right: 32px;

  display: flex;
  justify-content: flex-end;
  @media only screen and (max-width: 500px) {
    width: 100vw;
  }
`;

export const Button = styled.div`
  width: 50px; /* 버튼의 너비 */
  height: 50px; /* 버튼의 높이 */
  border-radius: 50%; /* 동그란 모양을 만들기 위한 border-radius */
  background-color: white; /* 버튼의 배경색 */
  color: gray; /* 버튼 내 텍스트 색상 */
  border: none; /* 테두리 없애기 */
  cursor: pointer; /* 마우스 오버 시 포인터 모양으로 변경 */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
  display: flex; /* flexbox를 사용하여 */
  justify-content: center; /* 내용물 가운데 정렬 - 가로 */
  align-items: center; /* 내용물 가운데 정렬 - 세로 */
  font-size: 20px; /* 글자 크기 */
`;
