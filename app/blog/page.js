import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import QuickThought from "../components/QuickThought";

export const metadata = {
  title: 'Notes | The Thrive Clan',
  description: 'Thinking in progress — quick thoughts, essays, and the working papers behind the work.',
};

function getQuickThoughts() {
  const dir = path.join(process.cwd(), "content/quick-thoughts");
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).map((file) => {
    const { data, content } = matter(fs.readFileSync(path.join(dir, file), "utf8"));
    return { title: data.title, body: content.trim() };
  });
}

function getEssays() {
  const dir = path.join(process.cwd(), "content/essays");
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).map((file) => {
    const { data } = matter(fs.readFileSync(path.join(dir, file), "utf8"));
    return { title: data.title, teaser: data.teaser, slug: file.replace(/\.md$/, '') };
  });
}

const booksAndPapers = [
  {
    tag: 'Working Paper',
    title: 'The Development Trap of the Protected Generation',
    description: 'The full argument behind Last Prompt — the four mechanisms behind the gap, the eight architectural requirements any honest solution has to satisfy, and the early evidence from beta testing.',
    href: '/downloads/the-development-trap-of-the-protected-generation.pdf',
    download: true,
    linkLabel: 'Download the paper (PDF) →',
  },
  {
    tag: 'Working Paper',
    title: 'Compound Cascade Systems Modelling Framework',
    description: 'The formal academic framework underpinning Resilience Intelligence — how cascade modeling is structured, validated, and applied to complex systems.',
    href: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6695618',
    download: false,
    linkLabel: 'Read on SSRN →',
  },
];

export default function BlogPage() {
  const quickThoughts = getQuickThoughts();
  const essays = getEssays();

  return (
    <div className="min-h-screen bg-[#0d0b14] py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-4">Notes</h1>
        <p className="text-lg text-[#b8b0d8] leading-relaxed mb-16 max-w-2xl">
          Thinking in progress — sorted by how much time it asks of you, not by which
          project it belongs to.
        </p>

        {/* Quick Thoughts */}
        {quickThoughts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-xl font-bold text-white mb-2">Quick Thoughts</h2>
            <p className="text-[#7a7598] mb-6 text-sm">A couple of minutes, tap to read.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {quickThoughts.map((qt) => (
                <QuickThought key={qt.title} title={qt.title} body={qt.body} />
              ))}
            </div>
          </section>
        )}

        {/* Essays */}
        {essays.length > 0 && (
          <section className="mb-16">
            <h2 className="text-xl font-bold text-white mb-2">Essays</h2>
            <p className="text-[#7a7598] mb-6 text-sm">Fifteen minutes or so.</p>
            <div className="grid md:grid-cols-2 gap-6">
              {essays.map((essay) => (
                <Link
                  key={essay.slug}
                  href={`/blog/essays/${essay.slug}`}
                  className="block bg-[#13111e] rounded-xl p-6 border border-[#2a2540] hover:border-cyan-700 hover:shadow-lg transition-all group"
                >
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {essay.title}
                  </h3>
                  <p className="text-[#b8b0d8] leading-relaxed text-sm">{essay.teaser}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Books & Working Papers */}
        <section>
          <h2 className="text-xl font-bold text-white mb-2">Books &amp; Working Papers</h2>
          <p className="text-[#7a7598] mb-6 text-sm">The real commitment — an afternoon, or longer.</p>
          <div className="space-y-6">
            {booksAndPapers.map((item) => (
              <div key={item.title} className="bg-[#13111e] rounded-xl p-8 border border-[#2a2540]">
                <div className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-2">{item.tag}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-[#b8b0d8] mb-4 leading-relaxed">{item.description}</p>
                <a
                  href={item.href}
                  {...(item.download
                    ? { download: true }
                    : { target: '_blank', rel: 'noopener noreferrer' })}
                  className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
                >
                  {item.linkLabel}
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
