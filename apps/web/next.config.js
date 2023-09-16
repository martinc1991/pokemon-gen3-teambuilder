/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.serebii.net'],
    unoptimized: true,
    minimumCacheTTL: 60 * 60,
  },
};

module.exports = nextConfig;
