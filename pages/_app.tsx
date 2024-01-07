import { Global } from '@emotion/react';
import { globalStyles } from '../src/commons/styles/globalStyles';
import { AppProps } from 'next/app';
import Layout from '../src/components/layout';
import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import { RecoilRoot } from 'recoil';
import 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Head from 'next/head';
import Script from 'next/script';

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
export const kakaoKey = process.env.NEXT_PUBLIC_FIREBASE_KAKAO_KEY;
export const firebaseapp = initializeApp(firebaseConfig);
export const authInstance = getAuth();
export const db = getFirestore(firebaseapp);

declare global {
  // Kakao 함수를 전역에서 사용할 수 있도록 선언
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const kakaoInit = () => {
    // 페이지가 로드되면 실행
    window.Kakao.init(process.env.NEXT_PUBLIC_FIREBASE_KAKAO_KEY);
  };

  return (
    <>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_FIREBASE_KAKAO_KEY}&autoload=false`}
        strategy="beforeInteractive"
      />
      <Script src="https://developers.kakao.com/sdk/js/kakao.js" onLoad={kakaoInit}></Script>

      <Head>
        <title>School Eats!</title>
        <meta name="description" content="스쿨 잇츠에 오세욤" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1" />
        <meta property="og:title" content="School Eats!"></meta>
        <meta property="og:url" content="https://SchoolEats.vercel.app/"></meta>
        <meta property="og:image" content="https://i.ibb.co/gPXN2Ry/image.png"></meta>
        <meta property="og:description" content="스쿨 이츠 오세욤"></meta>
        <link rel="icon" href="/logo.png"></link>
      </Head>
      <RecoilRoot>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </>
  );
}
