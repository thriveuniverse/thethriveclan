/** @type {import('next').Metadata} */
export const metadata = {
  title: "AI Jobs & Career Development | The Thrive Clan",
  description:
    "Resources for AI jobs, career transitions, and prompt‑engineering positions.",
};

const keywords = [
  "Remote AI jobs",
  "AI career transition strategies",
  "Machine learning engineer remote",
  "AI ethics specialist training",
  "AI prompt engineer positions",
  "AI data labeler roles",
  "Remote AI support analyst",
  "AI‑powered content specialists",
];

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">
        AI Jobs &amp; Career Development
      </h1>

      <ul className="space-y-3 list-disc list-inside">
        {keywords.map((kw) => (
          <li key={kw}>{kw}</li>
        ))}
      </ul>
    </div>
  );
}
