// import Image from 'next/image';
// import * as S from '../../../src/styles/place/PlaceDetail.styles';
// import { useRouter } from 'next/router';
// import { useState } from 'react';
// import { useRecoilValue } from 'recoil';
// import {
//   ClockCircleOutlined,
//   DeleteOutlined,
//   EditOutlined,
//   EnvironmentOutlined,
//   InfoCircleOutlined,
//   PhoneOutlined,
//   TagsOutlined,
// } from '@ant-design/icons';
// import Link from 'next/link';
// import { Modal } from 'antd';
// import { isLoggedIn, userEmail } from '../../../src/commons/globalstate/globalstate';
// import { useComments } from '../../../src/services/place/useComments';
// import { useBookmark } from '../../../src/services/etc/useBookmark';
// import { useBackToPage } from '../../../src/hooks/useBackToPage';
// import { fetchPost, useGetDetailPost } from '../../../src/services/place/useGetDetailPost';
// import { GetServerSideProps } from 'next';
// import { QueryClient, dehydrate } from 'react-query';

// export default function PlaceDetail(): JSX.Element {
//   const {
//     averageRating,
//     comments,
//     newComment,
//     updateComment,
//     setNewComment,
//     addComment,
//     deleteComment,
//     newRating,
//     setNewRating,
//   } = useComments();
//   const { handleBookmark, isBookmarked } = useBookmark();
//   const { onClickBackToPage } = useBackToPage();
//   const router = useRouter();
//   const data = JSON.stringify(router.query);
//   const jsonObject = JSON.parse(data);
//   const postId = jsonObject.placeid;
//   const login = useRecoilValue(isLoggedIn);
//   const email = useRecoilValue(userEmail);

//   const { data: post } = useGetDetailPost(postId);

//   const handleRatingChange = (value: number) => {
//     setNewRating(value); // 사용자가 선택한 별점을 상태에 저장
//   };

//   const goBookmark = () => {
//     if (!login) {
//       Modal.error({
//         title: '로그인이 필요합니다!',
//       });
//     } else {
//       router.push('/mypage/bookmark');
//     }
//   };

//   const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
//   const [editingCommentText, setEditingCommentText] = useState('');
//   const [editingCommentRating, setEditingCommentRating] = useState<number>(0);

//   const startEditing = (comment: any) => {
//     setEditingCommentId(comment.id);
//     setEditingCommentText(comment.text || '');
//     setEditingCommentRating(comment.rating || 0);
//   };

//   const cancelEditing = () => {
//     setEditingCommentId(null);
//     setEditingCommentText('');
//     setEditingCommentRating(0);
//   };

//   const handleEditingRatingChange = (value: number) => {
//     setEditingCommentRating(value); // 사용자가 선택한 별점을 상태에 저장
//   };

//   const submitEditedComment = async () => {
//     if (editingCommentId) {
//       await updateComment(editingCommentId, editingCommentText, editingCommentRating);
//       cancelEditing();
//     }
//   };

//   return (
//     <>
//       <S.HeaderWrapper>
//         <S.IconWrapper>
//           <S.BackButton onClick={onClickBackToPage} />
//         </S.IconWrapper>
//         <S.HeaderText>맛집투어</S.HeaderText>
//         <S.IconWrapper>
//           <Link href="/search">
//             <S.SearchIcon />
//           </Link>

//           <S.TitleBookmarkIcon onClick={goBookmark} />
//         </S.IconWrapper>
//       </S.HeaderWrapper>
//       <Image
//         src={
//           post?.img ||
//           'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
//         }
//         alt={post?.id}
//         width={500}
//         height={500}
//         placeholder="blur"
//         blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
//       />

//       <S.Wrapper>
//         <S.TitleWrapper>
//           <S.BookmarkWrapper>
//             <S.Title>{postId}</S.Title>
//             <div onClick={handleBookmark}>{isBookmarked ? <S.ColorBookmarkIcon /> : <S.BookmarkIcon />}</div>
//           </S.BookmarkWrapper>
//           <S.RateWrapper>
//             <S.RateStar allowHalf disabled value={averageRating.toFixed(1)} />
//             <S.RateNum> {averageRating.toFixed(1)}</S.RateNum>
//             <S.CommentsCount>{comments.length}개의 후기</S.CommentsCount>
//           </S.RateWrapper>
//         </S.TitleWrapper>
//         <S.Divine />
//         <S.InforWrapper>
//           <S.InforTitle>상세정보</S.InforTitle>
//           <S.Infor>
//             <EnvironmentOutlined rev={undefined} />
//             <S.InforText>{post?.loc}</S.InforText>
//           </S.Infor>
//           <S.Infor>
//             <ClockCircleOutlined rev={undefined} />
//             <S.InforText>
//               {post?.time}
//               &nbsp; 브레이크 타임:{post?.breaktime}
//             </S.InforText>
//           </S.Infor>
//           <S.Infor>
//             <PhoneOutlined rev={undefined} />
//             <S.InforText>{post?.call}</S.InforText>
//           </S.Infor>
//           {post?.hashtag && (
//             <S.Infor>
//               <TagsOutlined rev={undefined} />
//               <S.InforText> {post?.hashtag}</S.InforText>
//             </S.Infor>
//           )}

//           {post?.status && (
//             <S.Infor>
//               <InfoCircleOutlined rev={undefined} />
//               <S.InforText>{post?.status}</S.InforText>
//             </S.Infor>
//           )}
//         </S.InforWrapper>
//         <S.Divine />
//         <S.InforWrapper>
//           <S.InforTitle>메뉴</S.InforTitle>

//           {Array.isArray(post?.menu) &&
//             post?.menu.map((m: string) => (
//               <S.Infor key={m}>{m}</S.Infor> // 'key' 속성 추가
//             ))}
//         </S.InforWrapper>
//         <S.Divine />
//         <S.InforWrapper>
//           <S.InforTitle>리뷰</S.InforTitle>

//           <S.ReviewInput
//             value={newComment}
//             onChange={(e) => setNewComment(e.target.value)}
//             placeholder="여러분의 소중한 리뷰와 별점을 남겨주세요!"
//           ></S.ReviewInput>
//           <S.SubmitWrapper>
//             <S.ReviewInputRate onChange={handleRatingChange} value={newRating} />
//             <S.SubmitButton onClick={addComment}>등록</S.SubmitButton>
//           </S.SubmitWrapper>

//           {comments.map((comment) => (
//             <div key={comment.id}>
//               {/* 편집 상태에 따라 댓글 표시 또는 편집 필드 표시 */}
//               {editingCommentId === comment.id ? (
//                 <>
//                   <S.ReviewInput
//                     value={editingCommentText}
//                     onChange={(e) => setEditingCommentText(e.target.value)}
//                     placeholder="여러분의 소중한 리뷰와 별점을 남겨주세요!"
//                   ></S.ReviewInput>
//                   <S.SubmitWrapper>
//                     <S.ReviewInputRate onChange={handleEditingRatingChange} value={editingCommentRating} />
//                     <S.CancelButton onClick={cancelEditing}>취소</S.CancelButton>
//                     <S.SubmitButton onClick={submitEditedComment}>등록</S.SubmitButton>
//                   </S.SubmitWrapper>
//                 </>
//               ) : (
//                 <>
//                   {/* 기존 댓글 내용 */}
//                   <S.ReviewWrapper>
//                     <S.ReviewText>{comment.text}</S.ReviewText>
//                     <S.ReviewTitle>
//                       {comment.email?.split('@')[0]}
//                       <S.ReviewRate allowHalf disabled value={comment.rating} />
//                       {comment.email === email && (
//                         <>
//                           <EditOutlined
//                             onClick={() => startEditing(comment)}
//                             rev={undefined}
//                             style={{ fontSize: '14px', marginLeft: '1%', marginRight: '1%' }}
//                           />

//                           <DeleteOutlined
//                             style={{ fontSize: '14px' }}
//                             onClick={() => deleteComment(comment.id)}
//                             rev={undefined}
//                           />
//                         </>
//                       )}
//                     </S.ReviewTitle>
//                   </S.ReviewWrapper>
//                 </>
//               )}
//             </div>
//           ))}
//         </S.InforWrapper>
//       </S.Wrapper>
//     </>
//   );
// }

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const postId = context.params?.placeid as string;

//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery(['place', postId], () => fetchPost(postId));

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// };

import Image from 'next/image';
import * as S from '../../../src/styles/place/PlaceDetail.styles';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import {
  ClockCircleOutlined,
  DeleteOutlined,
  EditOutlined,
  EnvironmentOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
  TagsOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { Modal } from 'antd';
import { isLoggedIn, userEmail } from '../../../src/commons/globalstate/globalstate';
import { useComments } from '../../../src/services/place/useComments';
import { useBookmark } from '../../../src/services/etc/useBookmark';
import { useBackToPage } from '../../../src/hooks/useBackToPage';
import { useGetDetailPost } from '../../../src/services/place/useGetDetailPost';

export default function PlaceDetail(): JSX.Element {
  const {
    averageRating,
    comments,
    newComment,
    updateComment,
    setNewComment,
    addComment,
    deleteComment,
    newRating,
    setNewRating,
  } = useComments();
  const { handleBookmark, isBookmarked } = useBookmark();
  const { onClickBackToPage } = useBackToPage();
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const [editingCommentText, setEditingCommentText] = useState('');
  const [editingCommentRating, setEditingCommentRating] = useState<number>(0);
  const router = useRouter();
  const postId = router.query.placeid as string;
  const login = useRecoilValue(isLoggedIn);
  const email = useRecoilValue(userEmail);
  const { data: post } = useGetDetailPost(postId);

  const handleRatingChange = (value: number) => {
    setNewRating(value); // 사용자가 선택한 별점을 상태에 저장
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

  const startEditing = (comment: any) => {
    setEditingCommentId(comment.id);
    setEditingCommentText(comment.text || '');
    setEditingCommentRating(comment.rating || 0);
  };

  const cancelEditing = () => {
    setEditingCommentId(null);
    setEditingCommentText('');
    setEditingCommentRating(0);
  };

  const handleEditingRatingChange = (value: number) => {
    setEditingCommentRating(value); // 사용자가 선택한 별점을 상태에 저장
  };

  const submitEditedComment = async () => {
    if (editingCommentId) {
      await updateComment(editingCommentId, editingCommentText, editingCommentRating);
      cancelEditing();
    }
  };

  return (
    <>
      <S.HeaderWrapper>
        <S.IconWrapper>
          <S.BackButton onClick={onClickBackToPage} />
        </S.IconWrapper>
        <S.HeaderText>맛집투어</S.HeaderText>
        <S.IconWrapper>
          <Link href="/search">
            <S.SearchIcon />
          </Link>

          <S.TitleBookmarkIcon onClick={goBookmark} />
        </S.IconWrapper>
      </S.HeaderWrapper>
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
            <S.RateStar allowHalf disabled value={averageRating.toFixed(1)} />
            <S.RateNum> {averageRating.toFixed(1)}</S.RateNum>
            <S.CommentsCount>{comments.length}개의 후기</S.CommentsCount>
          </S.RateWrapper>
        </S.TitleWrapper>
        <S.Divine />
        <S.InforWrapper>
          <S.InforTitle>상세정보</S.InforTitle>
          <S.Infor>
            <EnvironmentOutlined rev={undefined} />
            <S.InforText>{post?.loc}</S.InforText>
          </S.Infor>
          <S.Infor>
            <ClockCircleOutlined rev={undefined} />
            <S.InforText>
              {post?.time}
              &nbsp; 브레이크 타임:{post?.breaktime}
            </S.InforText>
          </S.Infor>
          <S.Infor>
            <PhoneOutlined rev={undefined} />
            <S.InforText>{post?.call}</S.InforText>
          </S.Infor>
          {post?.hashtag && (
            <S.Infor>
              <TagsOutlined rev={undefined} />
              <S.InforText> {post?.hashtag}</S.InforText>
            </S.Infor>
          )}

          {post?.status && (
            <S.Infor>
              <InfoCircleOutlined rev={undefined} />
              <S.InforText>{post?.status}</S.InforText>
            </S.Infor>
          )}
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
            <div key={comment.id}>
              {/* 편집 상태에 따라 댓글 표시 또는 편집 필드 표시 */}
              {editingCommentId === comment.id ? (
                <>
                  <S.ReviewInput
                    value={editingCommentText}
                    onChange={(e) => setEditingCommentText(e.target.value)}
                    placeholder="여러분의 소중한 리뷰와 별점을 남겨주세요!"
                  ></S.ReviewInput>
                  <S.SubmitWrapper>
                    <S.ReviewInputRate onChange={handleEditingRatingChange} value={editingCommentRating} />
                    <S.CancelButton onClick={cancelEditing}>취소</S.CancelButton>
                    <S.SubmitButton onClick={submitEditedComment}>등록</S.SubmitButton>
                  </S.SubmitWrapper>
                </>
              ) : (
                <>
                  {/* 기존 댓글 내용 */}
                  <S.ReviewWrapper>
                    <S.ReviewText>{comment.text}</S.ReviewText>
                    <S.ReviewTitle>
                      {comment.email?.split('@')[0]}
                      <S.ReviewRate allowHalf disabled value={comment.rating} />
                      {comment.email === email && (
                        <>
                          <EditOutlined
                            onClick={() => startEditing(comment)}
                            rev={undefined}
                            style={{ fontSize: '14px', marginLeft: '1%', marginRight: '1%' }}
                          />

                          <DeleteOutlined
                            style={{ fontSize: '14px' }}
                            onClick={() => deleteComment(comment.id)}
                            rev={undefined}
                          />
                        </>
                      )}
                    </S.ReviewTitle>
                  </S.ReviewWrapper>
                </>
              )}
            </div>
          ))}
        </S.InforWrapper>
      </S.Wrapper>
    </>
  );
}
