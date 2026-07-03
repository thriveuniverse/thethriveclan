import Link from 'next/link';

export const metadata = {
  title: 'Resilience Intelligence | The Thrive Clan',
  description: 'Cascade modeling of energy systems and social infrastructure vulnerabilities — live dashboards and published research.',
};

export default function ResilienceIntelligencePage() {
  return (
    <div className="min-h-screen bg-[#0d0b14] py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-6">Resilience Intelligence</h1>
        <div className="space-y-5 text-lg text-[#b8b0d8] leading-relaxed mb-12 max-w-2xl">
          <p>
            Institutional risk analysis is typically additive: identify each risk factor, quantify
            it, add the results. This is not a failure of expertise — it is a structural property
            of how institutions are organised. Each agency models its own domain. No agency is
            mandated to model the interactions between domains. The fiscal authority models debt.
            The health authority models waiting lists. The energy authority models supply. None of
            them models what happens when all three deteriorate simultaneously and start amplifying
            each other.
          </p>
          <p>
            The Compound Cascade Systems Modelling Framework addresses that gap. Rather than
            treating risk factors as independent inputs, it maps how each chain triggers, amplifies,
            or constrains the others — capturing the second- and third-order effects that additive
            analysis systematically misses. The output is not a prediction and not a single number.
            It is a scenario-weighted probability distribution that asks the question institutional
            analysis rarely asks: what happens when the problems stop being independent?
          </p>
          <p>
            The methodology has been applied to two fundamentally different systems: a
            single-trigger external shock (Hormuz blockade → global food system collapse) and a
            multi-vector endogenous national decline (the UK). In both cases, compound assessment
            produced risk estimates 3–5 times higher than additive institutional projections —
            using the same underlying data. The consistency of that divergence across two very
            different domains suggests it is a structural property of how complex systems behave,
            not an artefact of either specific model.
          </p>
        </div>

        <div className="space-y-6">

          {/* Methodology first */}
          <div className="bg-[#13111e] rounded-xl p-6 border border-[#2a2540]">
            <div className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-2">The Methodology</div>
            <h2 className="text-xl font-bold text-white mb-3">Cascade Methodology — SSRN</h2>
            <p className="text-[#b8b0d8] mb-4 leading-relaxed">
              The formal academic framework underpinning all Resilience Intelligence work —
              how cascade modeling is structured, validated, and applied to complex systems.
              This is where the method lives. The reports on the oil sites are what the method produces.
            </p>
            <a
              href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6695618"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
            >
              Read on SSRN →
            </a>
          </div>

          {/* Applied outputs */}
          <div className="bg-[#13111e] rounded-xl p-6 border border-[#2a2540]">
            <div className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-2">Applied Output</div>
            <h2 className="text-xl font-bold text-white mb-2">From Hormuz to Hunger</h2>
            <p className="text-[#b8b0d8] mb-4 leading-relaxed">
              Mapping the cascade from global energy chokepoints to food system pressure —
              how a disruption at the Strait of Hormuz propagates far beyond fuel prices.
              Published across all three OilWatch platforms.
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="https://ukoilwatch.com/reports/from-hormuz-to-hunger"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
              >
                Read on UK OilWatch →
              </a>
              <a
                href="https://eurooilwatch.com/reports/from-hormuz-to-hunger"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
              >
                Euro OilWatch →
              </a>
              <a
                href="https://americasoilwatch.com/reports/from-hormuz-to-hunger"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
              >
                Americas OilWatch →
              </a>
            </div>
          </div>

          <div className="bg-[#13111e] rounded-xl p-6 border border-[#2a2540]">
            <div className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-2">Applied Output</div>
            <h2 className="text-xl font-bold text-white mb-2">The Fall of the UK</h2>
            <p className="text-[#b8b0d8] mb-4 leading-relaxed">
              Cascade methodology applied to the intersecting vulnerable strands of UK social
              and critical infrastructure — mapping systemic fragility across the full stack.
              Published across all three OilWatch platforms.
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="https://ukoilwatch.com/reports/the-fall-of-the-uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
              >
                Read on UK OilWatch →
              </a>
              <a
                href="https://eurooilwatch.com/reports/the-fall-of-the-uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
              >
                Euro OilWatch →
              </a>
              <a
                href="https://americasoilwatch.com/reports/the-fall-of-the-uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
              >
                Americas OilWatch →
              </a>
            </div>
          </div>

          <div className="bg-[#13111e] rounded-xl p-6 border border-[#2a2540]">
            <div className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-2">Live Data</div>
            <h2 className="text-xl font-bold text-white mb-3">OilWatch Dashboards</h2>
            <p className="text-[#b8b0d8] mb-4 leading-relaxed">
              Live energy supply monitoring across three regions — tracking days-of-supply,
              import dependency, and systemic exposure in near real time.
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="https://ukoilwatch.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
              >
                UK OilWatch →
              </a>
              <a
                href="https://eurooilwatch.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
              >
                Euro OilWatch →
              </a>
              <a
                href="https://americasoilwatch.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
              >
                Americas OilWatch →
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-[#0b1929] rounded-xl border border-[#1a3a4a]">
          <p className="text-[#b8b0d8] leading-relaxed">
            <span className="font-semibold text-white">Where it connects: </span>
            The cascade models built here — mapping how shocks propagate across energy and social systems —
            are the same structural approach used to design decision rehearsal scenarios.
            See how this feeds into simulation architecture —{' '}
            <Link href="/projects/decision-intelligence" className="text-cyan-400 hover:text-cyan-300 font-medium">
              Decision Intelligence →
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
