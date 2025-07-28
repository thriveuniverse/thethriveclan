// app/products/ai-automation-tools-for-small-business/page.js
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";

// --- SEO for this ONE product page ---
export const metadata = {
  title: "AI Automation Mastery Bundle | The Thrive Clan",
  description:
    "150 keywords, 35 templates, 20 blog outlines—done for you. Launch revenue-driving content in days with a conditional 30‑day guarantee.",
  alternates: { canonical: "/products/ai-automation-tools-for-small-business" },
  openGraph: {
    title: "AI Automation Mastery Bundle | The Thrive Clan",
    description:
      "150 keywords, 35 templates, 20 blog outlines—done for you. Launch revenue-driving content in days.",
    url: "https://thethriveclan.com/products/ai-automation-tools-for-small-business",
    
    images: [{ url: "/images/products/ai-automation-bundle.jpg", width: 1200, height: 630 }],
  },
};

const PRICE = "$490";
const PAYPLAN = "2 × $260";
const LS_URL = "https://YOUR-LEMONSQUEEZY-LINK"; // ← replace me

export default function AIAutomationMasteryBundlePage() {
  return (
    <>
      {/* Remove if lemon.js is already loaded in layout.js */}
      <Script src="https://app.lemonsqueezy.com/js/lemon.js" strategy="afterInteractive" />

      <main className="mx-auto max-w-3xl px-4 py-16">
        {/* Breadcrumb/back link */}
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/ai-and-automation-tools" className="hover:underline">
            ← Back to sector
          </Link>
        </nav>

        {/* HERO */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-semibold mb-4">
            Steal Our AI SEO System: 150 Keywords, 35 Templates, 20 Blog Outlines—Done For You.
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Built for small businesses and agencies selling (or exploring) AI automation. Launch revenue-driving content
            in days, not months—backed by a conditional 30‑day guarantee.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={LS_URL}
              data-ls-modal
              className="inline-block rounded-md px-6 py-3 font-medium bg-black text-white hover:opacity-90 transition"
            >
              Buy Now – {PRICE}
            </a>
            <a
              href="#preview"
              className="inline-block rounded-md px-6 py-3 font-medium border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              Preview the Bundle
            </a>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            50+ real implementations • Avg. 30–50% content ops cost reduction • GDPR &amp; data-security checklists
            included
          </p>
        </header>

        {/* Sticky CTA on mobile */}
        <div className="fixed inset-x-0 bottom-0 z-40 bg-white/90 dark:bg-black/90 backdrop-blur border-t border-gray-200 dark:border-gray-800 p-4 md:hidden flex items-center justify-center gap-3">
          <a href={LS_URL} data-ls-modal className="rounded-md px-5 py-2.5 font-medium bg-black text-white">
            Buy – {PRICE}
          </a>
          <a href="#preview" className="text-sm underline">
            Preview
          </a>
        </div>

        {/* SECTION 1 */}
        <Section title='Still drowning in “AI content” noise?' id="pain">
          <ul className="list-disc pl-6 space-y-2">
            <li>Search volumes are soaring (e.g., “AI automation tools for small business”), but so is competition.</li>
            <li>Owners research on mobile (67%)—and bounce fast if you’re not relevant now.</li>
            <li>High‑CPC, high-intent keywords (up to $9.20) are left on the table because you can’t see them.</li>
            <li>Prospects stall on security, ROI, and integration—38% won’t buy unless you address it head‑on.</li>
          </ul>
          <p className="mt-4">
            <strong>Result?</strong> Lost traffic, wasted ad spend, and stalled growth. You know AI can help, but
            turning curiosity into cash is… messy.
          </p>
        </Section>

        {/* SECTION 2 */}
        <Section title="Meet the AI Automation Mastery Bundle" id="solution">
          <p>
            A plug‑and‑play system to rank, nurture, and convert in the AI automation niche. Not another generic
            checklist. This is a complete, data-backed toolkit tailored to the small‑biz buyer journey from Awareness →
            Consideration → Decision.
          </p>
          <p className="mt-3">
            You’ll skip months of research, ship content now, and watch your pipeline grow—without hiring a pricey
            agency.
          </p>
        </Section>

        {/* SECTION 3: VALUE STACK */}
        <Section title="What You Get (Value Stack)" id="value">
          <ValueBlock
            n="1."
            heading="AI Automation Blog Content Strategy (PDF)"
            bullets={[
              "20 detailed blog outlines mapped to funnel stages (Awareness / Consideration / Decision).",
              "Pre-written CTAs, internal link prompts, and offer bridges.",
              "A 4‑month editorial calendar so you can batch and schedule.",
            ]}
            ctaLabel="See a sample outline →"
          />
          <ValueBlock
            n="2."
            heading="AI Automation Content Templates (DOCX)"
            bullets={[
              "15 SEO-optimized templates: product pages, service pages, comparison posts, landing pages, FAQs, and more.",
              "Mobile-responsive copy cues (because most buyers are on phones).",
              "Plug‑and‑play objection blocks for security, ROI, and integration concerns.",
            ]}
            ctaLabel="Peek at a template →"
          />
          <ValueBlock
            n="3."
            heading="AI Automation Keyword Strategy Guide (PDF)"
            bullets={[
              "150+ curated keywords with intent, funnel stage, and CMS integration pointers (WordPress, Shopify, Webflow).",
              "Seasonal trends, voice search prompts, and competitor gap analysis.",
              "Paid vs. organic plays: CPC ranges, bid priorities, and ad group ideas.",
            ]}
            ctaLabel="See the keyword framework →"
          />
          <ValueBlock
            n="4."
            heading="AI Automation Small Business Keywords (XLSX)"
            bullets={[
              "Filterable sheet with monthly volume, difficulty, CPC, SERP features, and intent columns.",
              "Tabs for key verticals (restaurants, retail, healthcare, agencies, etc.).",
              "Quick-win clusters highlighted so you can rank fast.",
            ]}
            ctaLabel="View a live snippet →"
          />

          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 mt-6">
            <p className="font-medium">
              Limited-Time Bonus: 1:1 Keyword Implementation Consult (30 mins) — $200 value
            </p>
            <p className="text-sm mt-1">
              Bring your site map; we’ll prioritize, cluster, and map keywords to pages live with you.
            </p>
          </div>
        </Section>

        {/* SECTION 4: TRUST */}
        <Section title="Why Trust This Bundle (Even Without Testimonials)" id="trust">
          <p className="mb-4">
            <strong>Transparent moment:</strong> this is our first public product release, so you won’t see a wall of
            reviews yet. Instead, here’s how we de‑risk your buy and prove the value up front.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Data, not hype:</strong> Every keyword, CPC, and intent tag was gathered/verified in July 2025.
              You can preview a slice before you pay.
            </li>
            <li>
              <strong>Action-first guarantee:</strong> Follow the 3 quick-start steps in 30 days. If you don’t see a
              clear path to 10× value, show us what you tried and we’ll refund you.
            </li>
            <li>
              <strong>See before you commit:</strong> Snippets of the XLSX and one full blog outline are open to view.
              Kick the tires.
            </li>
            <li>
              <strong>Founders on call:</strong> The bonus 1:1 consult means you’re not left alone—we help you map the
              plan to your site.
            </li>
            <li>
              <strong>Built to be reused:</strong> Templates are license-friendly for agencies and internal teams—so one
              purchase can fuel multiple projects.
            </li>
          </ul>
          <blockquote className="mt-4 border-l-4 border-gray-300 dark:border-gray-600 pl-4 text-gray-600 dark:text-gray-400 text-sm">
            Prefer to wait for social proof? No worries—grab the free mini-pack or hop on the list. We’ll circle back
            with case studies as they roll in.
          </blockquote>
        </Section>

        {/* SECTION 5: HOW IT WORKS */}
        <Section title="How It Works (3 Simple Steps)" id="how">
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Download &amp; Skim (Day 1):</strong> Open the PDF strategy, scan the quick-start checklist, and
              watch the 5‑minute overview video.
            </li>
            <li>
              <strong>Pick Your Clusters (Days 1–2):</strong> Use the XLSX to choose 2–3 quick-win keyword clusters.
              Plug them into the editorial calendar.
            </li>
            <li>
              <strong>Publish &amp; Promote (Week 1+):</strong> Drop in the templates, customize CTAs, and go live.
              Track ROI with the included framework.
            </li>
          </ol>
          <a href="#preview" className="mt-3 inline-block text-sm underline">
            Show me the Quick‑Start Checklist →
          </a>
        </Section>

        {/* SECTION 6: PRICING */}
        <Section title="Pricing & Value Math" id="pricing">
          <p>
            <strong>Today’s Price:</strong> {PRICE} (one-time)
            <br />
            <strong>Payment Plan:</strong> {PAYPLAN} (instant access, no penalty)
          </p>
          <p className="mt-3">
            <strong>Total value:</strong> $690+ (core bundle + bonus call)
            <br />
            <strong>Your savings:</strong> $200+ (not including the weeks of research/writing you skip)
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={LS_URL}
              data-ls-modal
              className="inline-block rounded-md px-6 py-3 font-medium bg-black text-white hover:opacity-90 transition"
            >
              Add to Cart – {PRICE}
            </a>
          </div>

          <p className="mt-3 text-sm text-gray-500">
            Instant download • 30‑day conditional guarantee • Bonus consult included
          </p>

          <div className="mt-6 p-4 rounded-md bg-gray-50 dark:bg-gray-800">
            <p className="font-medium">Order Bump (checkout box):</p>
            <p className="text-sm mt-1">
              Add the “Done-For-You Keyword Implementation” mini-service (+$97). We’ll load your keywords &amp; internal
              links into your CMS.
            </p>
          </div>

          <div className="mt-4 p-4 rounded-md bg-gray-50 dark:bg-gray-800">
            <p className="font-medium">Upsell (post-purchase):</p>
            <p className="text-sm mt-1">
              Upgrade to a 60‑minute strategy session or a custom research pack (starts at $497).
            </p>
          </div>
        </Section>

        {/* SECTION 7: GUARANTEE */}
        <Section title="Conditional 30‑Day Money-Back Guarantee" id="guarantee">
          <p>
            <strong>We call it “Action, Then Decide.”</strong> Use the bundle for 30 days. If you:
          </p>
          <ol className="list-decimal pl-6 space-y-2 mt-2">
            <li>Complete the Quick‑Start Checklist (5 simple steps inside).</li>
            <li>Publish at least one page or post using our templates.</li>
            <li>Map at least 10 keywords to your site using the sheet.</li>
          </ol>
          <p className="mt-4">
            …and you <em>still</em> don’t see a clear path to at least 10× the value in the next 12 months—email us your
            notes/screenshots and we’ll refund you in full. No hoops, just honesty.
          </p>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            <strong>Why this way?</strong> It stops serial refunders but keeps the door open for genuine buyers who try
            and don’t see fit.
            <br />
            <strong>License Note:</strong> Refunds require deletion/non-use of the files. Fair game, right?
          </p>
        </Section>

        {/* SECTION 8: SECURITY */}
        <Section title="Security & Compliance Objections (Handled)" id="security">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>GDPR/Privacy Checklist included:</strong> Adaptable language for your site &amp; proposals.
            </li>
            <li>
              <strong>Data-handling template:</strong> Show prospects you take their info seriously.
            </li>
            <li>
              <em>Not legal advice</em>, but it answers the 38% who worry about security long before sales gets
              involved.
            </li>
          </ul>
          <a href="#preview" className="mt-3 inline-block text-sm underline">
            See the Compliance Checklist →
          </a>
        </Section>

        {/* SECTION 9: FAQ */}
        <Section title="FAQ" id="faq">
          <div className="space-y-4">
            {faqItems.map(({ q, a }) => (
              <details key={q} className="border border-gray-200 dark:border-gray-700 rounded-md p-4">
                <summary className="cursor-pointer font-medium">{q}</summary>
                <p className="mt-2 text-sm leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </Section>

        {/* SECTION 10: STILL NOT SURE */}
        <Section title="Still Not Sure?" id="still-not-sure">
          <p className="mb-4">
            <strong>Option A:</strong> Grab a Free Sample — Download our “AI ROI Calculator” or mini keyword pack (15
            terms) to test-drive our approach. (Lead capture form here.)
          </p>
          <p className="mb-6">
            <strong>Option B:</strong> Ask Us Anything — Email:{" "}
            <a href="mailto:support@thethriveclan.com" className="underline">
              support@thethriveclan.com
            </a>{" "}
            with your top 3 questions. We reply in 24 hours.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={LS_URL}
              data-ls-modal
              className="inline-block rounded-md px-6 py-3 font-medium bg-black text-white hover:opacity-90 transition"
            >
              Yes, I Want the AI Automation Mastery Bundle – {PRICE}
            </a>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            P.S. Waiting costs more than the bundle. Every week you delay, you’re leaving high-intent traffic and easy
            wins to competitors. Lock in the system, launch faster, and own your niche.
          </p>
        </Section>

        {/* PREVIEW ANCHOR */}
        <section id="preview" className="mb-24">
          <h2 className="text-xl font-semibold mb-2">Preview Library</h2>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>See the 4‑Month Content Calendar →</li>
            <li>Show Me the Quick‑Win Keywords →</li>
            <li>Download the ROI Calculator Template →</li>
            <li>Book My Bonus Consult →</li>
            <li>Compare Organic vs. Paid Strategy →</li>
          </ul>
        </section>
      </main>
    </>
  );
}

/* ---------- helper components ---------- */

function Section({ title, id, children }) {
  return (
    <section id={id} className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="text-gray-700 dark:text-gray-300">{children}</div>
    </section>
  );
}

function ValueBlock({ n, heading, bullets, ctaLabel }) {
  return (
    <article className="mb-8">
      <h3 className="text-xl font-medium mb-2">
        {n} {heading}
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      {ctaLabel && (
        <a href="#preview" className="mt-2 inline-block text-sm underline">
          {ctaLabel}
        </a>
      )}
    </article>
  );
}

const faqItems = [
  {
    q: "What exactly do I get when I purchase?",
    a: "Instant access to four files (2 PDFs, 1 DOCX, 1 XLSX) + a 30‑minute consult bonus during this promo.",
  },
  {
    q: "How fast can I implement this?",
    a: "Most users ship their first optimized page within 48 hours. Full 4‑month calendar: about a week with light resources.",
  },
  {
    q: "I’m already doing SEO—will this still help?",
    a: "Yes. Use it to fill content gaps, tighten templates, and expand into AI automation clusters you’ve missed.",
  },
  {
    q: "Do I need technical skills?",
    a: "No dev needed. Copy/paste friendly, with WordPress/Shopify/Webflow notes.",
  },
  { q: "Can I use this for multiple clients?", a: "Absolutely. Agency use is included. Rebrand internally—just don’t resell the raw files." },
  {
    q: "What if I don’t see results?",
    a: "Do the quick-start steps within 30 days. If you don’t see a path to 10× value, show us your work and we’ll refund you.",
  },
  { q: "Is the data up to date?", a: "Yes—compiled July 2025. We suggest revisiting top keywords quarterly (we show you how)." },
  {
    q: "How do you handle security and compliance?",
    a: "We provide checklists and language templates to calm fears early. You’ll still want legal review for your specific case.",
  },
  {
    q: "Can I see a sample before buying?",
    a: "Yes. Click “Preview the Bundle” for a snippet of the sheet and one blog outline. Or grab our free lead magnet.",
  },
  { q: "Do you offer a payment plan?", a: "Yes—2 payments of $260. Instant access, same guarantee." },
  { q: "Will you implement it for me?", a: "We can. Select the order bump for a quick implementation, or upgrade post-checkout for full strategy." },
  {
    q: "Is this only for AI automation companies?",
    a: "No. Any small biz or agency offering AI-powered services or internal automation will benefit. Vertical-specific keywords included.",
  },
];
