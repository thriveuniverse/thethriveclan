import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const essaysDirectory = path.join(process.cwd(), "content/essays");

// Essays are plain prose (paragraphs, *emphasis*, [links](url), --- dividers) — no need
// for a full MDX pipeline, so this renders them directly to avoid the
// React 18 / Next 16 RSC version conflict in next-mdx-remote/rsc.
function renderInline(text) {
  const parts = text.split(/(\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, j) => {
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      return <em key={j}>{part.slice(1, -1)}</em>;
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      return (
        <a
          key={j}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors"
        >
          {label}
        </a>
      );
    }
    return part;
  });
}

function renderEssayBody(content) {
  const blocks = content.trim().split(/\n\n+/);
  return blocks.map((block, i) => {
    const trimmedBlock = block.trim();
    if (trimmedBlock === '---') {
      return <hr key={i} className="my-8 border-[#2a2540]" />;
    }
    if (trimmedBlock.startsWith('>')) {
      const quote = trimmedBlock.split('\n').map((line) => line.replace(/^>\s?/, '')).join(' ');
      return (
        <blockquote key={i} className="my-8 pl-6 border-l-4 border-cyan-700 italic text-white">
          {quote}
        </blockquote>
      );
    }
    return (
      <p key={i} className="mb-6 leading-relaxed">
        {renderInline(trimmedBlock)}
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
    <article className="min-h-screen bg-[#0d0b14] py-10 md:py-16" style={{ minHeight: '80vh' }}>
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">Essay</div>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-3">{data.title || "Untitled"}</h1>
          {data.teaser && (
            <p className="text-lg text-[#e2dff2]">{data.teaser}</p>
          )}
        </header>
        {data.image && (
          <div className="mb-6 flex justify-center">
            <Image
              src={data.image}
              alt={data.imageAlt || ""}
              width={data.imageWidth}
              height={data.imageHeight}
              className="h-auto w-auto max-h-[28vh] max-w-xs sm:max-w-sm rounded-lg"
              priority
            />
          </div>
        )}
        <div className="text-lg text-[#e2dff2] max-w-none">
          {renderEssayBody(content)}
        </div>
        <div className="mt-12">
          <Link href="/blog" className="text-[#7a7598] hover:text-[#e2dff2] text-sm transition-colors">
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
