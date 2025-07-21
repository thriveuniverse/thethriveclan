import Link from "next/link";

export default function Home() {{
  return (
    <div className="home-container">
      <section className="hero">
        <h1>The Thrive Clan</h1>
        <p>Curated resources to help you thrive in a fast‑changing world.</p>
      </section>

      <section className="sector-grid">
        <Link href="/ai-and-automation-tools" className="grid-card">
          <div className="grid-card-inner">
            <h3>AI and Automation Tools</h3>
          </div>
        </Link>
        <Link href="/ai-jobs-and-career-development" className="grid-card">
          <div className="grid-card-inner">
            <h3>AI Jobs and Career Development</h3>
          </div>
        </Link>
        <Link href="/health-and-wellness-specializations" className="grid-card">
          <div className="grid-card-inner">
            <h3>Health and Wellness Specializations</h3>
          </div>
        </Link>
        <Link href="/sustainable-and-eco-friendly-products" className="grid-card">
          <div className="grid-card-inner">
            <h3>Sustainable and Eco-Friendly Products</h3>
          </div>
        </Link>
        <Link href="/electric-vehicle-accessories" className="grid-card">
          <div className="grid-card-inner">
            <h3>Electric Vehicle Accessories</h3>
          </div>
        </Link>
        <Link href="/remote-work-and-productivity-tools" className="grid-card">
          <div className="grid-card-inner">
            <h3>Remote Work and Productivity Tools</h3>
          </div>
        </Link>
        <Link href="/e-learning-and-online-education" className="grid-card">
          <div className="grid-card-inner">
            <h3>E-Learning and Online Education</h3>
          </div>
        </Link>
        <Link href="/senior-care-and-products" className="grid-card">
          <div className="grid-card-inner">
            <h3>Senior Care and Products</h3>
          </div>
        </Link>
      </section>
    </div>
  );
}}