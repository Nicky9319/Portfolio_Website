import { ThemeToggle } from '../ui/ThemeToggle'
import { GithubIcon } from '../ui/BrandIcons'

const navItems = [
  { label: 'Work', href: '#projects', num: '02' },
  { label: 'Timeline', href: '#timeline', num: '03' },
  { label: 'Skills', href: '#skills', num: '04' },
  { label: 'About', href: '#about', num: '05' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 glass border-b border-[var(--border)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-14">
          {/* Brand — monogram with live indicator */}
          <a href="#top" className="flex items-center gap-3 group">
            <span className="font-display text-2xl tracking-tight">P.</span>
            <span className="hidden md:flex items-center gap-2 label text-[var(--muted)]">
              <span className="relative inline-flex w-1.5 h-1.5">
                <span className="absolute inset-0 rounded-full bg-[var(--primary)] pulse-dot" />
                <span className="absolute inset-0 rounded-full bg-[var(--primary)] blur-[3px] pulse-dot" />
              </span>
              <span>online / building</span>
            </span>
          </a>

          {/* Center nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group flex items-baseline gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                <span className="label text-[var(--dim)] group-hover:text-[var(--primary)] transition-colors">
                  {item.num}
                </span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Nicky9319"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 border border-[var(--border-2)] hover:border-[var(--foreground)] hover:bg-[var(--surface)] transition-colors"
            >
              <GithubIcon size={16} />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
