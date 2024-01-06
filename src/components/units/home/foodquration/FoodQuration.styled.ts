import styled from '@emotion/styled';

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
  :hover {
    opacity: 0.9;
  }
  margin-right: 3%;
`;
export const FoodImage1 = styled.div`
  height: 471px;
  background-image: url('/한식.jpg');
  width: 314px;
  border-radius: 15px;
  overflow: hidden;
`;
export const FoodImage2 = styled.div`
  height: 471px;
  background-image: url('/중식.jpg');
  width: 314px;
  border-radius: 15px;
  overflow: hidden;
`;
export const FoodImage3 = styled.div`
  height: 471px;
  background-image: url('/일식.jpg');
  width: 314px;
  border-radius: 15px;
  overflow: hidden;
`;
export const FoodImage4 = styled.div`
  height: 471px;
  background-image: url('/양식.jpg');
  width: 314px;
  border-radius: 15px;
  overflow: hidden;
`;

export const FoodTitle = styled.div`
  color: white;
  font-size: 35px;
  font-weight: 600;
  margin-left: 20px;
  margin-top: 30px;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
`;

export const FoodText = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 400;
  margin-left: 20px;
  margin-top: 10px;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
`;

export const SubTitle = styled.div`
  font-size: 14px;
  font-weight: 200;
  width: 100%;
  padding-left: 3%;
  color: #696d84;
  margin-top: 60px;
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
