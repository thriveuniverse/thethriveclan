import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { notFound } from 'next/navigation';

const postsDirectory = path.join(process.cwd(), 'content/posts');

// Client Wrapper for MDXRemote (New File: /components/MDXRenderer.jsx)
function MDXRenderer({ mdxSource }) {
  'use client';
  return <MDXRemote {...mdxSource} />;
}

export default async function PostPage({ params }) {
  const filePath = path.join(postsDirectory, `${params.slug}.md`);
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const mdxSource = await serialize(content);

const formattedDate = new Date(data.date + 'T00:00:00Z').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
  <article className="max-w-4xl mx-auto px-4 py-16 prose prose-base">
    <h1>{data.title}</h1>
    <p className="text-sm text-gray-500">{formattedDate}</p>
    <MDXRemote {...mdxSource} />
  </article>
);
}