'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
// SubItem from before...

export default function CoreStrategy() {
  const [files, setFiles] = useState([]); // Mock; real: useEffect fetch('/api/files?section=core-strategy')

  useEffect(() => {
    setFiles([
      { title: 'Funnel Overview & KPIs', type: 'download', path: 'ai-automation/core-strategy/kpis.pdf' },
      { title: 'Executive Summary', type: 'pdf-embed', path: 'ai-automation/core-strategy/exec-summary.pdf' },
      // From tree/DB
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/ai-automation-dashboard" className="flex items-center text-blue-600 hover:underline mb-6">
          <ChevronLeftIcon className="h-5 w-5 mr-1" /> Back to Dashboard
        </Link>
        <h1 className="text-3xl font-bold mb-4">Core Strategy Docs</h1>
        <p className="text-gray-600 mb-8">Build your AI content foundation—view or download each file below.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {files.map(file => <SubItem key={file.title} {...file} />)}
        </div>
      </div>
    </div>
  );
}