import { useInfiniteQuery } from 'react-query';
import { collection, query, orderBy, limit, startAfter, getDocs } from 'firebase/firestore';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import { db } from '../../../pages/_app';

const fetchPosts = async ({ pageParam = null }) => {
  let q;
  if (!pageParam) {
    q = query(collection(db, 'board'), orderBy('timestamp', 'desc'), limit(10));
  } else {
    q = query(collection(db, 'board'), orderBy('timestamp', 'desc'), limit(10), startAfter(pageParam));
  }
  const snapshot = await getDocs(q);
  const lastVisible = snapshot.docs.length > 0 ? snapshot.docs[snapshot.docs.length - 1] : null;
  const posts = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
    timestamp: doc.data().timestamp.toDate().toISOString(),
  }));

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

  // posts 배열을 단일 배열로 평탄화
  const posts = data?.pages.flatMap((page) => page.posts) ?? [];

  return { posts, hasNextPage, isFetchingNextPage };
};
