'use client'; // Marks this as a Client Component (fixes useState/useSession error)

// app/ai-automation-dashboard/page.js
// Dashboard for the AI & Automation Tools Content Templates Package
// Protected route: Assumes auth middleware or getServerSideProps checks user access
// For now: Static skeleton; we'll add GCP fetches/auth later

import { useState } from 'react';
import Link from 'next/link';
import { 
  PlayIcon, 
  ChartBarIcon, 
  DocumentTextIcon, 
  PencilIcon, 
  ChevronRightIcon 
} from '@heroicons/react/24/outline'; // Modern line icons—swap for solid if bolder

// Mock auth (since NextAuth isn't installed yet—swap for Clerk/Auth.js when ready)
// Simulates session; in prod: Use Clerk's useUser() or NextAuth's useSession()
const mockSession = { user: { email: 'buyer@example.com', name: 'Alex' }, isLoggedIn: true };
const mockUser = mockSession.user;

// Hardcoded grid data (from PDF; we'll map to GCP paths later, e.g., /strategy/overview.pdf)
const dashboardSections = [
  {
    priority: 1,
    section: 'Quick-Start Guide',
    title: 'Launch in 1 Hour',
    blurb: '6-step blueprint: From keyword pick to publish—check off as you crush it.',
    action: 'Get Started',
    path: '/ai-automation-dashboard/quick-start', // Sub-page or modal
    type: 'interactive', // Stepper component
  },
  {
    priority: 2,
    section: 'Core Strategy Docs',
    title: 'Funnel Overview & KPIs',
    blurb: 'Align this bundle to your pipeline—input metrics for a custom fit.',
    action: 'Preview & Download',
    path: '/ai-automation-dashboard/strategy/kpis', // GCP signed URL for PDF/CSV
    type: 'download',
  },
  {
    priority: 3,
    section: 'Core Strategy Docs',
    title: 'Executive Summary',
    blurb: "The 'why' + ROI hooks—quick read to fuel your pitch.",
    action: 'View Summary',
    path: '/ai-automation-dashboard/strategy/exec-summary',
    type: 'pdf-embed',
  },
  {
    priority: 4,
    section: 'Core Strategy Docs',
    title: 'Implementation Guide',
    blurb: '30/60/90-day roadmap—tick steps for momentum.',
    action: 'Start Roadmap',
    path: '/ai-automation-dashboard/strategy/implementation',
    type: 'interactive', // Checkboxes
  },
  {
    priority: 5,
    section: 'Core Strategy Docs',
    title: 'Blog Strategy',
    blurb: '20-post calendar + SEO—your content engine starter.',
    action: 'View Calendar',
    path: '/ai-automation-dashboard/strategy/blog-plan',
    type: 'table',
  },
  {
    priority: 6,
    section: 'Core Strategy Docs',
    title: 'Keywords & Clusters',
    blurb: 'Intent-rich CSVs—filter low-KD gems for fast SEO juice.',
    action: 'Filter Keywords',
    path: '/ai-automation-dashboard/strategy/keywords',
    type: 'searchable',
  },
  {
    priority: 7,
    section: 'Core Strategy Docs',
    title: 'URL Map & SERP Snapshot',
    blurb: 'Site structure + benchmarks—visualize your growth path.',
    action: 'Map Your Site',
    path: '/ai-automation-dashboard/strategy/url-map',
    type: 'visual',
  },
  {
    priority: 8,
    section: 'BOFU Pack',
    title: "Beginner’s & Pricing Guides",
    blurb: 'Editable intros for your AI pricing—tweak & deploy.',
    action: 'Edit Guide',
    path: '/ai-automation-dashboard/bofu/pricing',
    type: 'editable',
  },
  {
    priority: 9,
    section: 'BOFU Pack',
    title: 'ROI/TCO Calcs + Landings',
    blurb: 'Plug in numbers, watch ROI sparkle—live & exportable.',
    action: 'Run Calculator',
    path: '/ai-automation-dashboard/bofu/roi-calc',
    type: 'interactive', // Your calc component
  },
  {
    priority: 10,
    section: 'BOFU Pack',
    title: 'Forms, Schema, & Case Studies',
    blurb: 'Snippets + proofs—drop into your site for trust/conversion.',
    action: 'Copy Snippets',
    path: '/ai-automation-dashboard/bofu/forms',
    type: 'copier',
  },
  {
    priority: 11,
    section: 'Templates',
    title: 'Content Templates (Blog/Landing/CTA)',
    blurb: '20+ Word-ready files—edit, brand, launch.',
    action: 'Browse Templates',
    path: '/ai-automation-dashboard/templates/content',
    type: 'grid',
  },
  {
    priority: 12,
    section: 'Templates',
    title: 'Email/Outreach & Ad/Social',
    blurb: 'Sequences + copy—fuel your nurture campaigns.',
    action: 'View Sequences',
    path: '/ai-automation-dashboard/templates/email',
    type: 'timeline',
  },
  {
    priority: 13,
    section: 'Templates',
    title: 'PM Checklists & Forms/Widgets',
    blurb: 'QA + embeds—keep your ops tight.',
    action: 'Run Checklist',
    path: '/ai-automation-dashboard/templates/checklists',
    type: 'interactive',
  },
  {
    priority: 14,
    section: 'Docs & Extras',
    title: 'Research Notes, QA, & License',
    blurb: 'Deep intel + your exclusive terms—reference anytime.',
    action: 'View License',
    path: '/ai-automation-dashboard/extras/license',
    type: 'pdf-embed',
  },
];

export default function AiAutomationDashboard() {
  const session = mockSession;
  const [user] = useState(mockUser);

  if (!session.isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Access Denied</h1>
          <Link href="/login" className="text-blue-600 hover:underline">
            Sign in to your bundle
          </Link>
        </div>
      </div>
    );
  }

  const handleLogout = () => {
    window.location.href = '/'; // Fallback
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero/Welcome – Added subtle gradient bg for polish */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user.name}!
          </h1>
          <p className="text-gray-600 mb-4">
            Your AI & Automation Tools Content Templates Package—Licensed Exclusively to {user.email}.
          </p>
          <div className="flex justify-between items-center">
            <Link
              href="/ai-automation-dashboard/quick-start"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition flex items-center space-x-2"
            >
              <PlayIcon className="h-4 w-4" />
              <span>Jump to Quick Start</span>
            </Link>
            <button
              onClick={handleLogout}
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Grouped Sections – Icons + dividers for guidance */}
        <div className="space-y-8">
          {/* Quick Start */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
              <PlayIcon className="h-6 w-6 text-blue-600" />
              <span>Quick Start</span>
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {dashboardSections.slice(0, 1).map((item) => (
                <Card key={item.title} {...item} />
              ))}
            </div>
          </section>

          {/* Core Strategy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
              <ChartBarIcon className="h-6 w-6 text-green-600" />
              <span>Core Strategy Docs</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dashboardSections.slice(1, 8).map((item) => (
                <Card key={item.title} {...item} />
              ))}
            </div>
          </section>

          {/* BOFU Pack */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
              <DocumentTextIcon className="h-6 w-6 text-purple-600" />
              <span>BOFU Pack</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dashboardSections.slice(8, 11).map((item) => (
                <Card key={item.title} {...item} />
              ))}
            </div>
          </section>

          {/* Templates */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
              <PencilIcon className="h-6 w-6 text-orange-600" />
              <span>Templates</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dashboardSections.slice(11, 14).map((item) => (
                <Card key={item.title} {...item} />
              ))}
            </div>
          </section>

          {/* Docs & Extras */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
              <DocumentTextIcon className="h-6 w-6 text-gray-600" />
              <span>Docs & Extras</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dashboardSections.slice(14).map((item) => (
                <Card key={item.title} {...item} />
              ))}
            </div>
          </section>
        </div>

        {/* Footer – Added divider for clean break */}
        <footer className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>Need help? Email <a href="mailto:support@thethriveclan.com" className="text-blue-600 hover:underline">support@thethriveclan.com</a></p>
        </footer>
      </div>
    </div>
  );
}

// Updated Card: Added chevron for "guidance" flow
function Card({ title, blurb, action, path }) {
  return (
    <Link href={path} className="group">
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between">
          <span>{title}</span>
          <ChevronRightIcon className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{blurb}</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition text-sm font-medium flex items-center space-x-2">
          <span>{action}</span>
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      </div>
    </Link>
  );
}