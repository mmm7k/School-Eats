import { useEffect, useState } from 'react';
import { DocumentData, deleteDoc, doc, getDoc } from 'firebase/firestore';
import { db, storage } from '../../pages/_app';
import { useRouter } from 'next/router';
import { userEmail } from '../commons/globalstate/globalstate';
import { useRecoilValue } from 'recoil';
import { deleteObject, ref } from 'firebase/storage';

interface Post extends DocumentData {
  email?: string;
}

export const useGetDetailBoardPost = () => {
  const logEmail = useRecoilValue(userEmail);
  const [post, setPost] = useState<Post | null>(null);
  const [usermatch, setUserMatch] = useState(false);
  const router = useRouter();
  const data = JSON.stringify(router.query); // boardId를 추출
  const jsonObject = JSON.parse(data);
  const postId = jsonObject.boardid;

  const formatDate = (date: Date) => {
    const year = date.getFullYear().toString().slice(-2); // 뒤의 두 자리 숫자만 추출
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 월 (0부터 시작하므로 1을 더함)
    const day = date.getDate().toString().padStart(2, '0'); // 일
    const hours = date.getHours().toString().padStart(2, '0'); // 시간
    const minutes = date.getMinutes().toString().padStart(2, '0'); // 분

    return `${year}/${month}/${day} ${hours}:${minutes}`;
  };

  useEffect(() => {
    if (router.isReady) {
      const getPost = async () => {
        const postRef = doc(db, 'board', postId); // menu와 boardId를 사용하여 문서에 접근
        const postDoc = await getDoc(postRef);
        if (postDoc.exists()) {
          const postData = postDoc.data();
          // Firestore Timestamp를 Date 객체로 변환
          const timestamp = postData.timestamp ? postData.timestamp.toDate() : '';
          // 포맷된 날짜 문자열로 변경
          const formattedDate = formatDate(timestamp);
          // 포맷된 날짜를 포함하여 상태 업데이트
          setPost({ ...postData, timestamp: formattedDate });
          if (logEmail === postDoc.data().email) {
            setUserMatch(true);
          }
        } else {
          alert('서버 오류입니다. 다시 페이지에 접속 해주세요.');
          router.push('/boards');
          setPost(null); // 게시물이 없을 경우 null로 설정하거나 다른 처리를 수행합니다.
        }
      };
      getPost();
    }
  }, [router.isReady]);

  const onClickDeletePost = async () => {
    try {
      const postRef = doc(db, 'board', postId);
      const postData = (await getDoc(postRef)).data();

      await deleteDoc(postRef);

      // 게시물에 이미지가 있는 경우, Firebase Storage에서 이미지 삭제
      if (postData?.img) {
        const imageRef = ref(storage, postData.img);
        await deleteObject(imageRef);
      }

      router.push('/boards');
    } catch (error) {
      console.error('게시물 삭제 중 오류 발생:', error);
    }
  };

  return { post, usermatch, onClickDeletePost };
};
