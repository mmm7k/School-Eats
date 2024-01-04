import { useSignup } from '../../hooks/useSignup';
import {
  Base,
  PasswordText,
  SignupButton,
  SignupHeadText,
  SignupInput,
  SignupText,
  Wrapper,
} from './SignupPage.styles';

export default function SignupPage(): JSX.Element {
  const { onChangeEmail, onChangePassword, onChangeCheckPassword, onClickSignup, match } = useSignup();
  return (
    <Base>
      <Wrapper>
        <SignupHeadText>회원가입</SignupHeadText>
        <SignupText>* 이메일</SignupText>
        <SignupInput type="email" onChange={onChangeEmail} placeholder="example@imcoach.com"></SignupInput>
        <SignupText>* 비밀번호</SignupText>
        <SignupInput type="password" onChange={onChangePassword} placeholder="******"></SignupInput>
        <PasswordText>비밀번호는 6자리 이상 입력해주세요.</PasswordText>
        <SignupText>* 비밀번호 확인</SignupText>
        <SignupInput type="password" onChange={onChangeCheckPassword} placeholder="******"></SignupInput>
        <SignupButton type="submit" onClick={onClickSignup}>
          가입하기
        </SignupButton>
      </Wrapper>
    </Base>
  );
}
