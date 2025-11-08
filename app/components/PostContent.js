"use client";

import { MDXRemote } from "next-mdx-remote";
import Image from 'next/image';  // NEW: Built-in for MDX images

export default function PostContent({ mdxSource }) {
  return (
    <MDXRemote
      {...mdxSource}
      components={{
        img: ({ src, alt, ...props }) => (  // NEW: Overrides <img> tags in MDX
          <Image
            src={src}
            alt={alt || 'Blog image'}  // NEW: Fallback alt for Acc
            width={props.width || 600}  // NEW: Reserves default width
            height={props.height || 400}  // NEW: Reserves default height
            style={{ objectFit: 'cover', maxWidth: '100%' }}  // NEW: Responsive, no overflow
            {...props}
          />
        ),
      }}
    />
  );
}