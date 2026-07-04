'use client';

import { useState } from 'react';

const REGIONS = [
  { id: 'uk', label: 'UK OilWatch — Tuesdays' },
  { id: 'euro', label: 'Euro OilWatch — Wednesdays' },
  { id: 'americas', label: 'Americas OilWatch — Thursdays' },
];

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [selected, setSelected] = useState([]);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');

  const toggleRegion = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || selected.length === 0) {
      setStatus('error');
      setMessage('Enter your email and pick at least one briefing.');
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, regions: selected }),
      });
      const data = await res.json();
      if (res.ok && data.results?.every((r) => r.ok)) {
        setStatus('success');
        setMessage("You're in — check your inbox for the next briefing.");
        setEmail('');
        setSelected([]);
      } else {
        setStatus('error');
        setMessage('Something went wrong. Try again in a moment.');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Try again in a moment.');
    }
  };

  return (
    <div className="bg-[#13111e] rounded-xl p-6 border border-[#2a2540]">
      <div className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-2">Free Weekly Briefings</div>
      <h2 className="text-xl font-bold text-white mb-2">Get the OilWatch Briefings</h2>
      <p className="text-[#b8b0d8] mb-4 leading-relaxed">
        One concise email per region, straight from the live dashboards — reserve status,
        price movements, and supply-risk signals. Pick whichever region(s) matter to you.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-wrap gap-4">
          {REGIONS.map((region) => (
            <label key={region.id} className="flex items-center gap-2 text-sm text-[#b8b0d8] cursor-pointer">
              <input
                type="checkbox"
                checked={selected.includes(region.id)}
                onChange={() => toggleRegion(region.id)}
                className="rounded border-[#2a2540] bg-[#0d0b14] text-cyan-500 focus:ring-cyan-500"
              />
              {region.label}
            </label>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="flex-1 bg-[#0d0b14] border border-[#2a2540] rounded-lg px-4 py-2 text-white placeholder-[#7a7598] focus:outline-none focus:border-cyan-500"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-cyan-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-cyan-600 transition-colors disabled:opacity-50 whitespace-nowrap"
          >
            {status === 'loading' ? 'Subscribing…' : 'Subscribe — Free'}
          </button>
        </div>

        {message && (
          <p className={`text-sm ${status === 'success' ? 'text-cyan-400' : 'text-red-400'}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
