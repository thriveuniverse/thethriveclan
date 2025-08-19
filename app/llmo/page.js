import Link from "next/link";

export const metadata = {
  title: "The Thrive Clan | LLMO Strategies in Action",
  description: "Explore our 8 key strategies for optimizing large language models to boost AI performance and uncover market trends.",
  keywords: "LLMO, AI optimization, model efficiency, contextual tuning, scalability, bias mitigation, real-time adaptation, data optimization, ethical AI, investment forecasting",
};

export default function LLMO() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-6 text-cyan-700">LLMO Strategies in Action</h3>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Explore our 8 key strategies for optimizing large language models, tailored to boost AI performance and uncover market trends.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "LLMO Strategy 1: Model Efficiency",
              "LLMO Strategy 2: Contextual Tuning",
              "LLMO Strategy 3: Scalability Insights",
              "LLMO Strategy 4: Bias Mitigation",
              "LLMO Strategy 5: Real-Time Adaptation",
              "LLMO Strategy 6: Data Optimization",
              "LLMO Strategy 7: Ethical AI Frameworks",
              "LLMO Strategy 8: Investment Forecasting",
            ].map((title, index) => (
              <Link
                key={index}
                href={`/llmo/${title.toLowerCase().replace(/ /g, "-")}`}
                className="block bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="text-md font-medium text-cyan-600">{title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}