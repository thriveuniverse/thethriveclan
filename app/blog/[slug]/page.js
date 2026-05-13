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
      className="min-h-screen bg-[#0d0b14] py-16"
      style={{ minHeight: '80vh' }}
    >
      <div className="max-w-3xl mx-auto px-4">
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-white mb-3">{data.title || "Untitled"}</h1>
          <time className="text-[#7a7598] block mb-2 text-sm">{formattedDate}</time>
          {data.description && (
            <p className="text-lg text-[#b8b0d8]">{data.description}</p>
          )}
        </header>
        <div className="prose prose-invert max-w-none">
          <StablePostContent mdxSource={mdxSource} />
        </div>
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  if (!fs.existsSync(postsDirectory)) return [];
  const files = fs.readdirSync(postsDirectory);
  return files.map((file) => ({ slug: file.replace(/\.md$/, '') }));
}