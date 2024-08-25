import styled from '@emotion/styled';
import { Skeleton } from 'antd';

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
  background-image: url('/backarrow.png');
  background-size: cover;
  height: 1.625rem;
  width: 1.625rem;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding-left: 3%;
  padding-right: 3%;
  min-height: 26.875rem;
`;

export const Notice = styled.div`
  font-size: 1rem;
  font-weight: 700;
  margin-top: 7%;
  padding-left: 3%;
`;

export const SubNotice = styled.div`
  font-size: 0.8125rem;
  font-weight: 500;
  margin-top: 2%;
  color: #8f8f8f;
  padding-left: 3%;
`;

export const BookmarkTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

export const BookmarkText = styled.span`
  font-size: 0.8125rem;
`;

export const BookmarkWrapper = styled.div`
  line-height: 1.5;
  margin-top: 4%;
  height: auto;
  border: 0.125rem solid #e6e6e6;
  border-radius: 0.9375rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3% 0;
  padding-left: 3%;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.03); // slightly darken on hover
  }
`;

export const RateWrapper = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1px;
`;

export const StyledSkeleton = styled(Skeleton)`
  margin-top: 10%;
`;
