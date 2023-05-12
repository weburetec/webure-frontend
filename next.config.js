/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {domains: ["classicinformatics.com", "res.cloudinary.com", "www.karvyinfotech.com", "www.peppercontent.io", "www.webtechnomind.com"],},
};
// next.config.js
const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    return config
  }
})

module.exports = nextConfig;
