// app/lib/products.ts
export const products = {
  1: {
    slug: "ai-automation-tools-for-small-business",
    sector: "ai-and-automation-tools",
    title: "AI Automation Mastery Bundle",
    options: {
      standard: {
        name: "Standard Package",
        amount: 49000, // $490.00 in cents
      },
      // Add more options (e.g., premium) later if needed
    },
    description: "150 keywords, 35 templates, 20 blog outlines—done for you.",
    img: "/images/products/ai-automation-bundle-og.jpg",
  },
  // Add more products (e.g., ID 2) later
};

export type ProductId = keyof typeof products;
export type OptionId = keyof (typeof products)[ProductId]["options"];