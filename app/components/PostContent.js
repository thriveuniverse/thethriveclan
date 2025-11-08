"use client";

import { MDXRemote } from "next-mdx-remote";

export default function PostContent({ mdxSource }) {
  return <MDXRemote {...mdxSource} />;
}