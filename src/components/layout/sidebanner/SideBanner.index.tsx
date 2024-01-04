import * as S from './SideBanner.styles';
import React, { useState, useEffect } from 'react';

const gifImages = ['/sidegif1.gif', '/sidegif2.gif', '/sidegif3.gif'];

export default function SideBanner(): JSX.Element {
  const [currentGif, setCurrentGif] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // 페이드 아웃 시작
      setTimeout(() => {
        setCurrentGif((prevIndex) => (prevIndex + 1) % gifImages.length); // 다음 이미지로 전환
        setFade(true); // 페이드 인 시작
      }, 500); // 0.5초 후 이미지 변경
    }, 3000); // 3초마다 이미지 전환

    return () => clearInterval(interval); // 컴포넌트 unmount시 인터벌 정리
  }, []);
  return (
    <S.Wrapper>
      <S.Title>
        새로운 맛을 즐기는
        <br />
        사람들을 위한 커뮤니티
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
          <S.Tag>&nbsp;&nbsp;# 맛좀봐라스토리&nbsp;&nbsp;</S.Tag>
          <S.Tag>&nbsp;&nbsp;# 맛봐미식회&nbsp;&nbsp;</S.Tag>
        </S.TagLine>
        <S.TagLine>
          <S.Tag>&nbsp;&nbsp;# 맛토크&nbsp;&nbsp;</S.Tag>
          <S.Tag>&nbsp;&nbsp;# 우리집장보기&nbsp;&nbsp;</S.Tag>
        </S.TagLine>
        <S.TagLine>
          <S.Tag>&nbsp;&nbsp;# 가입혜택&nbsp;&nbsp;</S.Tag>
        </S.TagLine>
      </S.TagWrapper>
    </S.Wrapper>
  );
}
