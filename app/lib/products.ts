// app/lib/products.ts
export interface ProductOption {
  name: string;
  amount: number;
}

export interface Product {
  id: string;
  slug: string;
  sector: string;
  title: string;
  description: string;
  img: string;
  filePath: string; // For GCS signed URLs
  options: Record<string, ProductOption>; // e.g., { solo: { ... } }
}

export const products: Product[] = [
  {
     id: "1",
    slug: "ai-automation-tools",
    sector: "llmo",
    title: "Build, Grow, and Defend AI Automation Tools",
    description: "A strategic resource for leading the AI automation future...",
    img: "/images/ai-automation.jpg",
    filePath: "zips/ai-and-automation-tools-final.zip",
    options: {
      solo: { name: "Solo License", amount: 299700 },
      team: { name: "Team License", amount: 499700 },
      agency: { name: "Agency License", amount: 799700 },
    },
  },
  {
    id: "2",
    slug: "health-wellness-report",
    sector: "health",
    title: "Understanding Health & Wellness Internet Evolution",
    description: "A Detailed Guide to Future-Proofing Health & Wellness Businesses in an AIDriven Market.",
    img: "/images/health-wellness-report.jpg",
    filePath: "zips/health-wellness-report.zip",
    options: {
      standard: { name: "Report License", amount: 22000 }, // €220.00 one-time
    },
  },
  {
    id: "3",
    slug: "health-wellness-bundle-with-report",
    sector: "health",
    title: "Full Bundle with Report Included",
    description: "The complete package plus the mega report at a bundled price.",
    img: "/images/ai-automation-bundle.jpg",
    filePath: "zips/ai-automation-full-bundle.zip",
    options: {
      solo: { name: "Solo Bundle License", amount: 349700 }, // €3,497.00 (discounted)
      team: { name: "Team Bundle License", amount: 549700 }, // €5,497.00
      agency: { name: "Agency License", amount: 849700 }, // €8,497.00
    },
  },
];

// Helper for webhook/UI: Get by ID (for Stripe metadata)
export function getProductById(id: string): Product | undefined {
  return products.find((p: Product) => p.id === id); // Type p as Product
}

// Helper for slug-based routes: Get by slug (for /products/[slug])
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p: Product) => p.slug === slug); // Type p as Product
}