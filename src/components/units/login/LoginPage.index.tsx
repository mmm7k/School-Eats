import Link from 'next/link';
import { useLogin } from '../../hooks/useLogin';
import * as S from './LoginPage.styles';
import { useKakaoLogin } from '../../hooks/useKakoLogin';

export default function LoginPage(): JSX.Element {
  const { register, handleSubmit, errors } = useLogin();
  const { kakaoLogin } = useKakaoLogin();

  return (
    <S.Wrapper>
      <S.HomeButtonWrapper>
        <Link href="/">
          <S.BackButton />
        </Link>
        <Link href="/">
          <S.HomeButton />
        </Link>
      </S.HomeButtonWrapper>
      <S.Title>만나서 반가워요!</S.Title>
      <S.KakaoButtonWrapper onClick={kakaoLogin}>
        <S.KakaoLogo src="/kakao.png" />
        카카오로 간편 로그인
      </S.KakaoButtonWrapper>
      <S.Line>
        <hr style={{ width: '38%', height: '1px', backgroundColor: '#848484' }} />
        &nbsp;&nbsp;&nbsp;&nbsp;또는 &nbsp;&nbsp;&nbsp;&nbsp;
        <hr style={{ width: '38%', height: '1px', backgroundColor: '#848484' }} />
      </S.Line>
      <S.form onSubmit={handleSubmit}>
        <S.IdInput {...register('email')} placeholder="아이디" />
        {errors.email && <S.error>{errors.email.message}</S.error>}
        <S.PwInput {...register('password')} placeholder="비밀번호" />
        {errors.password && <S.error>{errors.password.message}</S.error>}
        <S.LoginButton type="submit">로그인</S.LoginButton>
      </S.form>
      <Link href="signup">
        <S.SignUpText>회원가입</S.SignUpText>
      </Link>
      <S.CouponDiv>
        <S.CouponImg>🎁</S.CouponImg>
        회원 가입시 <S.ColorText>&nbsp;&nbsp;제휴 맛집 쿠폰&nbsp;&nbsp;</S.ColorText> 즉시 지급
      </S.CouponDiv>
    </S.Wrapper>
  );
}
