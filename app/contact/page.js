'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(e.target)).toString(),
      });

      if (res.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setErrorMessage('Something went wrong — please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMessage('Could not send — please try again or email us directly.');
      setStatus('error');
    }
  }

  return (
    <div className="min-h-screen bg-[#0d0b14] py-16">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-4">Contact</h1>
        <p className="text-[#b8b0d8] leading-relaxed mb-10">
          If you&apos;re interested in the decision engine, the research, or just want to talk
          through an idea — we&apos;d like to hear from you.
        </p>

        {status === 'success' ? (
          <div className="bg-[#13111e] border border-[#2a2540] rounded-xl p-8 text-center">
            <p className="text-white text-lg font-medium mb-2">Message sent.</p>
            <p className="text-[#b8b0d8]">We&apos;ll be in touch.</p>
          </div>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#b8b0d8] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-[#13111e] border border-[#2a2540] rounded-lg px-4 py-3 text-white placeholder-[#7a7598] focus:outline-none focus:border-cyan-600 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#b8b0d8] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-[#13111e] border border-[#2a2540] rounded-lg px-4 py-3 text-white placeholder-[#7a7598] focus:outline-none focus:border-cyan-600 transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="organisation" className="block text-sm font-medium text-[#b8b0d8] mb-2">
                Organisation <span className="text-[#7a7598] font-normal">(optional)</span>
              </label>
              <input
                type="text"
                id="organisation"
                name="organisation"
                className="w-full bg-[#13111e] border border-[#2a2540] rounded-lg px-4 py-3 text-white placeholder-[#7a7598] focus:outline-none focus:border-cyan-600 transition-colors"
                placeholder="Company or institution"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#b8b0d8] mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full bg-[#13111e] border border-[#2a2540] rounded-lg px-4 py-3 text-white placeholder-[#7a7598] focus:outline-none focus:border-cyan-600 transition-colors resize-none"
                placeholder="What's on your mind?"
              />
            </div>

            {status === 'error' && (
              <p className="text-red-400 text-sm">{errorMessage}</p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-cyan-500 hover:bg-cyan-600 disabled:bg-cyan-900 disabled:text-cyan-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              {status === 'loading' ? 'Sending…' : 'Send message'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
