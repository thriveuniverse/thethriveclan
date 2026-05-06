import Link from 'next/link';

export const metadata = {
  title: 'Our Projects | The Thrive Clan',
  description: 'Two pillars of rigorous, real-world research: Decision Intelligence and Resilience Intelligence.',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl leading-relaxed">
          Two distinct pillars, one shared discipline: rigorous thinking applied to real complexity.
          Every project here began with an impossible-sounding idea — and ended with something that works.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 flex flex-col">
            <div className="text-cyan-600 text-sm font-semibold uppercase tracking-wide mb-3">Pillar One</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Decision Intelligence</h2>
            <p className="text-gray-600 leading-relaxed mb-6 flex-1">
              AI-driven simulation environments for high-stakes decision making.
              Rooted in chronosymbiosis and the Observer Patch Holography (OPH) framework,
              these tools help leaders rehearse complexity before they face it.
            </p>
            <Link
              href="/projects/decision-intelligence"
              className="inline-block text-cyan-600 font-semibold hover:text-cyan-700 transition-colors"
            >
              Explore →
            </Link>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 flex flex-col">
            <div className="text-cyan-600 text-sm font-semibold uppercase tracking-wide mb-3">Pillar Two</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Resilience Intelligence</h2>
            <p className="text-gray-600 leading-relaxed mb-6 flex-1">
              Cascade modeling of energy systems and social infrastructure.
              Live dashboards, published research, and analytical frameworks
              that map systemic vulnerability before it becomes systemic failure.
            </p>
            <Link
              href="/projects/resilience-intelligence"
              className="inline-block text-cyan-600 font-semibold hover:text-cyan-700 transition-colors"
            >
              Explore →
            </Link>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-3">The Connection</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            These pillars are not parallel tracks — they feed each other.
            Energy supply shocks are exactly the kind of high-stakes, low-rehearsal scenarios
            that Decision Intelligence is built to simulate. The cascade methodology that maps
            infrastructure vulnerability is the same method that structures decision rehearsal.
            Both are expressions of the same underlying process —{' '}
            <Link href="/the-method" className="text-cyan-600 hover:text-cyan-700 font-medium">
              The Method
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
