import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Cloud, Box, GitBranch, Code2, Activity, Shield, Terminal,
} from 'lucide-react'
import { SectionWrapper, SectionHeader } from '../ui/SectionWrapper'
import { skills } from '../../data/portfolio'

const iconMap: Record<string, React.ElementType> = {
  Cloud, Box, GitBranch, Code2, Activity, Shield, Terminal,
}

const colorMap: Record<string, { border: string; glow: string; text: string; bg: string; tag: string }> = {
  blue: {
    border: 'border-blue-500/20',
    glow: 'hover:border-blue-500/40 hover:shadow-blue-500/10',
    text: 'text-blue-400',
    bg: 'bg-blue-500/10',
    tag: 'bg-blue-500/10 text-blue-400',
  },
  cyan: {
    border: 'border-cyan-500/20',
    glow: 'hover:border-cyan-500/40 hover:shadow-cyan-500/10',
    text: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    tag: 'bg-cyan-500/10 text-cyan-400',
  },
  purple: {
    border: 'border-purple-500/20',
    glow: 'hover:border-purple-500/40 hover:shadow-purple-500/10',
    text: 'text-purple-400',
    bg: 'bg-purple-500/10',
    tag: 'bg-purple-500/10 text-purple-400',
  },
}

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <SectionWrapper id="skills" className="bg-zinc-950/50">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <SectionHeader
          eyebrow="Skills"
          title="Technical stack."
          subtitle="Tools and technologies I work with daily across the DevOps lifecycle."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skills.map((skill, i) => {
            const Icon = iconMap[skill.icon]
            const c = colorMap[skill.color]

            return (
              <motion.div
                key={skill.category}
                className={`group relative p-5 rounded-2xl border ${c.border} bg-white/[0.02] hover:bg-white/[0.04] ${c.glow} hover:shadow-lg transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.06, duration: 0.5 }}
              >
                {/* Icon */}
                <div className={`w-9 h-9 rounded-xl ${c.bg} flex items-center justify-center mb-4`}>
                  {Icon && <Icon size={17} className={c.text} />}
                </div>

                {/* Category */}
                <h3 className="font-display font-semibold text-sm text-zinc-200 mb-3 leading-tight">
                  {skill.category}
                </h3>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className={`px-2 py-0.5 text-[10px] font-mono-custom rounded-md ${c.tag} font-medium`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
