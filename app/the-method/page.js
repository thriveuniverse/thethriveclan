import Link from 'next/link';

export const metadata = {
  title: 'The Method | The Thrive Clan',
  description: 'Cascade modeling, chronosymbiosis, and Observer Patch Holography — three components that turned out to be one running system.',
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
        <p className="text-[#7a7598] mb-12 max-w-2xl leading-relaxed">
          Three components. Two projects. One running system. Here&apos;s how they fit together.
        </p>

        {/* Component 1 */}
        <div className="space-y-6 mb-12">
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

          {/* Component 3 */}
          <div className="bg-[#13111e] rounded-xl p-6 border border-[#2a2540]">
            <div className="text-cyan-400 text-sm font-semibold uppercase tracking-wide mb-2">Component Three</div>
            <h2 className="text-xl font-bold text-white mb-3">Observer Patch Holography (OPH)</h2>
            <p className="text-[#b8b0d8] leading-relaxed mb-4">
              Bernhard Mueller&apos;s framework, drawn from holographic principles, in which each
              observer holds a partial &lsquo;patch&rsquo; of a complex system — a bounded, coherent
              slice of a reality too large to see whole. Rather than pretending to a god&apos;s-eye
              view, OPH works with the patch: making its boundaries explicit, navigating from within
              them, and understanding how patches from different observers combine to form a fuller
              picture without ever resolving into a complete one.
            </p>
            <p className="text-[#b8b0d8] leading-relaxed mb-4">
              In Resilience Intelligence, OPH structures how regional analysis on each OilWatch
              platform is framed — each site holds a patch; none claims to hold the whole.
            </p>
            <a
              href="https://last-prompt.com/observer-patch-holography"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors text-sm"
            >
              OPH explained at last-prompt.com →
            </a>
            <div className="bg-[#0d0b14] rounded-lg p-4 border-l-4 border-cyan-700">
              <p className="text-sm text-[#b8b0d8]">
                <span className="font-semibold text-white">In the decision engine: </span>
                Each AI advisor in LastPrompt carries a distinct <code className="bg-[#2a2540] px-1 rounded text-xs text-cyan-300">decisionBias</code> weight
                object — a formalised observer patch. No single advisor has the full picture. The
                quality of a decision emerges from navigating between patches, not from finding
                the one advisor who is right. OPH is the mechanism through which structured
                navigation of uncertainty becomes possible.
              </p>
            </div>
          </div>
        </div>

        {/* Synthesis */}
        <div className="bg-[#1e1b30] rounded-xl p-8 border border-[#2a2540] mb-8">
          <h2 className="text-xl font-bold text-white mb-4">One System, Not Three Components</h2>
          <p className="text-[#b8b0d8] leading-relaxed mb-4">
            The three components are not a theoretical framework waiting to be applied.
            They are already running. The LastPrompt engine applies cascade multipliers,
            evaluates temporal symbiosis, and routes decisions through OPH-structured
            advisor patches — in every session, across every scenario skin.
          </p>
          <p className="text-[#b8b0d8] leading-relaxed">
            The synthesis paper — currently in preparation — establishes the formal
            correspondence: that institutional silo structure maps directly to professional
            horizon (OPH); that the methodology gap between disciplines is a translation
            gap between patches; that the interaction matrix in cascade modeling is the
            externalised form of the cognitive feedback loops chronosymbiosis describes.
            Same problem. Two scales. One method.
          </p>
        </div>

        {/* OPH attribution */}
        <div className="bg-[#13111e] rounded-xl p-5 border border-[#2a2540] mb-8 text-sm text-[#7a7598]">
          <span className="font-semibold text-[#b8b0d8]">OPH reference: </span>
          Mueller, B. (2024).{' '}
          <a
            href="https://oph-book.floatingpragma.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300"
          >
            Reverse Engineering Reality: Observer Patch Holography
          </a>
          . FloatingPragma.
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
