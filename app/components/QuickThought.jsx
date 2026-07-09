export default function QuickThought({ title, body }) {
  return (
    <details className="group bg-[#13111e] rounded-xl border border-[#2a2540] overflow-hidden">
      <summary className="list-none cursor-pointer p-6 flex items-start justify-between gap-4">
        <span className="text-lg font-semibold text-white leading-snug">{title}</span>
        <svg
          className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-1 transition-transform group-open:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="px-6 pb-6 text-[#b8b0d8] leading-relaxed">
        {body}
      </div>
    </details>
  );
}
