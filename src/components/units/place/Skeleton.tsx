import styled from '@emotion/styled';
import { Skeleton } from 'antd';
import React from 'react';

const SkeletonItem = styled.div`
  flex: 1 1 49%; // flex-basis를 49%로 설정하여 한 열에 두 개씩 나오도록 합니다.
  max-width: 49%; // 최대 너비도 49%로 설정합니다.
  border-radius: 10px;
  margin-top: 4%;
  overflow: hidden;
`;

const RectangleSkeleton = styled.div`
  width: 230px;
  height: 240px;
  background-color: #ececec;
  border-radius: 10px;
`;

export default function SkeletonPlace(): JSX.Element {
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
}
