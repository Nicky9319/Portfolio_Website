import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { GithubIcon } from '../ui/BrandIcons'
import photo from '../../assets/photo.jpg'
import skillsRaw from '../../data/skills.txt?raw'

const statusBlock = [
  { label: 'role', value: 'AI Engineer' },
  { label: 'focus', value: 'Multi-agent systems' },
  { label: 'based in', value: 'India · Remote' },
  { label: 'shipping since', value: 'Oct 2024' },
]

function Marquee() {
  const tags = skillsRaw.trim().split('\n').map(s => s.trim()).filter(Boolean)

  return (
    <div className="marquee-mask border-y border-[var(--border)] py-3 overflow-hidden">
      <div className="marquee-track flex gap-8 whitespace-nowrap">
        {[...tags, ...tags].map((tag, i) => (
          <span key={i} className="inline-flex items-center gap-8">
            <span className="label text-[var(--muted)]">{tag}</span>
            <span className="text-[var(--border-2)]">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-[var(--border)]">
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 pt-12 md:pt-20 pb-16 md:pb-24">
        {/* Section header hairline */}
        <div className="flex items-center justify-between mb-12 md:mb-16 reveal">
          <div className="flex items-center gap-3">
            <span className="section-num text-[var(--primary)]">§01</span>
            <span className="eyebrow text-[var(--muted)]">/ identity</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="label text-[var(--muted)] hidden sm:inline">portfolio · v0.2</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] pulse-dot" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left — display title */}
          <div className="lg:col-span-7">
            <motion.p
              className="label text-[var(--muted)] mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              hello, I'm —
            </motion.p>

            <motion.h1
              className="display-1 text-[var(--paper)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Paarth<span className="text-[var(--muted)]">.</span>
              <br />
              <span className="italic font-light" style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}>
                building systems
              </span>
              <br />
              that <span className="text-[var(--muted)]">think</span>.
            </motion.h1>

            <motion.p
              className="body-lg text-[var(--muted)] max-w-xl mt-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              From first scripts to multi-agent AI orchestrations — building production AI infrastructure, microservices, and platforms.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-3 mt-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a href="#projects" className="btn-primary">
                <span>View projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/Nicky9319"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <GithubIcon size={16} />
                <span>github / Nicky9319</span>
              </a>
            </motion.div>
          </div>

          {/* Right — photo + status panel */}
          <motion.aside
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {/* Photo */}
            <div className="mb-8 overflow-hidden rounded-2xl bg-[var(--surface)]">
              <img
                src={photo}
                alt="Paarth Saxena — portrait placeholder"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>

            <div className="border border-[var(--border)] rounded-2xl bg-[var(--surface)] overflow-hidden">
              {/* Panel header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--border)]">
                <span className="eyebrow text-[var(--muted)]">vitals</span>
                <span className="label text-[var(--dim)]">read-only</span>
              </div>

              {/* Status rows */}
              <dl className="divide-y divide-[var(--border)]">
                {statusBlock.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-[100px_1fr] gap-3 px-5 py-3 items-baseline"
                  >
                    <dt className="label text-[var(--dim)]">{row.label}</dt>
                    <dd className="font-mono text-sm text-[var(--foreground)]">{row.value}</dd>
                  </div>
                ))}
                <div className="grid grid-cols-[100px_1fr] gap-3 px-5 py-3 items-baseline">
                  <dt className="label text-[var(--dim)]">status</dt>
                  <dd className="font-mono text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] pulse-dot" />
                    <span>building · open to work</span>
                  </dd>
                </div>
              </dl>
            </div>
          </motion.aside>
        </div>

        {/* Marquee */}
        <motion.div
          className="mt-16 md:mt-24 -mx-6 md:-mx-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Marquee />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="flex items-center justify-between mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <span className="label text-[var(--muted)]">scroll to begin ↓</span>
          <a
            href="#projects"
            className="group flex items-center gap-2 label text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            <span>jump to projects</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
