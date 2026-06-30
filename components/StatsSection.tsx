'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useApp } from '@/lib/context'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
}

function AnimatedCounter({ value, suffix = '', prefix = '', duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * value))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, value, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  )
}

interface StatItemProps {
  value: number
  label: string
  labelZh: string
  suffix?: string
  icon: React.ReactNode
  delay?: number
}

function StatItem({ value, label, labelZh, suffix = '', icon, delay = 0 }: StatItemProps) {
  const { t, theme } = useApp()
  const isZh = t.stats.subtitle === '数据一览'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
      className="text-center group"
    >
      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-colors" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
        {icon}
      </div>
      <div className="text-4xl md:text-5xl font-display font-bold mb-2 text-gradient-silver">
        <AnimatedCounter value={value} suffix={suffix} />
      </div>
      <div className="text-sm font-medium mb-1" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A' }}>
        {isZh ? labelZh : label}
      </div>
      <div className="text-xs" style={{ color: theme === 'light' ? '#6B6B80' : '#6B6B80', opacity: 0.7 }}>
        {isZh ? label : labelZh}
      </div>
    </motion.div>
  )
}

export default function StatsSection() {
  const { t, theme } = useApp()

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <StatItem
              value={50}
              label={t.stats.members}
              labelZh={t.stats.members}
              suffix="+"
              delay={0}
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              }
            />
            <StatItem
              value={12}
              label={t.stats.projects}
              labelZh={t.stats.projects}
              delay={0.1}
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              }
            />
            <StatItem
              value={24}
              label={t.stats.activities}
              labelZh={t.stats.activities}
              delay={0.2}
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              }
            />
            <StatItem
              value={2026}
              label={t.stats.founded}
              labelZh={t.stats.founded}
              suffix=""
              delay={0.3}
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              }
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
