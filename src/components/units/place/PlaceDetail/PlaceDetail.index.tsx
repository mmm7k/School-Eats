import Image from 'next/image';
import { useGetDetailPost } from '../../../hooks/useGetDetailPost';
import * as S from './PlaceDetail.styles';
import { useRouter } from 'next/router';
import { Rate } from 'antd';
import { useComments } from '../../../hooks/useComments';
import { useEffect, useState } from 'react';

export default function PlaceDetail(): JSX.Element {
  const { post } = useGetDetailPost('all');

  const { comments, newComment, setNewComment, addComment, deleteComment, deletemodal } = useComments();
  const [averageRating, setAverageRating] = useState(0);

  const router = useRouter();
  const data = JSON.stringify(router.query); // boardId를 추출
  const jsonObject = JSON.parse(data);
  const postId = jsonObject.placeid;

  useEffect(() => {
    if (comments.length > 0) {
      const totalRating = comments.reduce((acc, comment) => acc + (comment.rating || 0), 0);
      setAverageRating(totalRating / comments.length);
    } else {
      setAverageRating(0); // 댓글이 없는 경우 평균 별점을 0으로 설정
    }
  }, [comments]); // comments 배열이 변경될 때마다 실행

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
        <S.Title>{postId}</S.Title>
        <p>종합 평점:{averageRating.toFixed(1)}</p>
        <Rate allowHalf disabled value={averageRating} />

        <p>댓글 수: {comments.length}</p>
        {comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.text}</p>
            <Rate allowHalf disabled value={comment.rating} />
          </div>
        ))}
        <S.Div />
        {Array.isArray(post?.menu) &&
          post.menu.map((m: string) => (
            <S.Infor key={m}>{m}</S.Infor> // 'key' 속성 추가
          ))}
      </S.Wrapper>
    </>
  );
}
