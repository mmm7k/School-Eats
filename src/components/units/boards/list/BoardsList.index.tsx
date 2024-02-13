import Link from 'next/link';
import * as S from './BoardsList.styles';
import WriteButton from '../writebutton/WriteButton.index';
import { useGetBoardPosts } from '../../../../hooks/useGetBoardPosts';
import { Spin } from 'antd';
import { useState } from 'react';
import { useBoardSearch } from '../../../../hooks/useBoardSearch';
import Image from 'next/image';
import { CommentOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

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
  const { posts, hasMore, loading } = useGetBoardPosts();

  const [searchTerm, setSearchTerm] = useState('');
  const searchResults = useBoardSearch('board', searchTerm);

  const handleSearchChange = (event: any) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
  };

  return (
    <S.Wrapper>
      <WriteButton />
      <S.Title>맛집 커뮤니티👨‍👦‍👦</S.Title>
      <S.SubTitle>여러분만의 맛집을 함께 나눠요!</S.SubTitle>
      <S.Searchbar>
        <S.SearchOutlinedIcon style={{ color: '#848484' }} rev={undefined} />
        <S.SearchbarInput placeholder="나만 알고있는 맛집!" onChange={handleSearchChange} />
      </S.Searchbar>
      {!searchResults || searchResults.length === 0
        ? // 검색 결과가 없거나 searchResults가 null일 때
          posts.map((post: Post) => (
            <Link href={`/boards/${post.id}`}>
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
        : // 검색 결과가 있을 때
          searchResults.map((post: Post) => (
            <Link href={`/boards/${post.id}`}>
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
      <S.SpinDiv>{hasMore && loading && <Spin size="large" />}</S.SpinDiv>
    </S.Wrapper>
  );
}
