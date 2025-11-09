import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { notFound } from "next/navigation";
import StablePostContent from '../StablePostContent';  // FIXED: Relative path (up one folder from [slug])

const postsDirectory = path.join(process.cwd(), "content/posts");

export default async function Page({ params }) {
  const filePath = path.join(postsDirectory, `${params.slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const mdxSource = await serialize(content);

  // Format date
  let formattedDate = "No date found";
  if (data.date) {
    const parsed = new Date(data.date);
    formattedDate = isNaN(parsed)
      ? "Invalid date"
      : parsed.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
  }

  return (
    <article 
      className="max-w-4xl mx-auto px-4 py-8" 
      style={{ minHeight: '80vh' }}  // Reserves space for CLS
    >
      {/* Title Banner */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">{data.title || "Untitled"}</h1>
        <time className="text-gray-500 block mb-2">{formattedDate}</time>
        {data.description && (
          <p className="text-lg text-gray-600">{data.description}</p>
        )}
      </header>
      <StablePostContent mdxSource={mdxSource} />
    </article>
  );
}

export async function generateStaticParams() {
  const files = fs.readdirSync(postsDirectory);
  return files.map((file) => ({ slug: file.replace(/\.md$/, '') }));
}