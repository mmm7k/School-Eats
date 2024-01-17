import {
  DocumentData,
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
import { db } from '../../../pages/_app';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isLoggedIn, userEmail } from '../../commons/globalstate/globalstate';
import { Modal } from 'antd';

interface Comment {
  id: string;
  text?: string;
  email?: string;
  timestamp?: string;
}

export const useBoardComments = () => {
  const router = useRouter();
  const data = JSON.stringify(router.query); // boardId를 추출
  const jsonObject = JSON.parse(data);
  const postId = jsonObject.boardid;
  const [comments, setComments] = useState<Comment[]>([]);
  const [login] = useRecoilState(isLoggedIn);
  const [newComment, setNewComment] = useState<string>('');

  const formatDate = (date: any) => {
    const year = date.getFullYear().toString().slice(-2); // 뒤의 두 자리 숫자만 추출
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 월 (0부터 시작하므로 1을 더함)
    const day = date.getDate().toString().padStart(2, '0'); // 일
    const hours = date.getHours().toString().padStart(2, '0'); // 시간
    const minutes = date.getMinutes().toString().padStart(2, '0'); // 분

    return `${year}/${month}/${day} ${hours}:${minutes}`;
  };

  const email = useRecoilValue(userEmail);
  const getComments = async () => {
    let q;
    q = query(collection(db, 'board', postId, 'comment'), orderBy('timestamp', 'desc'));
    const snapshot = await getDocs(q);
    const commentsArr = snapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => {
      const data = doc.data();
      // Firestore 타임스탬프를 Date 객체로 변환
      const date = data.timestamp ? data.timestamp.toDate() : new Date();
      // 포맷된 날짜 문자열로 변환
      const formattedDate = formatDate(date);
      return {
        ...data,
        id: doc.id,
        timestamp: formattedDate, // 포맷된 날짜 사용
      };
    });

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
      if (newComment.length === 0) {
        Modal.error({
          title: '댓글을 작성해주세요.',
        });
        return; // 함수 종료
      }
      if (newComment.length > 150) {
        Modal.error({
          title: '댓글은 150자 이내로 작성해주세요.',
        });
        return; // 함수 종료
      }
      //이전코드
      // const commentsRef = collection(db, 'comment');
      const commentsRef = collection(db, 'board', postId, 'comment');
      await addDoc(commentsRef, {
        // placeId: postId,
        text: newComment,
        email,
        timestamp: new Date(),
      });
      success();
    } else {
      addDocError();
    }
  };

  const deleteComment = async (commentId: any) => {
    //이전코드
    // const comments: any = doc(db, 'comment', commentId);

    const comments = doc(db, 'board', postId, 'comment', commentId);
    await deleteDoc(comments);
    deletemodal();
  };

  // 별점 평균을 계산하고 해당 포스트에 별점을 반영

  let count: number;
  const updateCount = async () => {
    const board = doc(db, 'board', postId);
    await updateDoc(board, {
      commentscount: count,
    });
  };

  useEffect(() => {
    if (comments.length > 0) {
      count = comments.length;
      updateCount();
    }
  }, [comments]); // comments 배열이 변경될 때마다 실행

  return {
    comments,
    newComment,
    setNewComment,
    addComment,
    deleteComment,
    deletemodal,
  };
};
