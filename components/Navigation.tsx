'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useApp } from '@/lib/context'

const navLinksData = [
  { href: '/about' },
  { href: '/activities' },
  { href: '/projects' },
  { href: '/join' },
  { href: '/social' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('')
  const { theme, toggleTheme, language, setLanguage, t } = useApp()

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

  const navLinks = [
    { href: '/about', label: t.nav.about },
    { href: '/activities', label: t.nav.activities },
    { href: '/projects', label: t.nav.projects },
    { href: '/join', label: t.nav.joinUs },
    { href: '/social', label: t.nav.social },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500`}
      style={{
        backgroundColor: theme === 'light' 
          ? (isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent')
          : (isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent'),
        borderColor: theme === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)'
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={theme === 'light' ? '#1A1A1A' : '#E8E8E8'} />
                    <stop offset="100%" stopColor={theme === 'light' ? '#4A4A4A' : '#8A8A8A'} />
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
              <div 
                className="font-display font-bold text-lg tracking-tight"
                style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}
              >
                Cyber Foundation
              </div>
              <div 
                className="text-xs font-body"
                style={{ color: theme === 'light' ? '#6B6B80' : '#8A8A8A' }}
              >
                HKUSTSFAIC
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-display transition-colors duration-300 group`}
                style={{
                  color: activeLink === link.href 
                    ? (theme === 'light' ? '#1A1A1A' : '#E8E8E8')
                    : (theme === 'light' ? '#4A4A4A' : '#8A8A8A')
                }}
              >
                <span className="relative z-10">{link.label}</span>
                
                <motion.div
                  className="absolute bottom-0 left-1/2 h-[1px]"
                  style={{ backgroundColor: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}
                  initial={{ width: 0, x: '-50%' }}
                  whileHover={{ width: '80%' }}
                  transition={{ duration: 0.3 }}
                />
                
                {activeLink === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ backgroundColor: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right side controls */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 px-2 py-1 rounded-lg" style={{ backgroundColor: 'rgba(128, 128, 128, 0.1)' }}>
              <button
                onClick={() => setLanguage('en')}
                className="px-2 py-1 text-xs font-medium rounded transition-all"
                style={{
                  backgroundColor: language === 'en' ? (theme === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.2)') : undefined,
                  color: language === 'en' ? (theme === 'light' ? '#1A1A1A' : '#E8E8E8') : (theme === 'light' ? '#6B6B80' : '#8A8A8A')
                }}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('zh')}
                className="px-2 py-1 text-xs font-medium rounded transition-all"
                style={{
                  backgroundColor: language === 'zh' ? (theme === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.2)') : undefined,
                  color: language === 'zh' ? (theme === 'light' ? '#1A1A1A' : '#E8E8E8') : (theme === 'light' ? '#6B6B80' : '#8A8A8A')
                }}
              >
                中
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="relative w-10 h-10 flex items-center justify-center rounded-xl transition-all"
              style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}
              aria-label="Toggle theme"
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                transition={{ duration: 0.3 }}
                className="relative w-5 h-5"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`absolute inset-0 w-5 h-5 transition-opacity ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}
                >
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`absolute inset-0 w-5 h-5 transition-opacity ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              </motion.div>
            </button>

            {/* CTA Button */}
            <Link
              href="/join"
              className="liquid-glass liquid-glass-pulse px-6 py-2.5 text-sm font-display"
              style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}
            >
              {t.nav.joinNow}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-6 h-[1px] bg-current origin-center"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-[1px] bg-current"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-6 h-[1px] bg-current origin-center"
              />
            </div>
          </button>
        </div>

        {/* Mobile Controls Bar */}
        <div className="lg:hidden flex items-center justify-between py-3 border-t" style={{ borderColor: 'rgba(128, 128, 128, 0.1)' }}>
          <div className="flex items-center gap-1 px-3 py-1.5 rounded-lg" style={{ backgroundColor: 'rgba(128, 128, 128, 0.1)' }}>
            <button
              onClick={() => setLanguage('en')}
              className="px-2 py-1 text-xs font-medium rounded transition-all"
              style={{
                backgroundColor: language === 'en' ? 'rgba(255,255,255,0.2)' : undefined,
                color: language === 'en' ? (theme === 'light' ? '#1A1A1A' : '#E8E8E8') : (theme === 'light' ? '#6B6B80' : '#8A8A8A')
              }}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('zh')}
              className="px-2 py-1 text-xs font-medium rounded transition-all"
              style={{
                backgroundColor: language === 'zh' ? 'rgba(255,255,255,0.2)' : undefined,
                color: language === 'zh' ? (theme === 'light' ? '#1A1A1A' : '#E8E8E8') : (theme === 'light' ? '#6B6B80' : '#8A8A8A')
              }}
            >
              中
            </button>
          </div>

          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-xl transition-all"
            style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}
            aria-label="Toggle theme"
          >
            <motion.div
              initial={false}
              animate={{ rotate: theme === 'dark' ? 0 : 180 }}
              transition={{ duration: 0.3 }}
              className="relative w-5 h-5"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`absolute inset-0 w-5 h-5 transition-opacity ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}
              >
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`absolute inset-0 w-5 h-5 transition-opacity ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            </motion.div>
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
            className="lg:hidden"
            style={{ backgroundColor: theme === 'light' ? 'rgba(255, 255, 255, 0.95)' : 'rgba(0, 0, 0, 0.95)' }}
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
                    className={`block px-4 py-3 text-lg font-display rounded-xl transition-all duration-300`}
                    style={{ 
                      color: activeLink === link.href ? (theme === 'light' ? '#1A1A1A' : '#E8E8E8') : (theme === 'light' ? '#4A4A4A' : '#8A8A8A'),
                      backgroundColor: activeLink === link.href ? 'rgba(255,255,255,0.1)' : undefined
                    }}
                  >
                    {link.label}
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
                  className="block liquid-glass text-center py-3 text-sm font-display"
                  style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}
                >
                  {t.nav.joinNow}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
