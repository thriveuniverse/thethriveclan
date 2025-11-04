import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export default function BlogPage() {
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    // Defensive date handling:
    let formattedDate = "No date found";
    if (data.date) {
      // No need to append T00:00:00Z, ISO date string is fine
      const parsed = new Date(data.date);
      formattedDate = isNaN(parsed) ? "Invalid date" :
        parsed.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    }

    return {
      slug: filename.replace(/\.md$/, ''),
      title: data.title,
      date: formattedDate,
      description: data.description,
    };
  }).sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            <p>{post.description}</p>
            <p>{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
