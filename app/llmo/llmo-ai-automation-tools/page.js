import Image from "next/image";
import { createProductSchema } from "../../../lib/schemas/product";

// Metadata
export const metadata = {
  title: "The Thrive Clan | Build, Grow, and Defend AI Automation Tools",
  description:
    "A strategic resource for those who want to lead—not chase—the future of online business with AI automation tools.",
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
              of online business.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <section className="mb-12" id="problem">
            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
              The Problem with Most “SEO Packs”
            </h2>
            <p className="text-gray-700 leading-relaxed">
              In today’s AI-driven world, most “SEO” content packs are hastily
              assembled and quickly obsolete. They chase short-term algorithms
              instead of delivering real business outcomes—leaving companies
              exposed to shifts in Google, AI disruption, or plain old digital
              fatigue. What’s missing? A resource designed for lasting
              impact—shaped for a world of LLMO (Large Language Model
              Optimization), authority, and true defensibility.
            </p>
          </section>

          <section className="mb-12" id="difference">
            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
              What Makes This Different
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Built for the Future: Every template, guide, and asset is engineered
              for a business environment where search and content are shaped by
              generative AI. Not “Plug and Pray”: You get strategy, not just
              keywords; real differentiation, not repackaged scraping. We’ve Used
              the Tools, We Know the Gaps: Our pack is the product of comparing
              every leading alternative—then filling what’s missing for serious
              companies.
            </p>
          </section>

          <section className="mb-12" id="included">
            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
              What’s Included?
            </h2>
            <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
              <li>
                <strong>Strategic Keyword Set</strong>: 150+ keywords for real
                business opportunities—not just high-volume, but high-value and
                future-proof.
              </li>
              <li>
                <strong>Prebuilt Content Templates</strong>: 20+ blog post
                templates designed to serve both human audiences and AI assistants
                (giving you multi-channel traction).
              </li>
              <li>
                <strong>Go-to-Market Playbooks</strong>: Practical guides,
                checklist workflows, and scalable systems for repeatable
                campaigns.
              </li>
              <li>
                <strong>Competitive Benchmarking and ROI Tools</strong>: Instant
                value calculation and clear benchmarking so you can measure,
                adapt, and communicate wins.
              </li>
              <li>
                <strong>Schema & Technical SEO Assets</strong>: LLMO-ready
                technical templates (schema, site structures) to dominate in AI
                and traditional search.
              </li>
              <li>
                <strong>Ongoing Updates and Founder Support</strong>: For every
                1.0 client—continuous improvements, new playbooks, and direct
                access to the authors for success/strategy calls.
              </li>
            </ul>
          </section>

          <section className="mb-12" id="why-now">
            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
              Why Now?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Companies who rely on “standard” SEO content will be left behind as
              AI disrupts what works. This bundle is your shield and your growth
              engine.
            </p>
          </section>

          <section className="mb-12" id="pricing">
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

          <section className="mb-12" id="guarantee">
            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
              No Reviews? Here’s Our Guarantee
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We’re new. That means our first customers get our undivided
              attention, the best deal, and direct access to us (the creators). If
              this doesn’t deliver value for your business, we refund—no hoops.
              And if you want to be featured as a case study, we’ll offer
              done-with-you onboarding at no cost.
            </p>
          </section>

          <section className="mb-12" id="deciding">
            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
              Still Deciding?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Download a free sample worksheet<br />
              View our full competitor and value breakdown (transparent
              spreadsheet link)<br />
              Book a discovery call to talk through use-cases
            </p>
          </section>

          <section className="text-center bg-cyan-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-cyan-700 mb-4">
              Your business, re-armed for the AI era. Ready to stop chasing, and
              start leading?
            </h2>
            <p className="text-gray-700 mb-6">
              <a
                href={`https://thethriveclan.lemonsqueezy.com/checkout/buy/${INDIVIDUAL_VARIANT_ID}?utm_source=thethriveclan&utm_medium=website&utm_campaign=llmo`}
                className="inline-block bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-cyan-700 mr-4"
              >
                Buy Now
              </a>
              <a
                href="#package-details"
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