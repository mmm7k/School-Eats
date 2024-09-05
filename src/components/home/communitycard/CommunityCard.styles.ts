import styled from '@emotion/styled';

export const SubTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 200;
  width: 100%;
  padding-left: 3%;
  color: #696d84;
  margin-top: 8.125rem;
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

export const ImageWrapper = styled.div`
  margin: 0 3%;
  height: auto;
  width: 94%;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    filter: brightness(93%);
  }
`;
