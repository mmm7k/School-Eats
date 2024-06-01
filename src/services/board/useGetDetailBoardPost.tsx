import { doc, getDoc } from 'firebase/firestore';

import { useQuery } from 'react-query';
import { db } from '../../../pages/_app';

interface Post {
  timestamp: string;
  email: string;
  title: string;
  contents: string;
  img: any;
}
const formatDate = (date: Date) => {
  const year = date.getFullYear().toString().slice(-2); // 뒤의 두 자리 숫자만 추출
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 월 (0부터 시작하므로 1을 더함)
  const day = date.getDate().toString().padStart(2, '0'); // 일
  const hours = date.getHours().toString().padStart(2, '0'); // 시간
  const minutes = date.getMinutes().toString().padStart(2, '0'); // 분

  return `${year}/${month}/${day} ${hours}:${minutes}`;
};

export const fetchPost = async (postId: string): Promise<Post> => {
  const postRef = doc(db, 'board', postId);
  const postDoc = await getDoc(postRef);
  const postData = postDoc.data();
  const timestamp = postData?.timestamp ? postData.timestamp.toDate() : '';
  const formattedDate = formatDate(timestamp);
  return {
    ...postData,
    timestamp: formattedDate,
    email: postData?.email,
    title: postData?.title,
    contents: postData?.contents,
    img: postData?.img,
  };
};

export const useGetDetailBoardPost = (postId: string) => {
  return useQuery(['board', postId], () => fetchPost(postId), {
    enabled: !!postId,
  });
};
