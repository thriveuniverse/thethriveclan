export const metadata = {
  title: "Senior Care and Products – The Thrive Clan",
  description: "Resources for senior care and products",
};

export default function SeniorcareandproductsPage() {
  return (
    <div className="sector-page">
      <h1>Senior Care and Products</h1>
      <ul className="keyword-list">
          <li key="0">Senior care products</li>
          <li key="1">Elderly wellness solutions</li>
          <li key="2">Senior-friendly technology</li>
          <li key="3">Aging-in-place solutions</li>
          <li key="4">Senior fitness programs</li>
          <li key="5">Elderly safety products</li>
          <li key="6">Senior meal delivery services</li>
          <li key="7">Memory care resources</li>
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
