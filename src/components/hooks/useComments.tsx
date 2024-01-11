import {
  DocumentData,
  Firestore,
  QueryDocumentSnapshot,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { authInstance, db } from '../../../pages/_app';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isLoggedIn, layoutEmail, userEmail } from '../../commons/globalstate/globalstate';
import { Modal } from 'antd';

interface Comment {
  id: string;
  text?: string;
  email?: string;
  rating?: number;
}

export const useComments = () => {
  const router = useRouter();
  const data = JSON.stringify(router.query); // boardId를 추출
  const jsonObject = JSON.parse(data);
  const postId = jsonObject.placeid;
  const [comments, setComments] = useState<Comment[]>([]);
  const [login] = useRecoilState(isLoggedIn);
  const [newComment, setNewComment] = useState<string>('');
  const { confirm } = Modal;
  const [commentusermatch, setCommentUserMatch] = useState(false);
  const [newRating, setNewRating] = useState<number>(0);

  // const user = authInstance.currentUser;
  // const email = user?.email;
  const email = useRecoilValue(layoutEmail);
  const getComments = async () => {
    let q;

    //@ts-ignore
    q = query(collection(db, 'comment'), orderBy('timestamp', 'desc'), where('placeId', '==', postId));
    const snapshot = await getDocs(q);
    const commentsArr = snapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => ({
      ...doc.data(),
      id: doc.id,
    }));

    setComments(commentsArr);
  };

  const success = () => {
    Modal.success({
      content: '댓글 등록에 성공하였습니다!',
      onOk: () => {
        window.location.reload();
      },
    });
  };

  const deletemodal = () => {
    Modal.success({
      content: '댓글 삭제에 성공하였습니다!',
      onOk: () => {
        window.location.reload();
      },
    });
  };

  const addDocError = () => {
    Modal.error({
      title: '로그인이 필요합니다!',
    });
  };
  useEffect(() => {
    if (postId) {
      getComments();
    }
  }, [postId]);

  // const addComment = async () => {
  //   if (login) {
  //     const comments = collection(db, 'comment');
  //     await addDoc(comments, {
  //       placeId: postId,
  //       text: newComment,
  //       email,
  //       rating: newRating,
  //     });
  //     success();
  //   } else {
  //     addDocError();
  //   }
  // };

  const addComment = async () => {
    if (login) {
      if (newRating === 0) {
        Modal.error({
          title: '별점은 필수항목입니다.',
        });
        return; // 함수 종료
      }
      const commentsRef = collection(db, 'comment');
      await addDoc(commentsRef, {
        placeId: postId,
        text: newComment,
        email,
        rating: newRating,
        timestamp: new Date(),
      });
      success();
    } else {
      addDocError();
    }
  };

  const deleteComment = async (commentId: any) => {
    const comments: any = doc(db, 'comment', commentId);
    await deleteDoc(comments);
    deletemodal();
  };

  // 별점 평균을 계산하고 해당 포스트에 별점을 반영

  const [averageRating, setAverageRating]: any = useState(0);
  // const [commentscount, setCommentsCount] = useState(0);

  let avg: number;
  let count: number;
  const updateRate = async () => {
    const board = doc(db, 'all', postId);
    await updateDoc(board, {
      // rate: averageRating,
      rate: avg,
      // commentscount: commentscount,
      commentscount: count,
    });
  };

  useEffect(() => {
    if (comments.length > 0) {
      const totalRating = comments.reduce((acc, comment) => acc + (comment.rating || 0), 0);
      // setAverageRating(totalRating / comments.length);
      avg = totalRating / comments.length;
      setAverageRating(avg);
      // setCommentsCount(comments.length);
      count = comments.length;
      updateRate();
    }
  }, [comments]); // comments 배열이 변경될 때마다 실행

  return {
    comments,
    newComment,
    newRating,
    setNewRating,

    setNewComment,
    addComment,
    deleteComment,
    deletemodal,
    //
    // commentscount,
    averageRating,
  };
};
