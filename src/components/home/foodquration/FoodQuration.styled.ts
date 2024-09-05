import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 29.4375rem;
  margin-left: 3%;
  .slick-dots {
    top: 30rem;
    left: 0.625rem;
  }
  width: 97%;
  overflow: hidden;
  cursor: pointer;
`;

export const Contents = styled.div`
  margin-right: 3%;
  min-width: 19.625rem;
  position: relative;
  border-radius: 0.9375rem;
  overflow: hidden;
  height: 29.4375rem;
  &:hover {
    filter: brightness(93%);
  }
`;

export const FoodTitle = styled.div`
  color: white;
  font-size: 1.875rem;
  font-weight: 600;
  text-shadow: 0.125rem 0.125rem 0.125rem rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 1.875rem;
  left: 1.25rem;
`;

export const FoodText = styled.div`
  color: white;
  font-size: 1.125rem;
  font-weight: 400;
  text-shadow: 0.125rem 0.125rem 0.125rem rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 4.6875rem;
  left: 1.25rem;
`;

export const SubTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 200;
  width: 100%;
  padding-left: 3%;
  color: #696d84;
  margin-top: 5.9375rem;
  margin-bottom: 0.375rem;
`;

export const Title = styled.div`
  font-size: 1.375rem;
  font-weight: 900;
  width: 100%;
  margin-left: 3%;
  color: #2b2e3b;
  margin-bottom: 0.9375rem;
`;

export const DotButton = styled.button`
  cursor: pointer;
  border: none;
  width: 0.5rem;
  height: 0.5rem;
  background-color: #bbb;
  border-radius: 50%;
  margin: 0 0.25rem;
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
