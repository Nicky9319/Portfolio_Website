import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { experience } from '../../data/projects'

import timesLogo from '../../assets/times_internet_logo.png'
import renderperkLogo from '../../assets/render_perk_logo.jpeg'
import neocfoLogo from '../../assets/neo_cfo_logo.jpeg'

const logoMap = {
  'Times Internet': timesLogo,
  'Renderperk': renderperkLogo,
  'Nathdwara Advisors LLP': neocfoLogo,
}

export function ExperienceSection() {
  const [expanded, setExpanded] = useState({})

  const toggle = (key) =>
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }))

  return (
    <section id="experience" className="relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <span className="eyebrow text-[var(--muted)]">Experience</span>
          <h2 className="display-2 text-[var(--paper)] mt-3">
            Where I've <span className="italic">worked</span> and what I shipped.
          </h2>
        </div>

        {/* Experience list */}
        <div className="space-y-0">
          {experience.map((job, index) => {
            const key = `${job.company}-${job.period}`
            const isExpanded = expanded[key]
            const logo = logoMap[job.company]
            const isRenderperk = job.company === 'Renderperk'

            return (
              <motion.article
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="py-8 border-t border-[var(--border)] first:border-t-0"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
                  {/* Left: logo + title row */}
                  <div className="md:col-span-8 flex items-start gap-4">
                    {logo && (
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-white shrink-0 mt-0.5">
                        <img
                          src={logo}
                          alt={`${job.company} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}

                    <div className="flex-1">
                      {/* Title: designation + company with comma */}
                      <h3 className="font-display text-base md:text-lg text-[var(--paper)] leading-tight mb-1">
                        {job.role}{job.company ? `, ${job.company}` : ''}
                      </h3>

                      {/* Location + link */}
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3">
                        {job.location && (
                          <p className="body text-[var(--muted)]">{job.location}</p>
                        )}
                        {job.link && (
                          <a
                            href={
                              isRenderperk
                                ? 'https://renderperk.studio/?utm_source=paarth.site&utm_campaign=paarth&utm_medium=paarth-personal-website'
                                : `https://${job.link}`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="body text-[var(--muted)] hover:text-[var(--foreground)] transition-colors link-underline"
                          >
                            {isRenderperk ? 'renderperk.studio' : job.link}
                          </a>
                        )}
                      </div>

                      {/* Description — always visible, black text */}
                      <p className="body text-[var(--foreground)] max-w-2xl leading-relaxed">
                        {job.description}
                      </p>

                      {/* Show more button */}
                      <button
                        onClick={() => toggle(key)}
                        className="flex items-center gap-1.5 body text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mt-4 no-underline"
                      >
                        <ChevronDown
                          size={15}
                          className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                        />
                        <span className="text-sm font-medium">
                          {isExpanded ? 'Show less' : 'Show more'}
                        </span>
                      </button>

                      {/* Expanded highlights */}
                      {isExpanded && job.highlights && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-2 mt-5"
                        >
                          {job.highlights.map((highlight, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 body text-[var(--foreground)]"
                            >
                              <span className="w-1 h-1 rounded-full bg-[var(--muted)] mt-2.5 shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </div>
                  </div>

                  {/* Right: period */}
                  <div className="md:col-span-4 flex md:justify-end">
                    <p className="font-mono text-sm text-[var(--muted)] tabular whitespace-nowrap">
                      {job.period}
                    </p>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
