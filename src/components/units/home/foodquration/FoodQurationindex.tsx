import * as S from './FoodQuration.styled';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

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

  const dots = [0, 1, 2, 3];
  return (
    <>
      <S.SubTitle>오늘의 점심은?</S.SubTitle>
      <S.Title>School Eats 맛집투어 ! 😀</S.Title>
      <S.Wrapper>
        <div ref={emblaRef}>
          <div style={{ display: 'flex' }}>
            <S.Contents>
              <S.FoodImage1>
                <S.FoodTitle>한식</S.FoodTitle>
                <S.FoodText>맛집 보러가기 {'>'} </S.FoodText>
              </S.FoodImage1>
            </S.Contents>
            <S.Contents>
              <S.FoodImage2>
                <S.FoodTitle>중식</S.FoodTitle>
                <S.FoodText>맛집 보러가기 {'>'} </S.FoodText>
              </S.FoodImage2>
            </S.Contents>
            <S.Contents>
              <S.FoodImage3>
                <S.FoodTitle>일식</S.FoodTitle>
                <S.FoodText>맛집 보러가기 {'>'} </S.FoodText>
              </S.FoodImage3>
            </S.Contents>
            <S.Contents>
              <S.FoodImage4>
                <S.FoodTitle>양식</S.FoodTitle>
                <S.FoodText>맛집 보러가기 {'>'} </S.FoodText>
              </S.FoodImage4>
            </S.Contents>
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
