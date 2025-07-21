import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata = {{
  title: "The Thrive Clan",
  description: "Sector‑specific resources curated by The Thrive Clan.",
}};

export default function RootLayout({{ children }}) {{
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link href="/" className="logo-link">
            <Image src="/logo.png" width={{40}} height={{40}} alt="The Thrive Clan spiral logo" />
            <span className="site-title">The Thrive Clan</span>
          </Link>

          <input id="nav-toggle" type="checkbox" className="nav-toggle" />
          <label htmlFor="nav-toggle" className="nav-toggle-label">
            <span></span>
          </label>

          <nav className="site-nav">
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/ai-and-automation-tools">AI and Automation Tools</Link></li>
              <li><Link href="/ai-jobs-and-career-development">AI Jobs and Career Development</Link></li>
              <li><Link href="/health-and-wellness-specializations">Health and Wellness Specializations</Link></li>
              <li><Link href="/sustainable-and-eco-friendly-products">Sustainable and Eco-Friendly Products</Link></li>
              <li><Link href="/electric-vehicle-accessories">Electric Vehicle Accessories</Link></li>
              <li><Link href="/remote-work-and-productivity-tools">Remote Work and Productivity Tools</Link></li>
              <li><Link href="/e-learning-and-online-education">E-Learning and Online Education</Link></li>
              <li><Link href="/senior-care-and-products">Senior Care and Products</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          {{children}}
        </main>
      </body>
    </html>
  );
}}