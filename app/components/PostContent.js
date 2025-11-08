"use client";

import { MDXRemote } from "next-mdx-remote";
import { Suspense } from "react";  // NEW: Built-in React (no install)

export default function PostContent({ mdxSource }) {
  return (
    <Suspense fallback={<p className="text-center text-gray-500">Loading post...</p>}>  // NEW: Defers MDX, cuts shifts
      <MDXRemote {...mdxSource} />
    </Suspense>
  );
}