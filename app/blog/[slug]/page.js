import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";  // NEW: For clean 404 handling

// Dynamically load the client component for MDX rendering
const PostContent = dynamic(() => import("../../components/PostContent"), { ssr: false });

const postsDirectory = path.join(process.cwd(), "content/posts");  // Hoisted for generateStaticParams

export default async function Page({ params }) {
  const filePath = path.join(postsDirectory, `${params.slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();  // NEW: Uses Next.js notFound() for proper 404 page
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const mdxSource = await serialize(content);  // Serializes body (remove # H1 from MD file to avoid repeat)

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
    <article className="max-w-4xl mx-auto px-4 py-8">  {/* NEW: Wrapper for centering/padding */}
      {/* Title Banner: Uses front matter—no visual repeat with body H1 */}
      <header className="mb-8 text-center">  {/* NEW: Styled header for title/date/desc */}
        <h1 className="text-4xl font-bold mb-2">{data.title || "Untitled"}</h1>
        <time className="text-gray-500 block mb-2">{formattedDate}</time>
        {data.description && (
          <p className="text-lg text-gray-600">{data.description}</p>
        )}
      </header>
      {/* MDX content rendered safely in client—body starts with ## or para */}
      <PostContent mdxSource={mdxSource} />
    </article>
  );
}

// NEW: For static generation (SEO/SSG bonus—pre-builds all posts)
export async function generateStaticParams() {
  const files = fs.readdirSync(postsDirectory);
  return files.map((file) => ({ slug: file.replace(/\.md$/, '') }));
}