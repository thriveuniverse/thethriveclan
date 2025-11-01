import Link from "next/link";

export const metadata = {
  title: "Emerging Opportunities - The Thrive Clan",
  description: "Detailed Financial Reports into Businesses, Industries and Innovations by The Thrive Clan.",
};

const pensionFunds = [
  { title: "LPPI Financial Reports", slug: "lppi-financial-reports", type: "financial" },
  { title: "LPPI and ESG Success Unveiled", slug: "lppi-and-esg-reports", type: "specialized" },
  // TODO: Add remaining 6 UK pension pools (e.g., Brunel, Border to Coast, etc.) with financial and specialized slugs
  // Example: { title: "Brunel Financial Reports", slug: "brunel-financial-reports", type: "financial" },
  //         { title: "Brunel Specialized Focus", slug: "brunel-specialized-reports", type: "specialized" },
];

const innovations = [
  {
    title: "Hydrogen Combustion Engines - HCE - Industry Insights and Detailed Analysis Reports",
    slug: "hydrogen-combustion-engines",
    img: "/images/hydrogen-combustion.jpg",
    alt: "Car designs of the future with hydrogen combustion engines, showcasing innovative automotive technology",
  },
  {
    title: "Fuel Cell Electric Vehicles - FCEV - Industry Insights and Detailed Analysis Reports",
    slug: "fuel-cell-electric-vehicles",
    img: "/images/fuel-cell-ev.jpg",
    alt: "Futuristic fuel cell electric vehicle designs, showcasing advanced automotive technology and clean energy solutions",
  },
  {
    title: "Drone Industry Insights, Analysis & Reports",
    slug: "drone-industry-insights",
    img: "/images/drone-industry.jpg",
    alt: "Drone technology illustration featuring advanced UAV designs, aerial photography, delivery systems, and agricultural applications",
  },
  // TODO: Add more innovations as needed
];

export default function EmergingOpportunities() {
  return (
    <main>
      {/* Hero / Intro */}
      <section className="mx-auto max-w-3xl px-4 py-16 text-center bg-emerald-50">
        <h1 className="text-4xl font-semibold mb-4 text-emerald-800">Emerging Opportunities</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Discover detailed financial reports and industry insights from The Thrive Clan, covering UK pension pools and cutting-edge innovations like hydrogen technologies and drones.
        </p>
      </section>

      {/* Pension Funds Section */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-semibold mb-6 text-emerald-700">UK Pension Pool Insights</h2>
        <p className="text-md text-gray-600 mb-4">Explore financial and specialized reports for the 8 UK pension pools.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pensionFunds.map(({ title, slug }, index) => (
            <Link
              key={slug}
              href={`/${slug}`}
              className="group block rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white"
              aria-label={title}
            >
              <div className="p-4">
                <h3 className="text-lg font-medium text-emerald-600">{title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Transition Blurb */}
      <section className="mx-auto max-w-3xl px-4 py-10 text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          Follow the innovation to explore the future—unlocking opportunities in emerging technologies.
        </p>
      </section>

      {/* Innovation Section */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-semibold mb-6 text-cyan-700">Innovations Shaping the Future</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {innovations.map(({ title, slug, img, alt }, index) => (
            <Link
              key={slug}
              href={`/${slug}`}
              className="group block rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white"
              aria-label={title}
            >
              <div className="relative w-full h-40">
                <img
                  src={img}
                  alt={alt}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  loading={index < 3 ? "eager" : "lazy"}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-cyan-600">{title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}