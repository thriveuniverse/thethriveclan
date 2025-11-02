import "./globals.css";
import { createOrganizationSchema } from "../lib/schemas/organization";
import Header from './components/Header'; // NEW
import Link from 'next/link';
import { visibleNavItems } from './lib/nav'; // NEW: Pulls the filtered list

// navItems moved to header.jsx


// Metadata with metadataBase
export const metadata = {
  metadataBase: new URL('https://thethriveclan.com'),
  title: "The Thrive Clan",
  description: "Sector-specific resources curated by The Thrive Clan.",
};

// Root Layout
export default function RootLayout({ children }) {
  const organizationSchema = createOrganizationSchema();

  return (
    <html lang="en" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header /> {/* CHANGED: Use the imported component */}
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

// Header Component moved to header.js


// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="mx-auto max-w-7xl px-4 text-center text-sm text-gray-500 space-y-4">
        {/* Copyright */}
        <div>© {new Date().getFullYear()} The Thrive Clan · All rights reserved.</div>

        {/* Sitemap */}
        <nav className="flex flex-wrap justify-center gap-4">
          {visibleNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Legal Links */}
        <nav className="flex flex-wrap justify-center gap-4">
          <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/refund" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
            Refund Policy
          </Link>
          <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export { Footer };
