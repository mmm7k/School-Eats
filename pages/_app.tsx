import { Global } from '@emotion/react';
import { globalStyles } from '../src/commons/styles/globalStyles';
import { AppProps } from 'next/app';
import Layout from '../src/components/layout';
import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import { RecoilRoot } from 'recoil';
import 'firebase/auth';
import React, { useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Head from 'next/head';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import { getStorage } from 'firebase/storage';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
export const kakaoKey = process.env.NEXT_PUBLIC_KAKAO_KEY;
export const kakaoRestApiKey = process.env.NEXT_PUBLIC_KAKAO_RESTAPIKEY;
export const kakaoAdminKey = process.env.NEXT_PUBLIC_KAKAO_ADMINKEY;
export const firebaseapp = initializeApp(firebaseConfig);
export const authInstance = getAuth();
export const db = getFirestore(firebaseapp);
export const storage = getStorage(firebaseapp);

declare global {
  interface Window {
    Kakao: any;
  }
  const kakao: any;
}

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  const kakaoInit = () => {
    // 페이지가 로드되면 실행
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      const sessionExpiry = localStorage.getItem('sessionExpiry');
      if (sessionExpiry) {
        const now = new Date().getTime();
        if (now > parseInt(sessionExpiry, 10)) {
          authInstance.signOut();
          alert('로그인 세션이 만료되었습니다. 다시 로그인 해주세요.');
          // clearInterval(interval); // 인터벌 정지
          localStorage.removeItem('sessionExpiry');
          localStorage.removeItem('recoil-persist');
          window.location.href = '/';
          // 필요한 로그아웃 처리
        }
      }
    }, 1000); // 매 1초마다 실행

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 정지
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      {/* <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_FIREBASE_KAKAO_KEY}&autoload=false`}
        strategy="beforeInteractive"
      /> */}
      <Script
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_KEY}&autoload=false&libraries=services,clusterer,drawing`}
        strategy="beforeInteractive"
      ></Script>
      <Script src="https://developers.kakao.com/sdk/js/kakao.js" onLoad={kakaoInit}></Script>

      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`} />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Head>
        <title>School Eats!</title>
        <meta name="description" content="대학생들의 점심 고민을 해결해줄 School Eats!" />
        <meta charSet="UTF - 8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1" />
        <meta property="og:title" content="School Eats!"></meta>
        <meta property="og:url" content="https://SchoolEats.vercel.app/"></meta>
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/school-eats.appspot.com/o/metaimage.jpg?alt=media&token=4a5bbe21-8cc3-4468-adc8-52f937cd477f"
        ></meta>
        <meta property="og:description" content="대학생들의 점심 고민을 해결해줄 School Eats!"></meta>
        <link rel="icon" href="/logo.png"></link>
        <link rel="manifest" href="/manifest.json" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <RecoilRoot>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Analytics />
      </RecoilRoot>
    </>
  );
}
