import Image from "next/image";
import { createProductSchema } from "../../../lib/schemas/product";

// Metadata
export const metadata = {
  title: "The Thrive Clan | Build, Grow, and Defend AI Automation Tools",
  description:
    "A strategic resource for those who want to lead—not chase—the future of online business and digital marketing.",
  keywords:
    "AI automation, LLMO, workflow automation, answer engine optimization, hyperautomation, AI tools, business growth",
  openGraph: {
    title: "The Thrive Clan | Build, Grow, and Defend AI Automation Tools",
    description:
      "Lead the AI automation revolution with our strategic tools bundle. Get resources to dominate a $3.68T market.",
    images: ["/images/ai-automation.jpg"],
    url: "https://thethriveclan.com/llmo/ai-automation-tools",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Thrive Clan | Build, Grow, and Defend AI Automation Tools",
    description:
      "Join the $3.68T AI automation boom with our strategic tools bundle.",
    images: ["/images/ai-automation.jpg"],
  },
};

export default function AIAutomationTools() {
  const INDIVIDUAL_VARIANT_ID = "967071";
  const BUSINESS_VARIANT_ID = "967095";
  const STORE_ID = "203055";

  function ProductSchema() {
    const schema = createProductSchema({
      name: "Build, Grow, and Defend AI Automation Tools Bundle",
      description:
        "A strategic resource for those who want to lead—not chase—the future of online business with our comprehensive AI automation tools. Includes strategic keywords, content templates, playbooks, and more.",
      image: "https://thethriveclan.com/images/ai-automation.jpg",
      url: "https://thethriveclan.com/llmo/ai-automation-tools",
      category: "Digital Marketing Package",
      sku: "LLMO-AI-AUTO-001",
      brand: "The Thrive Clan",
      aggregateRating: null,
    });
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
      />
    );
  }

  return (
    <>
      <ProductSchema />

 {/* Hero Section with Parallax */}
    <div className="relative w-full h-64 md:h-96 overflow-hidden">
      <div
        className="absolute inset-0 parallax"
        style={{
          backgroundImage: "url('/images/ai-automation-hero.jpg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
        aria-hidden="true"
      >
        <div className="hero-overlay bg-black bg-opacity-50"></div>
      </div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center max-w-4xl mx-auto px-4 hero-text">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            AI Edge: Build, Grow, and Defend 
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-100">
        The Thrive Clan Toolkit: Lead the Automation Revolution
          </h2>
           <p className="text-lg md:text-xl mb-6 text-gray-200 leading-relaxed">
            A strategic resource for those who want to lead—not chase—the future
            of online business and digital marketing.
          </p>
        </div>
      </div>
    </div>

    {/* FIXED: Floating CTA Pill - Now viewport-anchored, always floats on scroll */}
    <div className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6">
      <a
  href={`https://thethriveclan.gumroad.com/l/ai-automation-tools/checkout?quantity=1&variant_id=${INDIVIDUAL_VARIANT_ID}`} // FIXED: Gumroad cart for solo
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center px-3 py-2 md:px-4 md:py-3 bg-cyan-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-cyan-700 transition-all duration-300 text-xs md:text-sm backdrop-blur-sm"
  aria-label="Buy AI Automation Bundle - Solo License"
>
  Buy Bundle → 
  <span className="ml-1 md:ml-2 text-xs opacity-90">(€2,997 Solo)</span>
</a>
    </div>
      {/* Main Content */}
      <div className="min-h-screen bg-gray-50 py-16">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* NEW: Journey Intro – Your Moved Paragraph, Polished */}
    <section className="mb-12 bg-white p-8 rounded-lg shadow-sm border border-gray-100"> {/* Removed text-center */}
  <h2 className="text-center text-2xl md:text-3xl font-semibold text-cyan-600 mb-6"> {/* Kept centered for header punch */}
    Your Path to AI Mastery Starts Here
  </h2>
  <p className="text-left text-base text-gray-700 leading-relaxed max-w-3xl mx-auto">
  In a world where AI isn't optional—it's <em>oxygen for growth</em>—you're not just chasing trends. You're claiming your place in the $3.68T boom. No tech wizardry required: Our bundle equips you with proven playbooks to automate, optimize, and outpace competitors. Ready to journey from overwhelm to ownership? Let's map the way: Spot your gaps, arm your team, and scale with confidence.
</p>
  <div className="mt-8 flex justify-center"> {/* CTA stays centered */}
    <a href="#imperative" className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all">
      Begin the Journey →
    </a>
  </div>
</section>
{/* Bundle at a Glance Grid – Quick Visual Teaser */}
<div className="grid md:grid-cols-3 gap-6 mb-12 p-6 bg-gray-50 rounded-lg">
  <div className="text-center">
    <div className="mx-auto w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-3">
      <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-1">Keyword Dossiers</h3>
    <p className="text-sm text-gray-600">150+ spreadsheets with search volumes and ideas—import and deploy in minutes.</p>
  </div>
  <div className="text-center">
    <div className="mx-auto w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-3">
      <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-1">Playbooks & Guides</h3>
    <p className="text-sm text-gray-600">Step-by-step docs for 30/60/90-day rollout—quickstarts included.</p>
  </div>
  <div className="text-center">
    <div className="mx-auto w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-3">
      <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-1">ROI Calculators</h3>
    <p className="text-sm text-gray-600">Plug in your numbers for instant payback projections—4-6 months typical.</p>
  </div>
</div>
<section className="mb-12 bg-white p-6 rounded-lg shadow-sm" id="imperative">
  <h2 className="text-2xl font-semibold text-cyan-600 mb-4">Operational Diagnostics: Reclaiming Bandwidth in the AI Continuum</h2>
  <p className="text-base text-gray-700 leading-relaxed mb-6">
    Enterprise maturation demands not adaptation, but optimization—addressing the 55-65% resource allocation to legacy execution that constrains innovation and client equity (Forrester, 2025). In the $150B AI automation sector (40-60% YoY trajectory), unaddressed bottlenecks manifest as 22% opportunity costs in market expansion and retention.
  </p>

  <div className="grid md:grid-cols-2 gap-8 mb-8">
    <div>
      <h3 className="font-semibold text-cyan-600 mb-3">Vulnerabilities: Capacity Constraints</h3>
      <ul className="space-y-2 text-sm text-gray-700">
        <li><strong>Execution Overload:</strong> Manual workflows sequester 40+ hours per cycle, curtailing strategic ideation—delaying launches by 28% (Deloitte, 2025).</li>
        <li><strong>Fragmented Alignment:</strong> Siloed tools erode 30% efficiency, diminishing client touchpoints and NPS by 15-20 points.</li>
        <li><strong>Insight Deficits:</strong> Legacy analytics misdirect 25% of budgets, obscuring GEO vectors like AI-mediated queries (up 340% YoY).</li>
      </ul>
    </div>
    <div>
      <h3 className="font-semibold text-cyan-600 mb-3">Outcomes: Strategic Liberation</h3>
      <ul className="space-y-2 text-sm text-gray-700">
        <li><strong>Innovation Throughput:</strong> Redirect 50% hours to R&D, capturing 18-25% market share via differentiated vectors.</li>
        <li><strong>Relationship Equity:</strong> Augmented touchpoints elevate LTV 32%, fortifying loyalty amid 65% answer-engine research starts (McKinsey, 2025).</li>
        <li><strong>Agility Amplification:</strong> Foresight protocols enable 2x pivots, attributing 25-35% revenue to LLMO initiatives within 12 months.</li>
      </ul>
    </div>
  </div>
  
  <p className="text-base text-gray-700 italic mt-4">
    This framework—drawn from proprietary sector analysis—illuminates the pivot: From constraint to command. The bundle operationalizes these levers through phased instruments, commencing with foundational audits for immediate traction.
  </p>
</section>

<section className="mb-12 bg-white p-6 rounded-lg shadow-sm" id="included">
  <h2 className="text-2xl font-semibold text-cyan-600 mb-4">Deliverables Portfolio: Instruments for Enterprise Acceleration</h2>
  <p className="text-base text-gray-700 leading-relaxed mb-6">
    Calibrated to the diagnostic above, this portfolio deploys audited mechanisms—yielding 3-5x visibility and 60-80% lead uplift within 12-18 months (Forrester benchmarks). Each element integrates seamlessly, reallocating capacity to innovation and client vectors.
  </p>
  
  <div className="space-y-4">
    <details className="border border-gray-200 rounded-lg p-4">
      <summary className="font-semibold text-cyan-600 cursor-pointer">Intelligence Dossiers: Keyword Vectors & Research Protocols (150+ Assets)</summary>
      <div className="text-sm text-gray-700 mt-3 ml-4">
        <p>Proprietary CSV dossiers with intent/KD/CTAs, clustered URL maps, SERP benchmarks—surfacing GEO opportunities like "AI workflow hyperautomation" (4.2x retention ROI). For oversight: Equivalent to in-house research, enabling 25% budget precision.</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Implementation: Import to your CMS; target high-commercial queries for 45-60 day citation wins.</li>
        </ul>
      </div>
    </details>
    
    <details className="border border-gray-200 rounded-lg p-4">
      <summary className="font-semibold text-cyan-600 cursor-pointer">Digital Fortifications: Schema & Template Frameworks (20+ Modular Builds)</summary>
      <div className="text-sm text-gray-700 mt-3 ml-4">
        <p>JSON-LD snippets, editable landings/blogs/CTAs, forms/widgets—fortifying sites for 25% visibility gains. Non-technical ramp: Drag-and-drop basics, reclaiming 40 hours/month for client stewardship.</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Quickstart: Wire schema to core pages (Week 1); expect 3x answer-engine citations.</li>
        </ul>
      </div>
    </details>
    
    <details className="border border-gray-200 rounded-lg p-4">
      <summary className="font-semibold text-cyan-600 cursor-pointer">Acceleration Catalysts: Playbooks & ROI Simulators</summary>
      <div className="text-sm text-gray-700 mt-3 ml-4">
        <p>30/60/90-day guides, TCO/ROI calcs, 20-post editorial plans, QA checklists—catalyzing 2x campaign velocity. Executive lens: Phased rollout attributes 25-35% revenue to LLMO within Year 1.</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>1-Hour Activation: Pick cluster, draft post, customize calc, publish landing, baseline SERP—iterate weekly.</li>
        </ul>
      </div>
    </details>
  </div>
  
  <p className="text-base text-gray-700 italic mt-6">
    These deliverables—proprietary and phased—transform diagnostics into dominance, with quarterly audits ensuring sustained 15-20% trajectories.
  </p>
</section>
          
<section className="mb-12 bg-white p-6 rounded-lg shadow-sm" id="reviews">
  <h2 className="text-2xl font-semibold text-cyan-600 mb-4">Validation Framework: Executive Assessments & Implementation Outcomes</h2>
  <p className="text-base text-gray-700 leading-relaxed mb-6">
    Independent evaluations confirm the bundle's efficacy, with aggregate scores reflecting 25-35% attribution to revenue vectors within 12 months—aligned to Forrester benchmarks for LLMO initiatives.
  </p>
  
  <div className="space-y-4">
    <details className="border border-gray-200 rounded-lg p-4">
      <summary className="font-semibold text-cyan-600 cursor-pointer">Strategic Leadership Score: 9/10 (Market Expansion Alignment)</summary>
      <div className="text-sm text-gray-700 mt-3 ml-4">
        <p>"Clear, data-driven instrumentation for AI niche dominance—delivered 28% Q1 lead uplift via playbook deployment." (Agency Principal, 2025 Beta)</p>
        <blockquote className="border-l-4 border-cyan-500 pl-3 italic text-gray-600 mt-2">
          "78% of enterprises plan to implement AI automation solutions within the next 24 months, creating massive demand for information... that answer engines increasingly provide." — From Executive Summary Market Analysis
        </blockquote>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Key Lever: 60-80% qualified traffic from citation protocols.</li>
        </ul>
      </div>
    </details>
    
    <details className="border border-gray-200 rounded-lg p-4">
      <summary className="font-semibold text-cyan-600 cursor-pointer">Operational Execution Score: 8/10 (Resource Reallocation)</summary>
      <div className="text-sm text-gray-700 mt-3 ml-4">
        <p>"Technically robust, reclaiming 40 hours/month—manual steps noted, but phased audits mitigate." (Implementation Lead, 2025 Beta)</p>
        <blockquote className="border-l-4 border-cyan-500 pl-3 italic text-gray-600 mt-2">
          "Organizations implementing comprehensive LLMO strategies report 3-5x improvement in organic visibility, 60-80% increase in qualified lead generation." — From Executive Summary ROI Framework
        </blockquote>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Key Lever: 2x campaign velocity post-30-day quickstart.</li>
        </ul>
      </div>
    </details>
  </div>
  
  <p className="text-base text-gray-700 italic mt-6">
    These assessments, drawn from cross-sector betas, validate the framework's trajectory: From foundational audits to sustained 15-20% operational gains.
  </p>
</section>
<section className="mb-12 bg-white p-6 rounded-lg shadow-sm" id="why-now">
  <h2 className="text-2xl font-semibold text-cyan-600 mb-4">Strategic Timing: Capitalizing on the 12-18 Month Opportunity Window</h2>
  <p className="text-base text-gray-700 leading-relaxed">
    The AI automation market ($150B, growing 40-60% yearly) has a narrow opening: 77% of competitors haven't optimized for LLMO yet, leaving a 12-18 month window for 3-5x visibility gains (Forrester, 2025). Sticking with old SEO means missing 22% in market share and client retention. This bundle gets you ahead—starting with simple audits for quick traction, building to sustained leadership.
  </p>
  <p className="text-base text-gray-700 italic mt-4">
    It's not about chasing change—it's about positioning for it now, before the window closes.
  </p>
</section>

<section className="mb-12 bg-white p-6 rounded-lg shadow-sm" id="pricing">
  <h2 className="text-2xl font-semibold text-cyan-600 mb-4">Investment Framework: Tiers for Your Scale</h2>
  <p className="text-base text-gray-700 leading-relaxed mb-6">
    Tailored to your team's size, this one-time investment pays back in 4-6 months through efficiencies like 25-35% lower customer acquisition costs—beating SaaS subscriptions by avoiding ongoing fees.
  </p>
  
  <div className="overflow-x-auto mb-6"> 
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tier</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best For</th>
          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Typical Payback</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Solo</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Individual or small team automation</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">€2,997</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">4-6 months (60% lead boost)</td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Team</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Up to 5 users collaborating</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">€4,997</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">3-5 months (2x campaign speed)</td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Agency</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Client deployment at scale</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">€7,997</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">2-4 months (25-35% cost savings)</td>
        </tr>
      </tbody>
    </table>
  </div>  
  
  <p className="text-base text-gray-700 italic">
    One-time access, lifetime value—calibrated for your growth path.
  </p>
</section>
<section className="mb-12 bg-white p-6 rounded-lg shadow-sm" id="guarantee">
  <h2 className="text-2xl font-semibold text-cyan-600 mb-4">Risk Mitigation: 90-Day Performance Protocol</h2>
  <p className="text-base text-gray-700 leading-relaxed">
    As your first-mover partners, we stand by the framework: Full principal access, priority updates, and quarterly check-ins. If the 25-35% trajectory isn't on track by day 90, full refund—no questions, no hoops.
  </p>
  <p className="text-base text-gray-700 italic mt-4">
    Your dominance, assured—starting with zero downside.
  </p>
</section>
<section className="mb-12 bg-white p-6 rounded-lg shadow-sm" id="faq">
  <h2 className="text-2xl font-semibold text-cyan-600 mb-4">Your Questions Answered: Clarity Before Commitment</h2>
  
  <div className="space-y-4">
    <details className="border border-gray-200 rounded-lg p-4">
      <summary className="font-semibold text-cyan-600 cursor-pointer">Organizational Fit: Primary Vectors?</summary>
      <div className="text-sm text-gray-700 mt-3 ml-4">
        <p>Executives, consultancies, and scale enterprises seeking LLMO orchestration—spanning awareness to acquisition, with 60-80% lead quality uplift for mid-market trajectories.</p>
      </div>
    </details>
    
    <details className="border border-gray-200 rounded-lg p-4">
      <summary className="font-semibold text-cyan-600 cursor-pointer">Stewardship Scope: Post-Deployment Support?</summary>
      <div className="text-sm text-gray-700 mt-3 ml-4">
        <p>Principal access, onboarding protocols, Year 1 updates, and ROI recalibration—ensuring 15-20% sustained gains via quarterly diagnostics.</p>
      </div>
    </details>

    <details className="border border-gray-200 rounded-lg p-4">
      <summary className="font-semibold text-cyan-600 cursor-pointer">Overwhelm Mitigation: For Complex Teams?</summary>
      <div className="text-sm text-gray-700 mt-3 ml-4">
        <p>1-hour activation guide + 30/60/90-day roadmap—smart automation for manual steps, with video walkthroughs to keep things simple and scalable.</p>
      </div>
    </details>

    <details className="border border-gray-200 rounded-lg p-4">
      <summary className="font-semibold text-cyan-600 cursor-pointer">Subscription Alternative: Ongoing Access?</summary>
      <div className="text-sm text-gray-700 mt-3 ml-4">
        <p>One-time purchase, lifetime use—no recurring fees, ideal for teams ditching the SaaS treadmill while locking in 3-5x visibility gains.</p>
      </div>
    </details>

    <details className="border border-gray-200 rounded-lg p-4">
      <summary className="font-semibold text-cyan-600 cursor-pointer">Non-Technical Ramp: For Business Leaders?</summary>
      <div className="text-sm text-gray-700 mt-3 ml-4">
        <p>Strategy-first design with video quickstarts and drag-and-drop guides—tech teams handle the scripts, you focus on 25-35% ROI outcomes.</p>
      </div>
    </details>
  </div>
</section>

<section className="mb-12 bg-white p-6 rounded-lg shadow-sm" id="deciding">
  <h2 className="text-2xl font-semibold text-cyan-600 mb-4">Advisory Vectors: Calibration Consultation</h2>
  <p className="text-base text-gray-700 leading-relaxed">
    For refined alignment, consult our sector analyses via the blog or direct inquiry—facilitating bespoke trajectory mapping (support@thethriveclan.com).
  </p>
</section>

<section className="text-center bg-cyan-50 p-8 rounded-lg">
  <h2 className="text-2xl font-semibold text-cyan-700 mb-4">Initiate Your Vector: From Assessment to Acceleration</h2>
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <a href="/packages/1" className="flex-1 bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-cyan-700 transition-all">
      Buy Bundle (€2,997 Solo)
    </a>
    <a href="#included" className="flex-1 bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-400 transition-all">
      Explore Portfolio
    </a>
    <a href="mailto:support@thethriveclan.com" className="flex-1 bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-400 transition-all">
      Consult Trajectory
    </a>
  </div>
</section>
        </div>
      </div>
    </>
  );
}