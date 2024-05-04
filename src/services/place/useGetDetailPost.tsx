import { doc, getDoc } from 'firebase/firestore';
import { useQuery } from 'react-query';
import { db } from '../../../pages/_app';

interface Post {
  img: string;
  loc: string;
  time: string;
  breaktime: string;
  call: string;
  hashtag?: string;
  status?: string;
  menu: string;
  id: string;
}

const fetchPost = async (postId: string): Promise<Post> => {
  const postRef = doc(db, 'all', postId);
  const postDoc = await getDoc(postRef);
  const postData = postDoc.data();

  return {
    ...postData,
    id: postData?.id,
    img: postData?.img,
    loc: postData?.loc,
    time: postData?.time,
    breaktime: postData?.breaktime,
    call: postData?.call,
    hashtag: postData?.hashtag,
    status: postData?.status,
    menu: postData?.menu,
  };
};

export const useGetDetailPost = (postId: string) => {
  return useQuery(['place', postId], () => fetchPost(postId), {
    enabled: !!postId,
  });
};
