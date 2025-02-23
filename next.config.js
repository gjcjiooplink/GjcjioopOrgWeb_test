/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'ts1.cn.mm.bing.net',
      'tse1-mm.cn.bing.net',
      'tse3-mm.cn.bing.net',
      'tse2-mm.cn.bing.net',
      'pluspng.com',
      'example.com',
      'googleusercontent.com',
      'gravatar.com',
      'imgur.com',
      'unsplash.com',
      'picsum.photos',
      'via.placeholder.com',
      'gss0.baidu.com',
      'purepng.com',
      'logo800.cn',
      'stringfestanalytics.com',
      'sjc.microlink.io',
      'www.pngall.com',
      'logos-world.net',
    ],
  },
}

module.exports = nextConfig

