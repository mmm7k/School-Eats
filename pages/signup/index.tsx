import Link from 'next/link';
import * as S from './SignupPage.styles';
import { useKakaoLogin } from '../../src/services/login/useKakoLogin';
import { useSignup } from '../../src/services/login/useSignup';

export default function SignupPage(): JSX.Element {
  const { kakaoLogin } = useKakaoLogin();
  const { register, handleSubmit, errors } = useSignup();

  return (
    <S.Wrapper>
      <S.HomeButtonWrapper>
        <Link href="/login">
          <S.BackButton />
        </Link>
        <S.Title>회원가입</S.Title>
        <Link href="/">
          <S.HomeButton />
        </Link>
      </S.HomeButtonWrapper>
      <S.CouponDiv>
        <S.CouponImg>🤸</S.CouponImg>
        회원 가입하고 <S.ColorText>&nbsp;&nbsp;School Eats&nbsp;</S.ColorText>를 마음껏 즐겨보세요!
      </S.CouponDiv>
      <S.kakaoText>간편 회원가입</S.kakaoText>
      <S.Button onClick={kakaoLogin}>
        <S.logo src="/kakao.png" />
      </S.Button>
      <>
        <hr style={{ margin: '8%', width: '100%', height: '1px', backgroundColor: '#E6E6E6' }} />
      </>
      <S.form onSubmit={handleSubmit}>
        <S.InputTitle>이메일</S.InputTitle>
        <S.Input {...register('email')} type="email" placeholder="이메일을 입력해주세요." />
        {errors.email && <S.error>{errors.email.message}</S.error>}

        <S.InputTitle>비밀번호</S.InputTitle>
        <S.Input {...register('password')} type="password" placeholder="비밀번호를 입력해주세요" />
        {errors.password && <S.error>{errors.password.message}</S.error>}

        <S.InputTitle>비밀번호 확인</S.InputTitle>
        <S.Input {...register('checkPassword')} type="password" placeholder="비밀번호를 입력해주세요" />
        {errors.checkPassword && <S.error>{errors.checkPassword.message}</S.error>}

        <S.SignupButton type="submit">회원가입하기</S.SignupButton>
      </S.form>
      <Link href="/login">
        <S.LoginRouter>
          이미 아이디가 있으신가요?&nbsp;&nbsp;
          <S.UnderLine>로그인</S.UnderLine>
        </S.LoginRouter>
      </Link>
    </S.Wrapper>
  );
}
