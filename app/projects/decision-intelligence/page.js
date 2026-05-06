import Link from 'next/link';

export const metadata = {
  title: 'Decision Intelligence | The Thrive Clan',
  description: 'A genuinely new kind of decision environment — built on chronosymbiosis and Observer Patch Holography. Not a game, simulation, training tool, or self-help system.',
};

export default function DecisionIntelligencePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-cyan-600 text-sm font-semibold uppercase tracking-wide mb-2">Pillar One</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Decision Intelligence</h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-12 max-w-2xl">
          Full detail coming soon. In the meantime, the methodology lives at last-prompt.com
          and the academic framework is on SSRN.
        </p>

        <div className="space-y-6">

          {/* Methodology first */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="text-cyan-600 text-xs font-semibold uppercase tracking-widest mb-2">The Methodology</div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">LastPrompt — last-prompt.com</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              This site exists because the decision engine kept being misread. Every explanation —
              human and AI — tried to fit it into an existing category: game, simulation, training tool,
              self-help. It is none of those things. Last-prompt.com is the most complete account of
              what it actually is and how it works.
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="https://last-prompt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 font-semibold hover:text-cyan-700 transition-colors"
              >
                Read the methodology →
              </a>
              <a
                href="https://lastprompt.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 font-semibold hover:text-cyan-700 transition-colors"
              >
                Visit LastPrompt.io →
              </a>
            </div>
          </div>

          {/* Academic backing second */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="text-cyan-600 text-xs font-semibold uppercase tracking-widest mb-2">Academic Framework</div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Published Research — SSRN</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              The formal academic articulation of the Decision Intelligence framework —
              the theoretical architecture, notation, and rigorous underpinning
              behind the decision environment.
            </p>
            <a
              href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6706518"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 font-semibold hover:text-cyan-700 transition-colors"
            >
              Read on SSRN →
            </a>
          </div>

          {/* Framework context last */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="text-cyan-600 text-xs font-semibold uppercase tracking-widest mb-2">The Framework</div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Chronosymbiosis + Observer Patch Holography (OPH)</h2>
            <p className="text-gray-600 leading-relaxed">
              Chronosymbiosis treats time as a design variable — not a constraint — so that present
              action and future state shape each other reciprocally. Observer Patch Holography,
              developed by Bernhard Mueller, maps how each observer holds a partial patch of a
              complex system and navigates from within that partiality rather than pretending to
              see the whole. Together they form the theoretical core of the decision environment.
            </p>
            <div className="mt-4">
              <Link href="/the-method" className="text-cyan-600 font-semibold hover:text-cyan-700 transition-colors">
                Read about The Method →
              </Link>
            </div>
          </div>

        </div>

        <div className="mt-12 p-6 bg-cyan-50 rounded-xl border border-cyan-100">
          <p className="text-gray-600 leading-relaxed">
            <span className="font-semibold text-gray-900">Cross-pillar connection: </span>
            Energy supply shocks are precisely the kind of high-stakes, low-rehearsal scenarios
            this decision environment is built for. The cascade models in Resilience Intelligence
            feed directly into the scenario architecture —{' '}
            <Link href="/projects/resilience-intelligence" className="text-cyan-600 hover:text-cyan-700 font-medium">
              Resilience Intelligence →
            </Link>
          </p>
        </div>

        <div className="mt-8">
          <Link href="/projects" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
            ← Back to Our Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
