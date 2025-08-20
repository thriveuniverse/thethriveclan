import Link from "next/link";

// Centralized data for sectors (excluding the strategy page itself)
const sectors = [
  {
    title: "LLMO AI Automation Tools",
    slug: "ai-automation-tools",
    img: "/images/ai-automation.jpg",
    alt: "Professional illustration of AI automation featuring digital circuits, robotic arm, AI chip, and workflow automation symbols in modern blue tones",
  },
  {
    title: "LLMO AI Jobs & Career Development",
    slug: "ai-jobs-career-development",
    img: "/images/ai-careers.jpg",
    alt: "Professional workspace illustration showing person at desk with AI brain symbol, career growth charts, and professional development icons",
  },
  {
    title: "LLMO Health Wellness Specializations",
    slug: "health-wellness-specializations",
    img: "/images/health-wellness.jpg",
    alt: "Digital health technology illustration featuring health monitoring devices, medical cross, wellness tracking interfaces, and health data visualization",
  },
  {
    title: "LLMO Sustainable Eco-Friendly Products",
    slug: "sustainable-eco-friendly-products",
    img: "/images/sustainable.jpg",
    alt: "Eco-friendly business illustration with professional businessman, recycling symbols, wind turbines, solar panels, and green growth charts",
  },
  {
    title: "LLMO Electric Vehicle Accessories",
    slug: "electric-vehicle-accessories",
    img: "/images/ev-accessories.jpg",
    alt: "Electric vehicle technology illustration featuring EV charging station, electric car, charging cables, and battery technology in professional blue tones",
  },
  {
    title: "LLMO Remote Work Productivity Tools",
    slug: "remote-work-productivity-tools",
    img: "/images/remote-work.jpg",
    alt: "Modern home office illustration with productivity workspace, collaboration tools, time management, and remote work applications interface",
  },
  {
    title: "LLMO E-Learning Online Education",
    slug: "e-learning-online-education",
    img: "/images/e-learning.jpg",
    alt: "Digital learning platform illustration featuring online instructor, graduation cap, educational tools, and e-learning interface elements",
  },
  {
    title: "LLMO Senior Care Products",
    slug: "senior-care-products",
    img: "/images/senior-care.jpg",
    alt: "Senior care technology illustration showing elderly gentleman with assistive devices, health monitoring tools, and compassionate care support systems",
  },
];

export const metadata = {
  title: "The Thrive Clan | LLMO Strategy",
  description: "Discover the foundational LLMO strategy to empower your business with AI-driven optimization.",
};

export default function LLMOStrategy() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-cyan-700">LLMO Strategy</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          These LLMO Specialisation Reports go far beyond a static playbook. They are crafted to empower businesses in high-growth sectors—whether in health and wellness, sustainable products, electric mobility, online education, or senior care—with a clear competitive edge in the era of AI-driven search. Each report distills sector-specific market insights, keyword opportunities, optimisation strategies, and best practices into a roadmap businesses can execute immediately.
          <br /><br />
          The real power lies in their practicality. Customers receive a complete optimisation toolkit: curated keyword lists, suggested blog and content calendars, schema and structured data strategies, and practical guidance for platforms like WordPress, Shopify, and Webflow. This enables businesses to quickly publish content that’s not only discoverable by answer engines like ChatGPT, Perplexity, and Gemini, but also authoritative enough to win citations and visibility across the buyer journey.
          <br /><br />
          For business leaders, the goal is straightforward: accelerate growth while reducing reliance on paid channels. By positioning brands as thought leaders in niches like sustainable consumer products or remote work tools, LLMO ensures content is seen, cited, and trusted by the systems billions of customers rely on. Instead of chasing fleeting trends, companies build a sustainable digital asset base that compounds in value over time.
          <br /><br />
          The business value is tangible. Organisations adopting LLMO don’t just see traffic increases; they capture higher-intent customers—those comparing solutions, seeking expert guidance, or ready to buy. Whether you’re a startup in senior care or an established eLearning provider, these reports offer a framework to own your category, strengthen brand authority, and drive measurable ROI. Explore how this applies to your sector in the grid below.
        </p>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-700">Sector Specializations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <Link
                key={index}
                href={`/llmo/${sector.slug}`}
                className="block bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="text-md font-medium text-cyan-600">{sector.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}