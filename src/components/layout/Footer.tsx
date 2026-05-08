import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { personalInfo } from '../../data/portfolio'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.05] bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-display font-bold text-zinc-100">
              {personalInfo.name}<span className="text-blue-400">.</span>
            </span>
            <span className="text-xs text-zinc-600 flex items-center gap-1.5">
              <MapPin size={10} />
              {personalInfo.location}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-white/[0.08] flex items-center justify-center text-zinc-500 hover:text-zinc-100 hover:border-white/[0.16] transition-all"
            >
              <Github size={15} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-white/[0.08] flex items-center justify-center text-zinc-500 hover:text-zinc-100 hover:border-white/[0.16] transition-all"
            >
              <Linkedin size={15} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-9 h-9 rounded-lg border border-white/[0.08] flex items-center justify-center text-zinc-500 hover:text-zinc-100 hover:border-white/[0.16] transition-all"
            >
              <Mail size={15} />
            </a>
          </div>

          <p className="text-xs text-zinc-600 font-mono-custom">
            © {year} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
