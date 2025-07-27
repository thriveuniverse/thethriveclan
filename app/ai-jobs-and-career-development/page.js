import slugify from "@/lib/slugify";
import ProductGrid from "@/components/ProductGrid"; // <-- or keep your relative path


export const metadata = {
  title: "AI Jobs & Career Development | The Thrive Clan",
  description: "Resources for AI jobs and career development.",
};

const keywords = [
  "Remote AI jobs",
  "AI career transition strategies",
  "Machine learning engineer remote",
  "AI ethics specialist training",
  "AI prompt engineer positions",
  "AI data labeler roles",
  "Remote AI support analyst",
  "AI-powered content specialists",
];



const items = keywords.map((kw) => ({
  title: kw,
  slug: slugify(kw),
  img: `/images/products/${slugify(kw)}.jpg`,
  alt: kw,
}));

export default function AIJobsCareerDevPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      {/* TODO: blurb */}
      <h2 className="text-2xl font-semibold mb-4">SEO Products & Bundles</h2>
      <ProductGrid items={items} />
    </section>
  );
}
