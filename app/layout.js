import "./globals.css";
import { createOrganizationSchema } from "../lib/schemas/organization";
import Header from './components/Header';
import Link from 'next/link';
import { visibleNavItems } from './lib/nav';
import MDXWrapper from './components/MDXWrapper';  // NEW: Client wrapper for MDX styles
import CookieConsentBanner from './components/CookieConsentBanner';  // NEW: Separate client component for GDPR cookie banner

// Metadata with metadataBase
export const metadata = {
  metadataBase: new URL('https://thethriveclan.com'),
  title: "The Thrive Clan",
  description: "Sector-specific resources curated by The Thrive Clan.",
};

// Root Layout (stays server-side for perf)
export default function RootLayout({ children }) {
  const organizationSchema = createOrganizationSchema();

  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://thethriveclan.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />  
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col"
      suppressHydrationWarning={true}
      >
        <Header />
        <main className="flex-1">
          <MDXWrapper>  {/* NEW: Wraps children client-side only for MDX */}
            {children}
          </MDXWrapper>
        </main>
        <Footer />
        {/* NEW: Cookie Consent Banner - Now imported as a separate client component */}
        <CookieConsentBanner />
      </body>
    </html>
  );
}

// Footer Component (unchanged)
function Footer() {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="mx-auto max-w-7xl px-4 text-center text-sm text-gray-500 space-y-4">
        <div>© {new Date().getFullYear()} The Thrive Clan · All rights reserved.</div>
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