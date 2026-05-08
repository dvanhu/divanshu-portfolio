import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react'
import { SectionWrapper, SectionHeader } from '../ui/SectionWrapper'
import { experience } from '../../data/portfolio'

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <SectionWrapper id="experience">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Experience"
          title="Work history."
          subtitle="Where I've been building and shipping production-grade DevOps systems."
        />

        <div className="relative" ref={ref}>
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-cyan-500/20 to-transparent hidden md:block" />

          {experience.map((exp, i) => (
            <motion.div
              key={i}
              className="relative md:pl-20"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-blue-500 border-2 border-zinc-950 hidden md:flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>

              {/* Card */}
              <div className="p-6 md:p-8 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.03] transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                        <Briefcase size={13} className="text-blue-400" />
                      </div>
                      <h3 className="font-display font-bold text-xl text-zinc-100">{exp.company}</h3>
                    </div>
                    <p className="text-zinc-400 font-medium ml-9">{exp.role}</p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                    <div className="flex items-center gap-1.5 text-xs font-mono-custom text-zinc-500">
                      <Calendar size={11} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono-custom text-zinc-600">
                      <MapPin size={11} />
                      {exp.location}
                    </div>
                    <span className="px-2 py-0.5 text-[10px] font-mono-custom rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-3 mb-6">
                  {exp.highlights.map((h, j) => (
                    <motion.div
                      key={j}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.2 + j * 0.08, duration: 0.5 }}
                    >
                      <CheckCircle2 size={14} className="text-blue-400/60 mt-0.5 shrink-0" />
                      <p className="text-zinc-400 text-sm leading-relaxed">{h}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Stack */}
                <div className="pt-5 border-t border-white/[0.05]">
                  <p className="text-[10px] font-mono-custom text-zinc-600 uppercase tracking-widest mb-2.5">Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono-custom rounded-lg bg-zinc-900 text-zinc-400 border border-white/[0.06] hover:border-white/[0.12] hover:text-zinc-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
