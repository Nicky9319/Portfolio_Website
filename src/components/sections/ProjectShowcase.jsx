import { motion } from 'framer-motion'
import { Brain, Layers, Smartphone, Server } from 'lucide-react'
import { ProjectCard } from '../project/ProjectCard'
import { categories } from '../../data/projects'

const iconMap = {
  brain: Brain,
  layers: Layers,
  smartphone: Smartphone,
  server: Server
}

export function ProjectShowcase({ projects }) {
  const projectsByCategory = categories.map(category => ({
    ...category,
    projects: projects.filter(p => p.category === category.id)
  })).filter(category => category.projects.length > 0)

  const totalProjects = projects.length

  return (
    <section id="projects" className="relative border-b border-[var(--border)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 md:mb-20">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="section-num text-[var(--primary)]">§02</span>
              <span className="eyebrow text-[var(--muted)]">/ selected work</span>
            </div>
            <h2 className="display-2 text-[var(--paper)] max-w-2xl">
              The <span className="italic">build log</span> — {totalProjects} projects, organised by surface.
            </h2>
          </div>
          <div className="lg:col-span-5 flex lg:items-end">
            <p className="body-lg text-[var(--muted)] max-w-md">
              Each card is a spec sheet. Click <span className="text-[var(--primary)] font-mono text-sm">open spec</span> to see the architecture, stack and capabilities.
            </p>
          </div>
        </div>

        <div className="space-y-20 md:space-y-24">
          {projectsByCategory.map((category, categoryIndex) => {
            const Icon = iconMap[category.icon] || Layers
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
              >
                {/* Category header */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8 pb-6 border-b border-[var(--border)]">
                  <div className="md:col-span-1">
                    <span className="font-mono text-sm text-[var(--dim)] tabular">
                      {String(categoryIndex + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="md:col-span-7 flex items-start gap-4">
                    <div className="p-2.5 border border-[var(--border-2)] bg-[var(--surface)] shrink-0">
                      <Icon className="w-5 h-5 text-[var(--primary)]" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl text-[var(--paper)] leading-tight">
                        {category.name}
                      </h3>
                      <p className="body text-[var(--muted)] mt-1.5 max-w-md">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <div className="md:col-span-4 md:text-right flex md:justify-end items-end">
                    <div className="text-right">
                      <p className="font-display text-3xl text-[var(--paper)] tabular">
                        {category.projects.length}
                        <span className="text-[var(--muted)] text-xl">/{totalProjects}</span>
                      </p>
                      <p className="label text-[var(--muted)] mt-1">in this group</p>
                    </div>
                  </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
                  {category.projects.map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={index}
                      total={category.projects.length}
                    />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
