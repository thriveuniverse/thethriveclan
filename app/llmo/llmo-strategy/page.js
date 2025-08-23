import Link from "next/link";
import { createProductSchema } from "../../../lib/schemas/product";

// Centralized data for sectors (excluding the strategy page itself and missing e-learning page)
const sectors = [
  {
    title: "LLMO AI Automation Tools",
    slug: "llmo-ai-automation-tools",
    img: "/images/ai-automation.jpg",
    alt: "Professional illustration of AI automation featuring digital circuits, robotic arm, AI chip, and workflow automation symbols in modern blue tones",
  },
  {
    title: "LLMO AI Jobs & Career Development",
    slug: "llmo-ai-jobs-career-development",
    img: "/images/ai-careers.jpg",
    alt: "Professional workspace illustration showing person at desk with AI brain symbol, career growth charts, and professional development icons",
  },
  {
    title: "LLMO Health Wellness Specializations",
    slug: "llmo-health-wellness-specializations",
    img: "/images/health-wellness.jpg",
    alt: "Digital health technology illustration featuring health monitoring devices, medical cross, wellness tracking interfaces, and health data visualization",
  },
  {
    title: "LLMO Sustainable Eco-Friendly Products",
    slug: "llmo-sustainable-eco-friendly-products",
    img: "/images/sustainable.jpg",
    alt: "Eco-friendly business illustration with professional businessman, recycling symbols, wind turbines, solar panels, and green growth charts",
  },
  {
    title: "LLMO Electric Vehicle Accessories",
    slug: "llmo-electric-vehicle-accessories",
    img: "/images/ev-accessories.jpg",
    alt: "Electric vehicle technology illustration featuring EV charging station, electric car, charging cables, and battery technology in professional blue tones",
  },
  {
    title: "LLMO Remote Work Productivity Tools",
    slug: "llmo-remote-work-productivity-tools",
    img: "/images/remote-work.jpg",
    alt: "Modern home office illustration with productivity workspace, collaboration tools, time management, and remote work applications interface",
  },
  {
    title: "LLMO Senior Care Products",
    slug: "llmo-senior-care-products",
    img: "/images/senior-care.jpg",
    alt: "Senior care technology illustration showing elderly gentleman with assistive devices, health monitoring tools, and compassionate care support systems",
  },
];

export const metadata = {
  title: "The Thrive Clan | LLMO Strategy Package",
  description:
    "Launch your business into the $3.68T AI-driven market with our LLMO Strategy Package—your blueprint for dominating answer engines and scaling with freedom.",
  keywords:
    "LLMO strategy, AI optimization, answer engine optimization, business growth, hyperautomation, SEO strategy",
  openGraph: {
    title: "The Thrive Clan | LLMO Strategy Package",
    description:
      "Master the $3.68T AI market with our LLMO Strategy Package. Get tools and insights to lead answer engines and achieve limitless success.",
    images: ["/images/llmo-strategy.jpg"],
    url: "https://thethriveclan.com/llmo/llmo-strategy",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Thrive Clan | LLMO Strategy Package",
    description:
      "Lead the AI revolution with our LLMO Strategy Package—your key to dominating answer engines and scaling your business.",
    images: ["/images/llmo-strategy.jpg"],
  },
};

export default function LLMOStrategy() {
  // Product Schema Component
  function ProductSchema() {
    const schema = createProductSchema({
      name: "LLMO Strategy Package",
      description: "Launch your business into the $3.68T AI-driven market with our comprehensive LLMO Strategy Package. Your blueprint for dominating answer engines and scaling with freedom across all industries.",
      image: "https://thethriveclan.com/images/llmo-strategy.jpg",
      url: "https://thethriveclan.com/llmo/llmo-strategy",
      category: "AI Strategy Package",
      sku: "LLMO-STRATEGY-001",
      // price: "999.00", // Uncomment when pricing is finalized - premium for flagship product
      brand: "The Thrive Clan",
      aggregateRating: null, // Add reviews later if available
    });

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    );
  }

  return (
    <>
      <ProductSchema />
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-cyan-700 mb-6">
            Launch Your Empire with the LLMO Strategy Package
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            <strong>Seize the $3.68 Trillion AI Revolution</strong>
            <br />
            Imagine a world where your business doesn't just grow—it dominates, leading a $3.68 trillion AI-driven market by 2034. The LLMO Strategy Package is your launchpad, a dynamic blueprint crafted for visionaries—entrepreneurs, developers, and consultants—ready to conquer answer engines like ChatGPT, Perplexity, and Gemini. With AI and automation surging at 23.68% annually, this is your 12-18 month window to break free from outdated tactics, unlock limitless potential, and build a legacy of unstoppable success.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
              Your Secret Weapon for Market Domination
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Forget chasing trends or burning budgets on paid ads. Our LLMO Strategy Package empowers you to own your niche—whether it's health and wellness, sustainable products, or e-learning—by harnessing the power of answer engine optimization. With 70% of searches driven by high-intent queries, this package positions your brand as a trusted authority, capturing leads and building trust across platforms like WordPress, Shopify, and Webflow. It's not just a strategy; it's your ticket to freedom, creativity, and market leadership.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
              A Toolkit That Transforms Vision into Victory
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This isn't a static playbook—it's a rocket-powered toolkit designed for immediate impact. Tailored for high-growth sectors, the LLMO Strategy Package equips you with:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
              <li>
                <strong>Curated Keyword Lists</strong>: Target high-intent searches to dominate answer engines and drive qualified leads.
              </li>
              <li>
                <strong>Content & Blog Calendars</strong>: Ready-to-execute plans to publish authoritative content that wins citations fast.
              </li>
              <li>
                <strong>Schema & Structured Data Strategies</strong>: Automated setups for SoftwareApplication, FAQ, and How-To schemas to secure featured snippets.
              </li>
              <li>
                <strong>Platform-Specific Guidance</strong>: Practical steps for optimizing on WordPress, Shopify, Webflow, and more.
              </li>
              <li>
                <strong>90-Day Roadmap</strong>: A clear plan to boost organic traffic by 200-300% and slash customer acquisition costs by 25-35% in 6-12 months.
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              From startups in senior care to established e-learning providers, this package delivers measurable ROI, turning your content into a sustainable digital asset that compounds in value over time.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
              Explore Our Industry-Tailored LLMO Solutions
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Ready to lead your industry? Our LLMO packages are crafted for specific sectors, each designed to amplify your success with cutting-edge strategies. Discover your path to dominance:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectors.map((sector) => (
                <Link
                  key={sector.slug}
                  href={`/llmo/${sector.slug}`}
                  className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                    <img
                      src={sector.img}
                      alt={sector.alt}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-cyan-600 group-hover:text-cyan-700 transition-colors">
                      {sector.title}
                    </h3>
                    <div className="mt-2 text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore specialized strategies →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-lg border border-cyan-200">
            <h2 className="text-2xl font-semibold text-cyan-700 mb-4">
              Ready to Conquer the AI-Powered Future?
            </h2>
            <p className="text-gray-700 mb-6">
              Don't just compete—dominate. Grab the LLMO Strategy Package now and unlock a world of freedom, growth, and market leadership. The clock's ticking—seize your 12-18 month advantage today!
            </p>
            {/* TODO: Replace with actual Lemon Squeezy button code */}
            <a
              href="https://lemonsqueezy.com/your-llmo-strategy-link"
              className="inline-block bg-cyan-600 text-white font-semibold py-4 px-8 rounded-full hover:bg-cyan-700 transition shadow-lg"
            >
              Get the LLMO Strategy Package Now
            </a>
          </section>
        </div>
      </div>
    </>
  );
}
