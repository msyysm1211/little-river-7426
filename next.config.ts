import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  cacheComponents: true,
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp', 'image/png'],
    remotePatterns: [{ hostname: 'help-static-aliyun-doc.aliyuncs.com'}],
  },
};

export default nextConfig;
