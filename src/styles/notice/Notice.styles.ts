import styled from '@emotion/styled';

export const TitleWrapper = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 3%;
  padding-right: 3%;
  width: 100%;
  box-shadow: 0px 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  position: absolute;
`;

export const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
  flex-grow: 1;
  text-align: center;
`;

export const BackButton = styled.a`
  background-image: url('/common/backarrow.png');
  background-size: cover;
  height: 1.625rem;
  width: 1.625rem;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 26.875rem;
`;

export const Notice = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
  margin-top: 10%;
`;

export const SubNotice = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  margin-top: 5%;
  color: #8f8f8f;
`;
