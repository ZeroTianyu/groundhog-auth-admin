/** @type {import('next').NextConfig} */
const nextConfig = {

  async rewrites() {
    return [
      {
        source: '/api/:path*', // 捕获所有 /api/ 下的请求
        destination: 'http://localhost:8082/:path*', // 将请求转发到外部 API
      },
    ];
  },
};

export default nextConfig;
