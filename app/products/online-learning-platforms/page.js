// app/products/online-learning-platforms/page.js
import Script from "next/script";
import Link   from "next/link";

export const metadata = {
  title: "Online Learning Platform SEO Bundle — 150 Keywords & Templates | The Thrive Clan",
  description:
    "20 outlines, 150 keywords, templates and more to rank, capture and convert traffic for online‑learning platforms.",
};

const PRICE  = "$490";
const LS_URL = "https://yourstore.lemonsqueezy.com/checkout/buy/REPLACE_ME"; // ← replace

export default function OnlineLearningBundlePage() {
  return (
    <>
      <Script src="https://app.lemonsqueezy.com/js/lemon.js" strategy="afterInteractive" />

      <main className="mx-auto max-w-3xl px-4 py-16">
        <nav className="mb-10 text-sm text-gray-500">
          <Link href="/e-learning-and-online-education" className="hover:underline">
            ← Back to sector
          </Link>
        </nav>

        {/* ─── HERO ─── */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-semibold leading-tight mb-4">
            Online‑Learning Platform SEO Bundle — 150 Keywords & Templates
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Rank, capture, and convert online‑education buyers with proven outlines and keyword clusters.
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
          {/* // app/products/online-learning-platforms/page.js
import Script from "next/script";
import Link   from "next/link";

export const metadata = {
  title: "Online Learning Platform SEO Bundle | The Thrive Clan",
  description: "150 keywords, templates & more to rank for online‑education searches.",
};

const PRICE = "$490";
const LS_URL = "https://yourstore.lemonsqueezy.com/checkout/buy/REPLACE_ME";

export default function OnlineLearningBundlePage() {
  return (
    <>
      <Script src="https://app.lemonsqueezy.com/js/lemon.js" strategy="afterInteractive" />

      <main className="mx-auto max-w-3xl px-4 py-16">
        <nav className="mb-10 text-sm text-gray-500">
          <Link href="/e-learning-and-online-education" className="hover:underline">
            ← Back to sector
          </Link>
        </nav>

        <header className="text-center mb-16">
          <h1 className="text-4xl font-semibold leading-tight mb-4">
            Online‑Learning Platform SEO Bundle — 150 Keywords & Templates
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Rank, capture, and convert online‑education buyers with proven outlines and keyword clusters.
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
