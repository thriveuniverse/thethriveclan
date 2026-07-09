import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import Link from "next/link";

const essaysDirectory = path.join(process.cwd(), "content/essays");

// Essays are plain prose (paragraphs, *emphasis*, --- dividers) — no need
// for a full MDX pipeline, so this renders them directly to avoid the
// React 18 / Next 16 RSC version conflict in next-mdx-remote/rsc.
function renderEssayBody(content) {
  const blocks = content.trim().split(/\n\n+/);
  return blocks.map((block, i) => {
    if (block.trim() === '---') {
      return <hr key={i} className="my-8 border-[#2a2540]" />;
    }
    const parts = block.trim().split(/(\*[^*]+\*)/g);
    return (
      <p key={i} className="mb-6 leading-relaxed">
        {parts.map((part, j) =>
          part.startsWith('*') && part.endsWith('*') && part.length > 2
            ? <em key={j}>{part.slice(1, -1)}</em>
            : part
        )}
      </p>
    );
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const filePath = path.join(essaysDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return (
    <article className="min-h-screen bg-[#0d0b14] py-16" style={{ minHeight: '80vh' }}>
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">Essay</div>
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-white mb-3">{data.title || "Untitled"}</h1>
          {data.teaser && (
            <p className="text-lg text-[#b8b0d8]">{data.teaser}</p>
          )}
        </header>
        <div className="text-lg text-[#b8b0d8] max-w-none">
          {renderEssayBody(content)}
        </div>
        <div className="mt-12">
          <Link href="/blog" className="text-[#7a7598] hover:text-[#b8b0d8] text-sm transition-colors">
            ← Back to Notes
          </Link>
        </div>
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  if (!fs.existsSync(essaysDirectory)) return [];
  const files = fs.readdirSync(essaysDirectory);
  return files.map((file) => ({ slug: file.replace(/\.md$/, '') }));
}
