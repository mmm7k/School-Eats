import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  DocumentData,
  QueryDocumentSnapshot,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { Modal } from 'antd';
import { useRecoilState, useRecoilValue } from 'recoil';
import { db } from '../../../pages/_app';
import { isLoggedIn, userEmail } from '../../commons/globalstate/globalstate';

interface Bookmark {
  id: string;
  placeId?: string;
  email?: string;
}

export const useBookmark = () => {
  const [login] = useRecoilState(isLoggedIn);
  const email = useRecoilValue(userEmail);
  const router = useRouter();
  const data = JSON.stringify(router.query); // boardId를 추출
  const jsonObject = JSON.parse(data);
  const postId = jsonObject.placeid;
  const [bookmark, setBookmark] = useState<Bookmark[]>([]);

  const getBookmark = async () => {
    let q = query(collection(db, 'bookmark'), where('placeId', '==', postId));
    const snapshot = await getDocs(q);
    const bookmarkArr = snapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return bookmarkArr;
  };

  useEffect(() => {
    let isMounted = true; // 컴포넌트가 마운트된 상태를 추적하는 변수

    const fetchBookmarks = async () => {
      if (postId && isMounted) {
        const fetchedBookmarks: Bookmark[] = await getBookmark(); // 북마크를 가져오는 함수
        // isMounted가 true인 경우에만 상태 업데이트
        setBookmark(fetchedBookmarks);
        setIsBookmarked(fetchedBookmarks.some((b) => b.email === email));
      }
    };

    fetchBookmarks();

    // 컴포넌트 언마운트 시 isMounted를 false로 설정
    return () => {
      isMounted = false;
    };
  }, [postId]);

  const [isProcessing, setIsProcessing] = useState(false);

  const handleBookmark = async () => {
    if (isProcessing) {
      return;
    }
    setIsProcessing(true);

    if (isBookmarked) {
      // 북마크 존재 시 삭제
      const bookmarkId = bookmark.find((b) => b.email === email)?.id;
      if (bookmarkId) await deleteBookmark(bookmarkId);
    } else {
      // 북마크 없음 시 추가
      await addBookmark();
    }

    // 북마크 상태 업데이트
    const fetchedBookmarks: Bookmark[] = await getBookmark();
    setBookmark(fetchedBookmarks);
    setIsBookmarked(fetchedBookmarks.some((b) => b.email === email));
    setIsProcessing(false);
  };

  const addBookmark = async () => {
    if (login) {
      const bookmarkRef = collection(db, 'bookmark');
      await addDoc(bookmarkRef, {
        placeId: postId,
        email,
      });
    } else {
      Modal.error({
        title: '로그인이 필요합니다!',
      });
    }
  };

  const deleteBookmark = async (bookmarkId: string) => {
    const comments = doc(db, 'bookmark', bookmarkId);

    await deleteDoc(comments);
  };

  const [isBookmarked, setIsBookmarked] = useState(false);

  return { addBookmark, deleteBookmark, getBookmark, bookmark, handleBookmark, isBookmarked };
};
