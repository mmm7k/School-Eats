import axios from 'axios';
import { useEffect } from 'react';
import { kakaoRestApiKey } from '../../_app';
import { useRecoilState } from 'recoil';
import {
  KakaoLoggedIn,
  Kakaoid,
  isLoggedIn,
  layoutEmail,
  userEmail,
} from '../../../src/commons/globalstate/globalstate';
import { useRouter } from 'next/router';

const CLIENT_ID = kakaoRestApiKey;
const REDIRECT_URI = 'http://localhost:3000/auth/kakao';

export default function token() {
  const router = useRouter();

  const [, setLoggedin] = useRecoilState<boolean | null>(isLoggedIn);
  const [, setKakaoLoggedin] = useRecoilState<boolean | null>(KakaoLoggedIn);
  const [, setLayoutEmail] = useRecoilState<string | null | undefined>(layoutEmail);
  const [, setUserEmailState] = useRecoilState<string | null | undefined>(userEmail);
  const [, setKakaoId] = useRecoilState<number | null | undefined>(Kakaoid);
  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get('code');
    const grant_type = 'authorization_code';
    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${code}`,
        {},
        {
          headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        }
      )
      .then((res) => {
        const { data } = res;
        const { access_token } = data;
        if (access_token) {
          axios
            .post(
              'https://kapi.kakao.com/v2/user/me',
              {},
              {
                headers: {
                  Authorization: `Bearer ${access_token}`,
                  'Content-type': 'application/x-www-form-urlencoded',
                },
              }
            )
            .then((res) => {
              console.log(res);
              const email = res.data.kakao_account.email;
              const id = res.data.id;
              setKakaoId(id);
              setUserEmailState(email);
              setLayoutEmail(email.split('@')[0]);
              setLoggedin(true);
              setKakaoLoggedin(true);
              router.push('/');
            });
        } else {
          alert('다시 로그인 해주세요.');
          router.push('/login');
        }
      });
  }, []);
  return <></>;
}
