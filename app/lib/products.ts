// app/lib/products.ts
export const products = {
  "1": {
    id: "1",
    slug: "ai-automation-tools",
    sector: "llmo",
    title: "Build, Grow, and Defend AI Automation Tools",
    description: "A strategic resource for leading the AI automation future...",
    img: "/images/ai-automation.jpg",
    options: {
      solo: { name: "Solo License", amount: 299700 },
      team: { name: "Team License", amount: 499700 },
      agency: { name: "Agency License", amount: 799700 },
    },
  },
};

export interface ProductOption {
  name: string;
  amount: number;
}