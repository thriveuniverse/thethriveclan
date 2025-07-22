export const metadata = {
  title: "E-Learning and Online Education – The Thrive Clan",
  description: "Resources for e-learning and online education",
};

export default function ElearningandonlineeducationPage() {
  return (
    <div className="sector-page">
      <h1>E-Learning and Online Education</h1>
      <ul className="keyword-list">
          <li key="0">Online learning platforms</li>
          <li key="1">E-learning course development</li>
          <li key="2">Online teaching degree programs</li>
          <li key="3">Distance learning solutions</li>
          <li key="4">Industry-specific training programs</li>
          <li key="5">Professional certification courses</li>
          <li key="6">Skills-based learning platforms</li>
          <li key="7">Corporate training solutions</li>
      </ul>
    </div>
  );
}export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">AI &amp; Automation Tools</h1>

      <ul className="space-y-3 list-disc list-inside">
        {[
          "AI automation tools for small business",
          "AI workflow automation",
          "Business process automation tools",
          "AI-powered productivity software",
          "AI prompt engineering services",
          "Automated testing services for web applications",
          "AI ethics compliance tools",
          "Machine learning automation platforms",
        ].map((kw) => (
          <li key={kw}>{kw}</li>
        ))}
      </ul>
    </div>
  );
}
