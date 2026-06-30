'use client'

import { motion } from 'framer-motion'
import SectionTitle, { SectionDivider } from '@/components/SectionTitle'
import ActivityCard, { TimelineActivity } from '@/components/ActivityCard'
import LiquidGlassButton from '@/components/LiquidGlassButton'
import { activities } from '@/lib/constants'
import { useApp } from '@/lib/context'

export default function ActivitiesPage() {
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
              {t.activities.subtitle}
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient-silver">
              {t.activities.title}
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: theme === 'light' ? '#6B6B80' : '#6B6B80', opacity: 0.7 }}>
              {t.activities.description}
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Upcoming Events */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle={t.activities.upcoming}>
            {t.activities.upcomingTitle}
          </SectionTitle>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.upcoming.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ActivityCard {...activity} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Past Events */}
      <section className="relative py-32 px-6" style={{ backgroundColor: theme === 'light' ? 'rgba(0,0,0,0.02)' : 'rgba(232,232,232,0.02)' }}>
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle={t.activities.past}>
            {t.activities.pastTitle}
          </SectionTitle>

          <div className="mt-16 space-y-8">
            {activities.past.map((activity, index) => (
              <TimelineActivity key={activity.id} {...activity} isPast />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Activity Categories */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle={t.activities.subtitle === '活动中心' ? '活动分类' : 'CATEGORIES'}>
            {t.activities.activityTypes}
          </SectionTitle>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AI Activities */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: theme === 'light' ? 'rgba(26,26,26,0.1)' : 'rgba(192,192,192,0.1)' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>
                    {t.activities.aiActivities}
                  </h3>
                  <p className="text-sm" style={{ color: theme === 'light' ? '#6B6B80' : '#8A8A8A' }}>
                    {t.activities.aiActivitiesDesc}
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {t.activities.activityList.ai.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A', opacity: 0.8 }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme === 'light' ? '#1A1A1A' : '#E8E8E8', opacity: 0.5 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Sci-Fi Activities */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: theme === 'light' ? 'rgba(74,74,74,0.1)' : 'rgba(138,138,138,0.1)' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A' }}>
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A' }}>
                    {t.activities.scifiActivities}
                  </h3>
                  <p className="text-sm" style={{ color: theme === 'light' ? '#6B6B80' : '#8A8A8A', opacity: 0.7 }}>
                    {t.activities.scifiActivitiesDesc}
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {t.activities.activityList.scifi.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A', opacity: 0.8 }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme === 'light' ? '#4A4A4A' : '#8A8A8A', opacity: 0.5 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
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
              {t.activities.joinTitle}
            </h2>
            <p className="text-lg mb-8" style={{ color: theme === 'light' ? '#6B6B80' : '#8A8A8A', opacity: 0.7 }}>
              {t.activities.joinDesc}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <LiquidGlassButton href="/join" pulse>
                {t.cta.joinBtn}
              </LiquidGlassButton>
              <LiquidGlassButton href="/social">
                {t.nav.social}
              </LiquidGlassButton>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
