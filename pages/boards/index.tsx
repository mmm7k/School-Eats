// import Link from 'next/link';
// import * as S from '../../src/styles/board/BoardsList.styles';
// import { useState } from 'react';
// import Image from 'next/image';
// import { CommentOutlined, EditOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
// import { fetchPosts, useGetBoardPosts } from '../../src/services/board/useGetBoardPosts';
// import { useBoardSearch } from '../../src/services/board/useBoardSearch';
// import { GetServerSideProps } from 'next';
// import { QueryClient, dehydrate } from 'react-query';

// import { useRecoilValue } from 'recoil';
// import { isLoggedIn } from '../../src/commons/globalstate/globalstate';
// import { Modal, Skeleton } from 'antd';

// interface Post {
//   title?: string;
//   contents?: string;
//   id: string;
//   email?: string;
//   timestamp?: string;
//   img?: string;
//   likecount?: number;
//   commentscount?: number;
// }

// export default function BoardsList() {
//   const { posts, isLoading } = useGetBoardPosts();
//   const [searchTerm, setSearchTerm] = useState('');
//   const searchResults = useBoardSearch('board', searchTerm);

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(event.target.value);
//   };

//   if (isLoading) {
//     return (
//       <S.StyledSkeleton>
//         <Skeleton active />
//       </S.StyledSkeleton>
//     );
//   }

//   const loggedIn = useRecoilValue(isLoggedIn);

//   const loginError = () => {
//     Modal.error({
//       title: '로그인이 필요합니다!',
//     });
//   };

//   return (
//     <S.Wrapper>
//       <S.WriteButtonWrapper>
//         {loggedIn ? (
//           <Link href="/boards/write">
//             <S.Button>
//               <EditOutlined style={{ color: 'white' }} rev={undefined} />
//             </S.Button>
//           </Link>
//         ) : (
//           <S.Button onClick={loginError}>
//             <EditOutlined style={{ color: 'white' }} rev={undefined} />
//           </S.Button>
//         )}
//       </S.WriteButtonWrapper>
//       <S.Title>맛집 커뮤니티👨‍👦‍👦</S.Title>
//       <S.SubTitle>여러분만의 맛집을 함께 나눠요!</S.SubTitle>
//       <S.Searchbar>
//         <S.SearchOutlinedIcon style={{ color: '#848484' }} rev={undefined} />
//         <S.SearchbarInput placeholder="나만 알고있는 맛집!" onChange={handleSearchChange} />
//       </S.Searchbar>
//       {!searchResults || searchResults.length === 0
//         ? posts.map((post: Post) => (
//             <Link href={`/boards/${post.id}`} key={post.id}>
//               <S.ContentsWrapper id={post.id}>
//                 {post.img && (
//                   <S.Image>
//                     <Image
//                       src={
//                         post.img ||
//                         'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
//                       }
//                       alt={post.title}
//                       width={50}
//                       height={50}
//                       placeholder="blur"
//                       blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
//                     />
//                   </S.Image>
//                 )}
//                 <S.ContentsTitle>{post.title}</S.ContentsTitle>
//                 <S.Contents>{post.contents}</S.Contents>
//                 <S.ContentsInfor>
//                   <span style={{ marginRight: '0.4%' }}>
//                     <LikeOutlined rev={undefined} />
//                   </span>
//                   <span style={{ marginRight: '1%' }}>{post.likecount}</span>
//                   <span style={{ marginRight: '0.4%' }}>
//                     <CommentOutlined rev={undefined} />
//                   </span>
//                   <span style={{ marginRight: '1.5%' }}>{post.commentscount}</span>
//                   <span style={{ marginRight: '1.5%' }}>{post.email?.split('@')[0]}</span>
//                   <span>{post.timestamp}</span>
//                 </S.ContentsInfor>
//               </S.ContentsWrapper>
//             </Link>
//           ))
//         : searchResults.map((post: Post) => (
//             <Link href={`/boards/${post.id}`} key={post.id}>
//               <S.ContentsWrapper id={post.id}>
//                 {post.img && (
//                   <S.Image>
//                     <Image
//                       src={
//                         post.img ||
//                         'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
//                       }
//                       alt={post.title}
//                       width={50}
//                       height={50}
//                       placeholder="blur"
//                       blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
//                     />
//                   </S.Image>
//                 )}
//                 <S.ContentsTitle>{post.title}</S.ContentsTitle>
//                 <S.Contents>{post.contents}</S.Contents>
//                 <S.ContentsInfor>
//                   <span style={{ marginRight: '0.4%' }}>
//                     <LikeOutlined rev={undefined} />
//                   </span>
//                   <span style={{ marginRight: '1%' }}>{post.likecount}</span>
//                   <span style={{ marginRight: '0.4%' }}>
//                     <StarOutlined rev={undefined} />
//                   </span>
//                   <span style={{ marginRight: '1.5%' }}>{post.commentscount}</span>
//                   <span style={{ marginRight: '1.5%' }}>{post.email?.split('@')[0]}</span>
//                   <span>{post.timestamp}</span>
//                 </S.ContentsInfor>
//               </S.ContentsWrapper>
//             </Link>
//           ))}
//     </S.Wrapper>
//   );
// }

// export const getServerSideProps: GetServerSideProps = async () => {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery('boardPosts', fetchPosts);

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// };

import Link from 'next/link';
import * as S from '../../src/styles/board/BoardsList.styles';
import { useState } from 'react';
import Image from 'next/image';
import { CommentOutlined, EditOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { useGetBoardPosts } from '../../src/services/board/useGetBoardPosts';
import { useBoardSearch } from '../../src/services/board/useBoardSearch';
import { useRecoilValue } from 'recoil';
import { isLoggedIn } from '../../src/commons/globalstate/globalstate';
import { Modal, Skeleton } from 'antd';

interface Post {
  title?: string;
  contents?: string;
  id: string;
  email?: string;
  timestamp?: string;
  img?: string;
  likecount?: number;
  commentscount?: number;
}

export default function BoardsList() {
  const { posts, isLoading } = useGetBoardPosts();
  const [searchTerm, setSearchTerm] = useState('');
  const searchResults = useBoardSearch('board', searchTerm);
  const loggedIn = useRecoilValue(isLoggedIn);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  if (isLoading) {
    return (
      <S.StyledSkeleton>
        <Skeleton active />
      </S.StyledSkeleton>
    );
  }

  const loginError = () => {
    Modal.error({
      title: '로그인이 필요합니다!',
    });
  };

  return (
    <S.Wrapper>
      <S.WriteButtonWrapper>
        {loggedIn ? (
          <Link href="/boards/write">
            <S.Button>
              <EditOutlined style={{ color: 'white' }} rev={undefined} />
            </S.Button>
          </Link>
        ) : (
          <S.Button onClick={loginError}>
            <EditOutlined style={{ color: 'white' }} rev={undefined} />
          </S.Button>
        )}
      </S.WriteButtonWrapper>
      <S.Title>맛집 커뮤니티👨‍👦‍👦</S.Title>
      <S.SubTitle>여러분만의 맛집을 함께 나눠요!</S.SubTitle>
      <S.Searchbar>
        <S.SearchOutlinedIcon style={{ color: '#848484' }} rev={undefined} />
        <S.SearchbarInput placeholder="나만 알고있는 맛집!" onChange={handleSearchChange} />
      </S.Searchbar>
      {!searchResults || searchResults.length === 0
        ? posts.map((post: Post) => (
            <Link href={`/boards/${post.id}`} key={post.id}>
              <S.ContentsWrapper id={post.id}>
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
                    <CommentOutlined rev={undefined} />
                  </span>
                  <span style={{ marginRight: '1.5%' }}>{post.commentscount}</span>
                  <span style={{ marginRight: '1.5%' }}>{post.email?.split('@')[0]}</span>
                  <span>{post.timestamp}</span>
                </S.ContentsInfor>
              </S.ContentsWrapper>
            </Link>
          ))
        : searchResults.map((post: Post) => (
            <Link href={`/boards/${post.id}`} key={post.id}>
              <S.ContentsWrapper id={post.id}>
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
          ))}
    </S.Wrapper>
  );
}
