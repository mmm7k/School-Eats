import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { db } from '../../pages/_app';
import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
import { Modal } from 'antd';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isLoggedIn, userEmail } from '../commons/globalstate/globalstate';
interface Scrap {
  id: string;
  text?: string;
  email?: string;
}

export const useScrap = () => {
  const [login] = useRecoilState(isLoggedIn);
  const email = useRecoilValue(userEmail);
  const router = useRouter();
  const data = JSON.stringify(router.query); // boardId를 추출
  const jsonObject = JSON.parse(data);
  const postId = jsonObject.boardid;
  const [scrap, setScrap] = useState<Scrap[]>([]);

  const getScrap = async () => {
    let q;

    q = query(collection(db, 'boardscrap'), where('boardId', '==', postId));

    const snapshot = await getDocs(q);
    const scrapArr = snapshot.docs.map((doc: any) => ({
      ...doc.data(),
      id: doc.id,
    }));

    setScrap(scrapArr);
  };

  const addScrap = async () => {
    if (!login) {
      Modal.error({
        title: '로그인이 필요합니다!',
      });
      return;
    }

    // '좋아요' 객체 생성 및 UI 업데이트
    const newScrapObj = {
      email,
      // 임시 ID 할당
      id: Date.now().toString(),
      boardId: postId,
    };
    //@ts-ignore
    setScrap([...scrap, newScrapObj]);
    setIsScraped(true);

    // 데이터베이스에 '좋아요' 추가
    try {
      // const likeRef = collection(db, 'board', postId, 'like');
      const scrapRef = collection(db, 'boardscrap');

      // await addDoc(likeRef, { email });
      await addDoc(scrapRef, { email, boardId: postId });

      getScrap(); // 최신 '좋아요' 상태를 다시 불러옴
    } catch (error) {
      console.error('Error adding scrap:', error);
      setScrap(scrap.filter((l) => l.id !== newScrapObj.id)); // 실패 시 UI에서 '좋아요' 제거
      setIsScraped(false);
    }
  };

  const deleteScrap = async (scrapId: string) => {
    // UI에서 '좋아요' 제거
    setScrap(scrap.filter((l) => l.id !== scrapId));
    setIsScraped(false);

    // 데이터베이스에서 '좋아요' 삭제
    try {
      // const deletelike = doc(db, 'board', postId, 'like', likeId);
      const deletescrap = doc(db, 'boardscrap', scrapId);

      await deleteDoc(deletescrap);
      getScrap(); // 최신 '좋아요' 상태를 다시 불러옴
    } catch (error) {
      console.error('Error deleting scrap:', error);
      // 실패 시 오류 메시지 표시
      Modal.error({
        title: '스크랩 삭제에 실패했습니다.',
      });
    }
  };

  const [isScraped, setIsScraped] = useState(false);

  const handleScrap = async () => {
    const currentscrap = scrap.find((b) => b.email === email);
    if (currentscrap) {
      await deleteScrap(currentscrap.id);
    } else {
      await addScrap();
    }
  };

  useEffect(() => {
    if (postId) {
      getScrap();
    }
  }, [postId]);

  useEffect(() => {
    setIsScraped(scrap.some((b) => b.email === email));
  }, [email, scrap]);

  return { addScrap, deleteScrap, getScrap, scrap, handleScrap, isScraped };
};
