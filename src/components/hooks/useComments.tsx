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
  where,
} from 'firebase/firestore';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { authInstance, db } from '../../../pages/_app';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isLoggedIn, userEmail } from '../../commons/globalstate/globalstate';
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
  const email = useRecoilValue(userEmail);
  const getComments = async () => {
    let q;

    //@ts-ignore
    q = query(collection(db, 'comment'), where(postId, '==', postId));
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

  const addComment = async () => {
    if (login) {
      const comments = collection(db, 'comment');
      await addDoc(comments, {
        postId,
        text: newComment,
        email,
        rating: newRating,
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

  return {
    comments,
    newComment,
    setNewComment,
    addComment,
    deleteComment,
    deletemodal,
  };
};
