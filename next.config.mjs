/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // 允许所有域名（不推荐用于生产）
      },
      {
        protocol: 'https',
        hostname: '*.bing.net', // 这将匹配所有 bing.net 子域名
      },
      {
        protocol: 'https',
        hostname: 'pluspng.com',
      },
      {
        protocol: 'https',
        hostname: 'gss0.baidu.com',
      },
      {
        protocol: 'https',
        hostname: 'tse1-mm.cn.bing.net', // 具体的 Bing 图片域名
      },
      {
        protocol: 'https',
        hostname: 'tse3-mm.cn.bing.net', // 添加新的 Bing 图片域名
      },
      {
        protocol: 'https',
        hostname: 'tse2-mm.cn.bing.net', // 添加新的 Bing 图片域名
      },
      {
        protocol: 'https',
        hostname: 'purepng.com', // 添加 purepng.com 域名
      },
      {
        protocol: 'https',
        hostname: 'logo800.cn', // 添加 logo800.cn 域名
      },
      {
        protocol: 'https',
        hostname: 'stringfestanalytics.com', // 添加 stringfestanalytics.com 域名
      },
      {
        protocol: 'https',
        hostname: 'sjc.microlink.io', // 添加 sjc.microlink.io 域名
      },
      {
        protocol: 'https',
        hostname: 'www.pngall.com', // 添加 www.pngall.com 域名
      },
      {
        protocol: 'https',
        hostname: 'logos-world.net', // 添加 logos-world.net 域名
      },
    ],
  },
};

export default nextConfig;
