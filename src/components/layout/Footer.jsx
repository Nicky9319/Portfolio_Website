import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '../ui/BrandIcons'
import { Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-8">
        <div className="flex items-center justify-center gap-8 md:gap-16">
          <a
            href="mailto:paarthsaxena2005@gmail.com"
            aria-label="Email"
            className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors no-underline"
          >
            <Mail size={16} />
            <span className="hidden md:inline">Email</span>
          </a>
          <a
            href="https://github.com/Nicky9319"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors no-underline"
          >
            <GithubIcon size={16} />
            <span className="hidden md:inline">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/paarth-saxena-632547274/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors no-underline"
          >
            <LinkedinIcon size={16} />
            <span className="hidden md:inline">LinkedIn</span>
          </a>
          <a
            href="https://leetcode.com/u/paarth_saxena/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors no-underline"
          >
            <LeetcodeIcon size={16} />
            <span className="hidden md:inline">LeetCode</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
