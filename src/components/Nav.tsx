const links = [
  { href: '#intro', label: 'Intro' },
  { href: '#about', label: 'About' },
  { href: '#strengths', label: 'Strengths' },
  { href: '#now', label: 'Now' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#github', label: 'GitHub' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-sm dark:border-white/10 dark:bg-black/70">
      <nav className="mx-auto flex max-w-4xl items-center justify-between gap-6 px-6 py-4">
        <a
          href="#intro"
          className="font-mono text-sm font-semibold tracking-tight"
        ></a>
        <ul className="flex gap-4 overflow-x-auto text-xs sm:gap-6 sm:text-sm">
          {links.map((link) => (
            <li key={link.href} className="shrink-0">
              <a
                href={link.href}
                className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
