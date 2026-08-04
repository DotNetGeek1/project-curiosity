export const siteConfig = {
  name: 'Alex Griffiths',
  handle: 'DotNetGeek',
  siteName: 'Project Curiosity',
  notebookSpineLabel: 'PROJECT CURIOSITY - Engineering notebook',
  title: 'Things I Wondered About — Engineering experiments by DotNetGeek',
  description:
    'An engineering notebook about difficult questions, prototypes, systems, mistakes and the things I learned while building them.',
  url: 'https://portfolio.dotnetgeek.co.uk',
  // The dotnetgeek username was already taken on GitHub.
  githubUsername: 'DotNetGeek1',
  github: 'https://github.com/DotNetGeek1',
  email: 'alex@dotnetgeek.co.uk',
} as const;

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const primaryNav: readonly NavItem[] = [
  { label: 'Experiments', href: '/experiments' },
  { label: 'Research Notes', href: '/notes' },
  { label: 'About', href: '/about' },
  { label: 'GitHub', href: siteConfig.github, external: true },
  { label: 'Contact', href: '/contact' },
] as const;
