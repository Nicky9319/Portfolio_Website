import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { GithubIcon } from '../ui/BrandIcons'

const techStack = [
  'Python', 'FastAPI', 'LangGraph', 'LangChain', 'Electron', 'React',
  'React Native', 'MongoDB', 'PostgreSQL', 'Redis', 'Docker', 'MQTT',
  'TypeScript', 'Tailwind', 'Socket.IO', 'LiteLLM', 'Playwright', 'ChromaDB'
]

const statusBlock = [
  { label: 'role', value: 'AI Engineer' },
  { label: 'focus', value: 'Multi-agent orchestration' },
  { label: 'based in', value: 'India · Remote' },
  { label: 'shipping since', value: 'Oct 2024' },
]

function Marquee() {
  return (
    <div className="marquee-mask border-y border-[var(--border)] py-3 overflow-hidden">
      <div className="marquee-track flex gap-8 whitespace-nowrap">
        {[...techStack, ...techStack].map((tag, i) => (
          <span key={i} className="inline-flex items-center gap-8">
            <span className="label text-[var(--muted)]">{tag}</span>
            <span className="text-[var(--primary)]">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-[var(--border)]">
      {/* Subtle grid backdrop */}
      <div className="absolute inset-0 grid-bg-fine opacity-60 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 pt-12 md:pt-20 pb-16 md:pb-24">
        {/* Section header hairline */}
        <div className="flex items-center justify-between mb-12 md:mb-20 reveal">
          <div className="flex items-center gap-3">
            <span className="section-num text-[var(--primary)]">§01</span>
            <span className="eyebrow text-[var(--muted)]">/ identity</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="label text-[var(--muted)] hidden sm:inline">build · 0.1.0</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] pulse-dot" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left — display title */}
          <div className="lg:col-span-8">
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
              Paarth<span className="text-[var(--primary)]">.</span>
              <br />
              <span className="italic font-light" style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}>
                building systems
              </span>
              <br />
              that <span className="text-[var(--primary)]">think</span>.
            </motion.h1>

            <motion.p
              className="body-lg text-[var(--muted)] max-w-xl mt-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              From single scripts to multi-agent AI orchestrations — 18 months of compounding work in AI infrastructure, microservices, and platforms.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-3 mt-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a href="#projects" className="btn-primary">
                <span>View the work</span>
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

          {/* Right — status panel */}
          <motion.aside
            className="lg:col-span-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="border border-[var(--border-2)] bg-[var(--surface)]">
              {/* Panel header */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-[var(--border)]">
                <span className="eyebrow text-[var(--muted)]">vitals</span>
                <span className="label text-[var(--dim)]">read-only</span>
              </div>

              {/* Status rows */}
              <dl className="divide-y divide-[var(--border)]">
                {statusBlock.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-[100px_1fr] gap-3 px-4 py-3 items-baseline"
                  >
                    <dt className="label text-[var(--dim)]">{row.label}</dt>
                    <dd className="font-mono text-sm text-[var(--foreground)]">{row.value}</dd>
                  </div>
                ))}
                <div className="grid grid-cols-[100px_1fr] gap-3 px-4 py-3 items-baseline">
                  <dt className="label text-[var(--dim)]">status</dt>
                  <dd className="font-mono text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] pulse-dot" />
                    <span>building · open to work</span>
                  </dd>
                </div>
              </dl>

              {/* Counts row */}
              <div className="grid grid-cols-3 border-t border-[var(--border)]">
                <div className="p-4 border-r border-[var(--border)]">
                  <p className="font-display text-3xl text-[var(--paper)] tabular">53<span className="text-[var(--primary)]">+</span></p>
                  <p className="label text-[var(--muted)] mt-1">projects</p>
                </div>
                <div className="p-4 border-r border-[var(--border)]">
                  <p className="font-display text-3xl text-[var(--paper)] tabular">18</p>
                  <p className="label text-[var(--muted)] mt-1">months</p>
                </div>
                <div className="p-4">
                  <p className="font-display text-3xl text-[var(--paper)] tabular">14<span className="text-[var(--primary)]">+</span></p>
                  <p className="label text-[var(--muted)] mt-1">stacks</p>
                </div>
              </div>
            </div>

            {/* Quote / pull-out */}
            <div className="mt-6 pl-4 border-l-2 border-[var(--primary)]">
              <p className="font-display text-lg italic text-[var(--muted)] leading-snug">
                "The hard part isn't writing the agent — it's making 12 of them reliable at 3am."
              </p>
              <p className="label text-[var(--dim)] mt-2">— field note</p>
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
            className="group flex items-center gap-2 label text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
          >
            <span>jump to work</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
