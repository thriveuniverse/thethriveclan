import Link from 'next/link';

export const metadata = {
  title: 'Decision Intelligence | The Thrive Clan',
  description: 'A genuinely new kind of decision environment — built on chronosymbiosis and Observer Patch Holography. Not a game, simulation, training tool, or self-help system.',
};

export default function DecisionIntelligencePage() {
  return (
    <div className="min-h-screen bg-[#0d0b14] py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-6">Decision Intelligence</h1>
        <div className="space-y-5 text-lg text-[#b8b0d8] leading-relaxed mb-12 max-w-2xl">
          <p>
            Organisations have systematically removed the conditions under which consequential
            decision-making capacity develops. Credentials signal readiness without conferring
            the experience they imply. Bounce culture rewards deferral over commitment. KPI
            architectures narrow attention to measured perimeters. The result: a professional
            class that reaches senior positions having been consistently protected from exactly
            the consequential failures that build real decision-making capacity.
          </p>
          <p>
            Last Prompt is a decision intelligence engine built to close that gap — not by
            teaching better frameworks, but by providing the consequence-bearing,
            calibrated-feedback repetitions that professional structures have designed out.
            It is consistently misclassified as a game, a simulation, or a training course.
            It is none of those things. It is a consequence-bearing reasoning environment:
            the world changes based on the quality of your reasoning, feedback is scored
            against a structured rubric immediately after each decision, and what you face
            next is determined by what you just did to the environment.
          </p>
          <p>
            Every practitioner begins at the same point — same world, same starting numbers,
            same first event. The moment you submit your first decision, that changes
            permanently. The environment shifts based on what you wrote. The next event is
            drawn from whichever dimension your reasoning left most exposed. By the second
            cycle, two practitioners with identical scores are already navigating different
            worlds — because what arrives next exists only because of what you just chose —
            a world no one else will ever inhabit. There is no reset. What you inhabit three
            chapters in is the world your own decisions built, layer by layer.
          </p>
        </div>

        <div className="space-y-6">

          {/* Methodology first */}
          <div className="bg-[#13111e] rounded-xl p-6 border border-[#2a2540]">
            <div className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-2">The Methodology</div>
            <h2 className="text-xl font-bold text-white mb-3">LastPrompt — last-prompt.com</h2>
            <p className="text-[#b8b0d8] mb-4 leading-relaxed">
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
                className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
              >
                Read the methodology →
              </a>
              <a
                href="https://last-prompt.com/engine"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
              >
                How the engine works →
              </a>
              <a
                href="https://lastprompt.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
              >
                Visit LastPrompt.io →
              </a>
            </div>
          </div>

          {/* Academic backing second */}
          <div className="bg-[#13111e] rounded-xl p-6 border border-[#2a2540]">
            <div className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-2">Academic Framework</div>
            <h2 className="text-xl font-bold text-white mb-3">Published Research — SSRN</h2>
            <p className="text-[#b8b0d8] mb-4 leading-relaxed">
              The formal academic articulation of the Decision Intelligence framework —
              the theoretical architecture, notation, and rigorous underpinning
              behind the decision environment.
            </p>
            <a
              href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6706518"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
            >
              Read on SSRN →
            </a>
          </div>

          {/* Framework context last */}
          <div className="bg-[#13111e] rounded-xl p-6 border border-[#2a2540]">
            <div className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-2">The Framework</div>
            <h2 className="text-xl font-bold text-white mb-3">Chronosymbiosis + Observer Patch Holography (OPH)</h2>
            <p className="text-[#b8b0d8] leading-relaxed">
              Chronosymbiosis treats time as a design variable — not a constraint — so that present
              action and future state shape each other reciprocally. Observer Patch Holography,
              developed by Bernhard Mueller, maps how each observer holds a partial patch of a
              complex system and navigates from within that partiality rather than pretending to
              see the whole. Together they form the theoretical core of the decision environment.
            </p>
            <div className="mt-4">
              <Link href="/the-method" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                Read about The Method →
              </Link>
            </div>
          </div>

        </div>

        <div className="mt-12 p-6 bg-[#0b1929] rounded-xl border border-[#1a3a4a]">
          <p className="text-[#b8b0d8] leading-relaxed">
            <span className="font-semibold text-white">Where it connects: </span>
            Energy supply shocks are precisely the kind of high-stakes, low-rehearsal scenarios
            this decision environment is built for. The cascade models in Resilience Intelligence
            feed directly into the scenario architecture —{' '}
            <Link href="/projects/resilience-intelligence" className="text-cyan-400 hover:text-cyan-300 font-medium">
              Resilience Intelligence →
            </Link>
          </p>
        </div>

        <div className="mt-8">
          <Link href="/projects" className="text-[#7a7598] hover:text-[#b8b0d8] text-sm transition-colors">
            ← Back to Our Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
