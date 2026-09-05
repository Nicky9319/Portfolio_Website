import { motion } from 'framer-motion'
import { skills } from '../../data/projects'

export function SkillsMatrix() {
  return (
    <section id="skills" className="relative border-b border-[var(--border)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10 md:mb-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="section-num text-[var(--primary)]">§05</span>
              <span className="eyebrow text-[var(--muted)]">/ skills</span>
            </div>
            <h2 className="display-2 text-[var(--paper)] max-w-2xl">
              Skills and <span className="italic">stack.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex lg:items-end">
            <p className="body text-[var(--muted)] max-w-md">
              The tools and technologies I have shipped production work with, grouped by domain.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-wrap items-baseline gap-x-4 gap-y-1"
            >
              <span className="label text-[var(--dim)] w-36 shrink-0">{group.category}</span>
              <p className="text-sm md:text-base text-[var(--foreground)] leading-relaxed">
                {group.items.join(' · ')}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
