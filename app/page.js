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
                with Strategic Intelligence
              </h2>
              <p className="text-xl md:text-lg mb-6 text-gray-300 leading-relaxed">
                Welcome to The Thrive Clan, where expert insights drive business growth in a rapidly evolving digital world.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-6 text-gray-800">
              Strategic Intelligence for Tomorrow&apos;s Winners
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              At The Thrive Clan, we specialize in three critical areas that define tomorrow&apos;s business winners: Large Language Model Optimization (LLMO) with cutting-edge AI language model optimization strategies; comprehensive sector analysis through our SEO intelligence reports, covering high-growth industries like AI automation, health and wellness, sustainable products, electric vehicle accessories, remote work solutions, and e-learning platforms; and identifying breakthrough investment opportunities in emerging markets, such as hydrogen fuel cell vehicles (FCEV), drone technology, and institutional pension fund trends. Our mission is to empower businesses, entrepreneurs, and investors with actionable, data-driven intelligence to thrive in an increasingly competitive marketplace, offering detailed competitive analysis, keyword strategies, and market force insights to ensure sustained success.
            </p>
          </div>

          {/* Three Main Sectors */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* LLMO (now using cyan) */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-800 text-left">
                  Large Language Model Optimization (LLMO)
                </h4>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Master the future of AI with our Large Language Model Optimization (LLMO) insights, unlocking performance tuning and investment trends in language technologies.
              </p>
              <div>
                <Link
                  href="/llmo"
                  className="inline-block bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition-colors duration-300 font-medium"
                >
                  Unlock AI Language Insights
                </Link>
              </div>
            </div>

            {/* Sector SEO (now using slate grey) */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-800 text-left">
                  Sector SEO Intelligence
                </h4>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Comprehensive market intelligence reports across high-growth industries including AI automation tools, health and wellness specialization, sustainable eco-friendly products, electric vehicle accessories, remote work productivity solutions, and e-learning platforms. Each report combines in-depth keyword research, content strategy blueprints, competitive analysis, and actionable blog ideas designed to dominate search rankings and capture market share.
              </p>
              <div>
                <Link
                  href="/sector-seo"
                  className="inline-block bg-slate-600 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition-colors duration-300 font-medium"
                >
                  IN DEVELOPMENT - 
                    Explore Sector SEO Reports           

                </Link>
              </div>
            </div>

            {/* Emerging Opportunities (unchanged) */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-800 text-left">
                  Emerging Opportunities

                </h4>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Identifying and analyzing breakthrough investment trends before they become mainstream. We track institutional pension fund investment patterns, hydrogen fuel cell vehicle (FCEV) market developments, drone technology innovations, and other disruptive technologies that are reshaping entire industries. This research-driven approach helps investors and business leaders identify lucrative opportunities in emerging sectors while understanding the underlying market forces driving growth.
              </p>
              <div>
                <Link
                  href="/emerging-opportunities"
                  className="inline-block bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-300 font-medium"
                >
                  IN DEVELOPMENT - 
                  Discover Emerging Opportunities
                </Link>
              </div>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="bg-gray-800 rounded-xl p-6 text-white">
            <h3 className="text-3xl font-bold mb-6">Why Choose The Thrive Clan?</h3>
            <p className="text-lg leading-relaxed max-w-4xl">
              Our unique combination of LLMO strategies, SEO market intelligence, and emerging opportunity analysis gives you a comprehensive view of both current market dynamics and future growth potential. We don&apos;t just provide data—we deliver actionable insights that translate directly into business growth, competitive advantage, and investment success. Join The Thrive Clan community and gain access to the strategic intelligence that separates market leaders from followers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
