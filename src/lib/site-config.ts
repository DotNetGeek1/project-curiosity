export const siteConfig = {
  name: 'Alex Griffiths',
  handle: 'DotNetGeek',
  title: 'Alex Griffiths — Engineering Notebook',
  description:
    'An engineering notebook. Experiments, research notes and the questions that started them.',
  url: 'https://dotnetgeek.co.uk',
  github: 'https://github.com/dotnetgeek',
  email: 'hello@dotnetgeek.co.uk',
} as const;

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const primaryNav: readonly NavItem[] = [
  { label: 'Experiments', href: '/experiments' },
  { label: 'Notes', href: '/notes' },
  { label: 'About', href: '/about' },
  { label: 'GitHub', href: siteConfig.github, external: true },
  { label: 'Contact', href: '/contact' },
] as const;
