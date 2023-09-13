/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.serebii.net'],
    unoptimized: true,
  },
};

module.exports = nextConfig;
