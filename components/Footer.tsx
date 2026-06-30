'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useApp } from '@/lib/context'

export default function Footer() {
  const { t, theme } = useApp()

  return (
    <footer className="relative border-t" style={{ 
      borderColor: theme === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)',
      backgroundColor: theme === 'light' ? 'rgba(245, 245, 245, 0.5)' : 'rgba(0, 0, 0, 0.5)'
    }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <svg viewBox="0 0 40 40" className="w-10 h-10">
                <defs>
                  <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={theme === 'light' ? '#1A1A1A' : '#E8E8E8'} />
                    <stop offset="100%" stopColor={theme === 'light' ? '#4A4A4A' : '#8A8A8A'} />
                  </linearGradient>
                </defs>
                <circle cx="20" cy="20" r="18" fill="none" stroke="url(#footerLogoGradient)" strokeWidth="1.5"/>
                <path d="M20 8 L32 16 L32 28 L20 36 L8 28 L8 16 Z" fill="none" stroke="url(#footerLogoGradient)" strokeWidth="1.5"/>
                <text x="20" y="24" textAnchor="middle" fill="url(#footerLogoGradient)" fontSize="10" fontFamily="var(--font-space-grotesk)" fontWeight="bold">CF</text>
              </svg>
              <div>
                <div className="font-display font-bold text-lg" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>Cyber Foundation</div>
                <div className="text-xs" style={{ color: theme === 'light' ? '#6B6B80' : '#8A8A8A' }}>HKUSTSFAIC</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A', opacity: 0.7 }}>
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A', opacity: 0.7 }}>
              <li><Link href="/about" className="hover:opacity-100 transition-opacity">{t.nav.about}</Link></li>
              <li><Link href="/activities" className="hover:opacity-100 transition-opacity">{t.nav.activities}</Link></li>
              <li><Link href="/projects" className="hover:opacity-100 transition-opacity">{t.nav.projects}</Link></li>
              <li><Link href="/join" className="hover:opacity-100 transition-opacity">{t.nav.joinUs}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>
              {t.join.contact}
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A', opacity: 0.7 }}>
              <li>Email: contact@hkustsfaic.org</li>
              <li>Discord: CyberFoundationHK</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] mb-6" style={{ 
          background: `linear-gradient(90deg, transparent 0%, ${theme === 'light' ? 'rgba(26,26,26,0.2)' : 'rgba(138,138,138,0.2)'} 50%, transparent 100%)`
        }} />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs" style={{ color: theme === 'light' ? '#6B6B80' : '#8A8A8A', opacity: 0.5 }}>
          <p>{t.footer.copyright}</p>
          <p className="font-mono">HKUSTSFAIC</p>
        </div>
      </div>
    </footer>
  )
}
