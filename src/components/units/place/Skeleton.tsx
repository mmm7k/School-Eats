import { Skeleton } from 'antd';
import React from 'react';

const SkeletonPlace = () => {
  return (
    <>
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} style={{ marginTop: 10, marginBottom: 24 }}>
          <Skeleton.Image style={{ width: 230, height: 240 }} />
          <Skeleton active style={{ marginTop: 3 }} paragraph={{ rows: 1 }} />
        </div>
      ))}
    </>
  );
};

export default SkeletonPlace;
