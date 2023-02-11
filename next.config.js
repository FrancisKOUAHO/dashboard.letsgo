/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    forceSwcTransforms: true,
  },
  images: {
    domains: ['http://localhost:3030'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};


module.exports = nextConfig
