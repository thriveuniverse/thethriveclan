/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'], // Enables .md/.mdx as pages
  swcMinify: true,  // Enables SWC minifier for prod bundles (reduces unminified JS)
  webpack: (config, { dev, isServer }) => {  // No Node polyfills in browser (legacy JS fix)
    if (!dev && !isServer) {
      config.resolve.fallback = { ...config.resolve.fallback, fs: false };
    }
    return config;
  },
};

const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
});

module.exports = withMDX(nextConfig);