import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { createProductSchema } from "../../../lib/schemas/product";

// ...metadata/schema code unchanged
export const metadata = {
  title: "The Thrive Clan | LLMO AI Automation Tools Package",
  description:
    "Unleash your potential in the $3.68 trillion AI automation market with our LLMO package—your all-in-one toolkit for dominating answer engines and scaling success.",
  keywords:
    "AI automation, LLMO, workflow automation, answer engine optimization, hyperautomation, AI tools, business growth",
  openGraph: {
    title: "The Thrive Clan | LLMO AI Automation Tools Package",
    description:
      "Seize the AI automation revolution with our LLMO package. Get tools, strategies, and content to dominate a $3.68T market with 300-500% ROI in 90-180 days.",
    images: ["/images/ai-automation.jpg"],
    url: "https://thethriveclan.com/llmo/ai-automation-tools",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Thrive Clan | LLMO AI Automation Tools Package",
    description:
      "Join the $3.68T AI automation boom with our LLMO package—keywords, strategies, and content to lead the market in 90 days.",
    images: ["/images/ai-automation.jpg"],
  },
};
export default function AIAutomationTools() {
  // Product Schema Component
  function ProductSchema() {
    const schema = createProductSchema({
      name: "LLMO AI Automation Tools Package",
      description: "Unleash your potential in the $3.68 trillion AI automation market with our comprehensive LLMO package. Includes 150+ keywords, implementation guide, content templates, and monitoring tools.",
      image: "https://thethriveclan.com/images/ai-automation.jpg",
      url: "https://thethriveclan.com/llmo/ai-automation-tools",
      category: "Digital Marketing Package",
      sku: "LLMO-AI-AUTO-001",
      // price: "299.00", // Uncomment when pricing is finalized
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
              Build. Grow. Defend.
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-100">
              LLMO AI Automation Tools for the Next Era
            </h2>
            <p className="text-lg md:text-xl mb-6 text-gray-200 leading-relaxed">
              A strategic suite for real-world authority, growth, and future-proofing in an AI-driven business landscape.
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ACCORDION SECTIONS */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-cyan-700 mb-6">Why Choose This Bundle?</h2>
            <Accordion />
          </section>

          {/* Pricing Section with Variants */}
          {/* ...Keep your pricing cards code here unchanged */}

          {/* Call to Action */}
          <section className="text-center bg-cyan-50 p-8 rounded-lg mt-12">
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

// --- Accordion Component ---
function Accordion() {
  const sections = [
    {
      title: "The Problem With Most 'SEO Packs'",
      content: (
        <p className="text-gray-700">
          In today's AI-first world, most packs are designed for yesterday's search engines, not tomorrow's business reality.
          This bundle helps you build assets and expertise that last—beyond hacks or fleeting algorithm tweaks.
        </p>
      ),
    },
    {
      title: "What Makes This Different",
      content: (
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Every template and asset is future-proofed for LLMO (Large Language Model Optimization) and enterprise-class content strategy.</li>
          <li>Industry benchmarks and ROI calculators bring hard data to every decision.</li>
          <li>Competitive comparison so you always know “why ours,” not just “why now.”</li>
        </ul>
      ),
    },
    {
      title: "What's Inside?",
      content: (
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>150+ strategic keywords</strong> researched for long-term value.</li>
          <li><strong>20 in-depth blog outlines & templates</strong>, optimized for human + AI visibility.</li>
          <li>Full Go-to-Market & 90-day implementation guide.</li>
          <li>ROI, monitoring, and analytics tools.</li>
          <li>Nextgen schema assets for instant AI visibility.</li>
        </ul>
      ),
    },
    {
      title: "Pricing & Early Access Guarantee",
      content: (
        <ul className="space-y-2 text-gray-700">
          <li><strong>Solo License:</strong> €2,997 (single use)</li>
          <li><strong>Business License:</strong> €4,997 (up to 5 users/projects)</li>
          <li><strong>Consultancy/Agency:</strong> €7,997 (unlimited use/client delivery)</li>
          <li>Founding buyer? Lock in a -30% lifetime discount and free major updates.</li>
        </ul>
      ),
    },
    {
      title: "Our Guarantee (No Reviews Yet)",
      content: (
        <p className="text-gray-700">
          We're new—and that means our founding buyers get early access pricing, direct product input, and our undivided support. Use the bundle, try it out, and if it doesn't deliver at least the value promised, we refund—period.
        </p>
      ),
    },
  ];

  return (
    <div className="w-full mx-auto rounded-2xl bg-white p-2">
      {sections.map((item, idx) => (
        <Disclosure as="div" key={item.title} defaultOpen={idx < 1}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between items-center w-full px-4 py-3 text-lg font-medium text-left text-cyan-800 bg-cyan-100 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-cyan-500 focus-visible:ring-opacity-75 my-1">
                <span>{item.title}</span>
                <ChevronUpIcon
                  className={`
                    ${open ? 'transform rotate-180' : ''}
                    w-5 h-5 text-cyan-600 transition-transform`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-3 pb-6 text-base">
                {item.content}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
