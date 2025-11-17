'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline';

// PDF paths from GCP bucket
const pdfs = [
  {
    title: 'Start Here',
    path: 'ai-automation/01-start-here/over-arching-guide.pdf',
    blurb: 'Discover the blueprint or download for notes.',
  },
  {
    title: 'Package Overview',
    path: 'ai-automation/02-package-overview/package-overview.pdf',
    blurb: 'A full "What\'s Inside" or export.',
  },
];

export default function QuickStart() {
  const [showIntro, setShowIntro] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const [currentPdf, setCurrentPdf] = useState(null);
  const [PdfViewer, setPdfViewer] = useState(null); // Lazy load

  // Get signed URL from API
  const getSignedUrl = async (filePath) => {
    const res = await fetch('/api/signed-url', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ filePath, userEmail: 'mirriekelly@gmail.com' }), // Real session.email
    });
    if (!res.ok) throw new Error('Access denied');
    const { url } = await res.json();
    return url;
  };

  const openPdf = async (pdf) => {
    const url = await getSignedUrl(pdf.path);
    setCurrentPdf(pdf);
    setPdfUrl(url);
    // Dynamic import react-pdf (client-only)
    const { Document, Page, pdfjs } = await import('react-pdf');
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
    setPdfViewer({ Document, Page });
    setShowModal(true);
  };

  const downloadPdf = async (pdf) => {
    const url = await getSignedUrl(pdf.path);
    const a = document.createElement('a');
    a.href = url;
    a.download = pdf.path.split('/').pop();
    a.click();
  };

  const downloadBoth = async () => {
    // Stub—real: GCP signed ZIP
    const blob = new Blob(['Download both guides ZIP—implement GCP ZIP fetch.'], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'quick-start-guides.zip';
    a.click();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <Link href="/ai-automation-dashboard" className="flex items-center text-cyan-600 hover:underline mb-6">
          <ChevronLeftIcon className="h-5 w-5 mr-1" /> Back to Dashboard
        </Link>

        <h1 className="text-3xl font-bold text-center mb-6">Quick Start Guide</h1>
        <nav className="flex justify-center space-x-4 mb-8 text-sm text-gray-500 border-b pb-4">
          <Link href="/ai-automation-dashboard" className="hover:text-cyan-600">Dashboard Home</Link>
          <Link href="/ai-automation-dashboard/quick-start" className="font-semibold text-cyan-600">Quick Start</Link>
          <Link href="/ai-automation-dashboard/core-strategy" className="hover:text-cyan-600">Core Strategy</Link>
          <Link href="/ai-automation-dashboard/bofu" className="hover:text-cyan-600">BOFU Pack</Link>
          <Link href="/ai-automation-dashboard/templates" className="hover:text-cyan-600">Templates</Link>
          <Link href="/ai-automation-dashboard/docs-extras" className="hover:text-cyan-600">Docs & Extras</Link>
        </nav>

        {/* Intro Blurb */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <button onClick={() => setShowIntro(!showIntro)} className="flex items-center justify-between w-full text-left mb-2">
            <h2 className="text-xl font-semibold text-gray-900">Why This Guide?</h2>
            <ChevronDownIcon className={`h-5 w-5 transition-transform ${showIntro ? 'rotate-180' : ''}`} />
          </button>
          {showIntro && (
            <p className="text-gray-600 leading-relaxed">
              LLMs (like Grok, ChatGPT, Gemini, Perplexity, Claude, etc.) have become major gateways to information, just like Google search has been for the past 20 years. People are increasingly asking AI assistants instead of typing search queries: “What’s the best CRM for small businesses?” “How do I fix this CSS bug?” “Which running shoes are good for flat feet?” When an LLM answers, it might cite a site—but it often synthesizes the answer directly, changing how content gets discovered. That means companies now have two audiences to optimize for: Humans reading webpages and AI models reading, extracting, and summarizing webpages.
            </p>
          )}
        </div>

        {/* PDF Cards */}
        <div className="space-y-6 mb-8">
          {pdfs.map((pdf, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">{pdf.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{pdf.blurb}</p>
              <div className="flex space-x-2">
                <button onClick={() => openPdf(pdf)} className="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-700">
                  View PDF
                </button>
                <button onClick={() => downloadPdf(pdf)} className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400">
                  Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex space-x-4">
          <button onClick={downloadBoth} className="bg-cyan-600 text-white px-6 py-3 rounded-md hover:bg-cyan-700 transition flex-1 font-medium">
            Download Both Guides (ZIP)
          </button>
        </div>
      </div>

      {/* PDF Modal */}
      {showModal && PdfViewer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 max-w-4xl max-h-full overflow-auto">
            <div className="flex justify-between mb-4">
              <h3 className="text-xl font-semibold">{currentPdf?.title}</h3>
              <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <PdfViewer.Document file={pdfUrl} loading={<p>Loading...</p>}>
              <PdfViewer.Page pageNumber={1} width={600} />
            </PdfViewer.Document>
            <div className="mt-4 flex space-x-2">
              <button onClick={() => downloadPdf(currentPdf)} className="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-700">
                Download PDF
              </button>
              <button onClick={() => setShowModal(false)} className="bg-gray-300 px-4 py-2 rounded-md">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}