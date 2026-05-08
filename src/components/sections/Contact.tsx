import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, ArrowRight } from 'lucide-react'
import { SectionWrapper } from '../ui/SectionWrapper'
import { personalInfo } from '../../data/portfolio'

const contacts = [
  {
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
    color: 'blue',
  },
  {
    label: 'GitHub',
    value: 'github.com/dvanhu',
    href: personalInfo.github,
    icon: Github,
    color: 'cyan',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/dvanhu',
    href: personalInfo.linkedin,
    icon: Linkedin,
    color: 'purple',
  },
  {
    label: 'Location',
    value: personalInfo.location,
    href: null,
    icon: MapPin,
    color: 'blue',
  },
]

const colorMap: Record<string, { border: string; icon: string; text: string }> = {
  blue: { border: 'border-blue-500/15 hover:border-blue-500/30', icon: 'bg-blue-500/10 text-blue-400', text: 'text-blue-400' },
  cyan: { border: 'border-cyan-500/15 hover:border-cyan-500/30', icon: 'bg-cyan-500/10 text-cyan-400', text: 'text-cyan-400' },
  purple: { border: 'border-purple-500/15 hover:border-purple-500/30', icon: 'bg-purple-500/10 text-purple-400', text: 'text-purple-400' },
}

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <SectionWrapper id="contact" className="bg-zinc-950/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-blue-500/60" />
          <span className="text-xs font-mono-custom font-medium text-blue-400 tracking-widest uppercase">
            Contact
          </span>
        </div>

        {/* Heading */}
        <div className="mb-16 max-w-2xl">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-zinc-100 tracking-tight leading-tight mb-4">
            Let's work together.
          </h2>
          <p className="text-zinc-500 text-base leading-relaxed">
            Open to DevOps / Cloud Engineer roles, internships, and collaborative infrastructure projects. I respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" ref={ref}>
          {contacts.map((c, i) => {
            const col = colorMap[c.color]
            const Icon = c.icon
            const inner = (
              <>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${col.icon}`}>
                  <Icon size={17} />
                </div>
                <p className="text-[10px] font-mono-custom text-zinc-600 uppercase tracking-widest mb-1.5">
                  {c.label}
                </p>
                <p className="text-sm font-medium text-zinc-300 group-hover:text-zinc-100 transition-colors break-all leading-snug">
                  {c.value}
                </p>
                {c.href && (
                  <div className={`flex items-center gap-1 mt-3 text-xs ${col.text} opacity-0 group-hover:opacity-100 transition-opacity`}>
                    <span>Open</span>
                    <ArrowRight size={11} />
                  </div>
                )}
              </>
            )

            const className = `group p-5 rounded-2xl border ${col.border} bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300`

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                {c.href ? (
                  <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className={className}>
                    {inner}
                  </a>
                ) : (
                  <div className={className}>{inner}</div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Primary CTA */}
        <motion.div
          className="mt-12 pt-10 border-t border-white/[0.05] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div>
            <p className="text-zinc-300 font-display font-semibold text-lg">Ready to connect?</p>
            <p className="text-zinc-600 text-sm mt-0.5">Drop a message and I'll get back to you.</p>
          </div>
          <a
            href={`mailto:${personalInfo.email}`}
            className="group flex items-center gap-2.5 px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/20 shrink-0"
          >
            <Mail size={15} />
            Send Email
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
