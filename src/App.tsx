import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Experience } from './components/sections/Experience'
import { Projects } from './components/sections/Projects'
import { Certifications } from './components/sections/Certifications'
import { Contact } from './components/sections/Contact'

function PageLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-zinc-950 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="relative w-10 h-10">
          <div className="absolute inset-0 rounded-full border-2 border-blue-500/20" />
          <div className="absolute inset-0 rounded-full border-t-2 border-blue-500 animate-spin" />
        </div>
        <div className="flex items-center gap-1.5 font-mono-custom text-xs text-zinc-600">
          <span className="animate-pulse">initializing</span>
          <span className="cursor-blink text-blue-400">_</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

function SectionDivider() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="section-divider" />
    </div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>{loading && <PageLoader />}</AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <SectionDivider />
            <About />
            <SectionDivider />
            <Skills />
            <SectionDivider />
            <Experience />
            <SectionDivider />
            <Projects />
            <SectionDivider />
            <Certifications />
            <SectionDivider />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}
