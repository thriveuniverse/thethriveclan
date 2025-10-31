import Image from "next/image";
import { createProductSchema } from "../../../lib/schemas/product";

// Metadata – Finalized
export const metadata = {
  title: "The Thrive Clan | Exploring AI Automation Tools Bundle",
  description: "Preview the toolkit that turns AI overwhelm into 3-5x visibility—keywords, playbooks, ROI calcs, and guides for business growth without the tech hassle.",
  keywords: "AI automation, LLMO, workflow automation, answer engine optimization, hyperautomation, AI tools, business growth",
  alternates: {
    canonical: "https://thethriveclan.com/llmo/ai-automation-explore-bundle",
  },
  openGraph: {
    title: "The Thrive Clan | Exploring AI Automation Tools Bundle",
    description: "Discover the bundle's core assets: 150+ keywords, 30/60/90 playbooks, ROI calculators—your path to dominating the $3.68T AI boom.",
    images: ["/images/ai-automation.jpg"],
    url: "https://thethriveclan.com/llmo/ai-automation-explore-bundle",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Thrive Clan | Exploring AI Automation Tools Bundle",
    description: "Peek inside the strategic toolkit for AI growth—keywords, guides, calcs that deliver 25-35% ROI without complexity.",
    images: ["/images/ai-automation.jpg"],
  },
};

export default function BundleExplore() {
  const INDIVIDUAL_VARIANT_ID = "967071";
  const BUSINESS_VARIANT_ID = "967095";
  const STORE_ID = "203055";

  function ProductSchema() {
    const schema = createProductSchema({
      name: "Exploring AI Automation Tools Bundle",
      description: "Preview the comprehensive toolkit for LLMO success: Keywords, playbooks, ROI calculators, and guides to reclaim time for innovation and client wins.",
      image: "https://thethriveclan.com/images/ai-automation.jpg",
      url: "https://thethriveclan.com/llmo/ai-automation-explore-bundle",
      category: "Digital Marketing Preview",
      sku: "LLMO-AI-AUTO-PREVIEW",
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
      <ProductSchema />  {/* RENDERED: Now active in <head> */}

      {/* Hero Section with Parallax */}
<div className="relative w-full h-72 md:h-96 overflow-hidden">  {/* Bumped h-72 for mobile fit */}
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
        Inside the Bundle: Arsenal for AI Growth
      </h1>
      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-100">
        What matters—and the consequences of skipping it
      </h2>
      <p className="text-lg md:text-xl mb-6 text-gray-200 leading-relaxed">
       No tech jargon, just real impact to reclaim time and boost leads.
      </p>
    </div>
  </div>
</div>
      {/* Floating CTA Pill */}
      <div className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6">
        <a
          href={`https://thethriveclan.gumroad.com/l/ai-automation-tools/checkout?wanted=true&variant_id=${INDIVIDUAL_VARIANT_ID}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-2 md:px-4 md:py-3 bg-cyan-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-cyan-700 transition-all duration-300 text-xs md:text-sm backdrop-blur-sm"
          aria-label="Buy AI Automation Bundle - Solo License"
        >
          Buy Bundle → 
          <span className="ml-1 md:ml-2 text-xs opacity-90">(€2,997 Solo)</span>
        </a>
      </div>

      {/* Main Content */}
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section 1: Keyword Dossiers */}
          <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">Keyword Dossiers: Your Search Smarts on Demand</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              These 150+ ready spreadsheets aren't random words—they're your map to searches that drive real business (like "AI workflow tools for teams"). Why useful? They cut guesswork, targeting high-value queries that bring in 60-80% more qualified leads without wasting ad spend.
            </p>
            <ul className="space-y-2 text-sm text-gray-700 mb-6">
              <li><strong>Without them:</strong> You chase low-hanging searches, burning 25% of your budget on traffic that ghosts—leaving competitors owning the high-ROI keywords.</li>
              <li><strong>Without them:</strong> Content feels scattered, missing the buyer journey—resulting in 22% lower conversion from mismatched messaging.</li>
              <li><strong>Without them:</strong> Teams reinvent the wheel weekly, eating 40 hours on research instead of client calls or new ideas.</li>
            </ul>
          </section>

          {/* Section 2: Playbooks & Guides */}
          <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">Playbooks & Guides: Step-by-Step Wins Without the Guesswork</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              Think of these 30/60/90-day blueprints as your team's cheat sheet for AI rollout—simple videos and checklists that turn "how do we even start?" into "done in a week." Why useful? They reclaim 50% of your time from manual drudgery, freeing staff for innovation and client relationships that boost loyalty by 32%.
            </p>
            <ul className="space-y-2 text-sm text-gray-700 mb-6">
              <li><strong>Without them:</strong> Rollouts stall at month 1, with 28% of teams abandoning AI due to "too complicated"—missing 18-25% market share gains.</li>
              <li><strong>Without them:</strong> Siloed efforts waste 30% on trial-and-error, eroding team morale and NPS by 15-20 points.</li>
              <li><strong>Without them:</strong> No clear roadmap means inconsistent results, capping growth at 15% YoY while competitors pull ahead.</li>
            </ul>
          </section>

          {/* Section 3: ROI Calculators */}
          <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">ROI Calculators: Proof Before You Commit</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              Plug in your numbers (team size, current leads) and get instant projections—like "4-6 month payback on 60% lead boost." Why useful? They turn "is this worth it?" into "here's my €X back"—helping justify the buy and track real 25-35% cost savings.
            </p>
            <ul className="space-y-2 text-sm text-gray-700 mb-6">
              <li><strong>Without them:</strong> Gut-feel budgeting wastes 25% on unproven tactics, delaying decisions and missing 2x campaign speed.</li>
              <li><strong>Without them:</strong> Hard to show bosses the math, stalling adoption—while competitors hit 15-20% revenue attribution from data-backed moves.</li>
              <li><strong>Without them:</strong> No benchmarks mean flying blind on ROI, risking 22% opportunity costs in a 40-60% growing market.</li>
            </ul>
          </section>

          {/* Section 4: Implementation Guides */}
          <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">Implementation Guides: From Setup to Scale, No Surprises</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              Video walkthroughs and checklists for "plug in and go"—covering everything from keyword import to video deployment. Why useful? They make AI feel accessible, saving 40 hours/month on trial-and-error so your team focuses on clients and ideas.
            </p>
            <ul className="space-y-2 text-sm text-gray-700 mb-6">
              <li><strong>Without them:</strong> Setup drags 2-3 weeks, with 28% abandonment from "too hard"—costing 18-25% in lost momentum.</li>
              <li><strong>Without them:</strong> Inconsistent rollout erodes 30% efficiency, weakening client relationships and NPS by 15-20 points.</li>
              <li><strong>Without them:</strong> No simple benchmarks mean guessing on progress, capping at 15% growth while others hit 25-35% ROI.</li>
            </ul>
          </section>

          {/* Footer – Mirror Main */}
          <section className="text-center bg-cyan-50 p-8 rounded-lg mt-12">
            <h2 className="text-2xl font-semibold text-cyan-700 mb-4">Ready to Arm Up?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/packages/1" className="flex-1 bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-cyan-700 transition-all">
                Buy Bundle (€2,997 Solo)
              </a>
              <a href="/llmo/ai-automation-tools" className="flex-1 bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-400 transition-all">
                Back to Journey
              </a>
              <a href="mailto:support@thethriveclan.com" className="flex-1 bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-400 transition-all">
                Ask Us Anything
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}