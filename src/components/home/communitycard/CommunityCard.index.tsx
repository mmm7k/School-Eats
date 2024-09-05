import Image from 'next/image';
import * as S from './CommunityCard.styles';
import Link from 'next/link';

export default function CommunityCard() {
  return (
    <>
      <S.SubTitle>여러분만의 맛집은?</S.SubTitle>
      <S.Title>맛집 공유 커뮤니티! 💬 </S.Title>
      <Link href="/boards">
        <S.ImageWrapper>
          <Image
            src={
              '/home/communitycard/communitycard.png' ||
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
            }
            alt={'커뮤니티 카드'}
            width={470}
            height={500}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
          />
        </S.ImageWrapper>
      </Link>
    </>
  );
}
