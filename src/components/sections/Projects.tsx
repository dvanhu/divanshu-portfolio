import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, ExternalLink, GitBranch, Layers, Shield, Activity } from 'lucide-react'
import { SectionWrapper, SectionHeader } from '../ui/SectionWrapper'
import { projects } from '../../data/portfolio'

const archIconMap: Record<string, React.ElementType> = {
  Microservices: Layers,
  Autoscaling: Activity,
  DevSecOps: Shield,
  Observability: Activity,
  GitOps: GitBranch,
  'MERN Stack': Layers,
  'Quality Gates': Shield,
  'Drift Reconciliation': GitBranch,
  'Dual-Repo': GitBranch,
  'Multi-Environment': Layers,
  Kustomize: Layers,
  'Auto-Propagation': Activity,
}

const colorConfig: Record<string, { accent: string; border: string; badge: string; glow: string; num: string }> = {
  blue: {
    accent: 'text-blue-400',
    border: 'border-blue-500/15',
    badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    glow: 'hover:border-blue-500/30 hover:shadow-blue-500/5',
    num: 'text-blue-400/30',
  },
  cyan: {
    accent: 'text-cyan-400',
    border: 'border-cyan-500/15',
    badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    glow: 'hover:border-cyan-500/30 hover:shadow-cyan-500/5',
    num: 'text-cyan-400/30',
  },
  purple: {
    accent: 'text-purple-400',
    border: 'border-purple-500/15',
    badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    glow: 'hover:border-purple-500/30 hover:shadow-purple-500/5',
    num: 'text-purple-400/30',
  },
}

// Minimal architecture diagram visual per project
function ArchDiagram({ color, index }: { color: string; index: number }) {
  const c = colorConfig[color]
  const configs = [
    // Insta: microservices flow
    { nodes: ['Jenkins', 'Trivy', 'K8s', 'Prometheus'], flow: [0, 1, 2, 3] },
    // Wanderlust: GitOps flow  
    { nodes: ['Jenkins', 'ArgoCD', 'K8s', 'Grafana'], flow: [0, 1, 2, 3] },
    // GitOps platform
    { nodes: ['GH Actions', 'Kustomize', 'ArgoCD', 'prod/stage/dev'], flow: [0, 1, 2, 3] },
  ]
  const cfg = configs[index] || configs[0]

  return (
    <div className="flex items-center gap-1.5 p-4 rounded-xl bg-zinc-950/60 border border-white/[0.04]">
      {cfg.nodes.map((node, i) => (
        <div key={i} className="flex items-center gap-1.5">
          <div className={`px-2 py-1 rounded-md text-[9px] font-mono-custom border border-white/[0.08] ${c.accent} bg-white/[0.02] whitespace-nowrap`}>
            {node}
          </div>
          {i < cfg.nodes.length - 1 && (
            <div className={`text-[10px] ${c.accent} opacity-40`}>→</div>
          )}
        </div>
      ))}
    </div>
  )
}

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <SectionWrapper id="projects" className="bg-zinc-950/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Projects"
          title="Production-grade builds."
          subtitle="End-to-end systems built with infrastructure-first thinking, DevSecOps practices, and GitOps-driven delivery."
        />

        <div className="space-y-6" ref={ref}>
          {projects.map((project, i) => {
            const c = colorConfig[project.color]
            return (
              <motion.article
                key={project.name}
                className={`group relative p-6 md:p-8 rounded-2xl border ${c.border} bg-white/[0.02] hover:bg-white/[0.03] ${c.glow} hover:shadow-xl transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.6 }}
              >
                {/* Project number */}
                <span className={`absolute top-6 right-6 font-mono-custom font-bold text-5xl md:text-6xl ${c.num} select-none leading-none`}>
                  0{i + 1}
                </span>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                  {/* Content */}
                  <div className="lg:col-span-3 flex flex-col">
                    {/* Title */}
                    <div className="mb-4">
                      <h3 className="font-display font-bold text-2xl text-zinc-100 mb-1">
                        {project.name}
                      </h3>
                      <p className={`text-sm font-mono-custom ${c.accent}`}>{project.subtitle}</p>
                    </div>

                    <p className="text-zinc-400 text-sm leading-relaxed mb-5 flex-1">
                      {project.longDescription}
                    </p>

                    {/* Architecture diagram */}
                    <div className="mb-5">
                      <p className="text-[10px] font-mono-custom text-zinc-600 uppercase tracking-widest mb-2">
                        Pipeline Flow
                      </p>
                      <ArchDiagram color={project.color} index={i} />
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 mt-auto">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border ${c.badge} border-opacity-30 hover:bg-opacity-20 transition-all duration-200`}
                      >
                        <Github size={13} />
                        View on GitHub
                        <ExternalLink size={11} className="opacity-60" />
                      </a>
                    </div>
                  </div>

                  {/* Right: highlights + stack */}
                  <div className="lg:col-span-2 flex flex-col gap-5">
                    {/* Highlights */}
                    <div>
                      <p className="text-[10px] font-mono-custom text-zinc-600 uppercase tracking-widest mb-3">
                        Key Highlights
                      </p>
                      <div className="space-y-2.5">
                        {project.highlights.map((h, j) => (
                          <div key={j} className="flex items-start gap-2.5">
                            <div className={`w-1 h-1 rounded-full mt-1.5 shrink-0 ${c.accent.replace('text-', 'bg-')}`} />
                            <p className="text-zinc-400 text-xs leading-relaxed">{h}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Architecture tags */}
                    <div>
                      <p className="text-[10px] font-mono-custom text-zinc-600 uppercase tracking-widest mb-2.5">
                        Architecture
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.architecture.map((arch) => {
                          const Icon = archIconMap[arch]
                          return (
                            <span
                              key={arch}
                              className={`flex items-center gap-1 px-2.5 py-1 text-[10px] font-mono-custom rounded-lg border ${c.badge}`}
                            >
                              {Icon && <Icon size={9} />}
                              {arch}
                            </span>
                          )
                        })}
                      </div>
                    </div>

                    {/* Tech stack */}
                    <div>
                      <p className="text-[10px] font-mono-custom text-zinc-600 uppercase tracking-widest mb-2.5">
                        Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-[10px] font-mono-custom rounded-md bg-zinc-900 text-zinc-500 border border-white/[0.05] hover:text-zinc-300 hover:border-white/[0.1] transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
