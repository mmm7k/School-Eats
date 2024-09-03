import { useRouter } from 'next/router';
import * as S from '../../../src/styles/place/Place.styles';
import { Select } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import SkeletonPlace from '../../../src/components/units/place/Skeleton';
import { GetStaticProps } from 'next';
import { QueryClient, dehydrate } from 'react-query';
import { fetchPosts } from '../../../src/services/place/useGetCategoryPosts';

interface Post {
  title?: string;
  id: string;
  img?: string;
  titlemenu?: string;
  breaktime?: string;
  rate?: number;
  commentscount?: number;
}

type OrdKey = 'rate' | 'commentscount';

export default function JapanesePlace({ initialPosts }: { initialPosts: Post[] }): JSX.Element {
  const router = useRouter();
  const [order, setOrder] = useState<OrdKey>((router.query.sort as OrdKey) || 'commentscount');
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [loading, setLoading] = useState(false);

  const handleChange = (value: OrdKey) => {
    setOrder(value);
    router.push(`${router.pathname}?sort=${value}`, undefined, { shallow: true });
  };

  useEffect(() => {
    if (router.query.sort) {
      setOrder(router.query.sort as OrdKey);
      const sortedPosts = [...initialPosts].sort((a, b) => (b[order] || 0) - (a[order] || 0));
      setPosts(sortedPosts);
    }
  }, [router.query.sort, initialPosts, order]);

  return (
    <S.Wrapper>
      <S.Title>테마별 맛집🍚</S.Title>
      <S.SubTitle>스쿨잇츠가 소개하는 맛집 리스트!</S.SubTitle>
      <S.ButtonWrapper>
        <Link href="/place">
          <S.Button>ALL</S.Button>
        </Link>
        <Link href="/place/koreanplace">
          <S.Button>한식</S.Button>
        </Link>
        <Link href="/place/chineseplace">
          <S.Button>중식</S.Button>
        </Link>
        <S.SelectButton>일식</S.SelectButton>

        <Link href="/place/westernplace">
          <S.Button>양식</S.Button>
        </Link>
        <Link href="/place/cafeplace">
          <S.Button>카페</S.Button>
        </Link>
      </S.ButtonWrapper>
      <hr style={{ width: '100%', height: '1px', backgroundColor: '#848484' }} />
      <S.SelectDiv>
        <Select
          defaultValue={order}
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: 'commentscount', label: '리뷰많은순' },
            { value: 'rate', label: '높은별점순' },
          ]}
        />
      </S.SelectDiv>
      <S.ContentsWrapper>
        {loading && posts.length === 0 ? (
          <SkeletonPlace />
        ) : (
          posts.map((post: Post) => (
            <Link href={`/place/${post.id}`} key={post.id}>
              <S.ContentsItem>
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
                <S.ContentsTitleWrapper>
                  <S.ContentsTitle>{post.id}</S.ContentsTitle>
                  <S.RateWrapper>
                    <Image
                      src={
                        '/common/rate.png' ||
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
                      }
                      alt={post.title}
                      width={11}
                      height={11}
                    />
                    {post.rate?.toFixed(1)}({post.commentscount})
                  </S.RateWrapper>
                </S.ContentsTitleWrapper>
                <S.ContentsBreakTime>브레이크 타임 : {post.breaktime}</S.ContentsBreakTime>
                <S.ContentsMenu>{post.titlemenu}</S.ContentsMenu>
              </S.ContentsItem>
            </Link>
          ))
        )}
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const order = (context.params?.sort as OrdKey) || 'commentscount';
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['posts', 'all', '일식', order], () => fetchPosts('일식', order));

  const initialPosts = queryClient.getQueryData<Post[]>(['posts', 'all', '일식', order]);

  return {
    props: {
      initialPosts,
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 1, // 페이지가 1초마다 갱신됨
  };
};
