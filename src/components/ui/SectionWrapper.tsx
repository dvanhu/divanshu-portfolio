import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface SectionWrapperProps {
  id: string
  className?: string
  children: React.ReactNode
}

export function SectionWrapper({ id, className = '', children }: SectionWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.section
      id={id}
      ref={ref}
      className={`py-24 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px w-8 bg-blue-500/60" />
        <span className="text-xs font-mono-custom font-medium text-blue-400 tracking-widest uppercase">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display font-bold text-3xl md:text-4xl text-zinc-100 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-zinc-500 text-base max-w-xl leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}
