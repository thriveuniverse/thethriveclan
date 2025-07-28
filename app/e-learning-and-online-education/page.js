// app/e-learning-and-online-education/page.js
import slugify from "@/lib/slugify";          // use "../../lib/slugify" if you don’t have the alias
import ProductGrid from "@/components/ProductGrid";

export const metadata = {
  title: "E‑Learning & Online Education | The Thrive Clan",
  description: "Resources for e‑learning and online education.",
};

const keywords = [
  "Online learning platforms",
  "E-learning course development",
  "Online teaching degree programs",
  "Distance learning solutions",
  "Industry-specific training programs",
  "Professional certification courses",
  "Skills-based learning platforms",
  "Corporate training solutions",
];

const items = keywords.map((kw) => ({
  title: `${kw} Bundle`,
  slug: slugify(kw),
  img: `/images/products/${slugify(kw)}.jpg`,
  alt: `${kw} bundle`,
}));

export default function ELearningOnlineEdPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      {/* TODO: blurb */}
      <h1 className="text-3xl font-semibold mb-6">
        E‑Learning &amp; Online Education
      </h1>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Products &amp; Bundles
      </h2>
      <ProductGrid items={items} />
    </section>
  );
}
