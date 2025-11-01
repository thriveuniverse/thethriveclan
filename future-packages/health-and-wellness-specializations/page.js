// app/health-and-wellness-specializations/page.js
import slugify from "@/lib/slugify";          // use "../../lib/slugify" if you don’t have the alias
import ProductGrid from "../components/ProductGrid";

export const metadata = {
  title: "Health & Wellness Specializations | The Thrive Clan",
  description: "Resources for health and wellness specializations.",
};

const keywords = [
  "Personalized health tracking",
  "Creatine for brain health",
  "Cold plunge therapy",
  "Postbiotic supplements",
  "Senior fitness training programs",
  "Prenatal/postnatal fitness solutions",
  "Remote worker health solutions",
  "Mental health tools for professionals",
];

const items = keywords.map((kw) => ({
  title: `${kw} Bundle`,
  slug: slugify(kw),
  img: `/images/products/${slugify(kw)}.jpg`,
  alt: `${kw} bundle`,
}));

export default function HealthWellnessSpecsPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      {/* TODO: blurb */}
      <h1 className="text-3xl font-semibold mb-6">Health & Wellness Specializations</h1>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Products & Bundles</h2>
      <ProductGrid items={items} />
    </section>
  );
}
