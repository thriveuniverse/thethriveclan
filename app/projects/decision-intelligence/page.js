import Link from 'next/link';

export const metadata = {
  title: 'Decisions that Remember | The Thrive Clan',
  description: 'Why your most promising people may not be ready for the decisions you are about to ask them to make — and the consequence-bearing reasoning environment built to close that gap.',
};

export default function LastPromptPage() {
  return (
    <div className="min-h-screen bg-[#0d0b14] py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-6">Decisions that Remember</h1>
        <div className="space-y-5 text-lg text-[#b8b0d8] leading-relaxed mb-12 max-w-2xl">
          <p>
            Ask a senior leader what mistakes their team makes, and they&apos;ll answer without
            hesitating — people miss the bigger picture, they handle what&apos;s in front of them
            and let the systemic consequence slide. Ask a new manager in their thirties for the
            biggest mistake they&apos;ve ever made at work, and the room goes quiet. Not from
            embarrassment. They genuinely can&apos;t think of one — not one that landed, that was
            unambiguously theirs, that taught them something no course could.
          </p>
          <p>
            Both are describing the same organisation. Both are right. The gap between them
            isn&apos;t a perception problem — it&apos;s what happens when an organisation gets
            very good at protecting its most promising people from the exact experience the role
            will eventually require them to have survived.
          </p>
          <p>
            It isn&apos;t one failure. It&apos;s four ordinary, well-intentioned structures
            compounding: credentials that imply readiness they don&apos;t confer, a culture that
            rewards escalation over commitment, KPIs that quietly narrow what counts as your
            problem, and the simple fact that a decision that&apos;s crystal clear in your head
            rarely survives being written down for a stranger to execute. None of them is a
            mistake on its own. Together, they produce people who reach senior roles having been
            systematically protected from the one thing those roles now most need them to have.
          </p>
          <p>
            This isn&apos;t a paper about AI. But it&apos;s the reason AI is making the problem
            impossible to ignore. When gathering more data took real time, waiting for it was a
            legitimate way to defer a decision. When it takes a second, that excuse is gone. The
            tools got faster. Judgement didn&apos;t get a chance to.
          </p>
          <p>So we built the thing that gives it one.</p>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">This is Last Prompt</h2>
        <div className="space-y-5 text-lg text-[#b8b0d8] leading-relaxed mb-12 max-w-2xl">
          <p>
            Last Prompt is a consequence-bearing reasoning environment — not a game, not a
            course, not a simulation you can pause and rewind. You get one advisor&apos;s honest,
            partial view of a crisis — never the whole picture, because nobody in a real
            organisation gets the whole picture either — you write the plan yourself, in your own
            words, and the world moves on the quality of your reasoning, not the confidence of
            your intentions. There&apos;s no reset button. What you&apos;re navigating three
            chapters in is the world your own decisions built.
          </p>
          <p>
            Two things make this harder than it sounds, and they turn out to be the same problem
            at two different scales. First: every piece of advice you get is honest and
            incomplete. The specialist in the room cannot see outside their own domain — that
            isn&apos;t a flaw in the writing, it&apos;s the accurate shape of expertise — so the
            picture you&apos;re building is always partial, and synthesising it is your job, not
            theirs. Second: nothing resets. The decision you made two chapters ago is why this
            chapter is hard. Your reasoning today reshapes the conditions the next decision has
            to survive. That&apos;s chronosymbiosis — not a separate framework bolted onto the
            engine, but the same partial-information problem, running through time instead of
            through a room full of advisors.
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

          {/* Working paper second */}
          <div className="bg-[#13111e] rounded-xl p-6 border border-[#2a2540]">
            <div className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-2">The Working Paper</div>
            <h2 className="text-xl font-bold text-white mb-3">The Development Trap of the Protected Generation</h2>
            <p className="text-[#b8b0d8] mb-4 leading-relaxed">
              The full argument — the four mechanisms behind the gap, the eight architectural
              requirements any honest solution has to satisfy, and the early evidence from beta
              testing — written up in full.
            </p>
            <a
              href="/downloads/the-development-trap-of-the-protected-generation.pdf"
              download
              className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
            >
              Download the paper (PDF) →
            </a>
          </div>

        </div>

        <div className="mt-12 p-6 bg-[#0b1929] rounded-xl border border-[#1a3a4a]">
          <p className="text-[#b8b0d8] leading-relaxed">
            <span className="font-semibold text-white">Where it connects: </span>
            The same partial-perspective problem shows up on the other side of this site, at a
            different scale. Resilience Intelligence tracks exactly this kind of blindness across
            energy systems and infrastructure — no single agency can see the whole cascade either.
            Same reflex, different room —{' '}
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
