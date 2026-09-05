import { motion } from 'framer-motion'
import { experience } from '../../data/projects'

export function ExperienceSection() {
  return (
    <section id="experience" className="relative border-b border-[var(--border)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 md:mb-20">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="eyebrow text-[var(--muted)]">/ experience</span>
            </div>
            <h2 className="display-2 text-[var(--paper)] max-w-2xl">
              Where I've <span className="italic">worked</span> and what I shipped.
            </h2>
          </div>
          <div className="lg:col-span-5 flex lg:items-end" />
        </div>

        {/* Experience list */}
        <div className="space-y-0">
          {experience.map((job, index) => (
            <motion.article
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="py-8 border-t border-[var(--border)] first:border-t-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                {/* Meta */}
                <div className="md:col-span-4">
                  <h3 className="font-display text-xl md:text-2xl text-[var(--paper)] leading-tight mb-1">
                    {job.company}
                  </h3>
                  <p className="body text-[var(--foreground)] mb-3">{job.role}</p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <p className="font-mono text-xs text-[var(--muted)] tabular">{job.period}</p>
                    {job.location && (
                      <p className="font-mono text-xs text-[var(--dim)]">{job.location}</p>
                    )}
                    {job.link && (
                      <a
                        href={`https://${job.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors link-underline"
                      >
                        {job.link}
                      </a>
                    )}
                  </div>
                </div>

                {/* Highlights */}
                <div className="md:col-span-8">
                  <ul className="space-y-2">
                    {job.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 body text-[var(--muted)]">
                        <span className="w-1 h-1 rounded-full bg-[var(--foreground)] mt-2 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
