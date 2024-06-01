import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import * as S from './Bookmark.styles';
import { useRecoilValue } from 'recoil';
import { collection, getDocs, query, where } from 'firebase/firestore';
import Image from 'next/image';
import { isLoggedIn, userEmail } from '../../../../commons/globalstate/globalstate';
import { db } from '../../../../../pages/_app';
import { useBackToPage } from '../../../../hooks/useBackToPage';
import { Modal } from 'antd';
import { useMoveToPage } from '../../../../hooks/useMoveToPage';

interface Bookmark {
  id: string;
  placeId?: string;
  email?: string;
}

interface Place {
  id: string;
  title: string;
  rate?: number;
  time?: string;
  breaktime?: string;
  titlemenu?: string;
  commentscount?: number;
}

export default function Bookmark() {
  const email = useRecoilValue(userEmail);
  const [bookmark, setBookmark] = useState<Bookmark[]>([]);
  const [bookmarkplace, setBoomarkplace] = useState<Place[]>([]);
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

  const getBookmark = async () => {
    setLoading(true);
    const q = query(collection(db, 'bookmark'), where('email', '==', email));
    const snapshot = await getDocs(q);
    const bookmarkArr = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setBookmark(bookmarkArr);
    setLoading(false);
  };

  const getBookmarkPlace = async () => {
    const bookmarkArr: any = [];
    for (const bm of bookmark) {
      const q = query(collection(db, 'all'), where('title', '==', bm.placeId));
      const snapshot = await getDocs(q);
      snapshot.forEach((doc) => {
        bookmarkArr.push({ id: doc.id, ...doc.data() });
      });
    }
    setBoomarkplace(bookmarkArr);
  };

  useEffect(() => {
    getBookmark();
  }, [email]);

  useEffect(() => {
    if (bookmark.length > 0) {
      getBookmarkPlace();
    }
  }, [bookmark]);

  return (
    <>
      <S.TitleWrapper>
        <S.IconWrapper>
          <S.BackButton onClick={onClickBackToPage} />
        </S.IconWrapper>
        <S.Title>찜한 맛집</S.Title>
      </S.TitleWrapper>
      <S.Notice>찜한 맛집을 확인해보세요!</S.Notice>
      <S.SubNotice>클릭시 해당 식당의 상세페이지로 이동합니다</S.SubNotice>
      <S.Wrapper>
        {loading ? (
          <S.StyledSkeleton active /> // 로딩 중 스켈레톤 표시
        ) : (
          bookmarkplace.map((place) => (
            <>
              <Link href={`/place/${place.id}`}>
                <S.BookmarkWrapper key={place.id}>
                  <S.Bookmarktitle>
                    {place.title}&nbsp;&nbsp;&nbsp;
                    <S.RateWrapper>
                      <Image
                        src={
                          '/rate.png' ||
                          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
                        }
                        alt={place.title}
                        width={11}
                        height={11}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                      />
                      {place.rate?.toFixed(1)}({place.commentscount})
                    </S.RateWrapper>
                  </S.Bookmarktitle>

                  <S.BookmarkText>
                    {place.time}&nbsp;브레이크 타임:{place.breaktime}
                    <br />
                    {place.titlemenu}
                  </S.BookmarkText>
                </S.BookmarkWrapper>
              </Link>
            </>
          ))
        )}
      </S.Wrapper>
    </>
  );
}
