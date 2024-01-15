import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './Banner.styles';
import React from 'react';
import Link from 'next/link';
import { useMoveToPage } from '../../../hooks/useMoveToPage';
export default function Banner(): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Wrapper>
      <Slider {...settings}>
        <S.SliderImage1 onClick={onClickMoveToPage('/guide')}>
          <S.Banner1Text>
            School Eats를 맛있게
            <br />
            즐기는 방법!
          </S.Banner1Text>
          <S.Banner1Text2>School Eats 설명서</S.Banner1Text2>
          <S.Banner1Text3>이용안내 확인하기 {'>'}</S.Banner1Text3>
        </S.SliderImage1>
        <S.SliderImage2 onClick={onClickMoveToPage('/feedback')}>
          <S.Banner2Text>
            함께 만들어 갈 <br />
            아이디어를 <br />
            저희에게 들려주세요!
          </S.Banner2Text>
          <S.Banner2Text2>개선사항 요청하기 {'>'}</S.Banner2Text2>
        </S.SliderImage2>
        <S.SliderImage3 onClick={onClickMoveToPage('/request')}>
          <S.Banner3Text>
            숨은 맛집, <br />
            여러분이 알고 있는 곳은
            <br /> 어디인가요?
          </S.Banner3Text>

          <S.Banner3Text2>맛집 추천하기 {'>'}</S.Banner3Text2>
        </S.SliderImage3>
      </Slider>
    </S.Wrapper>
  );
}
