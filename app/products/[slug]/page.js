// app/products/[slug]/page.js
import { notFound } from "next/navigation";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { products } from "../../../lib/products.js";

const getProduct = (slug) => products.find((p) => p.slug === slug);

export const dynamicParams = false; // unknown slugs -> 404

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const p = getProduct(params.slug);
  return p
    ? { title: `${p.title} | The Thrive Clan`, description: p.description || "" }
    : {};
}

export default function ProductPage({ params }) {
  const product = getProduct(params.slug);
  if (!product) return notFound();

  return (
    <>
      {/* Remove if lemon.js is already loaded in layout.js */}
      <Script src="https://app.lemonsqueezy.com/js/lemon.js" strategy="afterInteractive" />

      <main className="mx-auto max-w-3xl px-4 py-16">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href={`/${product.sector}`} className="hover:underline">
            ← Back to sector
          </Link>
        </nav>

        <h1 className="text-3xl font-semibold mb-4">{product.title}</h1>

        {product.img && (
          <div className="relative w-full h-64 mb-8">
            <Image src={product.img} alt={product.title} fill className="object-cover rounded-lg" />
          </div>
        )}

        {product.description && (
          <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">{product.description}</p>
        )}

        <a
          href={product.lsUrl || "#"}
          data-ls-modal
          className="inline-block rounded-md px-6 py-3 font-medium bg-black text-white hover:opacity-90 transition"
        >
          Buy now – {product.price || "$490"}
        </a>
      </main>
    </>
  );
}
