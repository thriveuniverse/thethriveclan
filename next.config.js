/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'], // Enables .md/.mdx as pages
};

const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
});

module.exports = withMDX(nextConfig);