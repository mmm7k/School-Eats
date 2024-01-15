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
        <S.SliderImage2>
          <S.Banner2Text>
            School Eats
            <br />
            신규회원 가입시
          </S.Banner2Text>
          <S.Banner2Text2>2,000원 쿠폰 지급!</S.Banner2Text2>

          <S.Banner2Text3>쿠폰 확인하기 {'>'}</S.Banner2Text3>
        </S.SliderImage2>
        <S.SliderImage3>
          <S.Banner2Text>
            이달의 리뷰는 ? <br /> 최대 상금 100만원
          </S.Banner2Text>
          <S.Banner2Text2>베스트 리뷰 공모전</S.Banner2Text2>

          <S.Banner2Text3>신청기간: 7월 1일까지 {'>'}</S.Banner2Text3>
        </S.SliderImage3>
      </Slider>
    </S.Wrapper>
  );
}
