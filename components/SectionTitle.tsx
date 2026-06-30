'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { useApp } from '@/lib/context'

interface SectionTitleProps {
  children: ReactNode
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4'
}

export default function SectionTitle({
  children,
  subtitle,
  align = 'center',
  className = '',
  as: Tag = 'h2'
}: SectionTitleProps) {
  const { theme } = useApp()
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  return (
    <div className={`${alignClasses[align]} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {subtitle && (
          <span className="inline-block text-xs font-mono tracking-[0.3em] uppercase mb-4" style={{ color: theme === 'light' ? '#6B6B80' : '#6B6B80' }}>
            {subtitle}
          </span>
        )}
        
        <Tag className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gradient-silver">
          {children}
        </Tag>
        
        {subtitle === undefined && (
          <div className="mt-6 mx-auto w-24 h-[1px] bg-gradient-to-r from-transparent via-silver-bright/50 to-transparent" />
        )}
      </motion.div>
    </div>
  )
}

interface SectionDividerProps {
  className?: string
}

export function SectionDivider({ className = '' }: SectionDividerProps) {
  const { theme } = useApp()
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`w-full h-[1px] ${className}`}
      style={{ 
        background: `linear-gradient(90deg, transparent 0%, ${theme === 'light' ? 'rgba(26,26,26,0.2)' : 'rgba(138,138,138,0.2)'} 50%, transparent 100%)`
      }}
    />
  )
}
