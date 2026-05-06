import Link from 'next/link';

export const metadata = {
  title: 'The Method | The Thrive Clan',
  description: 'Cascade modeling, chronosymbiosis, and the OPH framework — the shared intellectual process behind every Thrive Clan project.',
};

export default function TheMethodPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">The Method</h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-4 max-w-2xl">
          Every project we build — however different the domain — runs on the same underlying
          intellectual process. Full detail coming soon.
        </p>
        <p className="text-gray-500 mb-12 max-w-2xl leading-relaxed">
          The pattern is consistent: an impossible-sounding idea arrives, a rigorous framework
          absorbs it, something that works emerges. These are the three components of that framework.
        </p>

        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="text-cyan-600 text-sm font-semibold uppercase tracking-wide mb-2">Component One</div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Cascade Modeling</h2>
            <p className="text-gray-600 leading-relaxed">
              Mapping how shocks propagate across interconnected systems — from energy supply chains
              to decision architectures. The core question is not "what happens when X fails?"
              but "what else becomes possible once X has failed?" Cascade thinking treats second-
              and third-order effects as the primary object of analysis.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="text-cyan-600 text-sm font-semibold uppercase tracking-wide mb-2">Component Two</div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Chronosymbiosis</h2>
            <p className="text-gray-600 leading-relaxed">
              A framework for weaving temporal dynamics into decision models — so that time itself
              becomes a design variable, not just a constraint. Where conventional analysis asks
              "what is true now?", chronosymbiosis asks "what becomes true over time, and how
              does present action shape that trajectory?" It treats the relationship between
              present and future as reciprocal.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="text-cyan-600 text-sm font-semibold uppercase tracking-wide mb-2">Component Three</div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Observer Patch Holography (OPH)</h2>
            <p className="text-gray-600 leading-relaxed">
              Bernhard Mueller&apos;s framework, drawn from holographic principles, in which
              each observer holds a partial &apos;patch&apos; of a complex system — a bounded,
              coherent slice of a reality too large to see whole. Rather than pretending to
              a god&apos;s-eye view, OPH works with the patch: making its boundaries explicit,
              navigating from within them, and understanding how patches from different
              observers combine. Integrated into the decision environment, it becomes the
              mechanism through which structured navigation of uncertainty is possible.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-gray-800 rounded-xl p-8 text-white">
          <h2 className="text-xl font-bold mb-3">The Repeatable Process</h2>
          <p className="text-gray-300 leading-relaxed">
            Insane idea → cascade structure → chronosymbiotic weaving → OPH integration → published
            or deployed output. It sounds linear. It is not. But the components are always the same.
          </p>
        </div>

        <div className="mt-8 flex gap-6">
          <Link href="/projects/decision-intelligence" className="text-cyan-600 font-medium hover:text-cyan-700 transition-colors text-sm">
            See it in Decision Intelligence →
          </Link>
          <Link href="/projects/resilience-intelligence" className="text-cyan-600 font-medium hover:text-cyan-700 transition-colors text-sm">
            See it in Resilience Intelligence →
          </Link>
        </div>
      </div>
    </div>
  );
}
