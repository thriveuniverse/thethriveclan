// app/sustainable-and-eco-friendly-products/page.js
import slugify from "@/lib/slugify";          // use "../../lib/slugify" if no alias
import ProductGrid from "../components/ProductGrid";

export const metadata = {
  title: "Sustainable & Eco‑Friendly Products | The Thrive Clan",
  description: "Resources for sustainable and eco‑friendly products.",
};

const keywords = [
  "Sustainable fashion brands",
  "Eco-friendly packaging solutions",
  "Zero-waste products",
  "Renewable energy home solutions",
  "Sustainable living guides for specific demographics",
  "Eco-friendly business solutions",
  "Green technology comparisons",
  "Sustainable product reviews",
];

const items = keywords.map((kw) => ({
  title: `${kw} Bundle`,
  slug: slugify(kw),
  img: `/images/products/${slugify(kw)}.jpg`,
  alt: `${kw} bundle`,
}));

export default function SustainableEcoProductsPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      {/* TODO: blurb */}
      <h1 className="text-3xl font-semibold mb-6">
        Sustainable &amp; Eco‑Friendly Products
      </h1>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Products &amp; Bundles
      </h2>
      <ProductGrid items={items} />
    </section>
  );
}
