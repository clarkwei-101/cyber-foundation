'use client'

import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { societyInfo } from '@/lib/constants'

interface VideoHeroProps {
  className?: string
}

export default function VideoHero({ className = '' }: VideoHeroProps) {
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
      {/* Video Background (using gradient + animation as fallback) */}
      <div className="absolute inset-0">
        {/* Animated gradient background as video substitute */}
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
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(192, 192, 192, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(192, 192, 192, 0.03) 1px, transparent 1px)
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

        {/* Floating particles effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-silver-bright/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
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
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
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
                <stop offset="0%" stopColor="#E8E8E8" />
                <stop offset="50%" stopColor="#C0C0C0" />
                <stop offset="100%" stopColor="#8A8A8A" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Outer ring */}
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
            
            {/* Inner hexagon */}
            <motion.path
              d="M60 15 L95 35 L95 75 L60 95 L25 75 L25 35 Z"
              fill="none"
              stroke="url(#heroLogoGradient)"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
            />
            
            {/* Center cross */}
            <motion.path
              d="M60 40 L60 80 M45 60 L75 60"
              stroke="url(#heroLogoGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
            />
            
            {/* Text */}
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
              {societyInfo.name.en}
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
          <p className="text-silver-muted text-lg md:text-xl font-body tracking-wide">
            {societyInfo.name.zh}
          </p>
          <p className="text-silver-muted/60 text-sm font-mono mt-2">
            {societyInfo.tagline}
          </p>
        </motion.div>

        {/* Short name badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="inline-block mb-12"
        >
          <span className="liquid-glass px-4 py-1.5 text-xs font-mono text-silver-muted rounded-full">
            {societyInfo.name.short}
          </span>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <motion.button
            className="liquid-glass liquid-glass-pulse px-10 py-4 text-base font-display text-silver-bright group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center gap-3">
              <span>Explore the Future</span>
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
          <span className="text-xs text-silver-muted/50 font-mono tracking-widest">SCROLL</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-silver-muted/50 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-20 h-20 border-l border-t border-silver-muted/10" />
      <div className="absolute top-8 right-8 w-20 h-20 border-r border-t border-silver-muted/10" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-l border-b border-silver-muted/10" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r border-b border-silver-muted/10" />
    </section>
  )
}
