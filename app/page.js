export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Hero Section */}
      <section style={{ background: '#f0f0f0', padding: '50px', textAlign: 'center' }}>
        <h1>The Thrive Clan</h1>
        <p>Boost your online visibility with our expert SEO services for small businesses.</p>
        <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
          Explore Our SEO Packs
        </button>
      </section>

      {/* Blurb Section */}
      <section style={{ padding: '50px' }}>
        <p style={{ marginBottom: '20px' }}>
          In today’s fast-changing digital world, getting noticed online is tougher than ever. Recent studies estimate that 30% of small businesses never see their websites discovered, leading to missed opportunities and lost customers. With AI-driven search algorithms constantly evolving, small businesses struggle to keep up, often buried under competitors with bigger budgets. At The Thrive Clan, we understand the frustration of pouring effort into a website that doesn’t reach your audience. Our mission is to help companies like yours overcome these challenges and thrive online, ensuring your brand stands out in a crowded digital landscape.
        </p>
        <p>
          The Thrive Clan’s SEO packs are designed to make your small business shine online. Our affordable, tailored solutions boost your website’s rankings, drive targeted traffic, and grow your brand without breaking the bank. From keyword optimization to content strategies, our expert team ensures your site gets noticed by the right audience. Whether you’re a startup or an established company, our SEO services empower you to compete in an AI-driven world. Join our clan and discover how our SEO packs can transform your online presence and help your business thrive.
        </p>
      </section>

      {/* Grid Section (Placeholder for "Why Choose Us") */}
      <section style={{ padding: '50px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        <div style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center' }}>
          <h3>Feature 1</h3>
          <p>Connect with our community.</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center' }}>
          <h3>Feature 2</h3>
          <p>Access exclusive resources.</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center' }}>
          <h3>Feature 3</h3>
          <p>Grow with our tools.</p>
        </div>
      </section>

      {/* FAQs Section (Placeholder) */}
      <section style={{ padding: '50px' }}>
        <h2>Frequently Asked Questions</h2>
        <p>FAQ content coming soon...</p>
      </section>
    </div>
  );
}