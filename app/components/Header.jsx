'use client'; // This flips it to Client Component—unlocks useRef

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home', published: true },
  { href: '/about', label: 'About Us', published: true },
  { href: '/projects', label: 'Our Projects', published: true },
  { href: '/the-method', label: 'The Method', published: true },
  { href: '/blog', label: 'Chronicles', published: true },
  { href: '/contact', label: 'Contact', published: true },
];

const visibleNavItems = navItems.filter((item) => item.published);

export default function Header() {
  const detailsRef = useRef(null);

  return (
    <header className="bg-[#0d0b14] border-b border-[#2a2540]">
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
          <span className="font-semibold text-lg text-[#f0eeff]">
            The Thrive Clan
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6 items-center h-full">
          {visibleNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#b8b0d8] hover:text-white transition-colors py-1"
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
              className="h-6 w-6 text-[#b8b0d8]"
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
          <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#13111e] border border-[#2a2540] py-2 z-50">
            {visibleNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm text-[#b8b0d8] hover:bg-[#1c1930] hover:text-white transition-colors"
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