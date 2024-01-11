import styled from '@emotion/styled';
import { Rate } from 'antd';

export const Wrapper = styled.div`
  width: 100%;
`;

export const TitleWrapper = styled.div`
  padding-left: 3%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 4%;
  padding-bottom: 4%;
`;
export const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  height: 30px;
`;

export const RateWrapper = styled.div`
  margin-top: 2%;
  display: flex;
  align-items: center;
`;

export const RateStar = styled(Rate)`
  font-size: 14px;
  padding-bottom: 3px;
`;

export const RateNum = styled.p`
  /* color: #ffe226; */
  margin-left: 2%;
  font-size: 17px;
`;

export const CommentsCount = styled.p`
  margin-left: 2%;
  font-size: 14px;
  font-weight: 500;
  text-decoration: underline;
`;
export const Divine = styled.div`
  background-color: #eaecf4;
  height: 8px;
  width: 100%;
`;
export const Infor = styled.div`
  display: flex;
`;

export const InforText = styled.p`
  font-size: 14px;
`;
export const InforImg = styled.img`
  margin-right: 2%;
`;
export const InforTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

export const InforWrapper = styled.div`
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 3%;
  padding-top: 4%;
  padding-bottom: 4%;
`;
