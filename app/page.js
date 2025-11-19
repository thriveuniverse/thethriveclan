import Link from "next/link";

export const metadata = {
  title: "The Thrive Clan | Future-Proof Your Business with AI Strategic Intelligence",
  description: "Discover comprehensive Sector SEO intelligence reports, Large Language Model Optimization (LLMO), and emerging investment opportunities. Expert analysis across AI, health & wellness, sustainable products, EV accessories, and breakthrough technologies.",
  keywords: "sector SEO, market intelligence, emerging opportunities, LLMO, AI automation, health wellness, sustainable products, EV accessories, remote work tools, e-learning, hydrogen fuel cells, drone technology, investment analysis",
};

// Website Schema Component
function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "The Thrive Clan",
    "url": "https://thethriveclan.com",
    "description": "Future-Proof Your Business with Strategic Intelligence. Comprehensive Sector SEO intelligence reports, LLMO insights, and emerging investment opportunities.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://thethriveclan.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "mainEntity": [
      {
        "@type": "Service",
        "name": "Large Language Model Optimization (LLMO)",
        "description": "AI language model optimization strategies and investment trends",
        "url": "https://thethriveclan.com/llmo"
      },
      {
        "@type": "Service", 
        "name": "Sector SEO Intelligence",
        "description": "Comprehensive market intelligence reports across high-growth industries",
        "url": "https://thethriveclan.com/sector-seo"
      },
      {
        "@type": "Service",
        "name": "Emerging Opportunities",
        "description": "Breakthrough investment trends and market analysis",
        "url": "https://thethriveclan.com/emerging-opportunities"
      }
    ]
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
                Welcome to The Thrive Clan, where expert insights drive business growth in a rapidly evolving digital world.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Sections */}
<div className="max-w-6xl mx-auto px-4 py-16">
  {/* Navigate the AI Era – Worry Hook */}
  <div className="mb-12">
    <h3 className="text-3xl font-bold mb-6 text-gray-800">
      Navigate the AI Era Without Getting Left Behind
    </h3>
    <p className="text-lg text-gray-700 leading-relaxed mb-6">
      In an AI-driven world where 65% of queries now go straight to answer engines like ChatGPT (leaving 34% of traditional SEO traffic behind), businesses risk stagnant leads and missed opportunities in the $150B AI automation sector growing 40-60% yearly (Forrester, 2025). The result? Stagnant leads, missed market share, and teams stuck in manual drudgery, unable to innovate or nurture client relationships.
    </p>
    <p className="text-lg text-gray-700 leading-relaxed">
      At The Thrive Clan, we specialize in Large Language Model Optimization (LLMO) for cutting-edge AI strategies—delving into AI automation's possibilities, benefits, timelines, and the risks of delay. Our packs deliver actionable intelligence: Keyword dossiers, playbooks, ROI calculators, and guides to reclaim time for innovation, client relationships, and market share wins. Empower your team to lead, not chase.
    </p>
    <div className="text-center mt-8">
      <a href="/llmo/llmo-ai-automation-tools" className="inline-block bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-cyan-700 transition-all">
        Explore AI Automation Tools →
      </a>
    </div>
  </div>

  {/* Own Your AI Edge – Reassurance */}
  <section className="bg-white py-12 mb-12 rounded-lg shadow-sm">
  <div className="max-w-4xl mx-auto px-4">
    <h3 className="text-2xl font-semibold text-cyan-600 mb-4">Own Your AI Edge—Reclaim Autonomy in Tight Times</h3>
    <p className="text-lg text-gray-700 leading-relaxed mb-6">
      In an era of tight budgets and relentless AI shifts, monthly tools drain resources without true ownership—leaving teams reactive, not in command. We cut the chain: One-time investment in strategic toolkits that free 50% of your time for innovation and clients, building resilience without ongoing obligations. Own the strategy; let competitors chase the bill.
    </p>
    <p className="text-lg text-gray-700 italic">
    Own your strategy - make it unique.
  </p>
    <div className="text-center">
      <a href="/llmo/llmo-ai-automation-tools" className="inline-block bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-cyan-700 transition-all">
        Claim Your Autonomy →
      </a>
    </div>
  </div>
</section>

 {/* Why Us Remix – Post-Reassurance, Pre-Buttons */}
<section className="mb-12 bg-white p-6 rounded-lg shadow-sm" id="why-us">
  <h2 className="text-2xl font-semibold text-cyan-600 mb-4">Why Us: Control, Not Dependence</h2>
  <p className="text-base text-gray-700 leading-relaxed mb-6">
    In an industry where ongoing subscriptions erode trust and lock you into reactive tweaks, we empower lasting independence. Our one-time investment (€1,997+) delivers strategic frameworks that put you in command—reclaim 50% time for innovation, claim 3-5x visibility gains, and build your AI moat without endless fees. Why trade autonomy for dependence when you can own the future?
  </p>
  
  <div className="grid md:grid-cols-2 gap-8 mb-6">
    <div>
      <h3 className="text-xl font-bold text-red-600 mb-2">The Dependence Trap</h3>
      <ul className="space-y-2 text-sm text-gray-700">
        <li>Endless fees: €700/year+ for basic tweaks, no true ownership.</li>
        <li>Reactive focus: Quick wins, but no foundation for long-term dominance.</li>
        <li>Trust erosion: 70% churn after 6 months, missing 25-35% ROI potential.</li>
      </ul>
    </div>
    <div>
      <h3 className="text-xl font-bold text-green-600 mb-2">Your Independence Advantage</h3>
      <ul className="space-y-2 text-sm text-gray-700">
        <li>Lifetime access: €1,997 once, 4-6 month payback via 60% lead boost.</li>
        <li>Strategic depth: Phased playbooks + tools for 3-5x sustained gains.</li>
        <li>Empowered growth: Quarterly updates + support—15-20% trajectory, on your terms.</li>
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
      We built The Thrive Clan for the people who actually have to make things work
    </h2>

    <div className="prose prose-lg text-gray-700 space-y-6 leading-relaxed">
      <p>
        Big consultancies are designed for boardrooms, seven-figure budgets, and 80-page slide decks that end up gathering dust.
      </p>
      <p className="text-cyan-700 font-medium">
        We’re designed for founders, operators, agency owners, and specialist teams who need practical AI leverage this quarter — not in 2029.
      </p>
      <p>
        You don’t rent expertise that disappears the day the invoice is paid.  
        You walk away owning reusable assets — ROI calculators, prompt libraries, vendor matrices, governance frameworks, content bundles — that your team can clone and extend forever.
      </p>
      <p>
        We stay deliberately small, fiercely opinionated, and laser-focused on the few places where AI + LLMO create unfair advantage right now.  
        That means clearer guidance, faster results, and honest conversations about what’s worth doing today… and what’s just hype.
      </p>
      <p className="text-xl md:text-2xl font-medium text-gray-900">
        If you’re looking for an AI partner who feels more like a co-founder than a corporate committee,  
        you’ve found your people.
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
      <h1 className="text-3xl font-bold text-center mb-12">Get Started with LLMO: Lead the AI Edge</h1>
      
      {/* LLMO – Vertical, Prominent, Direct Link */}
      <div className="mb-12">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-cyan-600 mb-4">Large Language Model Optimization (LLMO)</h2>
          <p className="text-gray-700 mb-6">Master AI-driven search with strategies that reclaim time and boost leads—no tech overwhelm.</p>
          {/* Trust Nudge Above Buttons */}
<div className="text-center mb-6">
  <div className="flex items-center justify-center mb-2">
    <svg className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-1.512a1 1 0 00-1.175 0l-2.8 1.512c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>
    <svg className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-1.512a1 1 0 00-1.175 0l-2.8 1.512c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>
    <svg className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-1.512a1 1 0 00-1.175 0l-2.8 1.512c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>
    <svg className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-1.512a1 1 0 00-1.175 0l-2.8 1.512c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>
    <span className="text-sm text-gray-600">4.7/5 from reviewers</span>
  </div>
</div>
          <a href="/llmo/llmo-ai-automation-tools" className="inline-block bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-cyan-700 transition-all">
            Explore AI Automation Tools →
          </a>
        </div>
      </div>

      {/* SEO & Emerging Opportunities – Horizontal Previews */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Sector SEO</h3>
          <p className="text-gray-700 mb-4">Coming Q1 2026: Tailored SEO for niche dominance—subscribe for early access.</p>
          <form action="/subscribe" method="post" className="space-y-2">
            <input type="email" placeholder="Your email" className="w-full p-2 border rounded text-sm" required />
            <button type="submit" className="w-full bg-gray-300 text-gray-800 py-2 rounded hover:bg-gray-400 transition-all text-sm">
              Get Early Alerts
            </button>
          </form>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Emerging Opportunities</h3>
          <p className="text-gray-700 mb-4">Coming Q2 2026: Spot tomorrow's trends—subscribe for beta invites.</p>
          <form action="/subscribe" method="post" className="space-y-2">
            <input type="email" placeholder="Your email" className="w-full p-2 border rounded text-sm" required />
            <button type="submit" className="w-full bg-gray-300 text-gray-800 py-2 rounded hover:bg-gray-400 transition-all text-sm">
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
  Our unique combination of LLMO strategies, SEO market intelligence, and emerging opportunity analysis gives you a comprehensive view of both current market dynamics and future growth potential. We don't just provide data—we deliver actionable insights that translate directly into business growth, competitive advantage, and investment success. Join The Thrive Clan community—where 500+ leaders are seeing 3-5x visibility gains—and gain access to the strategic intelligence that separates market leaders from followers. One-time investment from €1,997, lifetime value.
</p>
          </div>
          
        </div>
      </div>
    </>
  );
}
