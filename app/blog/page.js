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

    let formattedDate = "No date found";
    if (data.date) {
      const parsed = new Date(data.date);
      formattedDate = isNaN(parsed) ? "Invalid date" : parsed.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    }

    return {
      slug: filename.replace(/\.md$/, ''),
      title: data.title,
      date: data.date || '0000-00-00',  // For sort; format later
      formattedDate,  // For display
      description: data.description,
    };
  }).sort((a, b) => new Date(b.date) - new Date(a.date));  // FIXED: Parse dates for sort

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Blog Posts</h1>
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.slug} className="bg-white p-6 rounded-lg shadow-sm">
              <Link href={`/blog/${post.slug}`} className="text-2xl font-bold text-cyan-600 hover:text-cyan-700 underline underline-offset-4 block mb-2">
                {post.title}
              </Link>
              <p className="text-gray-600 mb-2">{post.description}</p>
              <p className="text-sm text-gray-500">{post.formattedDate}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}