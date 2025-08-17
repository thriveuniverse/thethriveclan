import "./globals.css";
import Image from "next/image";
import Link from "next/link";

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata = {
  title: "The Thrive Clan",
  description: "Sector‑specific resources curated by The Thrive Clan.",
};

// ---------------------------------------------------------------------------
// Navigation items
// ---------------------------------------------------------------------------

const navItems = [
  { href: "/", label: "Home" },
  {
    href: "/sector-seo", // Updated to point to the new page
    label: "Sector SEO",
    dropdown: [
      { href: "/ai-and-automation-tools", label: "AI & Automation" },
      { href: "/ai-jobs-and-career-development", label: "AI Careers" },
      { href: "/health-and-wellness-specializations", label: "Health & Wellness" },
      { href: "/sustainable-and-eco-friendly-products", label: "Eco Products" },
      { href: "/electric-vehicle-accessories", label: "EV Accessories" },
      { href: "/remote-work-and-productivity-tools", label: "Remote Work" },
      { href: "/e-learning-and-online-education", label: "E‑Learning" },
      { href: "/senior-care-and-products", label: "Senior Care" },
    ],
  },
  { href: "/emerging-opportunities", label: "Emerging Opportunities" }, // Fixed typo "Opportunitiess"
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

// ---------------------------------------------------------------------------
// Root Layout
// ---------------------------------------------------------------------------

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

// ---------------------------------------------------------------------------
// Header Component
// ---------------------------------------------------------------------------

function Header() {
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center h-full">
          {navItems.map((item) =>
            item.dropdown ? (
              <Dropdown
                key={item.label}
                href={item.href} // Pass the href prop
                label={item.label}
                items={item.dropdown}
              />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-1"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Menu */}
        <details className="relative md:hidden">
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
            {navItems.map((item) =>
              item.dropdown
                ? item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {subItem.label}
                    </Link>
                  ))
                : (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {item.label}
                    </Link>
                  )
            )}
          </div>
        </details>
      </div>
    </header>
  );
}

// ---------------------------------------------------------------------------
// Dropdown Component
// ---------------------------------------------------------------------------

function Dropdown({ href, label, items }) {
  return (
    <div className="relative group">
      <Link
        href={href}
        className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2"
      >
        {label}
      </Link>
      <div className="hidden group-hover:block absolute bg-white shadow-lg rounded-md mt-2 w-48 z-50">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Footer Component
// ---------------------------------------------------------------------------
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="mx-auto max-w-7xl px-4 text-center text-sm text-gray-500 space-y-4">
        {/* Copyright */}
        <div>© {new Date().getFullYear()} The Thrive Clan · All rights reserved.</div>

        {/* Sitemap */}
        <nav className="flex flex-wrap justify-center gap-4">
          <Link href="/">Home</Link>
          <Link href="/sector-seo">Sector SEO</Link>
          <Link href="/ai-and-automation-tools">AI & Automation</Link>
          <Link href="/ai-jobs-and-career-development">AI Careers</Link>
          <Link href="/health-and-wellness-specializations">Health & Wellness</Link>
          <Link href="/sustainable-and-eco-friendly-products">Eco Products</Link>
          <Link href="/electric-vehicle-accessories">EV Accessories</Link>
          <Link href="/remote-work-and-productivity-tools">Remote Work</Link>
          <Link href="/e-learning-and-online-education">E-Learning</Link>
          <Link href="/senior-care-and-products">Senior Care</Link>
          <Link href="/emerging-opportunities">Emerging Opportunities</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </div>
    </footer>
  );
}

export { Footer }; // Named export for Footer
