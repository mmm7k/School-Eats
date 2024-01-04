import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './Banner.styles';
import React from 'react';
export default function Banner(): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <S.Wrapper>
      <Slider {...settings}>
        <S.SliderImage1 />
        <S.SliderImage2 />
        <S.SliderImage3 />
      </Slider>
    </S.Wrapper>
  );
}
