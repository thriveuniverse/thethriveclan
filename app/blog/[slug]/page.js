import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";

// Dynamically load the client component for MDX rendering
const PostContent = dynamic(() => import("../../components/PostContent"), { ssr: false });

export default async function Page({ params }) {
  // Adjust path as needed for your repo structure
  const postsDirectory = path.join(process.cwd(), "content/posts");
  const filePath = path.join(postsDirectory, `${params.slug}.md`);

  if (!fs.existsSync(filePath)) {
    return (
      <article>
        <h1>404</h1>
        <p>Post not found.</p>
      </article>
    );
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
    <article>
      <h1>{data.title || "Untitled"}</h1>
      <p>{formattedDate}</p>
      {/* MDX content rendered safely in client */}
      <PostContent mdxSource={mdxSource} />
    </article>
  );
}
