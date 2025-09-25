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
    filePath: "ai-automation-tools.pdf", // GCS path—update to your uploaded file
    options: {
      solo: { name: "Solo License", amount: 299700 },
      team: { name: "Team License", amount: 499700 },
      agency: { name: "Agency License", amount: 799700 },
    },
  },
  // Add more: { id: "2", slug: "next-product", filePath: "next.pdf", ... }
];

// Helper for webhook/UI: Get by ID (for Stripe metadata)
export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

// Helper for slug-based routes: Get by slug (for /products/[slug])
export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}