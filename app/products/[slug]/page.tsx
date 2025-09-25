// app/products/[slug]/page.tsx
import { notFound } from "next/navigation";
import { generateStaticParams } from "./generateStaticParams";
import ClientProductPage from "./ClientProductPage";

export { generateMetadata } from "./generateMetadata";

export { generateStaticParams };

export default function ProductPage({ params }: { params: { slug: string } }) {
  return <ClientProductPage params={params} />;
}