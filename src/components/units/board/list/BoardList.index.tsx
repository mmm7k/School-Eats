import * as S from './BoardList.styles';
import { useMoveToPage } from '../../../hooks/useMoveToPage';
import { useGetPosts } from '../../../hooks/useGetPosts';
import { useFirebaseSearch } from '../../../hooks/useSearch';
import react, { useState } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { Spin } from 'antd';
import { isLoggedIn } from '../../../../commons/globalstate/globalstate';
import Searchbars from '../../../searchbars/Searchbars.index';

interface Post {
  title?: string;
  contents?: string;
  id: string;
  email?: string;
}

export default function BoardList(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  const { posts, hasMore, loading }: any = useGetPosts('board');
  const [searchTerm, setSearchTerm] = useState('');
  const searchResults = useFirebaseSearch('board', searchTerm);
  const router = useRouter();
  const [login] = useRecoilState(isLoggedIn);
  const handleSearchChange = (event: any) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
  };

  const onClickMoveToWrite = () => {
    login ? router.push('/boards/new') : alert('로그인이 필요합니다!');
  };

  const onClickMoveToBoardDetail = (event: any): void => {
    router.push(`/boards/${event.currentTarget.id}`);
  };

  return (
    <S.Wrapper>
      <S.Header>
        <Searchbars handleSearchChange={handleSearchChange} />
        {login && <S.WriteButton onClick={onClickMoveToWrite}>글쓰기</S.WriteButton>}
      </S.Header>
      <S.TableTop />
      {!searchResults || searchResults.length === 0
        ? // 검색 결과가 없거나 searchResults가 null일 때
          posts.map((post: Post) => (
            <S.Row key={post.id} id={post.id} onClick={onClickMoveToBoardDetail}>
              <S.Title>{post.title || ''}</S.Title>
              <S.Contents dangerouslySetInnerHTML={{ __html: post.contents || '' }} />
              <S.Writer>작성자: {post.email || ''}</S.Writer>
            </S.Row>
          ))
        : // 검색 결과가 있을 때
          searchResults.map((post: Post) => (
            <S.Row key={post.id} id={post.id} onClick={onClickMoveToBoardDetail}>
              <S.Title>{post.title || ''}</S.Title>
              <S.Contents dangerouslySetInnerHTML={{ __html: post.contents || '' }} />
              <S.Writer>작성자: {post.email || ''}</S.Writer>
            </S.Row>
          ))}
      <S.SpinDiv>{hasMore && loading && <Spin size="large" />}</S.SpinDiv>
    </S.Wrapper>
  );
}
