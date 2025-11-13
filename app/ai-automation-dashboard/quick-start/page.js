'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronLeftIcon, CheckIcon } from '@heroicons/react/24/outline';

// Mock steps from PDF (fetch from Firestore: user.progress array)
const steps = [
  { id: 1, title: 'Choose your first keyword cluster (URL Map).', completed: false },
  { id: 2, title: 'Draft the first article using the Blog Strategy outline.', completed: false },
  { id: 3, title: 'Wire up ROI/TCO calculator cells with your own numbers.', completed: false },
  { id: 4, title: 'Publish a basic landing with schema and the form.', completed: false },
  { id: 5, title: 'Pull relevant items from Templates and ship.', completed: false },
  { id: 6, title: 'Record baseline SERP and iterate weekly.', completed: false },
];

export default function QuickStart() {
  const [progress, setProgress] = useState(steps); // Load from Firestore on mount

  const toggleStep = (id) => {
    setProgress(prev => prev.map(step => step.id === id ? { ...step, completed: !step.completed } : step));
    // Save to Firestore: fetch('/api/update-progress', { method: 'POST', body: JSON.stringify({ stepId: id, completed: true }) });
  };

  const exportPlan = () => {
    // Mock GCP PDF gen or jsPDF
    const completed = progress.filter(s => s.completed).map(s => s.title).join('\n');
    const blob = new Blob([`My Quick Start Progress:\n${completed}`], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my-quick-start-plan.txt';
    a.click();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <Link href="/ai-automation-dashboard" className="flex items-center text-blue-600 hover:underline mb-6">
          <ChevronLeftIcon className="h-5 w-5 mr-1" /> Back to Dashboard
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">🚀 Launch in 1 Hour</h1>
        <p className="text-gray-600 mb-8">Follow these 6 steps to get your first AI content funnel live today. Check off as you go—progress saves automatically.</p>
        
        <div className="space-y-4 mb-8">
          {progress.map(step => (
            <div key={step.id} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border">
              <button
                onClick={() => toggleStep(step.id)}
                className={`h-6 w-6 rounded-full flex items-center justify-center transition ${step.completed ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'}`}
              >
                {step.completed && <CheckIcon className="h-4 w-4" />}
              </button>
              <span className={`${step.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>{step.title}</span>
            </div>
          ))}
        </div>

        <button
          onClick={exportPlan}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition w-full font-medium"
        >
          Export My Plan (PDF/CSV)
        </button>

        <p className="text-sm text-gray-500 mt-4 text-center">Pro Tip: Revisit weekly to track SERP wins.</p>
      </div>
    </div>
  );
}