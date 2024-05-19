import { useInfiniteQuery } from 'react-query';
import { collection, query, orderBy, limit, startAfter, getDocs } from 'firebase/firestore';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import { db } from '../../../pages/_app';

const formatDate = (date: Date) => {
  const year = date.getFullYear().toString().slice(-2); // 뒤의 두 자리 숫자만 추출
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 월 (0부터 시작하므로 1을 더함)
  const day = date.getDate().toString().padStart(2, '0'); // 일
  const hours = date.getHours().toString().padStart(2, '0'); // 시간
  const minutes = date.getMinutes().toString().padStart(2, '0'); // 분

  return `${year}/${month}/${day} ${hours}:${minutes}`;
};

const fetchPosts = async ({ pageParam = null }) => {
  let q;
  if (!pageParam) {
    q = query(collection(db, 'board'), orderBy('timestamp', 'desc'), limit(10));
  } else {
    q = query(collection(db, 'board'), orderBy('timestamp', 'desc'), limit(10), startAfter(pageParam));
  }
  const snapshot = await getDocs(q);
  const lastVisible = snapshot.docs.length > 0 ? snapshot.docs[snapshot.docs.length - 1] : null;
  const posts = snapshot.docs.map((doc) => {
    const data = doc.data();
    const timestamp = data.timestamp.toDate();
    const formattedTimestamp = formatDate(timestamp);
    return {
      ...data,
      id: doc.id,
      timestamp: formattedTimestamp,
    };
  });

  return { posts, lastVisible };
};

export const useGetBoardPosts = () => {
  const { data, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteQuery('boardPosts', fetchPosts, {
    getNextPageParam: (lastPage) => lastPage.lastVisible ?? undefined,
  });

  // 스크롤 이벤트 핸들러를 등록
  useBottomScrollListener(() => {
    if (hasNextPage) fetchNextPage();
  });

  const posts = data?.pages.flatMap((page) => page.posts) ?? [];

  return { posts, hasNextPage, isFetchingNextPage };
};
