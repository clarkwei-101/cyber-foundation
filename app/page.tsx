'use client'

import { motion } from 'framer-motion'
import VideoHero from '@/components/VideoHero'
import SectionTitle, { SectionDivider } from '@/components/SectionTitle'
import LiquidGlassButton from '@/components/LiquidGlassButton'
import StatsSection from '@/components/StatsSection'
import CreativeSection from '@/components/CreativeSection'
import { useApp } from '@/lib/context'

export default function HomePage() {
  const { t, theme } = useApp()

  return (
    <>
      {/* Hero Section */}
      <VideoHero />

      {/* Stats Section */}
      <StatsSection />

      {/* Introduction Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle={t.intro.subtitle}>
            {t.intro.title}
          </SectionTitle>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 text-center max-w-3xl mx-auto"
          >
            <p className="text-xl md:text-2xl leading-relaxed font-body" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8', opacity: 0.9 }}>
              {t.intro.description}
              {' '}
              <span className="font-semibold" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>{t.intro.aiText}</span>
              {' '}&{' '}
              <span className="font-semibold" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A' }}>{t.intro.sciFiText}</span>
              {'.'}
            </p>
            <p className="mt-6 leading-relaxed" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A' }}>
              {t.intro.detail}
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Dual Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* AI Section */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card p-8 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-colors" style={{ backgroundColor: 'rgba(232, 232, 232, 0.1)' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>{t.aiSection.name}</h3>
                  <p className="text-sm" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A' }}>{t.aiSection.nameZh}</p>
                </div>
              </div>

              <p className="mb-6" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A', opacity: 0.8 }}>{t.aiSection.description}</p>

              <div className="space-y-4">
                {t.aiSection.pillars.map((pillar, index) => (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-xl border transition-colors"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                      borderColor: 'var(--border-color)' 
                    }}
                    whileHover={{ borderColor: 'rgba(232, 232, 232, 0.2)' }}
                  >
                    <h4 className="font-display font-semibold mb-1" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>{pillar.title}</h4>
                    <p className="text-xs mb-1" style={{ color: theme === 'light' ? '#6B6B80' : '#6B6B80', opacity: 0.6 }}>{pillar.titleZh}</p>
                    <p className="text-sm" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A', opacity: 0.7 }}>{pillar.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <LiquidGlassButton href="/about" variant="secondary">
                  {t.aiSection.learnMore}
                </LiquidGlassButton>
              </div>
            </motion.div>

            {/* Sci-Fi Section */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card p-8 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-colors" style={{ backgroundColor: 'rgba(138, 138, 138, 0.1)' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A' }}>
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A' }}>{t.sciFiSection.name}</h3>
                  <p className="text-sm" style={{ color: theme === 'light' ? '#6B6B80' : '#6B6B80', opacity: 0.7 }}>{t.sciFiSection.nameZh}</p>
                </div>
              </div>

              <p className="mb-6" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A', opacity: 0.8 }}>{t.sciFiSection.description}</p>

              <div className="space-y-4">
                {t.sciFiSection.pillars.map((pillar, index) => (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-xl border transition-colors"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                      borderColor: 'var(--border-color)' 
                    }}
                    whileHover={{ borderColor: 'rgba(138, 138, 138, 0.2)' }}
                  >
                    <h4 className="font-display font-semibold mb-1" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A' }}>{pillar.title}</h4>
                    <p className="text-xs mb-1" style={{ color: theme === 'light' ? '#6B6B80' : '#6B6B80', opacity: 0.6 }}>{pillar.titleZh}</p>
                    <p className="text-sm" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A', opacity: 0.7 }}>{pillar.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <LiquidGlassButton href="/about" variant="secondary">
                  {t.sciFiSection.learnMore}
                </LiquidGlassButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CreativeSection />

      <SectionDivider />

      {/* CTA Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gradient-silver">
              {t.cta.title}
            </h2>
            <p className="text-lg mb-12" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A' }}>
              {t.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <LiquidGlassButton href="/join" pulse>
                {t.cta.joinBtn}
              </LiquidGlassButton>
              <LiquidGlassButton href="/activities">
                {t.cta.activitiesBtn}
              </LiquidGlassButton>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
