import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { notFound } from 'next/navigation';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export default async function PostPage({ params }) {
  const filePath = path.join(postsDirectory, `${params.slug}.md`);
  if (!fs.existsSync(filePath)) {
    notFound();
  }
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  const mdxSource = await serialize(content);

  // Defensive date handling
  let formattedDate = "No date found";
  if (data.date) {
    const parsed = new Date(data.date);
    formattedDate = isNaN(parsed) ? "Invalid date" :
      parsed.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  return (
    <article>
      <h1>{data.title}</h1>
      <p>{formattedDate}</p>
      {/* Render markdown content here */}
    </article>
  );
}
