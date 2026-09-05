import { motion } from 'framer-motion'
import { ProjectCard } from '../project/ProjectCard'

export function ProjectShowcase({ projects }) {
  const liveProjects = projects.filter(p => p.category === 'live-demos')

  return (
    <section id="projects" className="relative border-b border-[var(--border)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 md:mb-20">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="section-num text-[var(--primary)]">§03</span>
              <span className="eyebrow text-[var(--muted)]">/ projects</span>
            </div>
            <h2 className="display-2 text-[var(--paper)] max-w-2xl">
              Projects<span className="text-[var(--muted)]">.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex lg:items-end">
            <p className="body-lg text-[var(--muted)] max-w-md">
              Live demos you can try right now — voice, avatars, and natural language.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
            {liveProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                total={liveProjects.length}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
