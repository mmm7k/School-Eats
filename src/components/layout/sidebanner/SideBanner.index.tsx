import * as S from './SideBanner.styles';

export default function SideBanner(): JSX.Element {
  return (
    <S.Wrapper>
      <S.Title>
        새로운 맛을 즐기는
        <br />
        사람들을 위한 커뮤니티
      </S.Title>
      <S.Image />
      <S.Gif />
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
