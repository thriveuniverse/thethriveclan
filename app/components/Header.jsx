'use client'; // This flips it to Client Component—unlocks useRef

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Nav data (pulled from layout.js)
const navItems = [
  { href: '/', label: 'Home', published: true },
  { href: '/llmo', label: 'LLMO', published: true },
  { href: '/sector-seo', label: 'Sector SEO', published: false },
  { href: '/emerging-opportunities', label: 'Emerging Opportunities', published: false },
  { href: '/securedoc-ai-search', label: 'SecureDoc AI Search', published: false },
  { href: '/about', label: 'About', published: true },
  { href: '/contact', label: 'Contact', published: true },
  { href: '/blog', label: 'Blog', published: true },
];

const visibleNavItems = navItems.filter((item) => item.published);

export default function Header() {
  const detailsRef = useRef(null);

  return (
    <header className="shadow-md bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="The Thrive Clan logo"
            width={32}
            height={32}
            priority
          />
          <span className="font-semibold text-lg text-gray-800">
            The Thrive Clan
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6 items-center h-full">
          {visibleNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-1"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <details ref={detailsRef} className="relative md:hidden">
          <summary className="list-none cursor-pointer p-2 -mr-2">
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </summary>
          <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-2 z-50">
            {visibleNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => { if (detailsRef.current) detailsRef.current.open = false; }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}