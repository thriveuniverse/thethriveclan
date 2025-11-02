import Link from "next/link";

export const metadata = {
  title: "The Thrive Clan | Future-Proof Your Business with Strategic Intelligence",
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
<section className="bg-white py-12 mb-12 rounded-lg shadow-sm">
  <div className="max-w-4xl mx-auto px-4 text-center">
    <h3 className="text-2xl font-semibold text-cyan-600 mb-4">Own Your AI Edge—Don't Lease It</h3>
    <p className="text-lg text-gray-700 leading-relaxed mb-6">
      In the AI boom, most tools lock you into monthly subscriptions—paying forever for tactical tweaks that keep you chasing. We take a different path: One-time investment in strategic playbooks that launch you forward, giving you control to build, grow, and defend without ongoing fees. Reclaim 50% of your time for innovation and clients, while competitors stay tethered to the lease.
    </p>
    <a href="/llmo/llmo-ai-automation-tools" className="inline-block bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-cyan-700 transition-all">
      Start Owning Your Future →
    </a>
  </div>
</section>

        <div className="max-w-6xl mx-auto px-4 py-16">
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

          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-center mb-12">Get Started with LLMO: Lead the AI Edge</h1>
              
              {/* LLMO – Vertical, Prominent, Direct Link */}
              <div className="mb-12">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-semibold text-cyan-600 mb-4">Large Language Model Optimization (LLMO)</h2>
                  <p className="text-gray-700 mb-6">Master AI-driven search with strategies that reclaim time and boost leads—no tech overwhelm.</p>
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

              {/* When Ready: Expand Underneath – Uncomment & Add Content */}
              {/*
              <section id="seo-expansion" className="mb-12 bg-white p-6 rounded-lg shadow-sm">
                <!-- SEO Full Content Here -->
              </section>
              <section id="geo-expansion" className="mb-12 bg-white p-6 rounded-lg shadow-sm">
                <!-- Emerging Opportunities Full Content Here -->
              </section>
              */}
            </div>
          </section>

          {/* Why Choose Section */}
          <div className="bg-gray-800 rounded-xl p-6 text-white">
            <h3 className="text-3xl font-bold mb-6">Why Choose The Thrive Clan?</h3>
            <p className="text-lg leading-relaxed max-w-4xl">
              Our unique combination of LLMO strategies, SEO market intelligence, and emerging opportunity analysis gives you a comprehensive view of both current market dynamics and future growth potential. We don't just provide data—we deliver actionable insights that translate directly into business growth, competitive advantage, and investment success. Join The Thrive Clan community and gain access to the strategic intelligence that separates market leaders from followers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}