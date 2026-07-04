import Link from 'next/link';

export const metadata = {
  title: 'Our Projects | The Thrive Clan',
  description: 'One idea, followed by two people to two different conclusions: Last Prompt and Resilience Intelligence.',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0d0b14] py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-4">Our Projects</h1>
        <p className="text-lg text-[#b8b0d8] mb-12 max-w-2xl leading-relaxed">
          One idea, two people who couldn&apos;t leave it alone. Everything here traces back to
          the same insight, pushed to its conclusion twice — once as a way to train a single
          decision, once as a way to watch a whole system come apart.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#13111e] rounded-xl p-8 border border-[#2a2540] flex flex-col">
            <h2 className="text-2xl font-bold text-white mb-4">Last Prompt</h2>
            <p className="text-[#b8b0d8] leading-relaxed mb-6 flex-1">
              AI-driven simulation environments for high-stakes decision making.
              Rooted in chronosymbiosis, these tools help leaders rehearse complexity
              before they face it.
            </p>
            <Link
              href="/projects/decision-intelligence"
              className="inline-block text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
            >
              Explore →
            </Link>
          </div>

          <div className="bg-[#13111e] rounded-xl p-8 border border-[#2a2540] flex flex-col">
            <h2 className="text-2xl font-bold text-white mb-4">Resilience Intelligence</h2>
            <p className="text-[#b8b0d8] leading-relaxed mb-6 flex-1">
              Cascade modeling of energy systems and social infrastructure.
              Live dashboards, published research, and analytical frameworks
              that map systemic vulnerability before it becomes systemic failure.
            </p>
            <Link
              href="/projects/resilience-intelligence"
              className="inline-block text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
            >
              Explore →
            </Link>
          </div>
        </div>

        <div className="mt-16 bg-[#13111e] rounded-xl p-8 border border-[#2a2540]">
          <h2 className="text-xl font-bold text-white mb-3">The Connection</h2>
          <p className="text-[#b8b0d8] leading-relaxed max-w-3xl">
            These were never two separate projects running in parallel — they feed each other.
            Energy supply shocks are exactly the kind of high-stakes, low-rehearsal scenarios
            that Last Prompt is built to simulate. The cascade methodology that maps
            infrastructure vulnerability is the same method that structures decision rehearsal.
            Both are expressions of the same underlying process —{' '}
            <Link href="/the-method" className="text-cyan-400 hover:text-cyan-300 font-medium">
              The Method
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
