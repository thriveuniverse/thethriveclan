// app/electric-vehicle-accessories/page.js
import slugify from "@/lib/slugify";         // switch to "../../lib/slugify" if no alias
import ProductGrid from "../components/ProductGrid";

export const metadata = {
  title: "Electric Vehicle Accessories | The Thrive Clan",
  description: "Resources for electric vehicle accessories.",
};

const keywords = [
  "EV charging station accessories",
  "Electric vehicle storage solutions",
  "Portable EV chargers",
  "EV maintenance tools",
  "EV cable management systems",
  "Electric vehicle covers",
  "EV tire inflators",
  "Charging station organizers",
];

const items = keywords.map((kw) => ({
  title: `${kw} Bundle`,
  slug: slugify(kw),
  img: `/images/products/${slugify(kw)}.jpg`,
  alt: `${kw} bundle`,
}));

export default function ElectricVehicleAccessoriesPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      {/* TODO: blurb */}
      <h1 className="text-3xl font-semibold mb-6">Electric Vehicle Accessories</h1>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Products & Bundles</h2>
      <ProductGrid items={items} />
    </section>
  );
}
