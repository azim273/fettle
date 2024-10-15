/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const repoName = 'fettle';

const nextConfig = {
  assetPrefix: isProd ? `/${repoName}/` : '',
  basePath: isProd ? `/${repoName}` : '',
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
