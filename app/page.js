import Link from 'next/link';

export const metadata = {
  title: 'The Thrive Clan | Big Ideas, Rigorous Execution',
  description: 'Decision Intelligence and Resilience Intelligence — rigorous, real-world research spanning AI simulation, energy systems, and cascade modeling.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero — replace the placeholder div below with an <Image> once the final asset is chosen */}
      <section className="w-full">
        <div className="w-full h-72 md:h-[480px] bg-gradient-to-br from-slate-100 via-gray-100 to-stone-200 flex items-end justify-center pb-3">
          <span className="text-xs text-gray-400 tracking-wide">
            [ Hero image placeholder — recommended 1400 × 480 px ]
          </span>
        </div>
      </section>

      {/* Headline + bridge */}
      <section className="max-w-3xl mx-auto px-4 pt-14 pb-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Big Ideas,<br />Rigorous Execution
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          One of us arrives with the impossible idea. The other makes it rigorous, real, and
          deployed. Between us we&apos;ve built AI decision simulation engines, live energy supply
          dashboards, and published the frameworks that connect them — all because the ideas
          were too interesting to leave alone.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/projects/decision-intelligence"
            className="inline-block bg-cyan-600 text-white font-semibold py-3 px-7 rounded-lg hover:bg-cyan-700 transition-colors"
          >
            Decision Intelligence →
          </Link>
          <Link
            href="/projects/resilience-intelligence"
            className="inline-block border border-cyan-600 text-cyan-600 font-semibold py-3 px-7 rounded-lg hover:bg-cyan-600 hover:text-white transition-colors"
          >
            Resilience Intelligence →
          </Link>
        </div>
      </section>

      {/* Two pillar cards */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <Link
            href="/projects/decision-intelligence"
            className="block bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-cyan-300 hover:shadow-md transition-all group"
          >
            <div className="text-cyan-600 text-xs font-semibold uppercase tracking-widest mb-3">
              Pillar One
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-cyan-700 transition-colors">
              Decision Intelligence
            </h2>
            <p className="text-gray-600 leading-relaxed">
              AI-driven simulation for high-stakes decision rehearsal. Built on chronosymbiosis
              and the Observer Patch Holography (OPH) framework. The mandate: help leaders think through
              complexity before they face it.
            </p>
          </Link>

          <Link
            href="/projects/resilience-intelligence"
            className="block bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-cyan-300 hover:shadow-md transition-all group"
          >
            <div className="text-cyan-600 text-xs font-semibold uppercase tracking-widest mb-3">
              Pillar Two
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-cyan-700 transition-colors">
              Resilience Intelligence
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Cascade modeling of energy systems and social infrastructure. Live dashboards
              tracking real supply data across three regions. Published research mapping
              systemic vulnerability before it cascades into crisis.
            </p>
          </Link>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/projects"
            className="text-gray-500 hover:text-gray-700 text-sm transition-colors"
          >
            See all projects →
          </Link>
        </div>
      </section>

      {/* Proof strip */}
      <section className="border-t border-gray-100 py-14">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
              Published Research
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6706518"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-cyan-600 transition-colors text-sm leading-snug block"
                >
                  Decision Intelligence Framework — SSRN →
                </a>
              </li>
              <li>
                <a
                  href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6695618"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-cyan-600 transition-colors text-sm leading-snug block"
                >
                  Cascade Methodology — SSRN →
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
              Reports
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://ukoilwatch.com/reports/from-hormuz-to-hunger"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-cyan-600 transition-colors text-sm leading-snug block"
                >
                  From Hormuz to Hunger →
                </a>
              </li>
              <li>
                <a
                  href="https://ukoilwatch.com/reports/the-fall-of-the-uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-cyan-600 transition-colors text-sm leading-snug block"
                >
                  The Fall of the UK →
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
              Live Platforms
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://lastprompt.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-cyan-600 transition-colors text-sm block"
                >
                  LastPrompt.io →
                </a>
              </li>
              <li>
                <a
                  href="https://ukoilwatch.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-cyan-600 transition-colors text-sm block"
                >
                  UK OilWatch →
                </a>
              </li>
              <li>
                <a
                  href="https://eurooilwatch.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-cyan-600 transition-colors text-sm block"
                >
                  Euro OilWatch →
                </a>
              </li>
              <li>
                <a
                  href="https://americasoilwatch.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-cyan-600 transition-colors text-sm block"
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
