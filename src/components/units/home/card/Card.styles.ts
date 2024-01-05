import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 180px;
  width: 100%;
  margin-top: 15px;
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
  background-image: url('/card2.png');
  cursor: pointer;
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
      background: rgba(0, 0, 0, 0.1);
      border-radius: 15px;
    }
  }
`;
export const Text = styled.div`
  color: white;
  width: 472px;

  font-weight: 600;
  font-size: 21px;
  margin-top: 40px;
  margin-left: 30px;
  line-height: 1.3;
  cursor: pointer;
`;

export const Text2 = styled.div`
  color: white;
  width: 472px;
  height: 20px;

  font-weight: 100;
  font-size: 14px;
  margin-left: 30px;
  margin-top: 25px;
  text-decoration: underline;
  cursor: pointer;
`;
