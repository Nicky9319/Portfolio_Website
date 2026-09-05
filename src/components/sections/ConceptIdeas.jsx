import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const concepts = [
  {
    id: 'patchwork',
    title: 'Patchwork',
    description: 'CI/CD for launch content — automatically generates videos and content pieces from new code pushes and feature releases.',
    status: 'live page',
    href: 'https://patchwork-concept-landing-page.vercel.app/'
  },
  {
    id: 'elosphere',
    title: 'EloSphere',
    description: 'Esports platform to organize tournaments, build teams, and connect players — a LinkedIn for esports players.',
    status: 'demo video',
    href: 'https://www.youtube.com/watch?v=WSQTAFr-yV4'
  },
  {
    id: 'agentbed',
    title: 'AgentBed',
    description: 'A client-first agent runtime. Download and run AI agents locally via WSL and a desktop app, keeping your context private instead of sending it to third-party services.',
    status: 'demo video',
    href: 'https://www.youtube.com/watch?v=SQrVaRM3XhY'
  }
]

export function ConceptIdeas() {
  const isExternal = (href) => href.startsWith('http')

  return (
    <section id="concepts" className="relative border-b border-[var(--border)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 md:mb-20">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="eyebrow text-[var(--muted)]">/ concepts</span>
            </div>
            <h2 className="display-2 text-[var(--paper)] max-w-2xl">
              Sketches, <span className="italic">prototypes,</span> and what-ifs.
            </h2>
          </div>
          <div className="lg:col-span-5 flex lg:items-end">
            <p className="body-lg text-[var(--muted)] max-w-md">
              Not every idea becomes a shipped product. This section shows early landing pages, demo videos, and experiments worth revisiting.
            </p>
          </div>
        </div>

        {/* Concepts list */}
        <div className="space-y-0">
          {concepts.map((concept, index) => (
            <motion.a
              key={concept.id}
              href={concept.href}
              target={isExternal(concept.href) ? '_blank' : undefined}
              rel={isExternal(concept.href) ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group flex flex-col md:flex-row md:items-start justify-between gap-6 py-8 border-t border-[var(--border)] first:border-t-0"
            >
              <div className="md:w-2/3">
                <div className="flex items-center gap-3 mb-3">
                  <span className="label text-[var(--dim)]">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="font-display text-xl md:text-2xl text-[var(--paper)] leading-tight">
                    {concept.title}
                  </h3>
                </div>
                <p className="body text-[var(--muted)] leading-relaxed">
                  {concept.description}
                </p>
              </div>

              <div className="flex items-center gap-4 md:flex-col md:items-end md:text-right">
                <span className="pill">{concept.status}</span>
                <span className="label text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors inline-flex items-center gap-2">
                  <span>{isExternal(concept.href) ? 'open link' : 'view concept'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
