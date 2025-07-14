import i18n from './next-i18next.config.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
    styledComponents: true,
  },
  ...i18n,
};

export default nextConfig;
