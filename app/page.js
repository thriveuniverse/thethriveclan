// app/page.js
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "The Thrive Clan | Future-Proof Your Business with Strategic Intelligence",
  description: "Discover comprehensive Sector SEO intelligence reports and emerging investment opportunities. Expert analysis across AI, health & wellness, sustainable products, EV accessories, and breakthrough technologies.",
  keywords: "sector SEO, market intelligence, emerging opportunities, AI automation, health wellness, sustainable products, EV accessories, remote work tools, e-learning, hydrogen fuel cells, drone technology, investment analysis",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Future-Proof Your Business
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-700">
            with Strategic Intelligence
          </h2>
          <p className="text-xl mb-12 text-gray-600 leading-relaxed">
            Welcome to The Thrive Clan, where cutting-edge market intelligence meets strategic business growth. 
            In today's rapidly evolving digital landscape, staying ahead requires more than intuition—it demands 
            data-driven insights and forward-thinking strategies that position your business for sustained success.
          </p>
        </div>

        {/* Main Content Sections */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-6 text-gray-800">
              Strategic Intelligence for Tomorrow's Winners
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At The Thrive Clan, we specialize in two critical areas that define tomorrow's business winners: 
              comprehensive sector analysis through our SEO intelligence reports and identifying breakthrough 
              investment opportunities in emerging markets. Our mission is to empower businesses, entrepreneurs, 
              and investors with the strategic intelligence needed to thrive in an increasingly competitive marketplace.
            </p>
          </div>

          {/* Two Main Sectors */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Sector SEO */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-800">Sector SEO Intelligence</h4>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive market intelligence reports across high-growth industries including AI automation tools, 
                health and wellness specialization, sustainable eco-friendly products, electric vehicle accessories, 
                remote work productivity solutions, and e-learning platforms. Each report combines in-depth keyword 
                research, content strategy blueprints, competitive analysis, and actionable blog ideas designed to 
                dominate search rankings and capture market share.
              </p>
              <div className="text-center">
                <a
                  href="/sector-seo"
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold shadow-md hover:shadow-lg"
                >
                  Explore Sector SEO Reports
                </a>
              </div>
            </div>

            {/* Emerging Opportunities */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-800">Emerging Opportunities</h4>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Identifying and analyzing breakthrough investment trends before they become mainstream. We track 
                institutional pension fund investment patterns, hydrogen fuel cell vehicle (FCEV) market developments, 
                drone technology innovations, and other disruptive technologies that are reshaping entire industries. 
                This research-driven approach helps investors and business leaders identify lucrative opportunities 
                in emerging sectors while understanding the underlying market forces driving growth.
              </p>
              <div className="text-center">
                <a
                  href="/emerging-opportunities"
                  className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 font-semibold shadow-md hover:shadow-lg"
                >
                  Discover Emerging Opportunities
                </a>
              </div>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-6">Why Choose The Thrive Clan?</h3>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto">
              Our unique combination of SEO market intelligence and emerging opportunity analysis gives you a 
              comprehensive view of both current market dynamics and future growth potential. We don't just 
              provide data—we deliver actionable insights that translate directly into business growth, 
              competitive advantage, and investment success. Join The Thrive Clan community and gain access 
              to the strategic intelligence that separates market leaders from followers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

