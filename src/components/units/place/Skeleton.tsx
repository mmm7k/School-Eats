import styled from '@emotion/styled';
import { Skeleton } from 'antd';
import React from 'react';

const SkeletonItem = styled.div`
  flex: 1 1 49%; // flex-basis를 48%로 설정하여 한 열에 두 개씩 나오도록 합니다.
  max-width: 49%; // 최대 너비도 48%로 설정합니다.
  border-radius: 10px;
  margin-top: 4%;
  overflow: hidden;
  // 필요한 추가 스타일이 있다면 여기에 정의합니다.
`;

const RectangleSkeleton = styled.div`
  width: 230px;
  height: 240px;
  background-color: #ececec; // 스켈레톤의 색상 설정
  border-radius: 10px; // 필요한 경우, border-radius 설정
`;

// export default SkeletonPlace;

const SkeletonPlace = () => {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <SkeletonItem key={index}>
          <RectangleSkeleton />
          <Skeleton active style={{ marginTop: 3 }} paragraph={{ rows: 1 }} />
        </SkeletonItem>
      ))}
    </>
  );
};

export default SkeletonPlace;
