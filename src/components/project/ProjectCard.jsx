import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ExternalLink } from 'lucide-react'
import { GitHubWidget } from '../ui/GitHubWidget'
import { useState } from 'react'

export function ProjectCard({ project, index, total }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const serial = String(index + 1).padStart(3, '0')

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.05 }}
      className="group py-6 border-t border-[var(--border)] first:border-t-0"
    >
      {/* Top meta */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-xs text-[var(--dim)] tabular">
          № {serial}/{String(total).padStart(3, '0')}
        </span>
        <span className="label text-[var(--dim)]">
          {project.timeline?.date}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-display text-2xl md:text-[1.7rem] text-[var(--paper)] leading-[1.05] tracking-tight mb-3">
        {project.name}
      </h3>

      {/* Description */}
      <p className="body text-[var(--muted)] mb-5 leading-relaxed">
        {project.description}
      </p>

      {/* GitHub / live widget */}
      {(project.githubUrl || project.liveUrl) && (
        <div className="mb-5">
          <GitHubWidget
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        </div>
      )}

      {/* Tech stack */}
      <div className="mb-4">
        <p className="text-sm text-[var(--foreground)] leading-relaxed">
          {project.techStack.join(' · ')}
        </p>
      </div>

      {/* Expand toggle */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 label text-[var(--muted)] hover:text-[var(--foreground)] transition-colors group/btn"
        aria-expanded={isExpanded}
      >
        <span className="w-1.5 h-1.5 bg-[var(--foreground)] rounded-full opacity-0 group-hover/btn:opacity-100 transition-opacity" />
        <span>{isExpanded ? 'close spec' : 'open spec'}</span>
        <motion.span
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="inline-flex"
        >
          <ChevronDown className="w-3.5 h-3.5" />
        </motion.span>
      </button>

      {/* Expanded spec sheet */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="spec"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-6 space-y-6">
              {/* Architecture */}
              {project.architecture?.diagram && (
                <div>
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="label text-[var(--primary)]">fig. {serial}</span>
                    <span className="label text-[var(--muted)]">architecture</span>
                  </div>
                  <pre className="ascii-diagram text-[var(--muted)] mt-2">
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
                    className="inline-flex items-center gap-2 label text-[var(--muted)] hover:text-[var(--foreground)] transition-colors link-underline"
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
