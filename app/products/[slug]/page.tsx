// app/products/[slug]/page.tsx
import { notFound } from "next/navigation";
import { generateStaticParams } from "./generateStaticParams";
import ClientProductPage from "./ClientProductPage";
import { getProductBySlug } from "@/lib/products";

export { generateMetadata } from "./generateMetadata";

export { generateStaticParams };

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) return notFound();

  return <ClientProductPage product={product} />;
}