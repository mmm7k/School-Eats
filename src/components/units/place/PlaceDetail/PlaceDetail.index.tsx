import Image from 'next/image';
import { useGetDetailPost } from '../../../hooks/useGetDetailPost';
import * as S from './PlaceDetail.styles';
import { useRouter } from 'next/router';
import { Rate } from 'antd';
import { useComments } from '../../../hooks/useComments';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { layoutEmail } from '../../../../commons/globalstate/globalstate';
import { DeleteIcon } from '../../board/detail/BoardDetail.style';

export default function PlaceDetail(): JSX.Element {
  const { post } = useGetDetailPost('all');

  const { averageRating, comments, newComment, setNewComment, addComment, deleteComment, newRating, setNewRating } =
    useComments();
  const router = useRouter();
  const data = JSON.stringify(router.query);
  const jsonObject = JSON.parse(data);
  const postId = jsonObject.placeid;

  const email = useRecoilValue(layoutEmail);

  const handleRatingChange = (value: number) => {
    setNewRating(value); // 사용자가 선택한 별점을 상태에 저장
  };

  return (
    <>
      <Image
        src={
          post?.img ||
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
        }
        alt={post?.id}
        width={500}
        height={500}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
      />

      <S.Wrapper>
        <S.TitleWrapper>
          <S.Title>{postId}</S.Title>
          <S.RateWrapper>
            {/* <S.RateStar allowHalf disabled value={averageRating} /> */}
            <S.RateStar allowHalf disabled value={averageRating.toFixed(1)} />
            <S.RateNum> {averageRating.toFixed(1)}</S.RateNum>
            {/* <S.RateNum> {post?.rate.toFixed(1)}</S.RateNum> */}
            <S.CommentsCount>{comments.length}개의 후기</S.CommentsCount>
          </S.RateWrapper>
        </S.TitleWrapper>
        <S.Divine />
        <S.InforWrapper>
          <S.InforTitle>상세정보</S.InforTitle>
          <S.Infor>
            <S.InforImg src="/inforloc.png" />
            <S.InforText>{post?.loc}</S.InforText>
          </S.Infor>
          <S.Infor>
            <S.InforImg src="/infortime.png" />
            <S.InforText>
              {post?.time}
              &nbsp; 브레이크 타임:{post?.breaktime}
            </S.InforText>
          </S.Infor>
          <S.Infor>
            <S.InforImg src="/inforcall.png" />
            <S.InforText>{post?.call}</S.InforText>
          </S.Infor>
          <S.Infor>
            <S.InforImg src="/inforhashtag.png" />
            <S.InforText> {post?.hashtag}</S.InforText>
          </S.Infor>
          <S.Infor>
            <S.InforImg src="/inforstatus.png" />
            <S.InforText>{post?.status}</S.InforText>
          </S.Infor>
        </S.InforWrapper>
        <S.Divine />
        <S.InforWrapper>
          <S.InforTitle>메뉴</S.InforTitle>

          {Array.isArray(post?.menu) &&
            post?.menu.map((m: string) => (
              <S.Infor key={m}>{m}</S.Infor> // 'key' 속성 추가
            ))}
        </S.InforWrapper>
        <S.Divine />
        <S.InforWrapper>
          <S.InforTitle>리뷰</S.InforTitle>

          <S.ReviewInput
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="여러분의 소중한 리뷰와 별점을 남겨주세요!"
          ></S.ReviewInput>
          <S.SubmitWrapper>
            <S.ReviewInputRate onChange={handleRatingChange} value={newRating} />
            <S.SubmitButton onClick={addComment}>등록</S.SubmitButton>
          </S.SubmitWrapper>
          {comments.map((comment) => (
            <S.ReviewWrapper key={comment.id}>
              <S.ReviewTitle>
                {comment.email}
                <S.ReviewRate allowHalf disabled value={comment.rating} />
                {comment.email === email && <S.deleteIcon onClick={() => deleteComment(comment.id)}></S.deleteIcon>}
              </S.ReviewTitle>

              <S.ReviewText>{comment.text}</S.ReviewText>
            </S.ReviewWrapper>
          ))}
        </S.InforWrapper>
      </S.Wrapper>
    </>
  );
}
