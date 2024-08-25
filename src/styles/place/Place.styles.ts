import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  margin-top: 5%;
  padding-left: 3%;
  padding-right: 3%;
`;

export const SubTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  margin-top: 2%;
  color: #8f8f8f;
  padding-left: 3%;
  padding-right: 3%;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 4%;
  margin-bottom: 3%;
  padding-left: 3%;
  padding-right: 3%;
`;

export const SelectButton = styled.button`
  border-radius: 1.0625rem;
  border: none;
  color: white;
  min-width: 3.5rem;
  height: 2.125rem;
  background-color: #f6786f;
  font-weight: 600;
  font-size: 0.8125rem;
  margin-right: 1.5%;
  white-space: nowrap;
  text-align: center;
`;

export const Button = styled.button`
  border-radius: 1.0625rem;
  border: 1px solid #bdbdbd;
  color: #2f2f2f;
  min-width: 3.5rem;
  height: 2.125rem;
  background-color: white;
  font-weight: 600;
  font-size: 0.75rem;
  margin-right: 1.5%;
  cursor: pointer;
  white-space: nowrap;
  text-align: center;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 3%;
  padding-right: 3%;
`;

export const ContentsItem = styled.div`
  flex: 1 1 49%;
  max-width: 49%;
  border-radius: 0.625rem;
  margin-top: 4%;

  :hover {
    opacity: 0.8;
  }
`;

export const ContentsImage = styled.div`
  border-radius: 0.625rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentsTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3%;
`;

export const RateWrapper = styled.div`
  color: #424242;
  font-size: 0.9375rem;
  padding-bottom: 1px;
`;

export const ContentsTitle = styled.div`
  font-size: 0.9375rem;
  font-weight: 700;
`;

export const ContentsBreakTime = styled.div`
  font-size: 0.75rem;
  margin-top: 2%;
  color: #6f6f6f;
`;

export const ContentsMenu = styled.div`
  font-size: 0.8125rem;
  margin-top: 2%;
  font-weight: 700;
  color: #424242;
`;

export const SpinDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5%;
`;

export const SelectDiv = styled.div`
  width: 100%;
  padding-left: 3%;
  padding-right: 3%;
  margin-top: 3%;
  display: flex;
  justify-content: flex-end;
`;
