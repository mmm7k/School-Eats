import { useQuery } from 'react-query';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../pages/_app';

interface Post {
  id: string;
  rate?: number;
  commentscount?: number;
}

type OrdKey = 'rate' | 'commentscount';

// 게시물을 불러오는 함수
const fetchPosts = async (menu: string, category: string, ord: OrdKey): Promise<Post[]> => {
  const q = query(collection(db, menu), where('category', '==', category));
  const snapshot = await getDocs(q);
  const postsArray = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id } as Post));

  // 정렬
  postsArray.sort((a, b) => (b[ord] || 0) - (a[ord] || 0));

  return postsArray;
};

export const useGetCategoryPosts = (menu: string, category: string, ord: OrdKey) => {
  // useQuery를 사용하여 게시물 데이터를 불러옵니다.
  const {
    data: posts,
    isLoading: loading,
    error,
  } = useQuery(
    ['posts', menu, category, ord], // 쿼리 키: menu와 ord에 따라 캐시를 구분합니다.
    () => fetchPosts(menu, category, ord), // 데이터 패칭 함수
    {
      keepPreviousData: true, // 정렬 기준(ord)이 변경될 때 이전 데이터를 유지합니다.
    }
  );

  // posts가 undefined일 수 있으므로, 반환값에서는 posts || []와 같은 방식으로 처리할 수 있습니다.
  return { posts: posts || [], loading, error };
};
