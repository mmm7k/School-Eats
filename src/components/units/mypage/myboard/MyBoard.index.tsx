import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import * as S from './MyBoard.styles';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import {
  DocumentData,
  QueryDocumentSnapshot,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from 'firebase/firestore';
import Image from 'next/image';
import { isLoggedIn, userEmail } from '../../../../commons/globalstate/globalstate';
import { db } from '../../../../../pages/_app';
import { LikeOutlined, StarOutlined } from '@ant-design/icons';
import { useBackToPage } from '../../../../hooks/useBackToPage';
import { useMoveToPage } from '../../../../hooks/useMoveToPage';
import { Modal } from 'antd';

interface Post extends DocumentData {
  id: string;
}

export default function MyBoard() {
  const email = useRecoilValue(userEmail);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
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

  const getNextPosts = async () => {
    if (loading) return;

    setLoading(true);

    try {
      let q;
      q = query(collection(db, 'board'), where('email', '==', email), orderBy('timestamp', 'desc'), limit(10));
      const snapshot = await getDocs(q);
      const postArr = snapshot.docs.map((doc) => {
        const data = doc.data();
        // Firestore 타임스탬프를 JavaScript Date 객체로 변환
        const timestamp = data.timestamp ? formatDate(data.timestamp.toDate()) : '';
        return { ...data, id: doc.id, timestamp };
      });
      setPosts(postArr);
    } catch (error) {
      console.error('게시물을 불러오는 중 오류 발생: ', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNextPosts(); // 초기 데이터 로딩
  }, []);

  return (
    <>
      <S.TitleWrapper>
        <S.IconWrapper>
          <S.BackButton onClick={onClickBackToPage} />
        </S.IconWrapper>
        <S.Title>내가 쓴 게시물</S.Title>
      </S.TitleWrapper>
      <S.Notice>내가 작성한 게시물을 확인해보세요!</S.Notice>
      <S.SubNotice>클릭시 해당 게시물로 이동합니다</S.SubNotice>
      <S.Wrapper>
        {loading ? (
          <S.StyledSkeleton active /> // 로딩 중 스켈레톤 표시
        ) : (
          posts.map((post: any) => (
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
