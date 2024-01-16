import { useState, useEffect } from 'react';
import {
  getFirestore,
  collection,
  query,
  where,
  orderBy,
  startAt,
  endAt,
  getDocs,
  DocumentData,
} from 'firebase/firestore';
import { db, firebaseapp } from '../../../pages/_app';

interface SearchResult extends DocumentData {
  id: string;
  title?: string;
}

// export const useFirebaseSearch = (collectionName: string, searchTerm: string) => {
//   const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const q = query(
//           collection(db, collectionName), // 컬렉션 이름
//           orderBy('title'), // 원하는 정렬 방식
//           where('title', '>=', searchTerm), // 검색어와 일치하는 데이터 필터링
//           where('title', '<=', searchTerm + '\uf8ff') // 검색어와 일치하는 데이터 필터링
//         );

//         const snapshot = await getDocs(q);
//         // const searchData: any = snapshot.docs.map((doc) => doc.data());
//         const searchData: SearchResult[] = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
//         setSearchResults(searchData);
//       } catch (error) {
//         console.error('검색 중 오류 발생:', error);
//       }
//     };

//     if (searchTerm) {
//       fetchData();
//     } else {
//       // 검색어가 비어있을 때 초기화
//       setSearchResults([]);
//     }
//   }, [collectionName, searchTerm]);

//   return searchResults;
// };
export const usePlaceSearch = (collectionName: string, searchTerm: string) => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 모든 문서를 가져오기
        const allDocsSnapshot = await getDocs(collection(db, collectionName));

        const allSearchData = allDocsSnapshot.docs
          .map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
          // 'title' 또는 'menu'에 검색어가 포함된 문서만 필터링
          .filter((doc) => {
            //@ts-ignore
            const titleMatches = doc.title && doc.title.includes(searchTerm);
            //@ts-ignore
            const menuItems = doc.menu || [];
            //@ts-ignore
            const menuMatches = Array.isArray(menuItems) && menuItems.some((item) => item.includes(searchTerm));
            return titleMatches || menuMatches;
          });

        setSearchResults(allSearchData);
      } catch (error) {
        console.error('검색 중 오류 발생:', error);
      }
    };

    if (searchTerm) {
      fetchData();
    } else {
      // 검색어가 비어있을 때 초기화
      setSearchResults([]);
    }
  }, [collectionName, searchTerm]);

  return searchResults;
};
