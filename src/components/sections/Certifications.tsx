import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award } from 'lucide-react'
import { SectionWrapper, SectionHeader } from '../ui/SectionWrapper'
import { certifications } from '../../data/portfolio'

const colorConfig: Record<string, { border: string; badge: string; icon: string }> = {
  blue: {
    border: 'border-blue-500/15 hover:border-blue-500/30',
    badge: 'bg-blue-500/10 text-blue-400',
    icon: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  },
  cyan: {
    border: 'border-cyan-500/15 hover:border-cyan-500/30',
    badge: 'bg-cyan-500/10 text-cyan-400',
    icon: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  },
  purple: {
    border: 'border-purple-500/15 hover:border-purple-500/30',
    badge: 'bg-purple-500/10 text-purple-400',
    icon: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  },
}

export function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <SectionWrapper id="certifications">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Certifications"
          title="Verified credentials."
          subtitle="Industry certifications from Google Cloud, AWS, and more."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" ref={ref}>
          {certifications.map((cert, i) => {
            const c = colorConfig[cert.color]
            return (
              <motion.div
                key={i}
                className={`group p-6 rounded-2xl border ${c.border} bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 font-display font-bold text-sm ${c.icon}`}>
                    {cert.icon === 'G' ? (
                      <Award size={18} />
                    ) : (
                      <span className="text-[9px] font-mono-custom font-bold">{cert.icon}</span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-semibold text-zinc-200 text-sm leading-tight mb-1 group-hover:text-zinc-100 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-zinc-500 text-xs leading-relaxed mb-3">{cert.subtitle}</p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`px-2 py-0.5 text-[10px] font-mono-custom rounded-md ${c.badge}`}>
                        {cert.issuer}
                      </span>
                      <span className="text-[10px] font-mono-custom text-zinc-700">{cert.year}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
