import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { GithubIcon } from '../ui/BrandIcons'
import photo from '../../assets/profile.jpg'
import skillsRaw from '../../data/skills.txt?raw'

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
    <section id="top" className="relative overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="grid grid-cols-[70px_1fr] sm:grid-cols-[90px_1fr] lg:grid-cols-12 gap-3 lg:gap-8 items-center">
          {/* Left — display title */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.p
              className="label text-[var(--muted)] mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              hello, I'm —
            </motion.p>

            <motion.h1
              className="display-2 text-[var(--paper)]"
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
              className="body text-[var(--muted)] max-w-xl mt-4 lg:mt-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              From first scripts to multi-agent AI orchestrations — building production AI infrastructure, microservices, and platforms.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-3 mt-6 lg:mt-10"
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
                className="btn-ghost no-underline"
              >
                <GithubIcon size={16} />
                <span>github / Nicky9319</span>
              </a>
            </motion.div>
          </div>

          {/* Right — photo + status panel */}
          <motion.aside
            className="lg:col-span-5 order-1 lg:order-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {/* Photo */}
            <div className="overflow-hidden rounded-xl lg:rounded-2xl bg-[var(--surface)]">
              <img
                src={photo}
                alt="Paarth Saxena — portrait placeholder"
                className="w-full h-auto object-contain"
              />
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

      </div>
    </section>
  )
}
