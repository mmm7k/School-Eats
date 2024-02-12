// import { useState, useEffect } from 'react';
// import { collection, query, where, orderBy, getDocs, DocumentData } from 'firebase/firestore';
// import { db, firebaseapp } from '../../pages/_app';

// interface SearchResult extends DocumentData {
//   id: string;
//   title?: string;
// }

// export const useBoardSearch = (collectionName: string, searchTerm: string) => {
//   const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

//   const formatDate = (date: Date) => {
//     const year = date.getFullYear().toString().slice(-2); // 뒤의 두 자리 숫자만 추출
//     const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 월 (0부터 시작하므로 1을 더함)
//     const day = date.getDate().toString().padStart(2, '0'); // 일
//     const hours = date.getHours().toString().padStart(2, '0'); // 시간
//     const minutes = date.getMinutes().toString().padStart(2, '0'); // 분

//     return `${year}.${month}.${day} ${hours}:${minutes}`;
//   };

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
//         const searchData: SearchResult[] = snapshot.docs.map((doc) => {
//           const data = doc.data();
//           const timestamp = data.timestamp ? formatDate(data.timestamp.toDate()) : '';

//           return { ...data, id: doc.id, timestamp };
//         });
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

import { useState, useEffect } from 'react';
import { collection, getDocs, DocumentData } from 'firebase/firestore';
import { db } from '../../pages/_app'; // DB 설정을 가져옴

interface SearchResult extends DocumentData {
  id: string;
  title?: string;
  timestamp?: string; // 타임스탬프를 포함할 필드 추가
}

export const useBoardSearch = (collectionName: string, searchTerm: string) => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  // Date 객체를 받아서 문자열로 변환하는 함수
  const formatDate = (date: Date) => {
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allDocsSnapshot = await getDocs(collection(db, collectionName));

        const allSearchData = allDocsSnapshot.docs
          .map((doc) => ({
            ...doc.data(),
            id: doc.id,
            // timestamp 필드가 있을 경우 formatDate 함수를 사용해 포맷팅합니다.
            timestamp: doc.data().timestamp ? formatDate(doc.data().timestamp.toDate()) : undefined,
          }))
          // 'title'에 검색어가 포함된 문서만 필터링합니다.
          //@ts-ignore
          .filter((doc) => doc.title && doc.title.toLowerCase().includes(searchTerm.toLowerCase()));

        setSearchResults(allSearchData);
      } catch (error) {
        console.error('검색 중 오류 발생:', error);
      }
    };

    if (searchTerm) {
      fetchData();
    } else {
      setSearchResults([]);
    }
  }, [collectionName, searchTerm]); // 의존성 배열에 collectionName과 searchTerm을 포함시킵니다.

  return searchResults;
};
