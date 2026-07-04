export const navItems = [
  { href: '/', label: 'Home', published: true },
  { href: '/about', label: 'About Us', published: true },
  {
    href: '/projects',
    label: 'Our Projects',
    published: true,
    children: [
      { href: '/projects/decision-intelligence', label: 'Decisions that Remember' },
      { href: '/projects/resilience-intelligence', label: 'Resilience Intelligence' },
    ],
  },
  { href: '/the-method', label: 'The Method', published: true },
  { href: '/blog', label: 'Notes', published: true },
  { href: '/contact', label: 'Contact', published: true },
];

export const visibleNavItems = navItems.filter((item) => item.published);