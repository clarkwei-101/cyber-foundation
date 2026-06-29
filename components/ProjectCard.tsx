'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface ProjectCardProps {
  name: string
  nameZh: string
  description: string
  status: 'active' | 'completed' | 'planning'
  tech: string[]
  github?: string
  category: 'tech' | 'creative'
}

export default function ProjectCard({ name, nameZh, description, status, tech, github, category }: ProjectCardProps) {
  const statusConfig = {
    active: { label: 'Active', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
    completed: { label: 'Completed', color: 'bg-silver-bright/20 text-silver-bright border-silver-bright/30' },
    planning: { label: 'Planning', color: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="glass-card overflow-hidden group"
    >
      {/* Header */}
      <div className={`p-6 border-b border-white/5 ${category === 'tech' ? 'bg-silver-bright/5' : 'bg-silver-muted/5'}`}>
        <div className="flex items-start justify-between mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${statusConfig[status].color}`}>
            {statusConfig[status].label}
          </span>
          <span className={`px-2 py-1 rounded text-[10px] font-mono ${
            category === 'tech' ? 'text-silver-bright/60' : 'text-silver-muted/60'
          }`}>
            {category === 'tech' ? 'AI' : 'Sci-Fi'}
          </span>
        </div>
        <h3 className="font-display text-2xl font-bold text-silver-bright mb-1">{name}</h3>
        <p className="text-sm text-silver-muted">{nameZh}</p>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-sm text-silver-muted/80 leading-relaxed mb-6">{description}</p>
        
        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t) => (
            <span key={t} className="px-2 py-1 text-xs font-mono bg-white/5 text-silver-muted/80 rounded border border-white/5">
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {github && (
            <Link href={github} className="liquid-glass px-4 py-2 text-sm font-display text-silver-bright flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  )
}
