import { motion } from 'framer-motion'
import { ProjectCard } from '../project/ProjectCard'

export function ProjectShowcase({ projects }) {
  const liveProjects = projects.filter(p => p.category === 'live-demos')
  const liveTotal = String(liveProjects.length).padStart(3, '0')

  return (
    <section id="projects" className="relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <h2 className="display-2 text-[var(--paper)]">
            Check It Out<span className="text-[var(--muted)]">.</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
            {liveProjects.map((project, index) => {
              const originalIndex = projects.findIndex(p => p.id === project.id)
              const serialNum = String(originalIndex + 1).padStart(3, '0')
              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  serialNum={serialNum}
                  total={liveTotal}
                  serialTop={project.id !== 'avatar'}
                />
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
