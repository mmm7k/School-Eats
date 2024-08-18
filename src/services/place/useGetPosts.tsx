import { useQuery } from 'react-query';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../../pages/_app';

interface Post {
  id: string;
  rate?: number;
  commentscount?: number;
}

type OrdKey = 'rate' | 'commentscount';

// 게시물을 불러오는 함수
export const fetchPosts = async (ord: OrdKey): Promise<Post[]> => {
  const q = query(collection(db, 'all'));
  const snapshot = await getDocs(q);
  const postsArray = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id } as Post));

  // 정렬
  postsArray.sort((a, b) => (b[ord] || 0) - (a[ord] || 0));

  return postsArray;
};

// export const useGetPosts = (ord: OrdKey) => {
//   const {
//     data: posts,
//     isLoading: loading,
//     error,
//   } = useQuery(['posts', 'all', ord], () => fetchPosts(ord), {
//     keepPreviousData: true,
//   });

//   return { posts: posts || [], loading, error };
// };
