import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import * as S from '../../../src/styles/mypage/Like.styles';
import { useRecoilValue } from 'recoil';
import {
  DocumentData,
  QueryDocumentSnapshot,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import Image from 'next/image';
import { isLoggedIn, userEmail } from '../../../src/commons/globalstate/globalstate';
import { db } from '../../_app';
import { LikeOutlined, StarOutlined } from '@ant-design/icons';
import { useBackToPage } from '../../../src/hooks/useBackToPage';
import { Modal } from 'antd';
import { useMoveToPage } from '../../../src/hooks/useMoveToPage';
interface Like {
  id: string;
  boardId?: string;
  rating?: number;
  text?: string;
  timestamp?: string;
}

export default function Like() {
  const email = useRecoilValue(userEmail);
  const [like, setLike] = useState<Like[]>([]);
  const [likeBoard, setLikeBoard] = useState([]);
  const [loading, setLoading] = useState(true);
  const { onClickBackToPage } = useBackToPage();
  const { onClickMoveToPage } = useMoveToPage();
  const login = useRecoilValue(isLoggedIn);
  const alert = () => {
    Modal.error({
      title: '로그인이 필요합니다!',
    });
  };

  useEffect(() => {
    if (login === null) {
      alert();
      onClickMoveToPage('/login')();
    }
  }, []);

  const formatDate = (date: any) => {
    const year = date.getFullYear().toString().slice(-2); // 뒤의 두 자리 숫자만 추출
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 월 (0부터 시작하므로 1을 더함)
    const day = date.getDate().toString().padStart(2, '0'); // 일
    const hours = date.getHours().toString().padStart(2, '0'); // 시간
    const minutes = date.getMinutes().toString().padStart(2, '0'); // 분

    return `${year}/${month}/${day} ${hours}:${minutes}`;
  };

  const getLike = async () => {
    setLoading(true);
    const q = query(collection(db, 'boardlike'), where('email', '==', email));
    const snapshot = await getDocs(q);
    const likeArr = snapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => {
      const data = doc.data();
      // Firestore 타임스탬프를 Date 객체로 변환
      const date = data.timestamp ? formatDate(data.timestamp.toDate()) : '';
      // 포맷된 날짜 문자열로 변환
      // const formattedDate = formatDate(date);
      return {
        ...data,
        id: doc.id,
        timestamp: date, // 포맷된 날짜 사용
      };
    });

    setLike(likeArr);
    setLoading(false);
  };

  const getLikeBoard = async () => {
    const likeArr = [];
    for (const l of like) {
      // 문서의 ID로 직접 접근합니다.
      //@ts-ignore
      const docRef = doc(db, 'board', l.boardId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        // Firestore 타임스탬프를 Date 객체로 변환
        const date = data.timestamp ? formatDate(data.timestamp.toDate()) : '';
        likeArr.push({
          ...data,
          id: docSnap.id,
          timestamp: date, // 포맷된 날짜 문자열 사용
        });
      }
    }
    //@ts-ignore

    setLikeBoard(likeArr);
  };

  useEffect(() => {
    getLike();
  }, [email]);

  useEffect(() => {
    if (like.length > 0) {
      getLikeBoard();
    }
  }, [like]);

  return (
    <>
      <S.TitleWrapper>
        <S.IconWrapper>
          <S.BackButton onClick={onClickBackToPage} />
        </S.IconWrapper>
        <S.Title>좋아요</S.Title>
      </S.TitleWrapper>
      <S.Notice>내가 좋아요한 게시물을 확인해보세요!</S.Notice>
      <S.SubNotice>클릭시 해당 게시물로 이동합니다</S.SubNotice>
      <S.Wrapper>
        {loading ? (
          <S.StyledSkeleton active /> // 로딩 중 스켈레톤 표시
        ) : (
          likeBoard.map((post: any) => (
            <Link href={`/boards/${post.id}`}>
              <S.ContentsWrapper key={post.id} id={post.id}>
                {post.img && (
                  <S.Image>
                    <Image
                      src={
                        post.img ||
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
                      }
                      alt={post.title}
                      width={50}
                      height={50}
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                    />
                  </S.Image>
                )}
                <S.ContentsTitle>{post.title}</S.ContentsTitle>
                <S.Contents>{post.contents}</S.Contents>
                <S.ContentsInfor>
                  <span style={{ marginRight: '0.4%' }}>
                    <LikeOutlined rev={undefined} />
                  </span>
                  <span style={{ marginRight: '1%' }}>{post.likecount}</span>
                  <span style={{ marginRight: '0.4%' }}>
                    <StarOutlined rev={undefined} />
                  </span>
                  <span style={{ marginRight: '1.5%' }}>{post.commentscount}</span>
                  <span style={{ marginRight: '1.5%' }}>{post.email?.split('@')[0]}</span>
                  <span>{post.timestamp}</span>
                </S.ContentsInfor>
              </S.ContentsWrapper>
            </Link>
          ))
        )}
      </S.Wrapper>
    </>
  );
}
