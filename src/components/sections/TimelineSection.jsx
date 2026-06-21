import { motion } from 'framer-motion'
import { timelineData } from '../../data/projects'

// Group entries by year
function groupByYear(data) {
  const groups = {}
  data.forEach((item) => {
    const year = item.date.split('-')[0]
    if (!groups[year]) groups[year] = []
    groups[year].push(item)
  })
  return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b))
}

const stepLabels = {
  0: 'Origin',
  1: 'Backend',
  2: 'DevOps',
  3: 'Full-Stack',
  4: 'Containers',
  5: 'Microservices',
  6: 'AI Agents',
  7: 'Mobile',
  8: 'Auth · Cross-platform',
  9: 'Business',
  10: 'AI Frameworks',
  11: 'Observability',
  12: 'Workflow',
}

export function TimelineSection() {
  const yearGroups = groupByYear(timelineData)
  let globalIndex = 0

  return (
    <section id="timeline" className="relative border-b border-[var(--border)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 md:mb-20">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="section-num text-[var(--primary)]">§03</span>
              <span className="eyebrow text-[var(--muted)]">/ chronology</span>
            </div>
            <h2 className="display-2 text-[var(--paper)] max-w-2xl">
              Eighteen months, <span className="italic">one build at a time.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex lg:items-end">
            <p className="body-lg text-[var(--muted)] max-w-md">
              A log of every project, ordered by ship date. Skim the right column to see what each month unlocked.
            </p>
          </div>
        </div>

        {/* The logbook */}
        <div className="border-t border-[var(--border)]">
          {yearGroups.map(([year, entries], yearIdx) => (
            <motion.div
              key={year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: yearIdx * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-12 border-b border-[var(--border)]"
            >
              {/* Year column — sticky-feel display */}
              <div className="lg:col-span-3 lg:border-r border-[var(--border)] p-6 md:p-8 flex flex-col justify-between bg-[var(--surface)]">
                <div>
                  <p className="eyebrow text-[var(--muted)]">year</p>
                  <p className="font-display text-7xl md:text-8xl text-[var(--paper)] mt-2 leading-none">
                    {year}
                  </p>
                </div>
                <div className="mt-8 space-y-1">
                  <p className="label text-[var(--muted)]">
                    <span className="text-[var(--primary)]">●</span> {entries.length} {entries.length === 1 ? 'period' : 'periods'}
                  </p>
                  <p className="small text-[var(--dim)] font-mono">
                    {entries.reduce((sum, e) => sum + e.projects.length, 0)} projects shipped
                  </p>
                </div>
              </div>

              {/* Entries column */}
              <div className="lg:col-span-9 divide-y divide-[var(--border)]">
                {entries.map((item) => {
                  const i = globalIndex++
                  return (
                    <div
                      key={item.date}
                      className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 p-6 md:p-8 hover:bg-[var(--surface)] transition-colors"
                    >
                      {/* Date */}
                      <div className="md:col-span-2 flex items-start">
                        <div className="font-mono text-sm text-[var(--muted)] tabular">
                          <span className="block text-[var(--foreground)] text-base">
                            {item.date.split('-')[1]}
                          </span>
                          <span className="text-[var(--dim)]">/ {item.date.split('-')[0]}</span>
                        </div>
                      </div>

                      {/* Projects */}
                      <div className="md:col-span-6">
                        <p className="label text-[var(--dim)] mb-2">build</p>
                        <div className="flex flex-wrap gap-x-2 gap-y-1">
                          {item.projects.map((p, idx) => (
                            <span
                              key={p}
                              className="font-display text-xl md:text-2xl text-[var(--paper)]"
                            >
                              {p}
                              {idx < item.projects.length - 1 && (
                                <span className="text-[var(--dim)]">, </span>
                              )}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Skill focus */}
                      <div className="md:col-span-4 md:text-right">
                        <p className="label text-[var(--dim)] mb-2">unlocked</p>
                        <div className="md:flex md:justify-end">
                          <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-[var(--border-2)] text-sm font-mono text-[var(--primary)] bg-[var(--background)]">
                            <span className="w-1 h-1 rounded-full bg-[var(--primary)]" />
                            {stepLabels[i] || item.skillFocus}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trajectory strip */}
        <motion.div
          className="mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow text-[var(--muted)] mb-4">trajectory</p>
          <div className="border border-[var(--border-2)] bg-[var(--surface)] p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              {['Script', 'Backend', 'DevOps', 'Full-Stack', 'AI', 'Platforms'].map((step, i, arr) => (
                <div key={step} className="flex items-center gap-2 md:gap-3">
                  <span className="font-mono text-xs md:text-sm text-[var(--muted)] tabular">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-lg md:text-xl text-[var(--paper)]">
                    {step}
                  </span>
                  {i < arr.length - 1 && (
                    <span className="text-[var(--primary)] mx-1">→</span>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 h-1.5 bg-[var(--border)] relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: 'easeOut' }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
