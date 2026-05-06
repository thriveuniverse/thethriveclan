export const navItems = [
  { href: '/', label: 'Home', published: true },
  { href: '/about', label: 'About Us', published: true },
  { href: '/projects', label: 'Our Projects', published: true },
  { href: '/the-method', label: 'The Method', published: true },
  { href: '/blog', label: 'Chronicles', published: true },
  { href: '/contact', label: 'Contact', published: true },
];

export const visibleNavItems = navItems.filter((item) => item.published);