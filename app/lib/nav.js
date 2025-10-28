export const navItems = [
  { href: '/', label: 'Home', published: true },
  { href: '/llmo', label: 'LLMO', published: true },
  { href: '/sector-seo', label: 'Sector SEO', published: false },
  { href: '/emerging-opportunities', label: 'Emerging Opportunities', published: false },
  { href: '/securedoc-ai-search', label: 'SecureDoc AI Search', published: false },
  { href: '/about', label: 'About', published: true },
  { href: '/contact', label: 'Contact', published: true },
  { href: '/blog', label: 'Blog', published: true },
];

export const visibleNavItems = navItems.filter((item) => item.published);