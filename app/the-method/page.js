import Link from 'next/link';

export const metadata = {
  title: 'The Method | The Thrive Clan',
  description: 'Cascade modeling and chronosymbiosis — two frameworks that turned out to be the same insight at different scales.',
};

export default function TheMethodPage() {
  return (
    <div className="min-h-screen bg-[#0d0b14] py-16">
      <div className="max-w-4xl mx-auto px-4">

        <h1 className="text-4xl font-bold text-white mb-6">The Method</h1>
        <p className="text-lg text-[#b8b0d8] leading-relaxed mb-4 max-w-2xl">
          We didn&apos;t set out to build a unified methodology. We set out to solve two different
          problems — how leaders rehearse high-stakes decisions, and how energy systems cascade
          into crisis. The method emerged when we noticed we were writing the same equations twice.
        </p>
        <p className="text-lg text-[#b8b0d8] leading-relaxed mb-4 max-w-2xl">
          Cascade Modeling is a chain of consequence — one shock forcing the next, propagating
          outward through a system. Chronosymbiosis is a resonance through threads — the way a
          decision made now echoes forward and reshapes what&apos;s possible later. Different
          objects, a system and a timeline, but the same structural logic underneath: present
          state, threshold, cascade, new state. We built both engines independently, for
          different problems, and only noticed afterward that we&apos;d arrived at the same
          architecture twice.
        </p>
        <p className="text-[#7a7598] mb-12 max-w-2xl leading-relaxed">
          Here&apos;s each one on its own, and where you can see it running live inside the
          decision engine.
        </p>

        <div className="space-y-6 mb-12">

          {/* Component 1 */}
          <div className="bg-[#13111e] rounded-xl p-6 border border-[#2a2540]">
            <div className="text-cyan-400 text-sm font-semibold uppercase tracking-wide mb-2">Component One</div>
            <h2 className="text-xl font-bold text-white mb-3">Cascade Modeling</h2>
            <p className="text-[#b8b0d8] leading-relaxed mb-4">
              Mapping how shocks propagate across interconnected systems. The core question is not
              &ldquo;what happens when X fails?&rdquo; but &ldquo;what else becomes possible —
              or impossible — once X has failed?&rdquo; Cascade thinking treats second- and
              third-order effects as the primary object of analysis, because that is where
              real risk lives.
            </p>
            <p className="text-[#b8b0d8] leading-relaxed mb-4">
              In Resilience Intelligence, this is the entire analytical framework — mapping how
              a disruption at the Strait of Hormuz propagates through fuel prices into food systems,
              or how interconnected vulnerabilities across UK infrastructure amplify rather than
              simply add.
            </p>
            <div className="bg-[#0d0b14] rounded-lg p-4 border-l-4 border-cyan-700">
              <p className="text-sm text-[#b8b0d8]">
                <span className="font-semibold text-white">In the decision engine: </span>
                The LastPrompt engine applies cascade logic through interdependency multipliers —
                when cohesion is low, diplomacy outcomes are dampened; when infrastructure is
                weak, sustenance shocks amplify. Risk in the simulation is compound, not additive.
                The same structure that maps energy chokepoints models organisational fragility.
              </p>
            </div>
          </div>

          {/* Component 2 */}
          <div className="bg-[#13111e] rounded-xl p-6 border border-[#2a2540]">
            <div className="text-cyan-400 text-sm font-semibold uppercase tracking-wide mb-2">Component Two</div>
            <h2 className="text-xl font-bold text-white mb-3">Chronosymbiosis</h2>
            <p className="text-[#b8b0d8] leading-relaxed mb-4">
              A framework for weaving temporal dynamics into decision models so that time becomes
              a design variable, not just a constraint. Where conventional analysis asks
              &ldquo;what is true now?&rdquo;, chronosymbiosis asks &ldquo;what becomes true
              over time, and how does present action shape that trajectory?&rdquo; The relationship
              between present and future is reciprocal: decisions made now alter the conditions
              under which future decisions will be made.
            </p>
            <p className="text-[#b8b0d8] leading-relaxed mb-4">
              In Resilience Intelligence, this is visible in the live dashboards — not a snapshot
              of today&apos;s supply, but an ongoing map of how exposure accumulates and compounds
              over time.
            </p>
            <div className="bg-[#0d0b14] rounded-lg p-4 border-l-4 border-cyan-700">
              <p className="text-sm text-[#b8b0d8]">
                <span className="font-semibold text-white">In the decision engine: </span>
                Chronosymbiosis is operationalised as <code className="bg-[#2a2540] px-1 rounded text-xs text-cyan-300">temporal_symbiosis</code> —
                the sixth and final rubric criterion by which every decision is evaluated. It is not
                a bonus category. It is the measure of whether the decision-maker understood that
                their choices were reshaping the future conditions they would have to navigate.
              </p>
            </div>
          </div>

        </div>

        {/* Synthesis */}
        <div className="bg-[#1e1b30] rounded-xl p-8 border border-[#2a2540] mb-8">
          <p className="text-[#b8b0d8] leading-relaxed">
            Applied to energy systems, it maps how a disruption at the Strait of Hormuz reaches
            a UK supermarket shelf. Applied to decision environments, it maps how a poor
            allocation in Chapter One creates the fragile landscape that makes Chapter
            Three&apos;s crisis unavoidable. Same problem. Two scales. One method.
          </p>
        </div>

        {/* Cross-links */}
        <div className="mt-4 flex gap-6">
          <Link href="/projects/decision-intelligence" className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors text-sm">
            See it in Decision Intelligence →
          </Link>
          <Link href="/projects/resilience-intelligence" className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors text-sm">
            See it in Resilience Intelligence →
          </Link>
        </div>

      </div>
    </div>
  );
}
