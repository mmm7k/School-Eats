import { useLogin } from '../../hooks/useLogin';
import { useMoveToPage } from '../../hooks/useMoveToPage';
import { Base, LoginButton, LoginHeadText, LoginInput, LoginText, Wrapper } from './LoginPage.styles';
import { Modal } from 'antd';

export default function LoginPage(): JSX.Element {
  const { onChangeEmail, onChangePassword, onChangeCheckPassword, onClickLogin } = useLogin();
  const { onClickMoveToPage } = useMoveToPage();
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onClickLogin(event);
  };
  return (
    <Base>
      <Wrapper>
        <LoginHeadText>로그인</LoginHeadText>
        <form onSubmit={handleSubmit}>
          <LoginText>* 이메일</LoginText>
          <LoginInput type="email" onChange={onChangeEmail} placeholder="example@imcoach.com"></LoginInput>
          <LoginText>* 비밀번호</LoginText>
          <LoginInput type="password" onChange={onChangePassword} placeholder="******"></LoginInput>
          <LoginButton type="submit">로그인</LoginButton>
        </form>
        <LoginButton onClick={onClickMoveToPage('/signup')}>회원가입</LoginButton>
      </Wrapper>
    </Base>
  );
}
