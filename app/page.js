export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Hero Section */}
      <section style={{ background: '#f0f0f0', padding: '50px', textAlign: 'center' }}>
        <h1>Welcome to TheThriveClan</h1>
        <p>Empowering your journey with community and resources.</p>
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>
          Learn More
        </button>
      </section>

      {/* Grid Section */}
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
    </div>
  );
}