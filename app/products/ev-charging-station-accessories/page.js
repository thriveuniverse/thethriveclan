// app/products/ev-charging-station-accessories/page.js
import Script from "next/script";
import Link   from "next/link";

export const metadata = {
  title: "Own the EV Accessory SERPs — Charging, Cables, Covers & More | The Thrive Clan",
  description:
    "20 outlines, 150 keywords & more to rank, capture and convert demand for electric‑vehicle accessories.",
};

const PRICE  = "$490";
const LS_URL = "https://yourstore.lemonsqueezy.com/checkout/buy/REPLACE_ME"; // ← replace

export default function EVAccessoryBundlePage() {
  return (
    <>
      <Script src="https://app.lemonsqueezy.com/js/lemon.js" strategy="afterInteractive" />

      <main className="mx-auto max-w-3xl px-4 py-16">
        <nav className="mb-10 text-sm text-gray-500">
          <Link href="/electric-vehicle-accessories" className="hover:underline">
            ← Back to sector
          </Link>
        </nav>

        {/* ─── HERO ─── */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-semibold leading-tight mb-4">
            Own the EV Accessory SERPs — Charging, Cables, Covers & More
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Rank, capture, and convert EV‑accessory buyers with proven outlines and keyword clusters.
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

        {/* ─── BODY ─── */}
        <section id="preview" className="prose prose-lg max-w-none">
          {/* // app/products/ev-charging-station-accessories/page.js
import Script from "next/script";
import Link   from "next/link";

export const metadata = {
  title: "EV Accessory SEO Bundle | The Thrive Clan",
  description: "150 keywords, templates & more to dominate EV charging, cable and cover searches.",
};

const PRICE = "$490";
const LS_URL = "https://yourstore.lemonsqueezy.com/checkout/buy/REPLACE_ME";

export default function EVAccessoryBundlePage() {
  return (
    <>
      <Script src="https://app.lemonsqueezy.com/js/lemon.js" strategy="afterInteractive" />

      <main className="mx-auto max-w-3xl px-4 py-16">
        <nav className="mb-10 text-sm text-gray-500">
          <Link href="/electric-vehicle-accessories" className="hover:underline">
            ← Back to sector
          </Link>
        </nav>

        <header className="text-center mb-16">
          <h1 className="text-4xl font-semibold leading-tight mb-4">
            Own the EV‑Accessory SERPs — Charging, Cables, Covers & More
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Rank, capture, and convert EV‑accessory buyers with proven outlines and keyword clusters.
          </p>

          <div className="mt-8 flex gap-4 justify-center">
            <a href={LS_URL} data-ls-modal className="rounded-md px-6 py-3 font-medium bg-black text-white hover:opacity-90 transition">
              Buy Now – {PRICE}
            </a>
            <a href="#preview" className="rounded-md px-6 py-3 font-medium border border-black hover:bg-gray-50 transition">
              Preview the Bundle
            </a>
          </div>
        </header>

        <section className="prose prose-lg max-w-none">
          {/* TODO: long‑form copy */}
        </section>
      </main>
    </>
  );
}
 */}
        </section>
      </main>
    </>
  );
}
