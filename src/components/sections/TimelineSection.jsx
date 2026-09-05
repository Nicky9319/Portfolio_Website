import { motion } from 'framer-motion'

const milestones = [
  {
    date: 'Oct 2024',
    title: 'First automations',
    points: [
      'Built stock-trading scripts to learn data patterns.',
      'Started turning ideas into working code.'
    ]
  },
  {
    date: 'Feb 2025',
    title: 'Backend foundations',
    points: [
      'Built microservice boilerplate and server templates.',
      'Learned to structure backend systems cleanly.'
    ]
  },
  {
    date: 'Mar 2025',
    title: 'DevOps & deployment',
    points: [
      'Wrote Linux setup scripts and automation files.',
      'Deployed a render farm main server.'
    ]
  },
  {
    date: 'Apr 2025',
    title: 'Full-stack systems',
    points: [
      'Built backend and frontend for an event-sourcing project.',
      'Created a real-time AI assistant backend.'
    ]
  },
  {
    date: 'May 2025',
    title: 'Containers & desktop',
    points: [
      'Built a container GUI for managing Docker visually.',
      'Shipped a cross-platform desktop app with Expo.'
    ]
  },
  {
    date: 'Jun 2025',
    title: 'Microservices at scale',
    points: [
      'Built a ride-sharing backend with multiple services.',
      'Handled auth, rides, users, and riders separately.'
    ]
  },
  {
    date: 'Jul 2025',
    title: 'AI agents',
    points: [
      'Built a multi-agent system using LangGraph.',
      'Coordinated WhatsApp, search, and Discord agents.'
    ]
  },
  {
    date: 'Aug 2025',
    title: 'Mobile & AI/ML',
    points: [
      'Built a mobile app for AI assistant control.',
      'Created structured notes and experiments for ML.'
    ]
  },
  {
    date: 'Sep 2025',
    title: 'Auth & business tools',
    points: [
      'Built an authentication microservice with tokens.',
      'Shipped a lead management mobile app and desktop CRM.'
    ]
  },
  {
    date: 'Nov 2025',
    title: 'Business applications',
    points: [
      'Built a full CRM with multi-window desktop app.',
      'Created a peer-to-peer GPU desktop platform.'
    ]
  },
  {
    date: 'Dec 2025',
    title: 'AI frameworks',
    points: [
      'Built a multi-model LLM gateway with LiteLLM.',
      'Created reusable MCP servers for tool calling.'
    ]
  },
  {
    date: 'Jan 2026',
    title: 'Observability',
    points: [
      'Built a monitoring pipeline with Prometheus and Grafana.',
      'Added logging with Loki and Fluentd.'
    ]
  },
  {
    date: 'May 2026',
    title: 'Workflow automation',
    points: [
      'Built n8n pipelines for Reddit content automation.',
      'Used Airtable as a queue and state machine.'
    ]
  },
  {
    date: 'Jun 2026',
    title: 'Conversational AI at scale',
    points: [
      'Built a conversational AI agent serving 360K+ users.',
      'Ran LLM-as-judge evaluation on 30M+ conversations.'
    ]
  },
  {
    date: 'Aug 2026',
    title: 'Live demos',
    points: [
      'Built a real-time voice agent you can talk to.',
      'Created an interactive AI avatar and text clustering tool.'
    ]
  }
]

export function TimelineSection() {
  return (
    <section id="timeline" className="relative border-b border-[var(--border)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10 md:mb-14">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="section-num text-[var(--primary)]">§02</span>
              <span className="eyebrow text-[var(--muted)]">/ what did I do</span>
            </div>
            <h2 className="display-2 text-[var(--paper)] max-w-2xl">
              A timeline of <span className="italic">builds.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex lg:items-end">
            <p className="body-lg text-[var(--muted)] max-w-md">
              What I built and what it did, from first scripts to production AI systems.
            </p>
          </div>
        </div>

        {/* Horizontal timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            {/* Horizontal line */}
            <div className="absolute top-[15px] left-0 right-0 h-px bg-[var(--border)]" />

            {/* Scrollable cards */}
            <div className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-thin">
              {milestones.map((milestone) => (
                <div
                  key={milestone.date}
                  className="snap-start shrink-0 w-[260px] md:w-[300px]"
                >
                  {/* Dot on line */}
                  <div className="relative h-8 mb-4">
                    <div className="absolute top-[11px] left-0 w-2 h-2 rounded-full bg-[var(--foreground)] ring-4 ring-[var(--background)]" />
                  </div>

                  {/* Card */}
                  <div className="py-5 pr-4">
                    <span className="label text-[var(--dim)] block mb-3">
                      {milestone.date}
                    </span>
                    <h3 className="font-display text-lg md:text-xl text-[var(--paper)] mb-3 leading-tight">
                      {milestone.title}
                    </h3>
                    <ul className="space-y-2">
                      {milestone.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[var(--muted)] leading-relaxed">
                          <span className="w-1 h-1 rounded-full bg-[var(--foreground)] mt-1.5 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
