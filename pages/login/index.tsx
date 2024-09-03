import Link from 'next/link';
import * as S from '../../src/styles/login/Login.styles';
import { Checkbox, CheckboxProps } from 'antd';
import { useRecoilState } from 'recoil';
import { useLogin } from '../../src/services/login/useLogin';
import { useKakaoLogin } from '../../src/services/login/useKakoLogin';
import { autoLogin } from '../../src/commons/globalstate/globalstate';
import { useBackToPage } from '../../src/hooks/useBackToPage';

export default function LoginPage(): JSX.Element {
  const { register, handleSubmit, errors } = useLogin();
  const [, setCheck] = useRecoilState(autoLogin);
  const { kakaoLogin } = useKakaoLogin();
  const { onClickBackToPage } = useBackToPage();

  const onChange: CheckboxProps['onChange'] = (e) => {
    setCheck(e.target.checked);
  };

  return (
    <S.Wrapper>
      <S.HomeButtonWrapper>
        <S.BackButton onClick={onClickBackToPage} />
        <Link href="/">
          <S.HomeButton />
        </Link>
      </S.HomeButtonWrapper>
      <S.Title>만나서 반가워요!</S.Title>

      <S.KakaoButtonWrapper onClick={kakaoLogin}>
        <S.KakaoLogo src="/common/kakao.png" />
        카카오로 간편 로그인
      </S.KakaoButtonWrapper>
      <S.Line>
        <hr style={{ width: '38%', height: '1px', backgroundColor: '#848484' }} />
        &nbsp;&nbsp;&nbsp;&nbsp;또는 &nbsp;&nbsp;&nbsp;&nbsp;
        <hr style={{ width: '38%', height: '1px', backgroundColor: '#848484' }} />
      </S.Line>
      <S.Form onSubmit={handleSubmit}>
        <S.IdInput {...register('email')} type="email" placeholder="아이디" />
        {errors.email && <S.Error>{errors.email.message}</S.Error>}
        <S.PwInput {...register('password')} type="password" placeholder="비밀번호" />
        {errors.password && <S.Error>{errors.password.message}</S.Error>}
        <Checkbox onChange={onChange}>자동로그인</Checkbox>

        <S.LoginButton type="submit">로그인</S.LoginButton>
      </S.Form>
      <Link href="/signup">
        <S.SignUpText>회원가입</S.SignUpText>
      </Link>
      <Link href="/resetpassword">
        <S.FindPassword>비밀번호 찾기</S.FindPassword>
      </Link>
      <S.CouponDiv>
        <S.CouponImg>🤸</S.CouponImg>
        회원 가입하고 <S.ColorText>&nbsp;&nbsp;School Eats&nbsp;</S.ColorText>를 마음껏 즐겨보세요!
      </S.CouponDiv>
    </S.Wrapper>
  );
}
