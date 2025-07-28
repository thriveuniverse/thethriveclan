// app/remote-work-and-productivity-tools/page.js
import slugify from "@/lib/slugify";
import ProductGrid from "@/components/ProductGrid";

export const metadata = {
  title: "Remote Work and Productivity Tools | The Thrive Clan",
  description: "Resources for remote work and productivity tools.",
};

const keywords = [
  "Remote work productivity tools 2025",
  "AI-powered task management",
  "Virtual collaboration platforms",
  "Remote team communication tools",
  "Digital nomad productivity solutions",
  "Remote work wellness tools",
  "Virtual team building platforms",
  "Remote work security solutions",
];

const items = keywords.map((kw) => ({
  title: `${kw} Bundle`,
  slug: slugify(kw),
  img: `/images/products/${slugify(kw)}.jpg`,
  alt: `${kw} bundle`,
}));

export default function RemoteWorkAndProductivityToolsPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      {/* TODO: blurb */}
      <h1 className="text-3xl font-semibold mb-6">Remote Work and Productivity Tools</h1>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Products & Bundles</h2>
      <ProductGrid items={items} />
    </section>
  );
}
