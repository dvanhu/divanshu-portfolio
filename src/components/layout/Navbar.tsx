import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Terminal } from 'lucide-react'
import { navLinks, personalInfo } from '../../data/portfolio'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import { useActiveSection } from '../../hooks/useActiveSection'

const sectionIds = navLinks.map((l) => l.href.replace('#', ''))

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrolled, progress } = useScrollProgress()
  const active = useActiveSection(sectionIds)

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-zinc-950/90 backdrop-blur-xl border-b border-white/[0.05]'
            : 'bg-transparent'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 transition-all duration-100" style={{ width: `${progress}%` }} />

        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center group-hover:border-blue-500/60 transition-colors">
              <Terminal size={14} className="text-blue-400" />
            </div>
            <span className="font-display font-bold text-sm text-zinc-100 tracking-wide">
              {personalInfo.name}
              <span className="text-blue-400">.</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = active === id
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-sm font-medium transition-colors rounded-md ${
                    isActive ? 'text-zinc-100' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/[0.06] rounded-md border border-white/[0.08]"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              )
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 hover:text-zinc-100 transition-colors px-3 py-1.5"
            >
              GitHub
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-4 py-1.5 text-sm font-medium bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/20 hover:border-blue-500/40 rounded-lg transition-all duration-200"
            >
              Contact
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-zinc-400 hover:text-zinc-100 transition-colors p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-zinc-950/95 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
            <motion.nav
              className="absolute top-16 left-4 right-4 bg-zinc-900/90 border border-white/[0.08] rounded-2xl p-4 flex flex-col gap-1"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-zinc-300 hover:text-zinc-100 hover:bg-white/[0.04] rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 pt-3 border-t border-white/[0.06] flex flex-col gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 text-sm font-medium text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.04] rounded-xl transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  GitHub ↗
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="px-4 py-2.5 text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-xl text-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact Me
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
