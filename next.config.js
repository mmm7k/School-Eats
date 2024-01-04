/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  experimental: {
    emotion: true,
  },
};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: ['i.ibb.co'],
  },
};
