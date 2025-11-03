// /app/blog/[slug]/page.js (Individual Post - App Router Compatible)
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { notFound } from 'next/navigation';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export async function generateStaticParams() {
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

export default async function PostPage({ params }) {
  const filePath = path.join(postsDirectory, `${params.slug}.md`);
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const mdxSource = await serialize(content);

  return (
    <article className="max-w-4xl mx-auto px-4 py-16 prose prose-base">
      <h1>{data.title}</h1>
      <p className="text-sm text-gray-500">{data.date}</p>
      <MDXRemote {...mdxSource} />
    </article>
  );
}