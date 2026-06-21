import { motion } from 'framer-motion'
import { skills } from '../../data/projects'

// Build a 10-segment "marks" indicator from a 0-100 level
function Marks({ level }) {
  const filled = Math.round(level / 10)
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 10 }).map((_, i) => {
        const isOn = i < filled
        const isSignal = isOn && i >= filled - 1 // last lit segment is signal color
        return (
          <span
            key={i}
            className={`skill-mark ${isOn ? (isSignal ? 'signal' : 'on') : ''}`}
          />
        )
      })}
    </div>
  )
}

export function SkillsMatrix() {
  // Sort skills by level desc for visual hierarchy
  const sortedSkills = [...skills].sort((a, b) => b.level - a.level)

  return (
    <section id="skills" className="relative border-b border-[var(--border)] bg-[var(--surface)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="section-num text-[var(--primary)]">§04</span>
              <span className="eyebrow text-[var(--muted)]">/ capabilities</span>
            </div>
            <h2 className="display-2 text-[var(--paper)] max-w-2xl">
              What I <span className="italic">reach for</span> on a Tuesday.
            </h2>
          </div>
          <div className="lg:col-span-5 flex lg:items-end">
            <p className="body-lg text-[var(--muted)] max-w-md">
              Proficiency reflects recency and depth of use, not just exposure. A solid mark means I'd bet a deadline on it.
            </p>
          </div>
        </div>

        {/* Data table */}
        <div className="border border-[var(--border-2)] bg-[var(--background)]">
          {/* Table header */}
          <div className="grid grid-cols-12 gap-3 px-5 md:px-6 py-3 border-b border-[var(--border)] bg-[var(--surface-2)]">
            <span className="col-span-1 label text-[var(--dim)]">№</span>
            <span className="col-span-4 md:col-span-3 label text-[var(--dim)]">skill</span>
            <span className="col-span-4 md:col-span-5 label text-[var(--dim)]">proficiency</span>
            <span className="col-span-3 md:col-span-3 label text-[var(--dim)] text-right">level</span>
          </div>

          {/* Rows */}
          <div className="divide-y divide-[var(--border)]">
            {sortedSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="grid grid-cols-12 gap-3 px-5 md:px-6 py-4 items-center group hover:bg-[var(--surface)] transition-colors"
              >
                <span className="col-span-1 font-mono text-xs text-[var(--dim)] tabular">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="col-span-4 md:col-span-3 font-display text-lg md:text-xl text-[var(--paper)]">
                  {skill.name}
                </span>
                <div className="col-span-4 md:col-span-5 flex items-center gap-3">
                  <Marks level={skill.level} />
                </div>
                <div className="col-span-3 md:col-span-3 text-right">
                  <span className="font-mono text-sm text-[var(--foreground)] tabular">
                    {skill.level}
                  </span>
                  <span className="font-mono text-xs text-[var(--dim)]">/100</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Table footer */}
          <div className="grid grid-cols-12 gap-3 px-5 md:px-6 py-3 border-t border-[var(--border)] bg-[var(--surface-2)]">
            <span className="col-span-7 label text-[var(--muted)]">
              <span className="text-[var(--primary)]">●</span> {sortedSkills.length} skills tracked
            </span>
            <span className="col-span-5 label text-[var(--muted)] text-right">
              avg <span className="text-[var(--foreground)] tabular">{Math.round(sortedSkills.reduce((s, sk) => s + sk.level, 0) / sortedSkills.length)}</span>/100
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

