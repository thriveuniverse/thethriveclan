export const metadata = {
  title: 'About Us | The Thrive Clan',
  description: 'Miranda and Jonathan Kelly — the people behind Decision Intelligence, Resilience Intelligence, and the methodology that connects them.',
};

export default function About() {
  return (
    <div className="min-h-screen bg-[#0d0b14] py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "The Thrive Clan",
            url: "https://thethriveclan.com",
            description: "Decision Intelligence and Resilience Intelligence — rigorous research spanning AI simulation, energy systems, and cascade modeling.",
            foundingDate: "2025",
            founder: [
              {
                "@type": "Person",
                name: "Miranda Kelly",
                alumniOf: { "@type": "CollegeOrUniversity", name: "Royal Holloway, University of London" }
              },
              {
                "@type": "Person",
                name: "Jonathan Kelly",
                alumniOf: { "@type": "CollegeOrUniversity", name: "Royal Holloway, University of London" }
              }
            ]
          }),
        }}
      />

      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-10">About Us</h1>

        <div className="space-y-6 text-[#b8b0d8] leading-relaxed text-lg">
          <p className="text-xl text-white font-medium leading-relaxed">
            What we share is a reflex: we see the thing that normalcy bias is hiding,
            and we can&apos;t leave it alone.
          </p>

          <p>
            Miranda studied mathematics, worked in finance, and now teaches business English
            to senior professionals — in exactly the organisations and pressure environments
            that our decision work is designed for. Jonathan studied psychology and has ideas
            that arrive as if from elsewhere: fully formed, unlikely, and usually correct.
            We met at Royal Holloway, University of London, and have been arguing productively
            ever since.
          </p>

          <p>
            We both believed that 2008 never ran its course — that quantitative easing
            papered over a structural problem rather than resolved one. The disagreement
            was in what followed. Miranda kept hoping the world would hold together.
            Jonathan kept waiting for it not to. That tension became a research programme.
          </p>

          <p>
            Jonathan&apos;s original frame for LastPrompt was a survival game — preparation
            for what happens when systems fail catastrophically. Miranda flipped it: not
            preparation for the apocalypse, but preparation for the generation that will
            have to think through complexity without flinching. Better decisions as the
            response to systemic fragility, not just better gear.
          </p>

          <p>
            That inversion — from &ldquo;survive the collapse&rdquo; to &ldquo;think your
            way through it&rdquo; — is probably the most honest account of how we work.
            He brings the idea, fully formed and slightly alarming. She brings the logic
            that makes it deployable. The economics and the teaching meet somewhere in the
            middle, and something neither of us could have built alone comes out the other side.
          </p>

          <p>
            LastPrompt is the clearest expression of that. It blends everything we both
            think into one architecture — and its modularity means it can keep doing that
            for other people with other impossible ideas.
          </p>
        </div>
      </div>
    </div>
  );
}
