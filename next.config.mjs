/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    forceSwcTransforms: true,
  },
  images: {
    domains: ['http://localhost:3030'],
  },
}

export default nextConfig;
