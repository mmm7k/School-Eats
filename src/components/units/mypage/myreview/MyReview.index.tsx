import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import * as S from './MyReview.styles';
import { useRecoilValue } from 'recoil';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import Image from 'next/image';
import { isLoggedIn, userEmail } from '../../../../commons/globalstate/globalstate';
import { db } from '../../../../../pages/_app';
import { useBackToPage } from '../../../../hooks/useBackToPage';
import { useMoveToPage } from '../../../../hooks/useMoveToPage';
import { Modal } from 'antd';

interface Review {
  id: string;
  placeId?: string;
  rating?: number;
  text?: string;
  timestamp?: string;
}

export default function MyReview() {
  const email = useRecoilValue(userEmail);
  const [reviews, setReviews] = useState<Review[]>([]);
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

  const getReview = async () => {
    setLoading(true);
    const q = query(collection(db, 'comment'), orderBy('timestamp', 'desc'), where('email', '==', email));
    const snapshot = await getDocs(q);
    const reviewArr = snapshot.docs.map((doc: any) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setReviews(reviewArr);
    setLoading(false);
  };

  useEffect(() => {
    getReview();
  }, [email]);

  return (
    <>
      <S.TitleWrapper>
        <S.IconWrapper>
          <S.BackButton onClick={onClickBackToPage} />
        </S.IconWrapper>
        <S.Title>나의 리뷰</S.Title>
      </S.TitleWrapper>
      <S.Notice>내가 남긴 리뷰를 확인해보세요!</S.Notice>
      <S.SubNotice>클릭시 해당 식당의 상세페이지로 이동합니다</S.SubNotice>
      <S.Wrapper>
        {loading ? (
          <S.StyledSkeleton active /> // 로딩 중 스켈레톤 표시
        ) : (
          reviews.map((review) => (
            <>
              <Link href={`/place/${review.placeId}`}>
                <S.BookmarkWrapper key={review.id}>
                  <S.Bookmarktitle>
                    {review.placeId}&nbsp;&nbsp;&nbsp;
                    <S.RateWrapper>
                      <Image
                        src={
                          '/rate.png' ||
                          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
                        }
                        alt={`Rating: ${review.rating ? review.rating.toFixed(1) : 'Not rated'}`}
                        width={11}
                        height={11}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                      />
                      {review.rating?.toFixed(1)}
                    </S.RateWrapper>
                  </S.Bookmarktitle>
                  {review.text}
                  <S.BookmarkText></S.BookmarkText>
                </S.BookmarkWrapper>
              </Link>
            </>
          ))
        )}
      </S.Wrapper>
    </>
  );
}
