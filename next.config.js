/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    forceSwcTransforms: true,
  },
  images: {
    domains: ['ssl.gstatic.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};


module.exports = nextConfig
