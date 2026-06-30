'use client'

import { motion } from 'framer-motion'
import SectionTitle, { SectionDivider } from '@/components/SectionTitle'
import ProjectCard from '@/components/ProjectCard'
import LiquidGlassButton from '@/components/LiquidGlassButton'
import { projects } from '@/lib/constants'
import { useApp } from '@/lib/context'

export default function ProjectsPage() {
  const { t, theme } = useApp()
  const activeProjects = projects.filter(p => p.status === 'active')
  const planningProjects = projects.filter(p => p.status === 'planning')
  const completedProjects = projects.filter(p => p.status === 'completed')

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-xs font-mono tracking-[0.3em] uppercase mb-4" style={{ color: theme === 'light' ? '#6B6B80' : '#6B6B80' }}>
              {t.projects.subtitle}
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient-silver">
              {t.projects.title}
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: theme === 'light' ? '#6B6B80' : '#6B6B80', opacity: 0.7 }}>
              {t.projects.description}
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Active Projects */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle={t.projects.inProgress}>
            {t.projects.inProgressTitle}
          </SectionTitle>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {activeProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {completedProjects.length > 0 && (
        <>
          <SectionDivider />
          <section className="relative py-32 px-6" style={{ backgroundColor: theme === 'light' ? 'rgba(0,0,0,0.02)' : 'rgba(232,232,232,0.02)' }}>
            <div className="max-w-6xl mx-auto">
              <SectionTitle subtitle={t.projects.completed}>
                {t.projects.completedTitle}
              </SectionTitle>

              <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {completedProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ProjectCard {...project} />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {planningProjects.length > 0 && (
        <>
          <SectionDivider />
          <section className="relative py-32 px-6">
            <div className="max-w-6xl mx-auto">
              <SectionTitle subtitle={t.projects.planning}>
                {t.projects.planningTitle}
              </SectionTitle>

              <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {planningProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ProjectCard {...project} />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      <SectionDivider />

      {/* Project Philosophy */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle={t.projects.philosophy}>
            {t.projects.philosophyTitle}
          </SectionTitle>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t.about.vibeCoding,
                titleZh: t.about.vibeCodingZh,
                description: t.about.vibeCodingDesc,
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                ),
              },
              {
                title: t.about.openSource,
                titleZh: t.about.openSourceZh,
                description: t.about.openSourceDesc,
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                ),
              },
              {
                title: t.about.aigc,
                titleZh: t.about.aigcZh,
                description: t.about.aigcDesc,
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                ),
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center" style={{ backgroundColor: theme === 'light' ? 'rgba(26,26,26,0.1)' : 'rgba(192,192,192,0.1)' }}>
                  <span style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>{item.icon}</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-1" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>{item.title}</h3>
                <p className="text-xs mb-4" style={{ color: theme === 'light' ? '#6B6B80' : '#8A8A8A' }}>{item.titleZh}</p>
                <p className="text-sm" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A', opacity: 0.7 }}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Join CTA */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold mb-6 text-gradient-silver">
              {t.projects.participate}
            </h2>
            <p className="text-lg mb-8" style={{ color: theme === 'light' ? '#6B6B80' : '#8A8A8A', opacity: 0.7 }}>
              {t.projects.participateDesc}
            </p>
            <LiquidGlassButton href="/join" pulse>
              {t.projects.applyBtn}
            </LiquidGlassButton>
          </motion.div>
        </div>
      </section>
    </>
  )
}
