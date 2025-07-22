export const metadata = {
  title: "Sustainable and Eco-Friendly Products – The Thrive Clan",
  description: "Resources for sustainable and eco-friendly products",
};

export default function Page() {
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
