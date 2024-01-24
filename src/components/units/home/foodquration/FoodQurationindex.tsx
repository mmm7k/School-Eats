import * as S from './FoodQuration.styled';
import useEmblaCarousel from 'embla-carousel-react';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
export default function FoodQuration(): JSX.Element {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
      }
    },
    [emblaApi]
  );
  const onSelect = useCallback(() => {
    if (emblaApi) {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', onSelect);
    }
  }, [emblaApi, onSelect]);

  const dots = [0, 1, 2, 3, 4];
  return (
    <>
      <S.SubTitle>오늘의 점심은?</S.SubTitle>
      <S.Title>School Eats 맛집투어 ! 🍚</S.Title>
      <S.Wrapper>
        <div ref={emblaRef}>
          <div style={{ display: 'flex' }}>
            <Link href="/place/koreanplace">
              <S.Contents>
                <Image
                  src={
                    '/한식.jpg' ||
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
                  }
                  alt={'배너'}
                  width={314}
                  height={471}
                  layout="fixed"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                />

                <S.FoodTitle>한식</S.FoodTitle>
                <S.FoodText>맛집 보러가기 {'>'} </S.FoodText>
              </S.Contents>
            </Link>
            <Link href="/place/chineseplace">
              <S.Contents>
                <Image
                  src={
                    '/중식.jpg' ||
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
                  }
                  alt={'배너'}
                  width={314}
                  height={471}
                  layout="fixed"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                />
                <S.FoodTitle>중식</S.FoodTitle>
                <S.FoodText>맛집 보러가기 {'>'} </S.FoodText>
              </S.Contents>
            </Link>
            <Link href="/place/japaneseplace">
              <S.Contents>
                <Image
                  src={
                    '/일식.jpg' ||
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
                  }
                  alt={'배너'}
                  width={314}
                  height={471}
                  layout="fixed"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                />
                <S.FoodTitle>일식</S.FoodTitle>
                <S.FoodText>맛집 보러가기 {'>'} </S.FoodText>
              </S.Contents>
            </Link>
            <Link href="/place/westernplace">
              <S.Contents>
                <Image
                  src={
                    '/일식.jpg' ||
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
                  }
                  alt={'배너'}
                  width={314}
                  height={471}
                  layout="fixed"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                />
                <S.FoodTitle>양식</S.FoodTitle>
                <S.FoodText>맛집 보러가기 {'>'} </S.FoodText>
              </S.Contents>
            </Link>
            <Link href="/place/cafeplace">
              <S.Contents>
                <Image
                  src={
                    '/카페.jpg' ||
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
                  }
                  alt={'배너'}
                  width={314}
                  height={471}
                  layout="fixed"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                />
                <S.FoodTitle>카페</S.FoodTitle>
                <S.FoodText>맛집 보러가기 {'>'} </S.FoodText>
              </S.Contents>
            </Link>
          </div>
        </div>
      </S.Wrapper>
      <S.DotsContainer>
        {dots.map((index) => (
          <S.DotButton
            key={index}
            className={index === selectedIndex ? 'is-selected' : ''}
            onClick={() => scrollTo(index)}
          ></S.DotButton>
        ))}
      </S.DotsContainer>
    </>
  );
}
