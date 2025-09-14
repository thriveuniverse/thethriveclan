import Image from "next/image";
import { createProductSchema } from "../../../lib/schemas/product";

// Add your metadata here

export default function AIAutomationTools() {
  const INDIVIDUAL_VARIANT_ID = "967071";
  const BUSINESS_VARIANT_ID = "967095";
  const STORE_ID = "203055";
  
  function ProductSchema() {
    const schema = createProductSchema({
      name: "LLMO AI Automation Tools Package",
      description:
        "Unleash your potential in the $3.68 trillion AI automation market with our comprehensive LLMO package. Includes 150+ keywords, implementation guide, content templates, and monitoring tools.",
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
      
      {/* Hero Section */}
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
              Ignite Your Future
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-100">
              with LLMO AI Automation Tools
            </h2>
            <p className="text-lg md:text-xl mb-6 text-gray-200 leading-relaxed">
              Unleash the Power of a $3.68 Trillion Revolution
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <section className="mb-12" id="package-details">
            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
              Why This Package Is Your Game-Changer
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Say goodbye to endless manual workflows and hello to a world where AI
              and automation unlock your potential. The market is screaming for
              solutions—70% of searches are high-commercial-intent queries, yet most
              businesses are stuck in the slow lane, unoptimized for answer engines.
              With our package, you'll leap ahead, capturing attention, driving
              leads, and building a brand that shines in enterprise, SMB, and
              developer spaces. From hyperautomation to RPA (Robotic Process
              Automation), you'll ride the wave of a tech revolution that's
              reshaping industries like healthcare, finance, and beyond.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
              Your All-in-One Toolkit for Market Domination
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This isn't just a package—it's a launchpad. Every tool is
              designed to simplify complexity, accelerate growth, and make you a
              thought leader in months, not years:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
              <li>
                <strong>150+ Keyword CSV with Intent Analysis</strong>: Pinpoint
                high-value searches to capture leads across answer engines.
              </li>
              <li>
                <strong>50+ Page Strategic Implementation Guide</strong>: A 90-day
                roadmap with entity-strength scoring and calendars to skyrocket
                visibility.
              </li>
              <li>
                <strong>15 Ready-to-Deploy Content Templates</strong>: Product
                pages, case studies, and more, optimized for voice and visual
                search.
              </li>
              <li>
                <strong>20 Detailed Blog Outlines</strong>: 3,000-4,500-word guides
                on hot topics like "Zapier vs. Power Automate" or
                industry-specific automation strategies.
              </li>
              <li>
                <strong>Automated Schema Setups</strong>: SoftwareApplication, FAQ,
                and How-To schemas to dominate featured snippets and boost rankings.
              </li>
              <li>
                <strong>Free Monitoring Tools</strong>: Google Analytics and Search
                Console setups for real-time performance tracking.
              </li>
            </ul>
          </section>

          {/* Pricing Section with Variants */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-cyan-600 mb-6 text-center">
              Choose Your License
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Individual License */}
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Individual License</h3>
                <p className="text-gray-600 mb-6">Perfect for solo entrepreneurs, consultants, and individual marketers building their AI automation expertise.</p>
                <ul className="text-sm text-gray-700 mb-6 space-y-2">
                  <li>✓ Personal use only</li>
                  <li>✓ All package components included</li>
                  <li>✓ 90-day implementation roadmap</li>
                  <li>✓ Email support</li>
                </ul>
                <a
                  href={`https://thethriveclan.lemonsqueezy.com/checkout/buy/${INDIVIDUAL_VARIANT_ID}?utm_source=thethriveclan&utm_medium=website&utm_campaign=llmo`}
                  className="w-full inline-block text-center bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-cyan-700 transition"
                  aria-label="Purchase Individual License"
                >
                  Get Individual License
                </a>
              </div>

              {/* Business License */}
              <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-cyan-500 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Business License</h3>
                <p className="text-gray-600 mb-6">Ideal for agencies, teams, and businesses implementing AI automation across multiple projects and clients.</p>
                <ul className="text-sm text-gray-700 mb-6 space-y-2">
                  <li>✓ Commercial use rights</li>
                  <li>✓ Use for client projects</li>
                  <li>✓ All package components included</li>
                  <li>✓ Priority support</li>
                  <li>✓ White-label options</li>
                </ul>
                <a
                  href={`https://thethriveclan.lemonsqueezy.com/checkout/buy/${BUSINESS_VARIANT_ID}?utm_source=thethriveclan&utm_medium=website&utm_campaign=llmo`}
                  className="w-full inline-block text-center bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-cyan-700 transition"
                  aria-label="Purchase Business License"
                >
                  Get Business License
                </a>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
              Skyrocketing Results in 90-180 Days
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This package isn't about small wins—it's about massive,
              life-changing breakthroughs. Our proven roadmap delivers:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
              <li>
                <strong>200-300% Answer Engine Traffic Growth</strong> in just 3-6
                months, capturing high-intent leads.
              </li>
              <li>
                <strong>3-5x Organic Visibility</strong> within a year, making your
                brand a go-to authority.
              </li>
              <li>
                <strong>25-35% Customer Acquisition Cost Reduction</strong> through
                optimized, automated workflows.
              </li>
              <li>
                <strong>50+ Monthly Citations</strong> by month 12, fueled by KPI
                dashboards and ROI calculators.
              </li>
              <li>
                <strong>12-18 Month Competitive Edge</strong> by acting now, before
                the market saturates.
              </li>
            </ul>
          </section>

          <section className="text-center bg-cyan-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-cyan-700 mb-4">
              Ready to Conquer the AI Automation Frontier?
            </h2>
            <p className="text-gray-700 mb-6">
              Don't just join the revolution—lead it. Choose your license above and unlock a future of limitless growth, freedom, and impact. The clock's ticking—seize your 12-18 month advantage today!
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
