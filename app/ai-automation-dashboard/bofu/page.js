'use client';

import Link from 'next/link';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

export default function BofuPack() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <Link href="/ai-automation-dashboard" className="flex items-center text-cyan-600 hover:underline mb-6">
          <ChevronLeftIcon className="h-5 w-5 mr-1" /> Back to Dashboard
        </Link>
        <h1 className="text-3xl font-bold text-center mb-6">BOFU Pack</h1>
        <nav className="flex justify-center space-x-4 mb-8 text-sm text-gray-500 border-b pb-4">
          <Link href="/ai-automation-dashboard" className="hover:text-cyan-600">Dashboard Home</Link>
          <Link href="/ai-automation-dashboard/quick-start" className="hover:text-cyan-600">Quick Start</Link>
          <Link href="/ai-automation-dashboard/core-strategy" className="hover:text-cyan-600">Core Strategy</Link>
          <Link href="/ai-automation-dashboard/bofu" className="font-semibold text-cyan-600">BOFU Pack</Link>
          <Link href="/ai-automation-dashboard/templates" className="hover:text-cyan-600">Templates</Link>
          <Link href="/ai-automation-dashboard/docs-extras" className="hover:text-cyan-600">Docs & Extras</Link>
        </nav>
        <p className="text-gray-600 text-center">Coming soon: ROI calcs, pricing guides, and forms/snippets. Placeholder for now.</p>
      </div>
    </div>
  );
}