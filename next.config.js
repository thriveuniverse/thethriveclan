/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'], // Enables .md/.mdx as pages
  swcMinify: true,  // NEW: Enables SWC minifier for prod bundles (reduces unminified JS)
  experimental: {   // NEW: Targets modern browsers (cuts legacy polyfills)
    browsersListForSwc: true,
  },
  webpack: (config, { dev, isServer }) => {  // NEW: No Node polyfills in browser (legacy JS fix)
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