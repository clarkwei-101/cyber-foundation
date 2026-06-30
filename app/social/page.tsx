'use client'

import { motion } from 'framer-motion'
import SectionTitle, { SectionDivider } from '@/components/SectionTitle'
import LiquidGlassButton from '@/components/LiquidGlassButton'
import SocialLink from '@/components/SocialLink'
import { socialLinks } from '@/lib/constants'
import { useApp } from '@/lib/context'

export default function SocialPage() {
  const { t, theme } = useApp()

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
              {t.social.subtitle}
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient-silver">
              {t.social.title}
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: theme === 'light' ? '#6B6B80' : '#6B6B80', opacity: 0.7 }}>
              {t.social.description}
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Social Links Grid */}
      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.platform}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <SocialLink {...link} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Follow CTA */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold mb-6 text-gradient-silver">
              {t.cta.title}
            </h2>
            <p className="text-lg mb-8" style={{ color: theme === 'light' ? '#6B6B80' : '#8A8A8A' }}>
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
