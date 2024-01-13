import Image from 'next/image';
import { useGetDetailPost } from '../../../hooks/useGetDetailPost';
import * as S from './PlaceDetail.styles';
import { useRouter } from 'next/router';
import { Rate } from 'antd';
import { useComments } from '../../../hooks/useComments';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { layoutEmail, userEmail } from '../../../../commons/globalstate/globalstate';
import { useBookmark } from '../../../hooks/useBookmark';

export default function PlaceDetail(): JSX.Element {
  const { post } = useGetDetailPost('all');

  const { averageRating, comments, newComment, setNewComment, addComment, deleteComment, newRating, setNewRating } =
    useComments();
  const router = useRouter();
  const data = JSON.stringify(router.query);
  const jsonObject = JSON.parse(data);
  const postId = jsonObject.placeid;

  const email = useRecoilValue(userEmail);

  const handleRatingChange = (value: number) => {
    setNewRating(value); // 사용자가 선택한 별점을 상태에 저장
  };

  const { addBookmark, deleteBookmark, getBookmark, bookmark } = useBookmark();
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    (async () => {
      if (postId) {
        await getBookmark();
        setIsBookmarked(bookmark.some((b) => b.email === email));
      }
    })();
  }, [postId, email, bookmark]);

  const handleBookmark = async () => {
    if (isBookmarked) {
      // 이미 북마크한 경우, 북마크 삭제
      const bookmarkId = bookmark.find((b) => b.email === email)?.id;
      if (bookmarkId) await deleteBookmark(bookmarkId);
    } else {
      // 북마크하지 않은 경우, 북마크 추가
      await addBookmark();
    }
    await getBookmark(); // 북마크 상태 업데이트
    setIsBookmarked(!isBookmarked); // 상태 토글
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
          <S.BookmarkWrapper>
            <S.Title>{postId}</S.Title>
            <div onClick={handleBookmark}>{isBookmarked ? <S.ColorBookmarkIcon /> : <S.BookmarkIcon />}</div>
          </S.BookmarkWrapper>

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
                {comment.email?.split('@')[0]}
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
