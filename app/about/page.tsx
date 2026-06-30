'use client'

import { motion } from 'framer-motion'
import SectionTitle, { SectionDivider } from '@/components/SectionTitle'
import { MembersGrid } from '@/components/MemberCard'
import LiquidGlassButton from '@/components/LiquidGlassButton'
import { committeeMembers } from '@/lib/constants'
import { useApp } from '@/lib/context'

export default function AboutPage() {
  const { t, theme, isZh } = useApp()

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
              {t.about.subtitle}
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient-silver">
              {t.about.title}
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: theme === 'light' ? '#6B6B80' : '#6B6B80', opacity: 0.7 }}>
              {t.about.description}
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Dual Track Architecture */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle={isZh ? '双轨模式' : 'DUAL TRACK MODEL'}>
            {t.about.dualTrackTitle}
          </SectionTitle>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16"
          >
            {/* Architecture Visual - Triangle Layout */}
            <div className="relative max-w-2xl mx-auto">
              {/* Connecting Lines SVG */}
              <svg className="absolute inset-0 w-full h-full -z-0 pointer-events-none" preserveAspectRatio="none">
                {/* Line from AI to CF */}
                <motion.path
                  d="M 120 80 L 200 220"
                  stroke={theme === 'light' ? 'rgba(26,26,26,0.4)' : 'rgba(192,192,192,0.4)'}
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                {/* Line from SF to CF */}
                <motion.path
                  d="M 480 80 L 400 220"
                  stroke={theme === 'light' ? 'rgba(26,26,26,0.4)' : 'rgba(192,192,192,0.4)'}
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
                {/* Line between AI and SF */}
                <motion.path
                  d="M 120 80 L 480 80"
                  stroke={theme === 'light' ? 'rgba(26,26,26,0.2)' : 'rgba(192,192,192,0.2)'}
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                />
              </svg>

              {/* Top Row - AI and SF */}
              <div className="grid grid-cols-2 gap-8 md:gap-16 mb-8">
                {/* AI Co-Chair */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="glass-card p-6 text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center" style={{ backgroundColor: theme === 'light' ? 'rgba(26,26,26,0.1)' : 'rgba(192,192,192,0.1)' }}>
                    <span className="font-display font-bold" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>AI</span>
                  </div>
                  <h4 className="font-display font-semibold text-sm mb-1" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>{t.about.aiChair}</h4>
                  <p className="text-xs mb-2" style={{ color: theme === 'light' ? '#6B6B80' : '#8A8A8A' }}>{t.about.aiChairRole}</p>
                  <p className="text-xs" style={{ color: theme === 'light' ? '#6B6B80' : '#8A8A8A', opacity: 0.7 }}>{t.about.aiChairDesc}</p>
                </motion.div>

                {/* Sci-Fi Co-Chair */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="glass-card p-6 text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center" style={{ backgroundColor: theme === 'light' ? 'rgba(74,74,74,0.1)' : 'rgba(138,138,138,0.1)' }}>
                    <span className="font-display font-semibold" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A' }}>SF</span>
                  </div>
                  <h4 className="font-display font-semibold text-sm mb-1" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A' }}>{t.about.sciFiChair}</h4>
                  <p className="text-xs mb-2" style={{ color: theme === 'light' ? '#6B6B80' : '#8A8A8A' }}>{t.about.sciFiChairRole}</p>
                  <p className="text-xs" style={{ color: theme === 'light' ? '#6B6B80' : '#8A8A8A', opacity: 0.7 }}>{t.about.sciFiChairDesc}</p>
                </motion.div>
              </div>

              {/* Bottom Row - Cyber Foundation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="glass-card p-8 text-center max-w-xs mx-auto"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: theme === 'light' ? 'linear-gradient(135deg, rgba(26,26,26,0.2), rgba(74,74,74,0.1))' : 'linear-gradient(135deg, rgba(192,192,192,0.2), rgba(138,138,138,0.1))' }}>
                  <svg width="32" height="32" viewBox="0 0 40 40" className="text-silver-bright" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>
                    <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M20 8 L32 16 L32 28 L20 36 L8 28 L8 16 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold mb-2" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>Cyber Foundation</h3>
                <p className="text-sm" style={{ color: theme === 'light' ? '#6B6B80' : '#8A8A8A' }}>{t.about.dualTrackTitle}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* AI Section Details */}
      <section className="relative py-32 px-6" style={{ backgroundColor: theme === 'light' ? 'rgba(0,0,0,0.02)' : 'rgba(232,232,232,0.02)' }}>
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="AI APPLICATIONS" align="left">
            {t.aiSection.name}
          </SectionTitle>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {t.aiSection.pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: theme === 'light' ? 'rgba(26,26,26,0.1)' : 'rgba(192,192,192,0.1)' }}>
                  <span className="text-xl font-display font-bold" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>0{index + 1}</span>
                </div>
                <h3 className="font-display text-lg font-bold mb-1" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>{pillar.title}</h3>
                <p className="text-xs mb-3" style={{ color: theme === 'light' ? '#6B6B80' : '#8A8A8A' }}>{pillar.titleZh}</p>
                <p className="text-sm" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A', opacity: 0.7 }}>{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Sci-Fi Section Details */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="SCIENCE FICTION" align="left">
            {t.sciFiSection.name}
          </SectionTitle>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {t.sciFiSection.pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: theme === 'light' ? 'rgba(74,74,74,0.1)' : 'rgba(138,138,138,0.1)' }}>
                  <span className="text-xl font-display font-bold" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A' }}>0{index + 1}</span>
                </div>
                <h3 className="font-display text-lg font-bold mb-1" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A' }}>{pillar.title}</h3>
                <p className="text-xs mb-3" style={{ color: theme === 'light' ? '#6B6B80' : '#8A8A8A' }}>{pillar.titleZh}</p>
                <p className="text-sm" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A', opacity: 0.7 }}>{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Committee Members */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="OUR TEAM">
            {t.about.coreTeam}
          </SectionTitle>

          <div className="mt-16">
            <MembersGrid members={committeeMembers} />
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
              {t.nav.joinUs}
            </h2>
            <p className="text-lg mb-8" style={{ color: theme === 'light' ? '#6B6B80' : '#8A8A8A', opacity: 0.7 }}>
              {t.cta.description}
            </p>
            <LiquidGlassButton href="/join" pulse>
              {t.cta.joinBtn}
            </LiquidGlassButton>
          </motion.div>
        </div>
      </section>
    </>
  )
}
