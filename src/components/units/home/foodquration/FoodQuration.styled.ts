import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 471px;
  margin-left: 3%;
  .slick-dots {
    top: 480px;
    left: 10px;
  }
  width: 97%;
  overflow: hidden;
  cursor: pointer;
`;

export const Contents = styled.div`
  margin-right: 3%;
  min-width: 314px;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  height: 471px;
  &:hover {
    filter: brightness(93%);
  }
`;

export const FoodTitle = styled.div`
  color: white;
  font-size: 30px;
  font-weight: 600;

  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 30px;
  left: 20px;
`;

export const FoodText = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 400;

  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 75px;
  left: 20px;
`;

export const SubTitle = styled.div`
  font-size: 14px;
  font-weight: 200;
  width: 100%;
  padding-left: 3%;
  color: #696d84;
  margin-top: 95px;
  margin-bottom: 6px;
`;
export const Title = styled.div`
  font-size: 22px;
  font-weight: 900;
  width: 100%;
  margin-left: 3%;
  color: #2b2e3b;
  margin-bottom: 15px;
`;

export const DotButton = styled.button`
  cursor: pointer;
  border: none;
  width: 8px;
  height: 8px;
  background-color: #bbb;
  border-radius: 50%;
  margin: 0 4px;
  padding: 0;
  outline: none;
  &.is-selected {
    background-color: #717171;
  }
`;

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2%;
`;
