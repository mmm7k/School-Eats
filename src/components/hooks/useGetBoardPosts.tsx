import React, { useEffect, useState } from 'react';
import { DocumentData, collection, getDocs, getFirestore, limit, orderBy, query, startAfter } from 'firebase/firestore';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import { db, firebaseapp } from '../../../pages/_app';

interface Post extends DocumentData {
  id: string;
}

export const useGetBoardPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [lastVisible, setLastVisible] = useState<any>(null);
  const [hasMore, setHasMore] = useState(true);

  const formatDate = (date: any) => {
    const year = date.getFullYear().toString().slice(-2); // 뒤의 두 자리 숫자만 추출
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 월 (0부터 시작하므로 1을 더함)
    const day = date.getDate().toString().padStart(2, '0'); // 일
    const hours = date.getHours().toString().padStart(2, '0'); // 시간
    const minutes = date.getMinutes().toString().padStart(2, '0'); // 분

    return `${year}/${month}/${day} ${hours}:${minutes}`;
  };

  const getNextPosts = async () => {
    if (loading || !hasMore) return;

    setLoading(true);

    try {
      let q;

      if (!lastVisible) {
        q = query(collection(db, 'board'), orderBy('timestamp', 'desc'), limit(10));
      } else {
        q = query(collection(db, 'board'), orderBy('timestamp', 'desc'), limit(10), startAfter(lastVisible));
      }

      const snapshot = await getDocs(q);

      //   const postArr = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const postArr = snapshot.docs.map((doc) => {
        const data = doc.data();
        // Firestore 타임스탬프를 JavaScript Date 객체로 변환
        const timestamp = data.timestamp ? formatDate(data.timestamp.toDate()) : '';
        return { ...data, id: doc.id, timestamp };
      });
      if (postArr.length > 0) {
        setPosts((prevPosts) => [...prevPosts, ...postArr]);
        setLastVisible(snapshot.docs[snapshot.docs.length - 1]);
      } else {
        // 모든 게시물을 불러왔을 때 마지막 페이지를 표시하거나 스크롤 이벤트를 무시할 수 있습니다.
        setLastVisible(null);
        setHasMore(false); // 추가: 더 이상 게시물이 없음을 표시
      }
    } catch (error) {
      console.error('게시물을 불러오는 중 오류 발생: ', error);
    } finally {
      setLoading(false);
    }
  };

  // 스크롤 이벤트 핸들러를 등록
  useBottomScrollListener(getNextPosts, { triggerOnNoScroll: false }); // 추가

  useEffect(() => {
    getNextPosts(); // 초기 데이터 로딩
  }, []);

  return { posts, getNextPosts, hasMore, loading };
};
