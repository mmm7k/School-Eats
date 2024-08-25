import styled from '@emotion/styled';
import { Skeleton } from 'antd';
import React from 'react';

const SkeletonItem = styled.div`
  flex: 1 1 49%;
  max-width: 49%;
  border-radius: 10px;
  margin-top: 4%;
  overflow: hidden;
`;

const RectangleSkeleton = styled.div`
  width: 14.375rem;
  height: 15rem;
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
