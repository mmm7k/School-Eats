import Slider from 'react-slick';
import * as S from './FoodQuration.styled';

export default function FoodQuration(): JSX.Element {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1.4,
    slidesToScroll: 1,
  };

  return (
    <>
      <S.SubTitle>오늘의 점심은?</S.SubTitle>
      <S.Title>School Eats 맛집투어!</S.Title>
      <S.Wrapper>
        <Slider {...settings}>
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
        </Slider>
      </S.Wrapper>
    </>
  );
}
