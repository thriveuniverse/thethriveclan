import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "The Thrive Clan",
  description: "Sector‑specific resources curated by The Thrive Clan.",
};

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
// Internal components
// ---------------------------------------------------------------------------

function Header() {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/ai-and-automation-tools", label: "AI & Automation" },
    { href: "/ai-jobs-and-career-development", label: "AI Careers" },
    { href: "/health-and-wellness-specializations", label: "Health & Wellness" },
    { href: "/sustainable-and-eco-friendly-products", label: "Eco Products" },
    { href: "/electric-vehicle-accessories", label: "EV Accessories" },
    { href: "/remote-work-and-productivity-tools", label: "Remote Work" },
    { href: "/e-learning-and-online-education", label: "E‑Learning" },
    { href: "/senior-care-and-products", label: "Senior Care" },
  ];

  return (
    <header className="shadow-md bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo + brand */}
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

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu (CSS-only via details/summary) */}
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
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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

function Footer() {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="mx-auto max-w-7xl px-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} The Thrive Clan · All rights reserved.
      </div>
    </footer>
  );
}
