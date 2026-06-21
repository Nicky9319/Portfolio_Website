import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ExternalLink } from 'lucide-react'
import { GithubIcon } from '../ui/BrandIcons'
import { useState } from 'react'

const tierMeta = {
  1: { label: 'T1 / systems', sub: 'Multi-service orchestration' },
  2: { label: 'T2 / depth', sub: 'Technical depth' },
  3: { label: 'T3 / surfaces', sub: 'Mobile & desktop' },
  4: { label: 'T4 / tooling', sub: 'Utilities & infra' },
}

const tierAccent = {
  1: { text: 'text-[var(--primary)]', border: 'border-[var(--primary)]' },
  2: { text: 'text-[var(--secondary)]', border: 'border-[var(--secondary)]' },
  3: { text: 'text-[var(--foreground)]', border: 'border-[var(--foreground)]' },
  4: { text: 'text-[var(--muted)]', border: 'border-[var(--muted)]' },
}

export function ProjectCard({ project, index, total }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const meta = tierMeta[project.tier] || tierMeta[4]
  const accent = tierAccent[project.tier] || tierAccent[4]
  const serial = String(index + 1).padStart(3, '0')

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.05 }}
      className="group relative bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--border-2)] transition-colors"
    >
      {/* Top bar — serial + tier */}
      <div className="flex items-center justify-between px-5 py-2 border-b border-[var(--border)] bg-[var(--surface-2)]">
        <span className="font-mono text-xs text-[var(--muted)] tabular">
          № {serial}/{String(total).padStart(3, '0')}
        </span>
        <span className={`font-mono text-xs ${accent.text} uppercase tracking-wider`}>
          {meta.label}
        </span>
      </div>

      {/* Main content */}
      <div className="p-5 md:p-6">
        {/* Title row */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-display text-2xl md:text-[1.7rem] text-[var(--paper)] leading-[1.05] tracking-tight">
            {project.name}
          </h3>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} on GitHub`}
              className="shrink-0 p-1.5 -mr-1 -mt-1 text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
            >
              <GithubIcon size={16} />
            </a>
          )}
        </div>

        {/* Subtitle */}
        <p className="label text-[var(--dim)] mb-3">{meta.sub}</p>

        {/* Description */}
        <p className="body text-[var(--muted)] mb-5 leading-relaxed">
          {project.description}
        </p>

        {/* Tech stack — monospace row */}
        <div className="border-t border-dashed border-[var(--border)] pt-4">
          <p className="label text-[var(--dim)] mb-2">stack</p>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] text-[var(--muted)] px-2 py-1 bg-[var(--background)] border border-[var(--border)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-5 flex items-center gap-2 label text-[var(--muted)] hover:text-[var(--primary)] transition-colors group/btn"
          aria-expanded={isExpanded}
        >
          <span className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full opacity-0 group-hover/btn:opacity-100 transition-opacity" />
          <span>{isExpanded ? 'close spec' : 'open spec'}</span>
          <motion.span
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="inline-flex"
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </motion.span>
        </button>
      </div>

      {/* Expanded spec sheet */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="spec"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-[var(--border)] bg-[var(--background)]"
          >
            <div className="p-5 md:p-6 space-y-6">
              {/* Architecture */}
              {project.architecture?.diagram && (
                <div>
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="label text-[var(--primary)]">fig. {serial}</span>
                    <span className="label text-[var(--muted)]">architecture</span>
                  </div>
                  <pre className="ascii-diagram bg-[var(--surface)] p-4 border border-[var(--border)]">
                    {project.architecture.diagram}
                  </pre>
                </div>
              )}

              {/* Features */}
              {project.features?.length > 0 && (
                <div>
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="label text-[var(--primary)]">§ 1</span>
                    <span className="label text-[var(--muted)]">capabilities</span>
                  </div>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 body text-[var(--foreground)]"
                      >
                        <span className="font-mono text-xs text-[var(--dim)] tabular pt-0.5 shrink-0 w-6">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="text-[var(--muted)]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Challenges */}
              {project.challenges?.length > 0 && (
                <div>
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="label text-[var(--primary)]">§ 2</span>
                    <span className="label text-[var(--muted)]">field notes</span>
                  </div>
                  <div className="space-y-2">
                    {project.challenges.map((challenge, i) => (
                      <div
                        key={i}
                        className="border-l-2 border-[var(--primary)] pl-4 py-1"
                      >
                        <p className="small text-[var(--foreground)] font-medium">
                          Q. {challenge.question}
                        </p>
                        <p className="small text-[var(--muted)] mt-1">
                          A. {challenge.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Repo link */}
              {project.githubUrl && (
                <div className="pt-2 flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 label text-[var(--muted)] hover:text-[var(--primary)] transition-colors link-underline"
                  >
                    <span>view source</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}
