'use client';  // Client-only for context

import { MDXProvider } from '@mdx-js/react';

// Your existing mdxComponents (move from layout.js)
const mdxComponents = {
  h1: ({ children }) => (
    <h1 className="text-4xl font-bold mb-6 leading-tight text-gray-900">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-semibold mt-8 mb-4 pb-2 border-b-2 border-gray-200 text-gray-800">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-bold mt-6 mb-3 text-gray-700">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mb-6 leading-relaxed text-gray-700">
      {children}
    </p>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-6 pl-6 border-l-4 border-gray-300 bg-gray-50 py-2 italic text-gray-600">
      {children}
    </blockquote>
  ),
};

export default function MDXWrapper({ children }) {
  return <MDXProvider components={mdxComponents}>{children}</MDXProvider>;
}