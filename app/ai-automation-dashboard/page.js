'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  PlayIcon, 
  ChartBarIcon, 
  DocumentTextIcon, 
  PencilIcon, 
  ChevronDoubleRightIcon,
  ArrowLeftOnRectangleIcon 
} from '@heroicons/react/24/outline';

const mockSession = { user: { email: 'buyer@example.com', name: 'Alex' }, isLoggedIn: true };
const mockUser = mockSession.user;

const dashboardSections = [
  {
    id: 'quick-start',
    title: 'Quick Start Guide',
    blurb: 'Launch your first AI content funnel in 1 hour—step-by-step blueprint.',
    icon: PlayIcon,
    path: '/ai-automation-dashboard/quick-start',
    accent: 'from-cyan-50 to-teal-50',
    buttonText: 'Start Launch',
  },
  {
    id: 'core-strategy',
    title: 'Core Strategy Docs',
    blurb: 'Funnel overviews, ROI levers, and 30/60/90-day roadmaps.',
    icon: ChartBarIcon,
    path: '/ai-automation-dashboard/core-strategy',
    accent: 'from-slate-50 to-gray-50',
    buttonText: 'View Strategies',
  },
  {
    id: 'bofu-pack',
    title: 'BOFU Pack',
    blurb: 'Pricing guides, calculators, forms, and case studies for conversions.',
    icon: DocumentTextIcon,
    path: '/ai-automation-dashboard/bofu-pack',
    accent: 'from-cyan-50 to-teal-50',
    buttonText: 'Build Conversions',
  },
  {
    id: 'templates',
    title: 'Templates',
    blurb: '20+ editable content, email, and ad templates—brand and deploy.',
    icon: PencilIcon,
    path: '/ai-automation-dashboard/templates',
    accent: 'from-slate-50 to-gray-50',
    buttonText: 'Edit Templates',
  },
  {
    id: 'docs-extras',
    title: 'Docs & Extras',
    blurb: 'Research notes, QA checklists, and your exclusive license.',
    icon: DocumentTextIcon,
    path: '/ai-automation-dashboard/docs-extras',
    accent: 'from-gray-50 to-slate-50',
    buttonText: 'Access Extras',
  },
];

export default function AiAutomationDashboard() {
  const session = mockSession;
  const [user] = useState(mockUser);

  if (!session.isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 max-w-md">
          <h1 className="text-2xl font-bold text-slate-900 mb-4 sr-only">Access Denied</h1>
          <p className="text-slate-600 mb-6">Sign in to access your exclusive bundle.</p>
          <Link 
            href="/login" 
            className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-colors"
            aria-label="Sign in to your bundle"
          >
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  const handleLogout = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome back, {user.name}!</h1>
              <p className="text-slate-600">Your AI & Automation Tools Package—Licensed exclusively to {user.email}.</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center px-4 py-2 text-sm text-slate-700 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-colors mt-4 sm:mt-0"
              aria-label="Log out of your account"
            >
              <ArrowLeftOnRectangleIcon className="h-4 w-4 mr-1" />
              Logout
            </button>
          </div>
          <Link
            href="/ai-automation-dashboard/quick-start"
            className="inline-flex items-center bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-colors"
            aria-label="Jump to Quick Start Guide"
          >
            <PlayIcon className="h-5 w-5 mr-2" />
            Jump to Quick Start
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardSections.map((section) => {
            const Icon = section.icon;
            return (
              <article key={section.id} className="group" role="article" aria-labelledby={`section-${section.id}-title`}>
                <Link
                  href={section.path}
                  className="block p-6 bg-white rounded-lg shadow-sm border border-slate-200 hover:shadow-md hover:border-teal-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-all"
                  aria-label={`${section.buttonText} in ${section.title}`}
                >
                  <div className={`rounded-t-lg p-4 mb-4 ${section.accent} flex items-center justify-center`}>
                    <Icon className="h-8 w-8 text-slate-600" aria-hidden="true" /> {/* Grey icons: Subtle, pro */}
                  </div>
                  <div>
                    <h2 id={`section-${section.id}-title`} className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
                      {section.title}
                    </h2>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">{section.blurb}</p>
                    <div className="flex items-center text-cyan-600 font-medium text-sm group-hover:text-cyan-700 transition-colors">
                      <span>{section.buttonText}</span>
                      <ChevronDoubleRightIcon className="h-4 w-4 ml-1" aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>

      <footer className="bg-slate-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm mb-2">Need help? Email <a href="mailto:support@thethriveclan.com" className="text-teal-400 hover:text-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 transition-colors" aria-label="Contact support">support@thethriveclan.com</a></p>
        </div>
      </footer>
    </div>
  );
}