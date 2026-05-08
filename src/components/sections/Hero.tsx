import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail, Github, Linkedin, MapPin, ChevronDown } from 'lucide-react'
import { personalInfo } from '../../data/portfolio'

const TYPED_STRINGS = [
  'Kubernetes Orchestration',
  'GitOps-driven Delivery',
  'DevSecOps Automation',
  'Cloud-Native Infrastructure',
  'CI/CD Engineering',
]

function TypedText() {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = TYPED_STRINGS[index]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed === current) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % TYPED_STRINGS.length)
    } else {
      const speed = deleting ? 28 : 55
      timeout = setTimeout(() => {
        setDisplayed(deleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1))
      }, speed)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, index])

  return (
    <span className="font-mono-custom text-blue-400 text-base md:text-lg">
      {displayed}
      <span className="cursor-blink text-cyan-400">|</span>
    </span>
  )
}

// Animated grid dot pattern
function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Radial glow center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/[0.04] blur-3xl" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-cyan-500/[0.03] blur-3xl" />

      {/* Corner accents */}
      <div className="absolute top-0 right-0 w-px h-48 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute top-0 left-0 w-48 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-px h-48 bg-gradient-to-t from-transparent via-purple-500/20 to-transparent" />

      {/* Floating nodes - infrastructure inspired */}
      {[
        { x: '8%', y: '20%', label: 'k8s-prod-01', color: 'blue' },
        { x: '88%', y: '25%', label: 'ci-runner', color: 'cyan' },
        { x: '12%', y: '70%', label: 'argocd', color: 'purple' },
        { x: '85%', y: '72%', label: 'prometheus', color: 'blue' },
        { x: '50%', y: '88%', label: 'aws-vpc', color: 'cyan' },
      ].map((node, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:flex flex-col items-center gap-1"
          style={{ left: node.x, top: node.y }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.5 + i * 0.2, duration: 1 }}
        >
          <div
            className={`w-2 h-2 rounded-full ${
              node.color === 'blue'
                ? 'bg-blue-400'
                : node.color === 'cyan'
                ? 'bg-cyan-400'
                : 'bg-purple-400'
            }`}
          />
          <span className="font-mono-custom text-[9px] text-zinc-600 whitespace-nowrap">{node.label}</span>
        </motion.div>
      ))}
    </div>
  )
}

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <GridBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="flex flex-col items-start max-w-3xl">
          {/* Status badge */}
          <motion.div
            className="flex items-center gap-2.5 mb-10 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs font-mono-custom text-zinc-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for opportunities</span>
            <span className="text-zinc-600 mx-1">·</span>
            <MapPin size={10} className="text-zinc-500" />
            <span>{personalInfo.location}</span>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-display font-extrabold text-6xl md:text-8xl lg:text-9xl text-zinc-100 tracking-tighter leading-none">
              {personalInfo.name}
              <span className="text-blue-400">.</span>
            </h1>
          </motion.div>

          {/* Title */}
          <motion.div
            className="mt-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-xl md:text-2xl font-display font-medium text-zinc-300">
                {personalInfo.title}
              </span>
              <span className="text-zinc-700">·</span>
              <span className="text-xl md:text-2xl font-display font-light text-zinc-500">
                {personalInfo.subtitle}
              </span>
            </div>
          </motion.div>

          {/* Typed text */}
          <motion.div
            className="mb-8 h-7 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span className="text-zinc-600 font-mono-custom text-sm mr-2">~/expertise</span>
            <span className="text-zinc-600 font-mono-custom text-sm mr-3">$</span>
            <TypedText />
          </motion.div>

          {/* Bio */}
          <motion.p
            className="text-zinc-500 text-base md:text-lg leading-relaxed max-w-xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/25"
            >
              View Projects
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href={personalInfo.resumeUrl}
              download
              className="flex items-center gap-2 px-5 py-2.5 bg-white/[0.06] hover:bg-white/[0.1] text-zinc-200 text-sm font-semibold rounded-xl border border-white/[0.1] hover:border-white/[0.2] transition-all duration-200"
            >
              <Download size={15} />
              Resume
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 px-5 py-2.5 text-zinc-400 hover:text-zinc-100 text-sm font-semibold transition-colors"
            >
              <Mail size={15} />
              Contact
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex items-center gap-4 mt-10 pt-8 border-t border-white/[0.05] w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <span className="text-xs font-mono-custom text-zinc-600">find me on</span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono-custom text-zinc-500 hover:text-zinc-100 transition-colors"
            >
              <Github size={13} />
              github/dvanhu
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono-custom text-zinc-500 hover:text-zinc-100 transition-colors"
            >
              <Linkedin size={13} />
              in/dvanhu
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 hover:text-zinc-400 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-xs font-mono-custom tracking-wider">scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.a>
    </section>
  )
}
