import { kakaoRestApiKey } from '../../../pages/_app';

export const useKakaoLogin = () => {
  const kakaoLogin = async () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoRestApiKey}&redirect_uri=http://schooleats.vercel.app/auth/kakao&response_type=code`;
  };

  const kakaoLogout = async () => {
    window.location.href = `https://kauth.kakao.com/oauth/logout?client_id=${kakaoRestApiKey}&logout_redirect_uri=http://schooleats.vercel.app`;
  };

  return {
    kakaoLogin,
    kakaoLogout,
  };
};
