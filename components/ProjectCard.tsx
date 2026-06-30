'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useApp } from '@/lib/context'

interface ProjectCardProps {
  name: string
  nameZh: string
  description: string
  status: 'active' | 'completed' | 'planning'
  tech: string[]
  github?: string
  category: 'tech' | 'creative'
  id?: number
}

export default function ProjectCard({ name, nameZh, description, status, tech, github, category, id }: ProjectCardProps) {
  const { t, theme } = useApp()
  const isZh = t.nav.about === '社团架构'
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const statusConfig = {
    active: { label: 'Active', labelZh: '进行中', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
    completed: { label: 'Completed', labelZh: '已完成', color: 'bg-silver-bright/20 text-silver-bright border-silver-bright/30' },
    planning: { label: 'Planning', labelZh: '规划中', color: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -6, transition: { duration: 0.3 } }}
        className="glass-card overflow-hidden group cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Header */}
        <div className={`p-6 border-b`} style={{ 
          backgroundColor: category === 'tech' ? 'rgba(232,232,232,0.05)' : 'rgba(138,138,138,0.05)',
          borderColor: 'var(--border-color)'
        }}>
          <div className="flex items-start justify-between mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${statusConfig[status].color}`}>
              {isZh ? statusConfig[status].labelZh : statusConfig[status].label}
            </span>
            <span className={`px-2 py-1 rounded text-[10px] font-mono`} style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A', opacity: 0.6 }}>
              {category === 'tech' ? (isZh ? 'AI' : 'AI') : (isZh ? '科幻' : 'Sci-Fi')}
            </span>
          </div>
          <h3 className="font-display text-2xl font-bold mb-1" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>{isZh ? nameZh : name}</h3>
          <p className="text-sm" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A' }}>{isZh ? name : nameZh}</p>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-sm leading-relaxed mb-6" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A', opacity: 0.8 }}>{description}</p>
          
          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((t) => (
              <span key={t} className="px-2 py-1 text-xs font-mono rounded border" style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                color: theme === 'light' ? '#4A4A4A' : '#8A8A8A',
                borderColor: 'var(--border-color)'
              }}>
                {t}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button 
              className="liquid-glass px-4 py-2 text-sm font-display flex items-center gap-2"
              style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}
            >
              {t.projects.viewDetails}
            </button>
            {github && (
              <Link 
                href={github} 
                className="liquid-glass px-4 py-2 text-sm font-display flex items-center gap-2"
                style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}
                onClick={(e) => e.stopPropagation()}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </Link>
            )}
          </div>
        </div>
      </motion.div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative w-full max-w-2xl max-h-[80vh] overflow-auto glass-card p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-xl transition-colors hover:bg-white/10"
                style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>

              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${statusConfig[status].color}`}>
                    {isZh ? statusConfig[status].labelZh : statusConfig[status].label}
                  </span>
                  <span className={`px-2 py-1 rounded text-[10px] font-mono`} style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A' }}>
                    {category === 'tech' ? (isZh ? 'AI 应用' : 'AI Application') : (isZh ? '科幻创作' : 'Sci-Fi Creation')}
                  </span>
                </div>
                <h2 className="font-display text-3xl font-bold mb-2" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>{isZh ? nameZh : name}</h2>
                <p className="text-lg" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A' }}>{isZh ? name : nameZh}</p>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="font-display font-semibold mb-3" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>{t.projects.projectDesc}</h3>
                <p className="leading-relaxed" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A' }}>{description}</p>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="font-display font-semibold mb-3" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>{t.projects.techStack}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.map((t) => (
                    <span key={t} className="px-3 py-1.5 text-sm font-mono rounded-lg border" style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                      color: theme === 'light' ? '#4A4A4A' : '#8A8A8A',
                      borderColor: 'var(--border-color)'
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Progress indicator for active projects */}
              {status === 'active' && (
                <div className="mb-8">
                  <h3 className="font-display font-semibold mb-3" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>{t.projects.progress}</h3>
                  <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '65%' }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full rounded-full"
                      style={{ background: 'linear-gradient(90deg, #10B981, #059669)' }}
                    />
                  </div>
                  <p className="text-xs mt-2" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A', opacity: 0.7 }}>
                    {isZh ? '65% 完成' : '65% Complete'}
                  </p>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-4">
                {github && (
                  <a 
                    href={github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="liquid-glass px-6 py-3 text-sm font-display flex items-center gap-2"
                    style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    {t.projects.viewSource}
                  </a>
                )}
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="liquid-glass px-6 py-3 text-sm font-display"
                  style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A' }}
                >
                  {t.projects.close}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
