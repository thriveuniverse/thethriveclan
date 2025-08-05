export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "The Thrive Clan",
      url: "https://thethriveclan.com",
      description:
        "A dedicated team providing tailored insights for future-proofing businesses. Our team has been building websites since the 1990s.",
      foundingDate: "2025",
      sameAs: ["https://twitter.com/thethriveclan"],

      founder: {
        "@type": "Person",
        name: "Jonathan KELLY", 
        jobTitle: "Founder & Digital Strategist",
        worksFor: {
          "@type": "Organization",
          name: "The Thrive Clan"
        },
        hasOccupation: {
          "@type": "Occupation",
          name: "Web Developer",
          description: "Over 25 years of experience in web development and digital strategy fuelled by curiosity.",
          startDate: "1996"
        },
        alumniOf: {
          "@type": "Royal Holloway, University of London ",
          name: "RHUL, Royal Holloway University of London"
        },
        sameAs: [
          "https://linkedin.com/in/https://www.linkedin.com/in/jonathan-kelly-a09065379"
        ]
      }
    }),
  }}
/>
      <h1 className="text-3xl font-semibold mb-4">About Us</h1>
      <p className="text-lg mb-4">
        Welcome—and congratulations on taking a step toward future-proofing your business in an ever-evolving digital and industrial landscape.
      </p>
      <p className="text-lg mb-4">
        Trust is built on transparency, so let&apos;s introduce ourselves. We&apos;re a small, dedicated team with deep roots in the early web era, where building sites meant crafting every line of code by hand. Our passion for how information flows online—and now, how industries adapt to tomorrow&apos;s challenges—has been our guiding force from the start. We didn&apos;t jump on the latest trends; we&apos;ve lived through them, from the rise of search engines to the integration of AI and beyond.
      </p>
      <p className="text-lg mb-4">
        Today, the world moves faster than ever, with small and independent businesses facing not just digital hurdles but also broader shifts in sustainability, energy, and investment. We&apos;ve seen the hype around quick fixes fall short, and we&apos;ve evolved right alongside it. What began as in-depth SEO reports available for digital download has grown into comprehensive industry analyses that dig into forward-thinking sectors. Think hydrogen combustion engines (HCE), fuel cell electric vehicles (FCEV), pension investment leaders like LPPI, ESG frameworks, and companies pioneering truly future-proof strategies.
      </p>
      <p className="text-lg mb-4">
        Our approach remains grounded and practical. We blend timeless tools like classic HTML with cutting-edge site generators, always choosing what&apos;s right for your unique needs—not what&apos;s buzzing on social media. No cookie-cutter advice here; we tailor insights to your reality, whether that&apos;s optimizing your online presence or navigating emerging industries with data-driven clarity.
      </p>
      <p className="text-lg mb-4">
        Above all, we&apos;re committed to sharing what we&apos;ve learned: actionable strategies, reliable data, and experience-tested guidance. If you&apos;re done with the noise and ready for substance that drives real progress, you&apos;ve found your partners. Let&apos;s build a resilient future together—on your terms, at your pace.
      </p>
    </div>
  );
}