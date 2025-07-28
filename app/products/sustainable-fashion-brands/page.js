// app/products/sustainable-fashion-brands/page.js
import Script from "next/script";
import Link   from "next/link";

// ─── PAGE META ────────────────────────────────────────────────────────────────
export const metadata = {
  title:
    "Sustainable Fashion Brands Bundle | The Thrive Clan",
  description:
    "20 outlines, 150 keywords & more to rank, capture and convert searches for sustainable and ethical fashion.",
};

// ─── CONSTANTS ───────────────────────────────────────────────────────────────
const PRICE  = "$490";
const LS_URL = "https://yourstore.lemonsqueezy.com/checkout/buy/REPLACE_ME"; // ← insert real link

// ─── PAGE COMPONENT ──────────────────────────────────────────────────────────
export default function SustainableFashionBundlePage() {
  return (
    <>
      {/* Lemon Squeezy modal script */}
      <Script
        src="https://app.lemonsqueezy.com/js/lemon.js"
        strategy="afterInteractive"
      />

      <main className="mx-auto max-w-3xl px-4 py-16">
        {/* ── Breadcrumb ── */}
        <nav className="mb-10 text-sm text-gray-500">
          <Link href="/sustainable-and-eco-friendly-products" className="hover:underline">
            ← Back to sector
          </Link>
        </nav>

        {/* ── Hero ── */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-semibold leading-tight mb-4">
            Sustainable‑Fashion Content Bundle — Rank for Ethical‑Style Searches
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Rank, capture, and convert conscious‑consumer buyers with proven outlines and keyword clusters.
          </p>

          <div className="mt-8 flex gap-4 justify-center">
            <a
              href={LS_URL}
              data-ls-modal
              className="rounded-md px-6 py-3 font-medium bg-black text-white hover:opacity-90 transition"
            >
              Buy Now – {PRICE}
            </a>
            <a
              href="#preview"
              className="rounded-md px-6 py-3 font-medium border border-black hover:bg-gray-50 transition"
            >
              Preview the Bundle
            </a>
          </div>
        </header>

        {/* ── Body ── */}
        <section id="preview" className="prose prose-lg max-w-none">
          {/* TODO: long‑form marketing copy & preview components */}
        </section>
      </main>
    </>
  );
}
