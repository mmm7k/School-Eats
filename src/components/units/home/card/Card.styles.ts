import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 159x;
  margin-top: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding-left: 3%;
  padding-right: 3%;
`;
export const CardImage = styled.div`
  position: relative;
  height: 159px;
  border-radius: 18px;
  background-image: url('/card.png');
  display: flex;
  flex-direction: column;
  overflow: hidden;
  :hover {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 18px;
    }
  }
`;
export const Text = styled.div`
  color: white;
  width: 472px;

  font-weight: 600;
  font-size: 17px;
  margin-top: 40px;
  margin-left: 30px;
  line-height: 1.3;

  z-index: 1;
`;

export const Text2 = styled.div`
  color: white;
  width: 472px;
  height: 20px;
  font-weight: 100;
  font-size: 11px;
  margin-left: 30px;
  margin-top: 25px;
  text-decoration: underline;
  z-index: 1;
`;
