module.exports = {
  // No need for turbopack flag if using Next.js 15.4.2 default
}
const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withContentlayer(nextConfig);