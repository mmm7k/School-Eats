import { useRouter } from 'next/router';
import * as S from '../Place.styles';
import { useGetPosts } from '../../../hooks/useGetPosts';
import { Select, Spin } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useGetCategoryPosts } from '../../../hooks/useGetCategoryPosts';
import { useState } from 'react';
import SkeletonPlace from '../Skeleton';

interface Post {
  title: string;
  loc: string;
  id: string;
  img: string;
  titlemenu: string;
  breaktime: string;
  rate: number;
  commentscount: number;
}

export default function CafePlace(): JSX.Element {
  const [order, setOrder]: any = useState('commentscount');
  const { posts, loading }: any = useGetCategoryPosts('all', '카페', order);
  const handleChange = (value: string) => {
    setOrder(value);
  };
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
        <Link href="/place/japaneseplace">
          <S.Button>일식</S.Button>
        </Link>
        <Link href="/place/westernplace">
          <S.Button>양식</S.Button>
        </Link>
        <S.SelectButton>카페</S.SelectButton>
      </S.ButtonWrapper>
      <hr style={{ width: '100%', height: '1px', backgroundColor: '#848484' }} />
      <S.SelectDiv>
        <Select
          defaultValue="리뷰많은순"
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
          // 로딩 중일 때 스켈레톤 표시
          <SkeletonPlace />
        ) : (
          posts.map(
            (
              post: Post // posts 배열을 map 함수로 순회합니다.
            ) => (
              <Link href={`/place/${post.id}`}>
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
                  <S.ContentsTitleWrapper>
                    <S.ContentsTitle>{post.id}</S.ContentsTitle>
                    <S.RateWrapper>
                      <Image
                        src={
                          '/rate.png' ||
                          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
                        }
                        alt={post.title}
                        width={11}
                        height={11}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                      />
                      {post.rate.toFixed(1)}({post.commentscount})
                    </S.RateWrapper>
                  </S.ContentsTitleWrapper>
                  <S.ContentsBreakTime>브레이크 타임 : {post.breaktime}</S.ContentsBreakTime>
                  <S.ContentsMenu>{post.titlemenu}</S.ContentsMenu>
                </S.ContentsItem>
              </Link>
            )
          )
        )}
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}
