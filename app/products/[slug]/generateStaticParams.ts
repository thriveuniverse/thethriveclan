// app/products/[slug]/generateStaticParams.ts
import { getProductBySlug } from "@/lib/products"; // Absolute import

export async function generateStaticParams() {
  // Use array from products.ts for SSG
  const { products } = await import("@/lib/products");
  return products.map((p) => ({ slug: p.slug }));
}