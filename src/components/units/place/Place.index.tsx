import { useRouter } from 'next/router';
import * as S from './Place.styles';
import { useGetPosts } from '../../hooks/useGetPosts';
import { Spin } from 'antd';
import Image from 'next/image';

interface Post {
  title: string;
  loc: string;
  id: string;
  img: string;
  menu: string;
  breaktime: string;
}

export default function Place(): JSX.Element {
  const router = useRouter();
  const { posts, hasMore, loading }: any = useGetPosts('all');
  return (
    <S.Wrapper>
      <S.Title>테마별 맛집🍚</S.Title>
      <S.SubTitle>스쿨잇츠가 소개하는 맛집 리스트!</S.SubTitle>
      <S.ButtonWrapper>
        <S.SelectButton>ALL</S.SelectButton>

        <S.Button>한식</S.Button>
        <S.Button>중식</S.Button>
        <S.Button>일식</S.Button>
        <S.Button>양식</S.Button>
      </S.ButtonWrapper>
      <hr style={{ width: '100%', height: '1px', backgroundColor: '#848484' }} />

      <S.ContentsWrapper>
        {posts.map(
          (
            post: Post // posts 배열을 map 함수로 순회합니다.
          ) => (
            <S.ContentsItem key={post.id}>
              <S.ContentsImage>
                <Image
                  src={
                    post.img ||
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
                  }
                  alt={post.title}
                  width={230}
                  height={240}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                />
              </S.ContentsImage>
              <S.ContentsTitle>{post.id}</S.ContentsTitle>
              <S.ContentsBreakTime>브레이크 타임 : {post.breaktime}</S.ContentsBreakTime>
              <S.ContentsMenu>{post.menu}</S.ContentsMenu>
            </S.ContentsItem>
          )
        )}
      </S.ContentsWrapper>
      <S.SpinDiv>{hasMore && loading && <Spin size="default" />}</S.SpinDiv>
    </S.Wrapper>
  );
}
