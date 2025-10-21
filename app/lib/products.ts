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
  // ... your id "2" and "3" entries
];

// Helper for webhook/UI: Get by ID (for Stripe metadata)
export function getProductById(id: string): Product | undefined {
  return products.find((p: Product) => p.id === id); // Type p as Product
}

// Helper for slug-based routes: Get by slug (for /products/[slug])
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p: Product) => p.slug === slug); // Type p as Product
}