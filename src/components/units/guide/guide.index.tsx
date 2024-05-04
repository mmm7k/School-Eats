import React from 'react';
import * as S from './guide.styles';
import { useBackToPage } from '../../../hooks/useBackToPage';

export default function Guide() {
  const { onClickBackToPage } = useBackToPage();
  return (
    <>
      <S.TitleWrapper>
        <S.IconWrapper onClick={onClickBackToPage}>
          <S.BackButton />
        </S.IconWrapper>
        <S.Title>이용안내</S.Title>
      </S.TitleWrapper>
      <S.Wrapper>
        <S.Notice>맛집 지도</S.Notice>
        <S.SubNotice>
          스쿨잇츠 맛집 지도 페이지에서는 등록된 맛집들을 지도상에서 쉽게 찾아볼 수 있습니다. 카테고리별로 태그를
          선택하여 다양한 맛집을 탐색해보세요. 스쿨잇츠 로고를 클릭하면 각 맛집의 상세 정보 페이지로 바로 이동합니다.
        </S.SubNotice>
        <S.Divine />
        <S.Notice>맛집 투어</S.Notice>
        <S.SubNotice>
          맛집 투어 페이지에서는 스쿨잇츠에 등록된 다양한 맛집을 카테고리별로 살펴볼 수 있습니다. 각 맛집의 상세
          페이지에서는 해당 맛집의 자세한 정보를 확인하고, 북마크를 추가하거나 리뷰를 작성할 수 있습니다.
        </S.SubNotice>
        <S.Divine />
        <S.Notice>커뮤니티</S.Notice>
        <S.SubNotice>
          커뮤니티 페이지에서는 자신만의 맛집을 공유하고, 좋아요, 스크랩, 댓글 기능을 통해 다른 사용자와의 소통을 할 수
          있습니다.
        </S.SubNotice>
        <S.Divine />
        <S.Notice>마이페이지</S.Notice>
        <S.SubNotice>
          마이페이지에서는 여러분이 찜한 맛집 목록과 작성하신 리뷰를 한눈에 확인하실 수 있습니다. 또한, 고객센터를 통해
          1:1 문의하기, 맛집 추가 요청, 개선 사항 요청, 최신 공지사항 확인 및 이용 안내 등 다양한 서비스를 이용하실 수
          있습니다.
        </S.SubNotice>
      </S.Wrapper>
    </>
  );
}
