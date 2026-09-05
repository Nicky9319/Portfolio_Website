import { GithubIcon, LinkedinIcon, LeetcodeIcon, XIcon } from '../ui/BrandIcons'
import { Mail } from 'lucide-react'

const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Concepts', href: '#concepts' },
  { label: 'Timeline', href: '#timeline' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 glass border-b border-[var(--border)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-14">
          {/* Left spacer */}
          <div />

          {/* Center nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors no-underline"
              >
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
            <a
              href="https://www.linkedin.com/in/paarth-saxena-632547274/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 border border-[var(--border-2)] hover:border-[var(--foreground)] hover:bg-[var(--surface)] transition-colors"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href="mailto:paarthsaxena2005@gmail.com"
              aria-label="Email"
              className="p-2 border border-[var(--border-2)] hover:border-[var(--foreground)] hover:bg-[var(--surface)] transition-colors"
            >
              <Mail size={16} />
            </a>
            <a
              href="https://leetcode.com/u/paarth_saxena/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="p-2 border border-[var(--border-2)] hover:border-[var(--foreground)] hover:bg-[var(--surface)] transition-colors"
            >
              <LeetcodeIcon size={16} />
            </a>
            <a
              href="https://x.com/SaxenaPaarth_19"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="p-2 border border-[var(--border-2)] hover:border-[var(--foreground)] hover:bg-[var(--surface)] transition-colors"
            >
              <XIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
