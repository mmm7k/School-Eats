import Link from 'next/link';
import { useLogin } from '../../hooks/useLogin';
import { useMoveToPage } from '../../hooks/useMoveToPage';
import * as S from './LoginPage.styles';

export default function LoginPage(): JSX.Element {
  const { onChangeEmail, onChangePassword, onChangeCheckPassword, onClickLogin } = useLogin();
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onClickLogin(event);
  };

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
      <S.KakaoButtonWrapper>
        <S.KakaoLogo src="/kakao.png" />
        카카오로 간편 로그인
      </S.KakaoButtonWrapper>
      <S.Line>
        <hr style={{ width: '38%', height: '1px', backgroundColor: '#848484' }} />
        &nbsp;&nbsp;&nbsp;&nbsp;또는 &nbsp;&nbsp;&nbsp;&nbsp;
        <hr style={{ width: '38%', height: '1px', backgroundColor: '#848484' }} />
      </S.Line>
      <S.IdInput placeholder="아이디" />
      <S.PwInput placeholder="비밀번호" />
      <S.LoginButton>로그인</S.LoginButton>
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
