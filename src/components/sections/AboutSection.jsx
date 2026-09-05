import { motion } from 'framer-motion'
import { Mail, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'
import { projects, skills, lastUpdated } from '../../data/projects'

const projectCount = projects.length
const stackCount = skills.reduce((sum, group) => sum + group.items.length, 0)

const links = [
  { icon: GithubIcon, label: 'github', handle: 'Nicky9319', href: 'https://github.com/Nicky9319' },
  { icon: LinkedinIcon, label: 'linkedin', handle: 'paarth-saxena-632547274', href: 'https://www.linkedin.com/in/paarth-saxena-632547274/' },
  { icon: Mail, label: 'email', handle: 'paarthsaxena2005@gmail.com', href: 'mailto:paarthsaxena2005@gmail.com' },
]

export function AboutSection() {
  return (
    <section id="about" className="relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left — large display + statement */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <span className="eyebrow text-[var(--muted)]">/ about</span>
            </div>

            <motion.h2
              className="display-2 text-[var(--paper)] mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              I'm <span className="italic">Paarth</span>.
              <br />
              I build agents that <span className="text-[var(--primary)]">orchestrate</span> agents.
            </motion.h2>

            <motion.div
              className="space-y-5 body-lg text-[var(--muted)] max-w-2xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p>
                Eighteen months ago I was writing a stock-trading script. This month I'm shipping LangGraph supervisors that coordinate WhatsApp, YouTube, and custom agents in parallel — and the path between those two points is exactly what this site documents.
              </p>
              <p>
                I care about the unsexy parts: observability, retry logic, schema validation, what happens at 3am when the queue stalls. The hard part of building an AI system isn't the model call — it's making twelve of them reliable at the same time, in production, with logs you can actually read.
              </p>
              <p>
                <span className="text-[var(--foreground)]">Open to interesting work</span> — especially anything involving multi-agent systems, production AI infrastructure, or novel orchestration patterns.
              </p>
            </motion.div>

            {/* Contact links */}
            <motion.div
              className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {links.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-3 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="font-medium text-[var(--foreground)]">{link.label}</span>
                    <span className="link-underline truncate">{link.handle}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </a>
                )
              })}
            </motion.div>
          </div>

          {/* Right — vitals */}
          <motion.aside
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="border-t border-[var(--border)] pt-6">
              <div className="flex items-center justify-between mb-8">
                <span className="eyebrow text-[var(--muted)]">vitals</span>
                <span className="label text-[var(--dim)] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] pulse-dot" />
                  live
                </span>
              </div>

              <div className="grid grid-cols-2 gap-x-8 gap-y-8 mb-8">
                <div>
                  <p className="label text-[var(--muted)]">projects</p>
                  <p className="font-display text-4xl md:text-5xl text-[var(--paper)] mt-2 leading-none tabular">
                    {projectCount}+
                  </p>
                </div>
                <div>
                  <p className="label text-[var(--muted)]">months</p>
                  <p className="font-display text-4xl md:text-5xl text-[var(--paper)] mt-2 leading-none tabular">
                    18
                  </p>
                </div>
                <div>
                  <p className="label text-[var(--muted)]">stacks</p>
                  <p className="font-display text-4xl md:text-5xl text-[var(--paper)] mt-2 leading-none tabular">
                    {stackCount}+
                  </p>
                </div>
                <div>
                  <p className="label text-[var(--muted)]">updated</p>
                  <p className="font-display text-4xl md:text-5xl text-[var(--paper)] mt-2 leading-none tabular">
                    {lastUpdated}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-[var(--border)]">
                <p className="label text-[var(--primary)] mb-3">current status</p>
                <p className="font-display text-xl md:text-2xl text-[var(--paper)] leading-snug">
                  Open to interesting work in AI infrastructure, multi-agent systems, or platform engineering.
                </p>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* Closing hairline */}
        <div className="mt-20 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="font-display text-2xl text-[var(--paper)] italic">
            That's the log. <span className="text-[var(--primary)] not-italic">→</span>
          </p>
          <p className="label text-[var(--muted)]">
            thanks for reading.
          </p>
        </div>
      </div>
    </section>
  )
}
