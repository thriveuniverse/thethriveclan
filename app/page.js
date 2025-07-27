// app/page.js
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "The Thrive Clan | Curated Sector Resources",
  description:
    "Explore AI & automation, remote work tools, e-learning, wellness, sustainability, EV accessories, senior care, and more—curated by The Thrive Clan.",
};

// Centralized data so you only edit in one place
const sectors = [
  {
    title: "AI & Automation Tools",
    slug: "ai-and-automation-tools",
    img: "/images/ai-automation.jpg",
    alt: "Professional illustration of AI automation featuring digital circuits, robotic arm, AI chip, and workflow automation symbols in modern blue tones",
  },
  {
    title: "AI Jobs & Career Development",
    slug: "ai-jobs-and-career-development",
    img: "/images/ai-careers.jpg",
    alt: "Professional workspace illustration showing person at desk with AI brain symbol, career growth charts, and professional development icons",
  },
  {
    title: "Health & Wellness Specializations",
    slug: "health-and-wellness-specializations",
    img: "/images/health-wellness.jpg",
    alt: "Digital health technology illustration featuring health monitoring devices, medical cross, wellness tracking interfaces, and health data visualization",
  },
  {
    title: "Sustainable & Eco‑Friendly Products",
    slug: "sustainable-and-eco-friendly-products",
    img: "/images/sustainable.jpg",
    alt: "Eco-friendly business illustration with professional businessman, recycling symbols, wind turbines, solar panels, and green growth charts",
  },
  {
    title: "Electric Vehicle Accessories",
    slug: "electric-vehicle-accessories",
    img: "/images/ev-accessories.jpg",
    alt: "Electric vehicle technology illustration featuring EV charging station, electric car, charging cables, and battery technology in professional blue tones",
  },
  {
    title: "Remote Work & Productivity Tools",
    slug: "remote-work-and-productivity-tools",
    img: "/images/remote-work.jpg",
    alt: "Modern home office illustration with productivity workspace, collaboration tools, time management, and remote work applications interface",
  },
  {
    title: "E‑Learning & Online Education",
    slug: "e-learning-and-online-education",
    img: "/images/e-learning.jpg",
    alt: "Digital learning platform illustration featuring online instructor, graduation cap, educational tools, and e-learning interface elements",
  },
  {
    title: "Senior Care & Products",
    slug: "senior-care-and-products",
    img: "/images/senior-care.jpg",
    alt: "Senior care technology illustration showing elderly gentleman with assistive devices, health monitoring tools, and compassionate care support systems",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero / Intro */}
      <section className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="text-4xl font-semibold mb-4">The Thrive Clan</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          {/* TODO: Replace this with your SEO-friendly intro copy.
              Work in natural language mentions of your eight focus areas
              without keyword stuffing. */}
          Curated resources spanning intelligent automation, future‑proof
          careers, wellbeing, sustainability, electric mobility, remote
          productivity, digital learning, and aging well—so you can thrive in a
          fast‑changing world.
        </p>
      </section>

      {/* Sector Grid */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map(({ title, slug, img, alt }, index) => (
            <Link
              key={slug}
              href={`/${slug}`}
              className="group block rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
              aria-label={title}
            >
              <div className="relative w-full h-40">
                <Image
                  src={img}
                  alt={alt}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={index < 4} // Prioritize loading for first 4 images (above the fold)
                  loading={index < 4 ? "eager" : "lazy"} // Eager load first 4, lazy load rest
                  quality={85} // High quality for crisp display
                  placeholder="empty" // Use empty placeholder for faster initial render
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium">{title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
