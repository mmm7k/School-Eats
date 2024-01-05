import * as S from './SideBanner.styles';
import React, { useState, useEffect } from 'react';

export default function SideBanner(): JSX.Element {
  const [currentGif, setCurrentGif] = useState(0);
  const [fade, setFade] = useState(true);
  const gifImages = ['/sidegif2.gif', '/sidegif3.gif', '/sidegif1.gif'];
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // 페이드 아웃 시작
      setTimeout(() => {
        setCurrentGif((prevIndex) => (prevIndex + 1) % gifImages.length); // 다음 이미지로 전환
        setFade(true); // 페이드 인 시작
      }, 700); // 0.5초 후 이미지 변경
    }, 3000); // 3초마다 이미지 전환

    return () => clearInterval(interval); // 컴포넌트 unmount시 인터벌 정리
  }, []);
  return (
    <S.Wrapper>
      <S.Title>
        새로운 맛을 즐기는
        <br />
        학생들을 위한 커뮤니티
      </S.Title>
      <S.Image />
      <S.Gif
        style={{
          backgroundImage: `url(${gifImages[currentGif]})`,
          opacity: fade ? 1 : 0, // 상태에 따라 투명도 변경
        }}
      />
      <S.TagWrapper>
        <S.TagLine>
          <S.Tag>&nbsp;&nbsp;# 스쿨잇츠스토리&nbsp;&nbsp;</S.Tag>
          <S.Tag>&nbsp;&nbsp;# 스쿨잇츠미식회&nbsp;&nbsp;</S.Tag>
        </S.TagLine>
        <S.TagLine>
          <S.Tag>&nbsp;&nbsp;# 맛토크&nbsp;&nbsp;</S.Tag>
          <S.Tag>&nbsp;&nbsp;# 친구와함께&nbsp;&nbsp;</S.Tag>
        </S.TagLine>
        <S.TagLine>
          <S.Tag>&nbsp;&nbsp;# 가입혜택&nbsp;&nbsp;</S.Tag>
        </S.TagLine>
      </S.TagWrapper>
    </S.Wrapper>
  );
}
