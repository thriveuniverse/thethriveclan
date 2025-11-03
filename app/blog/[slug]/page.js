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

export async function getStaticProps({ params }) {
  const filePath = path.join(postsDirectory, `${params.slug}.md`);
  if (!fs.existsSync(filePath)) return { notFound: true };

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const mdxSource = await serialize(content);

  return { props: { post: { ...data, mdxSource } } };
}

export default function PostPage({ post }) {
  return (
    <article className="max-w-4xl mx-auto px-4 py-16 prose prose-base">
      <h1>{post.title}</h1>
      <p className="text-sm text-gray-500">{post.date}</p>
      <MDXRemote {...post.mdxSource} />
    </article>
  );
}