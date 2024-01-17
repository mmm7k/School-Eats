import * as S from './BoardDetail.styles';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { isLoggedIn, userEmail } from '../../../../commons/globalstate/globalstate';
import { Avatar, Modal } from 'antd';
import { CommentOutlined, DeleteOutlined, LikeOutlined, StarOutlined, UserOutlined } from '@ant-design/icons';

import { useGetDetailBoardPost } from '../../../hooks/useGetDetailBoardPost';
import { useBoardComments } from '../../../hooks/useBoardComments';
import { useLikeScrap } from '../../../hooks/useLikeScrap';
import { useEffect, useState } from 'react';

export default function BoardDetail(): JSX.Element {
  const { comments, newComment, setNewComment, addComment, deleteComment } = useBoardComments();
  const { post, usermatch, onClickDeletePost } = useGetDetailBoardPost();
  const { addLike, deleteLike, getLike, getScrap, deleteScrap, addScrap, scrap, like } = useLikeScrap();
  const [isLiked, setIsLiked] = useState(false);
  const [isScraped, setIsScraped] = useState(false);

  const login = useRecoilValue(isLoggedIn);
  const email = useRecoilValue(userEmail);

  const router = useRouter();
  const data = JSON.stringify(router.query);
  const jsonObject = JSON.parse(data);
  const postId = jsonObject.boardid;

  const handleLike = async () => {
    if (isLiked) {
      // 이미 북마크한 경우, 북마크 삭제
      const likeId = like.find((b) => b.email === email)?.id;
      if (likeId) await deleteLike(likeId);
    } else {
      // 북마크하지 않은 경우, 북마크 추가
      await addLike();
    }
    await getLike(); // 북마크 상태 업데이트
    setIsLiked(!isLiked); // 상태 토글
  };

  const handleScrap = async () => {
    if (isScraped) {
      // 이미 북마크한 경우, 북마크 삭제
      const scrapId = scrap.find((b) => b.email === email)?.id;
      if (scrapId) await deleteScrap(scrapId);
    } else {
      // 북마크하지 않은 경우, 북마크 추가
      await addScrap();
    }
    await getScrap(); // 북마크 상태 업데이트
    setIsScraped(!isScraped); // 상태 토글
  };

  const goBack = () => {
    router.back();
  };

  const goBookmark = () => {
    if (!login) {
      Modal.error({
        title: '로그인이 필요합니다!',
      });
    } else {
      router.push('/mypage/bookmark');
    }
  };

  useEffect(() => {
    (async () => {
      if (postId) {
        await getScrap();
        setIsScraped(scrap.some((b) => b.email === email));
      }
    })();
  }, [postId, email, scrap]);
  useEffect(() => {
    (async () => {
      if (postId) {
        await getLike();
        setIsLiked(like.some((b) => b.email === email));
      }
    })();
  }, [postId, email, like]);

  //내일 테스트 로직 라이크카운트가 그때그때 반영되게 .
  //   const [likeCount, setLikeCount] = useState(post?.likecount || 0);

  //   useEffect(() => {
  //     setLikeCount(post?.likecount || 0);
  //   }, [post?.likecount]);
  return (
    <>
      <S.HeaderWrapper>
        <S.IconWrapper>
          <S.BackButton onClick={goBack} />
        </S.IconWrapper>
        <S.HeaderText>커뮤니티</S.HeaderText>
        <S.IconWrapper>
          <Link href="/search">
            <S.SearchIcon />
          </Link>
          <S.TitleBookmarkIcon onClick={goBookmark} />
        </S.IconWrapper>
      </S.HeaderWrapper>
      <S.Wrapper>
        <S.Infor>
          <Avatar
            size="large"
            shape="square"
            style={{ backgroundColor: '#f6786f', marginRight: '2%' }}
            icon={<UserOutlined rev={undefined} />}
          />
          <S.InforUser>
            <S.UserEmail>
              {post?.email?.split('@')[0]}
              {usermatch && <DeleteOutlined onClick={onClickDeletePost} rev={undefined} style={{ fontSize: '18px' }} />}
            </S.UserEmail>
            <S.Timestamp>{post?.timestamp}</S.Timestamp>
          </S.InforUser>
        </S.Infor>
        <S.ContentsWrapper>
          <S.ContentsTitle>{post?.title}</S.ContentsTitle>
          <S.Contents>{post?.contents}</S.Contents>
        </S.ContentsWrapper>
        <S.LikeCommentCount>
          <S.LikeCount>
            <LikeOutlined style={{ color: '#f6786f', marginRight: '15%' }} rev={undefined} />
            {post?.likecount}
            {/* 내일 사용해볼 로직 {likeCount} */}
          </S.LikeCount>
          <S.CommentCount>
            <CommentOutlined style={{ color: '#2eccfa', marginRight: '15%' }} rev={undefined} /> {comments.length}
          </S.CommentCount>
        </S.LikeCommentCount>
        <S.ButtonWrapper>
          <S.LikeButton onClick={handleLike}>
            <LikeOutlined rev={undefined} />
            &nbsp; {isLiked ? '공감 취소' : '공감'}
          </S.LikeButton>
          <S.ScrapButton onClick={handleScrap}>
            <StarOutlined rev={undefined} />
            &nbsp;{isScraped ? '스크랩 취소' : '스크랩'}
          </S.ScrapButton>
        </S.ButtonWrapper>
        <S.CommentsTitle>댓글</S.CommentsTitle>
        <S.CommentsInput
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="여러분의 소중한 댓글을 남겨주세요!"
        ></S.CommentsInput>
        <S.SubmitWrapper>
          <S.SubmitButton onClick={addComment}>등록</S.SubmitButton>
        </S.SubmitWrapper>

        {comments.map((comment) => (
          <S.CommentsWrapper key={comment.id}>
            <S.CommentsUser>
              <S.CommentsUserEmail>
                <Avatar
                  size="small"
                  shape="square"
                  style={{ marginRight: '2%' }}
                  icon={<UserOutlined rev={undefined} />}
                />
                {comment.email?.split('@')[0]}
              </S.CommentsUserEmail>
              {comment.email === email && (
                <DeleteOutlined
                  onClick={() => deleteComment(comment.id)}
                  rev={undefined}
                  style={{ fontSize: '15px' }}
                />
              )}
            </S.CommentsUser>
            <S.Comments>{comment.text}</S.Comments>
            <S.CommentsTimestamp>{comment.timestamp}</S.CommentsTimestamp>
          </S.CommentsWrapper>
        ))}
      </S.Wrapper>
    </>
  );
}
