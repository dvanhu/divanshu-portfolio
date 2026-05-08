import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { SectionWrapper, SectionHeader } from '../ui/SectionWrapper'
import { aboutContent, education, personalInfo } from '../../data/portfolio'

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <SectionWrapper id="about">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="About"
          title="Engineering infrastructure that scales."
          subtitle="A brief introduction to how I think and what I build."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Bio */}
          <div className="lg:col-span-3 space-y-5" ref={ref}>
            {aboutContent.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                className="text-zinc-400 leading-relaxed text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.6 }}
              >
                {p}
              </motion.p>
            ))}

            {/* Education card */}
            <motion.div
              className="mt-8 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45, duration: 0.6 }}
            >
              <div className="flex items-start justify-between flex-wrap gap-3">
                <div>
                  <p className="text-xs font-mono-custom text-zinc-600 mb-1">Education</p>
                  <p className="text-zinc-200 font-medium font-display">{education.university}</p>
                  <p className="text-zinc-500 text-sm mt-0.5">{education.degree}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono-custom text-xs text-zinc-600">{education.period}</p>
                  <p className="font-mono-custom text-sm text-blue-400 mt-1 font-medium">CGPA {education.cgpa}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Highlights grid */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-3 content-start">
            {aboutContent.highlights.map((h, i) => (
              <motion.div
                key={i}
                className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-200 group"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.15 + i * 0.07, duration: 0.5 }}
              >
                <p className="text-[10px] font-mono-custom text-zinc-600 uppercase tracking-widest mb-1.5">
                  {h.label}
                </p>
                <p className="text-sm font-medium text-zinc-300 group-hover:text-zinc-100 transition-colors">
                  {h.value}
                </p>
              </motion.div>
            ))}

            {/* Contact quick link */}
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="col-span-2 mt-2 p-4 rounded-xl border border-blue-500/20 bg-blue-500/[0.04] hover:bg-blue-500/[0.08] hover:border-blue-500/40 transition-all duration-200 flex items-center justify-between group"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.55, duration: 0.5 }}
            >
              <span className="text-sm text-blue-400 font-mono-custom truncate">{personalInfo.email}</span>
              <span className="text-blue-400/60 group-hover:text-blue-400 text-lg transition-colors">→</span>
            </motion.a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
