import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  cacheComponents: true,
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{ hostname: 'help-static-aliyun-doc.aliyuncs.com'}],
    qualities: [25, 50, 71, 72, 75, 100],
  },
};

export default nextConfig;
