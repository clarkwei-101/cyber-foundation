'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useApp } from '@/lib/context'

export default function VideoHero({ className = '' }: { className?: string }) {
  const { t, theme } = useApp()
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  return (
    <section 
      ref={containerRef}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(ellipse at 30% 20%, rgba(30, 30, 35, 1) 0%, rgba(0, 0, 0, 1) 70%)',
              'radial-gradient(ellipse at 70% 80%, rgba(35, 30, 30, 1) 0%, rgba(0, 0, 0, 1) 70%)',
              'radial-gradient(ellipse at 50% 50%, rgba(25, 25, 35, 1) 0%, rgba(0, 0, 0, 1) 70%)',
              'radial-gradient(ellipse at 30% 20%, rgba(30, 30, 35, 1) 0%, rgba(0, 0, 0, 1) 70%)',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        
        {/* Grid lines */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(${theme === 'light' ? 'rgba(0, 0, 0, 0.03)' : 'rgba(192, 192, 192, 0.03)'} 1px, transparent 1px),
                linear-gradient(90deg, ${theme === 'light' ? 'rgba(0, 0, 0, 0.03)' : 'rgba(192, 192, 192, 0.03)'} 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
            animate={{
              backgroundPosition: ['0 0', '60px 60px'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>

        {/* Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: theme === 'light' ? 'rgba(0,0,0,0.2)' : 'rgba(232,232,232,0.2)'
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 0.5, 0],
                scale: [1, 2, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <motion.div 
        style={{ opacity, scale, y }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20"
      >
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8"
        >
          <svg 
            viewBox="0 0 120 120" 
            className="w-28 h-28 mx-auto"
          >
            <defs>
              <linearGradient id="heroLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={theme === 'light' ? '#1A1A1A' : '#E8E8E8'} />
                <stop offset="50%" stopColor={theme === 'light' ? '#4A4A4A' : '#C0C0C0'} />
                <stop offset="100%" stopColor={theme === 'light' ? '#6B6B80' : '#8A8A8A'} />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            <motion.circle
              cx="60"
              cy="60"
              r="55"
              fill="none"
              stroke="url(#heroLogoGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: 'easeOut' }}
              filter="url(#glow)"
            />
            
            <motion.path
              d="M60 15 L95 35 L95 75 L60 95 L25 75 L25 35 Z"
              fill="none"
              stroke="url(#heroLogoGradient)"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
            />
            
            <motion.path
              d="M60 40 L60 80 M45 60 L75 60"
              stroke="url(#heroLogoGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
            />
            
            <motion.text
              x="60"
              y="58"
              textAnchor="middle"
              fill="url(#heroLogoGradient)"
              fontSize="12"
              fontFamily="var(--font-space-grotesk)"
              fontWeight="bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              CYBER
            </motion.text>
            <motion.text
              x="60"
              y="70"
              textAnchor="middle"
              fill="url(#heroLogoGradient)"
              fontSize="8"
              fontFamily="var(--font-space-grotesk)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.7 }}
            >
              FOUNDATION
            </motion.text>
          </svg>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
            <span className="text-gradient-silver text-glow">
              {t.hero.title}
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-8"
        >
          <p className="text-lg md:text-xl font-body tracking-wide" style={{ color: theme === 'light' ? '#6B6B80' : '#8A8A8A' }}>
            {t.hero.subtitle}
          </p>
          <p className="text-sm font-mono mt-2" style={{ color: theme === 'light' ? '#6B6B80' : '#8A8A8A', opacity: 0.6 }}>
            {t.hero.tagline}
          </p>
        </motion.div>

        {/* Short name badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="inline-block mb-12"
        >
          <span className="liquid-glass px-4 py-1.5 text-xs font-mono rounded-full" style={{ color: theme === 'light' ? '#6B6B80' : '#8A8A8A' }}>
            HKUSTSFAIC
          </span>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <Link href="/about">
            <motion.button
              className="liquid-glass liquid-glass-pulse px-10 py-4 text-base font-display group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}
            >
              <span className="relative z-10 flex items-center gap-3">
                <span>{t.hero.exploreBtn}</span>
                <motion.svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </motion.svg>
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono tracking-widest" style={{ color: theme === 'light' ? '#6B6B80' : '#8A8A8A', opacity: 0.5 }}>{t.hero.scroll}</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-silver-muted/50 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-20 h-20 border-l border-t" style={{ borderColor: theme === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(232,232,232,0.1)' }} />
      <div className="absolute top-8 right-8 w-20 h-20 border-r border-t" style={{ borderColor: theme === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(232,232,232,0.1)' }} />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-l border-b" style={{ borderColor: theme === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(232,232,232,0.1)' }} />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r border-b" style={{ borderColor: theme === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(232,232,232,0.1)' }} />
    </section>
  )
}
