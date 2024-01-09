import { useRecoilState } from 'recoil';
import { KakaoLoggedIn, isLoggedIn, layoutEmail, userEmail } from '../../commons/globalstate/globalstate';
import { useRouter } from 'next/router';

export const useKakaoLogin = () => {
  const router = useRouter();
  const [, setLoggedin] = useRecoilState<boolean | null>(isLoggedIn);
  const [, setKakaoLoggedin] = useRecoilState<boolean | null>(KakaoLoggedIn);
  const [, setLayoutEmail] = useRecoilState<string | null | undefined>(layoutEmail);
  const [, setUserEmailState] = useRecoilState<string | null | undefined>(userEmail);

  const kakaoLogin = async () => {
    //@ts-ignore
    Kakao.Auth.login({
      success: function (authObj: any) {
        router.push('/');
        setLoggedin(true);
        setKakaoLoggedin(true);
        // 사용자 정보 요청
        //@ts-ignore
        Kakao.API.request({
          url: '/v2/user/me',
          success: function (response: any) {
            const email = response.kakao_account.email;
            const emailPrefix = email.split('@')[0];
            setUserEmailState(email); // 사용자 이메일 저장
            setLayoutEmail(emailPrefix); // 이메일의 '@' 앞 부분 저장
          },
          fail: function (error: any) {
            console.log(error);
          },
        });
      },
      fail: function (err: any) {
        console.error(err);
      },
    });
  };
  const kakaoLogout = () => {
    //@ts-ignore
    if (Kakao.Auth.getAccessToken()) {
      //@ts-ignore
      Kakao.API.request({
        url: '/v1/user/unlink',
        success: function (response: any) {
          setKakaoLoggedin(false);
          setLoggedin(false);
          setLayoutEmail(null);
          setUserEmailState(null);
          localStorage.removeItem('recoil-persist');
          window.location.href = '/';
        },
        fail: function (error: any) {
          console.log(error);
        },
      });
      //@ts-ignore
      Kakao.Auth.setAccessToken(undefined);
    }
  };

  return {
    kakaoLogin,
    kakaoLogout,
  };
};
