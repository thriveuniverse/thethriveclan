// app/products/remote-work-productivity-tools-2025/page.js
import Script from "next/script";
import Link   from "next/link";

export const metadata = {
  title: "Remote‑Work Productivity Tools 2025 Bundle | The Thrive Clan",
  description:
    "150 keywords, templates & more to rank for remote‑work productivity searches.",
};

const PRICE  = "$490";
/* 🔁  Replace with your real Lemon Squeezy link */
const LS_URL = "https://yourstore.lemonsqueezy.com/checkout/buy/REMOTE_WORK_BUNDLE";

export default function RemoteWorkProdBundlePage() {
  return (
    <>
      <Script src="https://app.lemonsqueezy.com/js/lemon.js" strategy="afterInteractive" />

      <main className="mx-auto max-w-3xl px-4 py-16">

        {/* breadcrumb */}
        <nav className="mb-10 text-sm text-gray-500">
          <Link href="/remote-work-and-productivity-tools" className="hover:underline">
            ← Back to sector
          </Link>
        </nav>

        {/* ─── HERO ─── */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-semibold leading-tight mb-4">
            2025 Remote‑Work Productivity Content Bundle — Launch in 7 Days
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Rank, capture, and convert remote‑work buyers with proven outlines and keyword clusters.
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
        <section className="prose prose-lg max-w-none" id="preview">
          {/* TODO: paste your long‑form sales copy here */}
        </section>
      </main>
    </>
  );
}
