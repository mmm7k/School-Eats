import * as S from './YoutubeBanner.styles';

export default function YoutubeBanner() {
  return (
    <S.Wrapper>
      <iframe
        width="500"
        height="265"
        src="https://www.youtube.com/embed/vD5CkrxLhU8?si=_NYIyJincu_UgEvf"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </S.Wrapper>
  );
}
