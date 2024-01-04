import { useEffect, useState } from 'react';
import { DocumentData, collection, doc, getDoc, query, where } from 'firebase/firestore';
import { db } from '../../../pages/_app';
import { useRouter } from 'next/router';

interface Post extends DocumentData {
  email?: string;
}

export const useGetExerciseDetailPost = (menu: string) => {
  const [post, setPost] = useState<Post | null>(null);

  const router = useRouter();
  const data = JSON.stringify(router.query); // boardId를 추출
  const jsonObject = JSON.parse(data);
  const postId = jsonObject.postid;

  useEffect(() => {
    if (router.isReady) {
      const getPost = async () => {
        const postRef = doc(db, menu, postId); // menu와 boardId를 사용하여 문서에 접근
        const postDoc = await getDoc(postRef);

        if (postDoc.exists()) {
          setPost(postDoc.data());
        } else {
          setPost(null); // 게시물이 없을 경우 null로 설정하거나 다른 처리를 수행합니다.
        }
      };
      getPost();
    }
  }, [router.isReady]);

  return { post };
};
