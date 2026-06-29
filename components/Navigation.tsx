'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks, societyInfo } from '@/lib/constants'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setActiveLink(window.location.pathname)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              {/* Cyber Foundation Logo SVG */}
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E8E8E8" />
                    <stop offset="100%" stopColor="#8A8A8A" />
                  </linearGradient>
                </defs>
                <circle 
                  cx="20" 
                  cy="20" 
                  r="18" 
                  fill="none" 
                  stroke="url(#logoGradient)" 
                  strokeWidth="1.5"
                  className="group-hover:stroke-[2] transition-all duration-300"
                />
                <path
                  d="M20 8 L32 16 L32 28 L20 36 L8 28 L8 16 Z"
                  fill="none"
                  stroke="url(#logoGradient)"
                  strokeWidth="1.5"
                  className="group-hover:opacity-100 opacity-60 transition-opacity duration-300"
                />
                <text
                  x="20"
                  y="24"
                  textAnchor="middle"
                  fill="url(#logoGradient)"
                  fontSize="10"
                  fontFamily="var(--font-space-grotesk)"
                  fontWeight="bold"
                >
                  CF
                </text>
              </svg>
            </div>
            <div className="hidden sm:block">
              <div className="text-silver-bright font-display font-bold text-lg tracking-tight">
                {societyInfo.name.en}
              </div>
              <div className="text-silver-muted text-xs font-body">
                {societyInfo.name.short}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-display transition-colors duration-300 group ${
                  activeLink === link.href
                    ? 'text-silver-bright'
                    : 'text-silver-muted hover:text-silver-bright'
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                <span className="hidden chinese text-xs text-silver-muted/70">{link.labelZh}</span>
                
                {/* Hover underline */}
                <motion.div
                  className="absolute bottom-0 left-1/2 h-[1px] bg-gradient-to-r from-transparent via-silver-bright to-transparent"
                  initial={{ width: 0, x: '-50%' }}
                  whileHover={{ width: '80%' }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Active indicator */}
                {activeLink === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-silver-bright"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/join"
              className="liquid-glass liquid-glass-pulse px-6 py-2.5 text-sm font-display text-silver-bright"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-6 h-[1px] bg-silver-bright origin-center"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-[1px] bg-silver-bright"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-6 h-[1px] bg-silver-bright origin-center"
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 text-lg font-display rounded-xl transition-all duration-300 ${
                      activeLink === link.href
                        ? 'bg-silver-bright/10 text-silver-bright'
                        : 'text-silver-muted hover:bg-silver-bright/5 hover:text-silver-bright'
                    }`}
                  >
                    {link.label}
                    <span className="block text-xs text-silver-muted/60 mt-0.5">{link.labelZh}</span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-4"
              >
                <Link
                  href="/join"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block liquid-glass text-center py-3 text-sm font-display text-silver-bright"
                >
                  Join Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
