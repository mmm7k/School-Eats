import { useQuery } from 'react-query';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../../../pages/_app';

const formatDate = (date: Date) => {
  const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${year}/${month}/${day} ${hours}:${minutes}`;
};

export const fetchPosts = async () => {
  const q = query(collection(db, 'board'), orderBy('timestamp', 'desc'));
  const snapshot = await getDocs(q);
  const posts = snapshot.docs.map((doc) => {
    const data = doc.data();
    const timestamp = data.timestamp.toDate();
    const formattedTimestamp = formatDate(timestamp);
    return {
      ...data,
      id: doc.id,
      timestamp: formattedTimestamp,
    };
  });

  return posts;
};

export const useGetBoardPosts = () => {
  const { data, isLoading, error } = useQuery('boardPosts', fetchPosts);

  return { posts: data ?? [], isLoading, error };
};
