import Link from "next/link";

export const metadata = {
  title: "The Thrive Clan | Future-Proof Your Business with AI Strategic Intelligence",
  description:
    "Discover comprehensive Sector SEO intelligence reports, Large Language Model Optimization (LLMO), and emerging investment opportunities. Expert analysis across AI, health & wellness, sustainable products, EV accessories, and breakthrough technologies.",
  keywords:
    "sector SEO, market intelligence, emerging opportunities, LLMO, AI automation, health wellness, sustainable products, EV accessories, remote work tools, e-learning, hydrogen fuel cells, drone technology, investment analysis",
};

// Website Schema Component
function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "The Thrive Clan",
    url: "https://thethriveclan.com",
    description:
      "Future-Proof Your Business with Strategic Intelligence. Comprehensive Sector SEO intelligence reports, LLMO insights, and emerging investment opportunities.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://thethriveclan.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    mainEntity: [
      {
        "@type": "Service",
        name: "Large Language Model Optimization (LLMO)",
        description: "AI language model optimization strategies and investment trends",
        url: "https://thethriveclan.com/llmo",
      },
      {
        "@type": "Service",
        name: "Sector SEO Intelligence",
        description:
          "Comprehensive market intelligence reports across high-growth industries",
        url: "https://thethriveclan.com/sector-seo",
      },
      {
        "@type": "Service",
        name: "Emerging Opportunities",
        description: "Breakthrough investment trends and market analysis",
        url: "https://thethriveclan.com/emerging-opportunities",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function Home() {
  return (
    <>
      <WebsiteSchema />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section with Parallax Effect */}
        <div className="relative w-full h-64 md:h-96 overflow-hidden">
          <div
            className="absolute inset-0 parallax"
            style={{
              backgroundImage: `url('/hero-future-car.jpg')`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="hero-overlay"></div>
          </div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center max-w-4xl mx-auto px-4 hero-text">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
                Future-Proof Your Business
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-200">
                with AI Strategic Intelligence
              </h2>
              <p className="text-xl md:text-lg mb-6 text-gray-300 leading-relaxed">
                Welcome to The Thrive Clan, where expert insights drive business
                growth in a rapidly evolving digital world.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Sections – NEW TEXT ONLY */}
        <div className="max-w-6xl mx-auto px-4 py-16 space-y-12">
          {/* Intro block reflecting the hero headline */}
          <section className="space-y-4">
            <h3 className="text-3xl font-bold text-gray-800">
              Navigate the AI Era Without Getting Left Behind
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              At The Thrive Clan, we&apos;re not here to build your website—we&apos;re
              here to help you think differently, take control, and stop
              outsourcing your future to expensive dependencies. Let&apos;s step
              through an example we&apos;re all familiar with: websites.
            </p>
          </section>

          {/* Story / NGO example */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">
              We Used to Build Websites the Hard Way – Now We&apos;re Building Futures the Smart Way
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Not that long ago, I came across quotes for enterprise-grade websites
              for large humanitarian organizations and international NGOs. We&apos;re
              talking full custom builds with donor portals, CRM integrations,
              high-security features, accessibility compliance, global
              performance, and dedicated support—often landing in the
              €50,000–€150,000+ range (sometimes pushing higher for truly complex
              institutional platforms).
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I was stunned. These are organizations dedicated to saving lives and
              alleviating suffering—every euro should stretch as far as possible
              toward the mission, not toward flashy custom code or ongoing agency
              retainers that lock them in. Annual maintenance alone can eat
              15–20% of that build cost (€10,000–€30,000+ yearly just to keep
              things running smoothly).
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              And now? With AI prompting, lightweight tools, and in-house talent
              who understand how to orchestrate them, much of that heavy lifting
              can shift to something far more efficient and owned. You don&apos;t
              have to hand over control and endless fees—you can build guardrails,
              automations, and smart systems that serve the mission long-term.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whatever your mission - AI can help you reclaim control and focus
              on what truly matters.
            </p>
          </section>

          {/* Pattern beyond websites */}
          <section className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              This isn&apos;t just about websites anymore. It&apos;s the same
              pattern playing out across operations, marketing, content, lead gen,
              and more in the AI era. Traditional approaches are getting disrupted
              fast—AI overviews are reshaping search (appearing in ~60% of Google
              queries), automation markets are exploding, and teams stuck in manual
              loops are losing ground.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At The Thrive Clan, we help founders, operators, and mission-driven
              teams reclaim that control. Our focus is Large Language Model
              Optimization (LLMO) and practical AI strategies: one-time investments
              in toolkits, playbooks, ROI calculators, prompt libraries, and phased
              guides that your team owns forever—no subscriptions, no lock-in.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Reclaim 50%+ of your time for what truly matters: innovation,
              relationships, impact. Achieve 3–5x visibility gains in AI-driven
              contexts, with payback often in months.
            </p>
          </section>

          {/* Old vs New block */}
          <section className="bg-white py-10 px-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-cyan-600 mb-6">
              The Old Trap vs. Your New Advantage
            </h3>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h4 className="text-xl font-bold text-red-600 mb-2">Old Way</h4>
                <ul className="space-y-2 text-base text-gray-700">
                  <li>Massive upfront costs (€50k–€150k+ for &quot;premium&quot; solutions)</li>
                  <li>Ongoing fees that drain resources</li>
                  <li>Dependency on external &quot;experts&quot; who think for you</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-green-600 mb-2">
                  Thrive Clan Way
                </h4>
                <ul className="space-y-2 text-base text-gray-700">
                  <li>One-time strategic investment (€1,997+)</li>
                  <li>Lifetime ownership of reusable assets</li>
                  <li>Empowerment to adapt on your terms</li>
                  <li>Time and budget freed for the real work</li>
                </ul>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We built this for people who refuse to waste another euro—or another
              quarter—on hype or handcuffs. If you&apos;re ready to stop renting
              control and start owning your edge…
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/llmo/llmo-ai-automation-tools"
                className="inline-block bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-cyan-700 transition-all"
              >
                Explore How →
              </a>
              <a
                href="/llmo/llmo-ai-automation-tools"
                className="inline-block border border-cyan-600 text-cyan-600 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-600 hover:text-white transition-all"
              >
                Claim Your Autonomy →
              </a>
            </div>
          </section>

          {/* Original sections kept as-is below this point */}

          {/* Why Us Remix – Post-Reassurance, Pre-Buttons */}
          <section className="mb-12 bg-white p-6 rounded-lg shadow-sm" id="why-us">
            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
              Why Us: Control, Not Dependence
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              In an industry where ongoing subscriptions erode trust and lock you
              into reactive tweaks, we empower lasting independence. Our one-time
              investment (€1,997+) delivers strategic frameworks that put you in
              command—reclaim 50% time for innovation, claim 3-5x visibility gains,
              and build your AI moat without endless fees. Why trade autonomy for
              dependence when you can own the future?
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-bold text-red-600 mb-2">
                  The Dependence Trap
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Endless fees: €700/year+ for basic tweaks, no true ownership.</li>
                  <li>
                    Reactive focus: Quick wins, but no foundation for long-term
                    dominance.
                  </li>
                  <li>Trust erosion: 70% churn after 6 months, missing 25-35% ROI potential.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-600 mb-2">
                  Your Independence Advantage
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Lifetime access: €1,997 once, 4-6 month payback via 60% lead boost.</li>
                  <li>Strategic depth: Phased playbooks + tools for 3-5x sustained gains.</li>
                  <li>
                    Empowered growth: Quarterly updates + support—15-20% trajectory, on
                    your terms.
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-base text-gray-700 italic">
              Choose control—trust us to empower you, not obligate you.
            </p>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
                We built The Thrive Clan for the people who actually have to make
                things work
              </h2>

              <div className="prose prose-lg text-gray-700 space-y-6 leading-relaxed">
                <p>
                  Big consultancies are designed for boardrooms, seven-figure
                  budgets, and 80-page slide decks that end up gathering dust.
                </p>
                <p className="text-cyan-700 font-medium">
                  We’re designed for founders, operators, agency owners, and
                  specialist teams who need practical AI leverage this quarter — not
                  in 2029.
                </p>
                <p>
                  You don’t rent expertise that disappears the day the invoice is
                  paid. You walk away owning reusable assets — ROI calculators,
                  prompt libraries, vendor matrices, governance frameworks, content
                  bundles — that your team can clone and extend forever.
                </p>
                <p>
                  We stay deliberately small, fiercely opinionated, and
                  laser-focused on the few places where AI + LLMO create unfair
                  advantage right now. That means clearer guidance, faster results,
                  and honest conversations about what’s worth doing today… and
                  what’s just hype.
                </p>
                <p className="text-xl md:text-2xl font-medium text-gray-900">
                  If you’re looking for an AI partner who feels more like a
                  co-founder than a corporate committee, you’ve found your people.
                </p>
              </div>

              <div className="mt-12">
                <a
                  href="/llmo/llmo-ai-automation-tools"
                  className="inline-block bg-cyan-600 text-white font-semibold text-lg py-4 px-10 rounded-lg hover:bg-cyan-700 transition-all"
                >
                  See exactly what you’ll walk away owning →
                </a>
              </div>
            </div>
          </section>

          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-center mb-12">
                Get Started with LLMO: Lead the AI Edge
              </h1>

              <div className="mb-12">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
                    Large Language Model Optimization (LLMO)
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Master AI-driven search with strategies that reclaim time and
                    boost leads—no tech overwhelm.
                  </p>

                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center mb-2">
                      <svg
                        className="w-5 h-5 text-yellow-500 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-1.512a1 1 0 00-1.175 0l-2.8 1.512c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="w-5 h-5 text-yellow-500 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-1.512a1 1 0 00-1.175 0l-2.8 1.512c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="w-5 h-5 text-yellow-500 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-1.512a1 1 0 00-1.175 0l-2.8 1.512c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="w-5 h-5 text-yellow-500 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-1.512a1 1 0 00-1.175 0l-2.8 1.512c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm text-gray-600">
                        4.7/5 from reviewers
                      </span>
                    </div>
                  </div>

                  <a
                    href="/llmo/llmo-ai-automation-tools"
                    className="inline-block bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-cyan-700 transition-all"
                  >
                    Explore AI Automation Tools →
                  </a>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Sector SEO
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Coming Q1 2026: Tailored SEO for niche dominance—subscribe for
                    early access.
                  </p>
                  <form action="/subscribe" method="post" className="space-y-2">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full p-2 border rounded text-sm"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full bg-gray-300 text-gray-800 py-2 rounded hover:bg-gray-400 transition-all text-sm"
                    >
                      Get Early Alerts
                    </button>
                  </form>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Emerging Opportunities
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Coming Q2 2026: Spot tomorrow&apos;s trends—subscribe for beta
                    invites.
                  </p>
                  <form action="/subscribe" method="post" className="space-y-2">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full p-2 border rounded text-sm"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full bg-gray-300 text-gray-800 py-2 rounded hover:bg-gray-400 transition-all text-sm"
                    >
                      Get Early Alerts
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Section */}
          <div className="bg-gray-800 rounded-xl p-6 text-white">
            <h3 className="text-3xl font-bold mb-6">Why Choose The Thrive Clan?</h3>
            <p className="text-lg leading-relaxed max-w-4xl">
              Our unique combination of LLMO strategies, SEO market intelligence,
              and emerging opportunity analysis gives you a comprehensive view of
              both current market dynamics and future growth potential. We don&apos;t
              just provide data—we deliver actionable insights that translate
              directly into business growth, competitive advantage, and investment
              success. Join The Thrive Clan community—where 500+ leaders are seeing
              3-5x visibility gains—and gain access to the strategic intelligence
              that separates market leaders from followers. One-time investment
              from €1,997, lifetime value.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
