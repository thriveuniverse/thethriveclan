import ProductGrid from "../../components/ProductGrid";

export const metadata = {
  title: "E‑Learning & Online Education | The Thrive Clan",
  description: "Resources for e-learning and online education.",
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

const slugify = (str) =>
  str.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

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
      <h1 className="text-3xl font-semibold mb-6">E‑Learning & Online Education</h1>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Products & Bundles</h2>
      <ProductGrid items={items} />
    </section>
  );
}
