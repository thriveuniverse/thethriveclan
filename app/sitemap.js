export default function sitemap() {
  const base = 'https://thethriveclan.com';
  const now = new Date();

  return [
    { url: base,                                          lastModified: now, changeFrequency: 'monthly',  priority: 1.0 },
    { url: `${base}/projects`,                            lastModified: now, changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${base}/projects/decision-intelligence`,      lastModified: now, changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${base}/projects/resilience-intelligence`,    lastModified: now, changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${base}/the-method`,                          lastModified: now, changeFrequency: 'monthly',  priority: 0.8 },
    { url: `${base}/about`,                               lastModified: now, changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${base}/blog`,                                lastModified: now, changeFrequency: 'weekly',   priority: 0.7 },
    { url: `${base}/contact`,                             lastModified: now, changeFrequency: 'yearly',   priority: 0.4 },
  ];
}
