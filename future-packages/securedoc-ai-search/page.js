// app/securedoc-ai-search/page.js
import slugify from "@/lib/slugify";          // use "../../lib/slugify" if you don’t have the alias
import ProductGrid from "../components/ProductGrid";

export const metadata = {
  title: "Secure Document AI Analysis | The Thrive Clan",
  description: "Reliable offline analysis to allow your to interrogate documents securely.",
};

const keywords = [
  "Secure document analysis",
  "Secure RAG",
  "RAG search kit",
  "AI document analysis",
  "Secure local run document analysis",
  "Local AI document processing",
];

const items = keywords.map((kw) => ({
  title: `${kw} Bundle`,
  slug: slugify(kw),
  img: `/images/products/${slugify(kw)}.jpg`,
  alt: `${kw} bundle`,
}));

export default function SecureDocAIAnalysis() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      {/* TODO: blurb */}
      <h1 className="text-3xl font-semibold mb-6">Secure Document AI Analysis</h1>

      <h2 className="text-2xl font-semibold mt-10 mb-4">AI Document Analysis with NO Cloud Storage and NO Uploads</h2>
      <ProductGrid items={items} />
    </section>
  );
}
