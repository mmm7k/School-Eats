// import React, { useEffect, useState } from 'react';
// import { DocumentData, collection, getDocs, query } from 'firebase/firestore';
// import { db } from '../../pages/_app';

// interface Post extends DocumentData {
//   id: string;
//   rate?: number; // 'rate' 필드가 있다고 가정
//   commentscount?: number;
// }

// export const useGetPosts = (menu: string, ord: string) => {
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [loading, setLoading] = useState(false);

//   const getAllPosts = async () => {
//     setLoading(true);
//     try {
//       const q = query(collection(db, menu));
//       const snapshot = await getDocs(q);
//       const postsArray = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

//       postsArray.sort((a, b) => {
//         //@ts-ignore
//         return (b[ord] || 0) - (a[ord] || 0);
//       });
//       setPosts(postsArray);
//     } catch (error) {
//       console.error('게시물을 불러오는 중 오류 발생: ', error);
//     } finally {
//       setLoading(false);
//     }
//   };
//   useEffect(() => {
//     getAllPosts();
//   }, [ord]);

//   return { posts, loading };
// };
