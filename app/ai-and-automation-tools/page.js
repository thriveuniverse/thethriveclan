import slugify from "@/lib/slugify";
import ProductGrid from "@/components/ProductGrid"; // <-- or keep your relative path
// app/ai-and-automation-tools/page.js


export const metadata = {
  title: "AI & Automation Tools | The Thrive Clan",
  description: "Resources for AI and automation tools.",
};

const keywords = [
  "AI automation tools for small business",
  "AI workflow automation",
  "Business process automation tools",
  "AI-powered productivity software",
  "AI prompt engineering services",
  "Automated testing services for web applications",
  "AI ethics compliance tools",
  "Machine learning automation platforms",
];



const items = keywords.map((kw) => ({
  title: `${kw} Bundle`,
  slug: slugify(kw),
  img: `/images/products/${slugify(kw)}.jpg`,
  alt: `${kw} bundle`,
}));

export default function AIAutomationToolsPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">AI & Automation Tools</h1>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Products & Bundles</h2>
      <ProductGrid items={items} />
    </section>
  );
}
