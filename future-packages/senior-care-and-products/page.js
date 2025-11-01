import ProductGrid from "../components/ProductGrid";

export const metadata = {
  title: "Senior Care & Products | The Thrive Clan",
  description: "Resources for senior care and products.",
};

const keywords = [
  "Senior care products",
  "Elderly wellness solutions",
  "Senior-friendly technology",
  "Aging-in-place solutions",
  "Senior fitness programs",
  "Elderly safety products",
  "Senior meal delivery services",
  "Memory care resources",
];

const slugify = (str) =>
  str.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const items = keywords.map((kw) => ({
  title: kw,
  slug: slugify(kw),
  img: `/images/products/${slugify(kw)}.jpg`,
  alt: kw,
}));

export default function SeniorCareProductsPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      {/* TODO: blurb */}
      <h2 className="text-2xl font-semibold mb-4">SEO Products & Bundles</h2>
      <ProductGrid items={items} />
    </section>
  );
}
