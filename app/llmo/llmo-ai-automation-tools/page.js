import Image from "next/image";
import { createProductSchema } from "../../../lib/schemas/product";

// Metadata
export const metadata = {
  title: "The Thrive Clan | Build, Grow, and Defend AI Automation Tools",
  description:
    "A strategic resource for those who want to lead—not chase—the future of online business and digital marketing.",
  keywords:
    "AI automation, LLMO, workflow automation, answer engine optimization, hyperautomation, AI tools, business growth",
  openGraph: {
    title: "The Thrive Clan | Build, Grow, and Defend AI Automation Tools",
    description:
      "Lead the AI automation revolution with our strategic tools bundle. Get resources to dominate a $3.68T market.",
    images: ["/images/ai-automation.jpg"],
    url: "https://thethriveclan.com/llmo/ai-automation-tools",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Thrive Clan | Build, Grow, and Defend AI Automation Tools",
    description:
      "Join the $3.68T AI automation boom with our strategic tools bundle.",
    images: ["/images/ai-automation.jpg"],
  },
};

export default function AIAutomationTools() {
  const INDIVIDUAL_VARIANT_ID = "967071";
  const BUSINESS_VARIANT_ID = "967095";
  const STORE_ID = "203055";

  function ProductSchema() {
    const schema = createProductSchema({
      name: "Build, Grow, and Defend AI Automation Tools Bundle",
      description:
        "A strategic resource for those who want to lead—not chase—the future of online business with our comprehensive AI automation tools. Includes strategic keywords, content templates, playbooks, and more.",
      image: "https://thethriveclan.com/images/ai-automation.jpg",
      url: "https://thethriveclan.com/llmo/ai-automation-tools",
      category: "Digital Marketing Package",
      sku: "LLMO-AI-AUTO-001",
      brand: "The Thrive Clan",
      aggregateRating: null,
    });
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
      />
    );
  }

  return (
    <>
      <ProductSchema />

      {/* Hero Section with Parallax */}
      <div className="relative w-full h-64 md:h-96 overflow-hidden">
        <div
          className="absolute inset-0 parallax"
          style={{
            backgroundImage: "url('/images/ai-automation-hero.jpg')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
          aria-hidden="true"
        >
          <div className="hero-overlay bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center max-w-4xl mx-auto px-4 hero-text">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Build, Grow, and Defend
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-100">
              The AI Automation Tools Bundle
            </h2>
            <p className="text-lg md:text-xl mb-6 text-gray-200 leading-relaxed">
              A strategic resource for those who want to lead—not chase—the future
              of online business and digital marketing.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <section className="mb-12 bg-white p-6 rounded-lg shadow-sm" id="problem">
            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
              The Problem with Most “SEO Packs”
            </h2>
            <p className="text-gray-700 leading-relaxed">
              In today’s AI-driven world, most “SEO” content packs are hastily
              assembled, quickly obsolete, and built for yesterday’s Google—leaving
              companies exposed to search algorithm shifts, AI disruption, or
              digital fatigue. They often lack strategy, real research, or the
              technical assets you need to stand out.
            </p>
          </section>

          <section className="mb-12 bg-white p-6 rounded-lg shadow-sm" id="difference">
            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
              What Makes This Different
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Built for the Future: Every template, guide, and asset is engineered
              for a business environment shaped by generative AI and Large
              Language Model Optimization (LLMO). Not “Plug and Pray”: This is a
              comprehensive, step-by-step marketing strategy—not “just keywords”,
              not regurgitated scraping, and not guesswork. We built our bundle
              after comparing the leading alternatives—then filled the gaps that
              serious companies and teams face.
            </p>
          </section>

          <section className="mb-12 bg-white p-6 rounded-lg shadow-sm" id="included">
            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
              What’s Included?
            </h2>
            <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
              <li>
                <strong>Strategic Keyword Set</strong>: 150+ thoroughly researched,
                high-value, future-proof keywords for real business
                opportunities—not just search volume.
              </li>
              <li>
                <strong>Prebuilt Content Templates</strong>: 20+ blog post
                blueprints and ready-to-edit templates. Designed for both humans
                and AI, so you win in every channel.
              </li>
              <li>
                <strong>Go-to-Market Playbooks</strong>: Practical guides,
                implementation checklists, and systems for campaign repeatability.
              </li>
              <li>
                <strong>Competitive Benchmarking & ROI Tools</strong>: Instant
                value calculators and industry benchmarks—so you can measure,
                adapt, and communicate real business wins.
              </li>
              <li>
                <strong>Schema & Technical SEO Assets</strong>: LLMO-ready
                technical templates and schema to dominate answer engines and
                search.
              </li>
              <li>
                <strong>Ongoing Updates and Founder Support</strong>: All 1.0
                clients get continuous improvements, direct access to the creators,
                and new playbooks or scripts as they’re released.
              </li>
            </ul>
          </section>

          <section className="mb-12 bg-white p-6 rounded-lg shadow-sm" id="compare">
            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
              How We Compare
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <em>Source: Independent September 2025 analysis. Details and pricing are subject to change.</em>
            </p>
            <div className="mt-4">
              <img
                src="/images/comparison-grid.jpg" // Replace with actual image path
                alt="Comparison grid of Thrive Clan Bundle vs. Jasper, HubSpot, CoSchedule"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </section>

          <section className="mb-12 bg-white p-6 rounded-lg shadow-sm" id="reviews">
            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
              What Reviewers Say
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Business Owner Score: 9/10</strong><br />
              “Highly recommended for any business owner serious about dominating
              the AI and automation niche. The bundle provides a clear,
              data-driven path to content marketing success and delivers a strong
              ROI.”<br /><br />
              <strong>Implementer Score: 8/10</strong><br />
              “A premium product ... technically sound and saves huge
              implementation time. Some steps are manual—automation scripts would
              make it perfect.”<br /><br />
              <strong>Honest Critique: Strengths & Real-World Fit</strong><br />
              Comprehensive Go-to-Market Strategy: Far more than templates—it’s an
              end-to-end roadmap to market leadership. Flexible & Modular: Covers
              every step: keywords, ready-to-publish posts, technical SEO,
              benchmarking, and ongoing support. Transparent ROI: Most will
              outpace the annual cost of SaaS tools within 4-6 months.<br />
              <em>Challenges: “Initial impression can be overwhelming—onboarding
              guide and support provided.” “Manual implementation needed—automatic
              scripts and more editable diagrams coming soon for all buyers.”</em>
            </p>
          </section>

          <section className="mb-12 bg-white p-6 rounded-lg shadow-sm" id="why-now">
            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
              Why Now?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Companies relying on “standard” SEO content will be left behind as
              AI disrupts what works. This bundle is your shield and your growth
              engine—created for the next generation of search, content, and
              brand-building.
            </p>
          </section>

          <section className="mb-12 bg-white p-6 rounded-lg shadow-sm" id="pricing">
            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
              Pricing & Licensing
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Solo License: €2,997 one-time<br />
              Team License: €4,997 up to 5 users<br />
              Agency/Consultancy: €7,997 for client delivery<br />
              Early-adopter rate: -30% for first 50 purchases. All 1.0 buyers get
              free updates for first year.
            </p>
          </section>

          <section className="mb-12 bg-white p-6 rounded-lg shadow-sm" id="guarantee">
            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
              No Reviews? Here’s Our Guarantee
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We’re new. That means our first customers get our undivided
              attention, the best deal, and direct access to us (the creators).
              If this doesn’t deliver value for your business, we refund—no hoops.
              And if you want to be featured as a case study, we’ll offer
              done-with-you onboarding at no cost.
            </p>
          </section>

          <section className="mb-12 bg-white p-6 rounded-lg shadow-sm" id="faq">
            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">FAQ</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Who is this for?</strong> Entrepreneurs, established
                businesses, consultants, and agencies who want to own the
                AI-driven future—not just ride the latest SaaS flavor.
              </li>
              <li>
                <strong>What support will I get?</strong> Direct email support,
                onboarding guide, ROI calculators, and all future updates for the
                first year at no extra cost.
              </li>
              <li>
                <strong>What if my team finds it overwhelming?</strong> You’ll get
                a quickstart guide, “first campaign” video, and a roadmap for
                automating manual steps (updates will be free).
              </li>
              <li>
                <strong>Do I need to pay a subscription?</strong> No. Pay once,
                use forever—ideal for those who hate the ongoing SaaS treadmill.
              </li>
              <li>
                <strong>Is this right for non-technical business leaders?</strong>
                Yes—strategy-first, with supporting walkthroughs for
                implementation. Tech teams will appreciate automation scripting.
              </li>
            </ul>
          </section>

          <section className="mb-12 bg-white p-6 rounded-lg shadow-sm" id="deciding">
            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
              Still Deciding?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Download a free sample worksheet<br />
              View our full competitor and value breakdown<br />
              Book a quick discovery call (contact support@thethriveclan.com)
            </p>
          </section>

          <section className="text-center bg-cyan-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-cyan-700 mb-4">
              Ready to Stop Chasing and Start Leading?
            </h2>
            <p className="text-gray-700 mb-6">
              Your business, re-armed for the AI era. Choose your license and
              unlock a future of limitless growth, freedom, and impact.
            </p>
            <p className="text-gray-700 mb-6">
              <a
                href={`https://thethriveclan.lemonsqueezy.com/checkout/buy/${INDIVIDUAL_VARIANT_ID}?utm_source=thethriveclan&utm_medium=website&utm_campaign=llmo`}
                className="inline-block bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-cyan-700 mr-4"
              >
                Buy Now
              </a>
              <a
                href="#included"
                className="inline-block bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-400 mr-4"
              >
                See the Bundle
              </a>
              <a
                href="mailto:support@thethriveclan.com"
                className="inline-block bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-400"
              >
                Contact
              </a>
            </p>
          </section>
        </div>
      </div>
    </>
  );
}