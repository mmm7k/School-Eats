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
import { db } from '../../pages/_app';

interface SearchResult extends DocumentData {
  id: string;
  title?: string;
}

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
