export const metadata = {
  title: 'Chronicles | The Thrive Clan',
  description: 'Thinking in progress — methodology, projects, and the ideas behind the work.',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0d0b14] py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-6">Chronicles</h1>
        <p className="text-lg text-[#b8b0d8] leading-relaxed mb-4 max-w-2xl">
          Thinking in progress. This is where the work gets narrated — the methodology
          decisions, the moments where something clicked, the ideas that didn&apos;t make
          it into the papers but probably should have.
        </p>
        <p className="text-[#7a7598] max-w-2xl leading-relaxed">
          First post arriving soon.
        </p>
      </div>
    </div>
  );
}
