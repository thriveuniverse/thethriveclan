import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'The Thrive Clan | Big Ideas, Rigorous Execution',
  description: 'Last Prompt and Resilience Intelligence — rigorous, real-world research spanning AI simulation, energy systems, and cascade modeling.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0b14]">

      {/* Hero image */}
      <section className="w-full relative h-72 md:h-[480px]">
        <Image
          src="/images/bridges_mesh.png"
          alt="A mesh of bonds forming and breaking — the network structure behind both decision rehearsal and cascade risk"
          fill
          className="object-cover object-center"
          priority
        />
      </section>

      {/* Headline + bridge */}
      <section className="max-w-3xl mx-auto px-4 pt-14 pb-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Big Ideas,<br />Rigorous Execution
        </h1>
        <p className="text-xl text-[#b8b0d8] leading-relaxed">
          One of us arrives with the impossible idea. The other makes it rigorous, real, and
          deployed. Between us we&apos;ve built AI decision simulation engines, live energy supply
          dashboards, and published the frameworks that connect them — all because the ideas
          were too interesting to leave alone. What we didn&apos;t expect was that they would
          turn out to be the same thing.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/projects/decision-intelligence"
            className="inline-block bg-cyan-500 text-white font-semibold py-3 px-7 rounded-lg hover:bg-cyan-600 transition-colors"
          >
            Last Prompt →
          </Link>
          <Link
            href="/projects/resilience-intelligence"
            className="inline-block border border-cyan-500 text-cyan-400 font-semibold py-3 px-7 rounded-lg hover:bg-cyan-500 hover:text-white transition-colors"
          >
            Resilience Intelligence →
          </Link>
        </div>
      </section>

      {/* Philosophy bridge */}
      <section className="max-w-3xl mx-auto px-4 py-12 text-center border-t border-[#2a2540]">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
          We Live in the World We Create
        </h2>
        <p className="text-lg text-[#b8b0d8] leading-relaxed mb-5">
          Most environments — companies, communities, societies — aren&apos;t designed. They accumulate.
          Each decision leaves a residue: a process, a precedent, a constraint. Over time, the residue
          becomes the world.
        </p>
        <p className="text-lg text-[#b8b0d8] leading-relaxed mb-5">
          The implication is uncomfortable: if you&apos;re not deciding deliberately, someone else&apos;s
          decisions are shaping your reality for you.
        </p>
        <p className="text-lg text-[#b8b0d8] leading-relaxed">
          Last Prompt and Resilience Intelligence are both attempts to answer the same
          question — what does it look like to decide with intention, in conditions complex enough
          to matter?
        </p>
      </section>

      {/* Two expressions of the same idea */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <Link
            href="/projects/decision-intelligence"
            className="block bg-[#13111e] rounded-xl p-8 border border-[#2a2540] hover:border-cyan-700 hover:shadow-lg transition-all group"
          >
            <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
              Last Prompt
            </h2>
            <p className="text-[#b8b0d8] leading-relaxed">
              AI-driven simulation for high-stakes decision rehearsal. Built on chronosymbiosis.
              The mandate: help leaders think through complexity before they face it.
            </p>
          </Link>

          <Link
            href="/projects/resilience-intelligence"
            className="block bg-[#13111e] rounded-xl p-8 border border-[#2a2540] hover:border-cyan-700 hover:shadow-lg transition-all group"
          >
            <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
              Resilience Intelligence
            </h2>
            <p className="text-[#b8b0d8] leading-relaxed">
              Cascade modeling of energy systems and social infrastructure. Live dashboards
              tracking real supply data across three regions. Published research mapping
              systemic vulnerability before it cascades into crisis.
            </p>
          </Link>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/projects"
            className="text-[#7a7598] hover:text-[#b8b0d8] text-sm transition-colors"
          >
            See all projects →
          </Link>
        </div>
      </section>

      {/* Proof strip */}
      <section className="border-t border-[#2a2540] py-14">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#7a7598] mb-5">
              Published Research
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="/downloads/the-development-trap-of-the-protected-generation.pdf"
                  download
                  className="text-[#b8b0d8] hover:text-cyan-400 transition-colors text-sm leading-snug block"
                >
                  The Development Trap — Working Paper →
                </a>
              </li>
              <li>
                <a
                  href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6695618"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b8b0d8] hover:text-cyan-400 transition-colors text-sm leading-snug block"
                >
                  Cascade Methodology — SSRN →
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#7a7598] mb-5">
              Reports
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://ukoilwatch.com/reports/from-hormuz-to-hunger"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b8b0d8] hover:text-cyan-400 transition-colors text-sm leading-snug block"
                >
                  From Hormuz to Hunger →
                </a>
              </li>
              <li>
                <a
                  href="https://ukoilwatch.com/reports/the-fall-of-the-uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b8b0d8] hover:text-cyan-400 transition-colors text-sm leading-snug block"
                >
                  The Fall of the UK →
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#7a7598] mb-5">
              Live Platforms
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://lastprompt.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b8b0d8] hover:text-cyan-400 transition-colors text-sm block"
                >
                  LastPrompt.io →
                </a>
              </li>
              <li>
                <a
                  href="https://ukoilwatch.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b8b0d8] hover:text-cyan-400 transition-colors text-sm block"
                >
                  UK OilWatch →
                </a>
              </li>
              <li>
                <a
                  href="https://eurooilwatch.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b8b0d8] hover:text-cyan-400 transition-colors text-sm block"
                >
                  Euro OilWatch →
                </a>
              </li>
              <li>
                <a
                  href="https://americasoilwatch.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b8b0d8] hover:text-cyan-400 transition-colors text-sm block"
                >
                  Americas OilWatch →
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}
