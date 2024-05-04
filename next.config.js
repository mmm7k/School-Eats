/** @type {import('next').NextConfig} */

const { default: styled } = require('styled-components');

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  experimental: {
    emotion: true,
  },
  webpack(config, options) {
    // SVG 파일을 컴포넌트로 가져오기 위한 설정
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
};

// module.exports = nextConfig;
module.exports = withPWA(nextConfig);
