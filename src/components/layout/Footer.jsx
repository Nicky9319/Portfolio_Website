import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Signature block */}
          <div className="md:col-span-5">
            <p className="eyebrow text-[var(--muted)] mb-3">colophon</p>
            <p className="font-display text-2xl leading-tight max-w-xs">
              Designed and built in the open, line by line.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-4">
            <p className="eyebrow text-[var(--muted)] mb-3">channels</p>
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/Nicky9319"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors no-underline"
              >
                <GithubIcon size={16} />
                <span>github / Nicky9319</span>
              </a>
              <a
                href="https://www.linkedin.com/in/paarth-saxena-632547274/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors no-underline"
              >
                <LinkedinIcon size={16} />
                <span>linkedin / paarth-saxena-632547274</span>
              </a>
              <a
                href="mailto:paarthsaxena2005@gmail.com"
                className="group inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors no-underline"
              >
                <Mail className="w-4 h-4" />
                <span>paarthsaxena2005@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Empty column to balance layout */}
          <div className="md:col-span-3" />
        </div>

        {/* Bottom hairline */}
        <div className="mt-10 pt-6 border-t border-[var(--border)] flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <p className="label text-[var(--dim)]">
            © Paarth / 9319 — all work referenced is open source
          </p>
          <p className="label text-[var(--dim)]">
            <span className="text-[var(--primary)]">●</span> online / always shipping
          </p>
        </div>
      </div>
    </footer>
  )
}
