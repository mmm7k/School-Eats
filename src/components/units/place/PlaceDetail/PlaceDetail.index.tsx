import Image from 'next/image';
import { useGetDetailPost } from '../../../hooks/useGetDetailPost';
import * as S from './PlaceDetail.styles';
import { useRouter } from 'next/router';
import { Rate } from 'antd';
import { useComments } from '../../../hooks/useComments';
import { useEffect, useState } from 'react';

export default function PlaceDetail(): JSX.Element {
  const { post } = useGetDetailPost('all');

  const { comments, newComment, setNewComment, addComment, deleteComment } = useComments();
  const router = useRouter();
  const data = JSON.stringify(router.query);
  const jsonObject = JSON.parse(data);
  const postId = jsonObject.placeid;

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
            <S.RateStar allowHalf disabled value={post?.rate} />
            {/* <S.RateNum> {averageRating.toFixed(1)}</S.RateNum> */}
            <S.RateNum> {post?.rate.toFixed(1)}</S.RateNum>
            <S.CommentsCount>{post?.commentscount}개의 후기</S.CommentsCount>
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

        {/* 메뉴 리스트입니다
         {Array.isArray(post?.menu) &&
          post?.menu.map((m: string) => (
            <S.Infor key={m}>{m}</S.Infor> // 'key' 속성 추가
          ))} */}
        <S.Divine />

        {/* 댓글리스트입니다 
        {comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.text}</p>
            <Rate allowHalf disabled value={comment.rating} />
          </div>
        ))} */}
      </S.Wrapper>
    </>
  );
}
