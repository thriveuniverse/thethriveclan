// app/products/[slug]/generateMetadata.ts
import { getProductBySlug } from "@/lib/products"; // Absolute import

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const p = getProductBySlug(params.slug);
  return p
    ? { title: `${p.title} | The Thrive Clan`, description: p.description || "" }
    : {};
}