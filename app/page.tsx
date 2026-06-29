'use client'

import { motion } from 'framer-motion'
import VideoHero from '@/components/VideoHero'
import SectionTitle, { SectionDivider } from '@/components/SectionTitle'
import LiquidGlassButton from '@/components/LiquidGlassButton'
import { aiSection, sciFiSection } from '@/lib/constants'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <VideoHero />

      {/* Introduction Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="ABOUT US">
            关于我们
          </SectionTitle>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 text-center max-w-3xl mx-auto"
          >
            <p className="text-xl md:text-2xl text-silver-bright/90 leading-relaxed font-body">
              Cyber Foundation 是一个由学生主导的学会，以平等的双轨架构同时承载{' '}
              <span className="text-white font-semibold">AI 应用</span>
              {' '}与{' '}
              <span className="text-silver-muted font-semibold">科幻文学</span>
              {' '}两大创作社群。
            </p>
            <p className="mt-6 text-silver-muted/70 leading-relaxed">
              这一双轨结构使本社成为校园内独一无二的学会 — 连接前沿 AI 技术与想象力驱动的科幻创作。
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Dual Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* AI Section */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card p-8 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-silver-bright/10 flex items-center justify-center group-hover:bg-silver-bright/20 transition-colors">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-silver-bright">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-silver-bright">{aiSection.name}</h3>
                  <p className="text-sm text-silver-muted">{aiSection.nameZh}</p>
                </div>
              </div>

              <p className="text-silver-muted/80 mb-6">{aiSection.description}</p>

              <div className="space-y-4">
                {aiSection.pillars.map((pillar, index) => (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-silver-bright/20 transition-colors"
                  >
                    <h4 className="font-display font-semibold text-silver-bright mb-1">{pillar.title}</h4>
                    <p className="text-xs text-silver-muted/60 mb-1">{pillar.titleZh}</p>
                    <p className="text-sm text-silver-muted/70">{pillar.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <LiquidGlassButton href="/about" variant="secondary">
                  Learn More
                </LiquidGlassButton>
              </div>
            </motion.div>

            {/* Sci-Fi Section */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card p-8 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-silver-muted/10 flex items-center justify-center group-hover:bg-silver-muted/20 transition-colors">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-silver-muted">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-silver-muted">{sciFiSection.name}</h3>
                  <p className="text-sm text-silver-muted/70">{sciFiSection.nameZh}</p>
                </div>
              </div>

              <p className="text-silver-muted/80 mb-6">{sciFiSection.description}</p>

              <div className="space-y-4">
                {sciFiSection.pillars.map((pillar, index) => (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-silver-muted/20 transition-colors"
                  >
                    <h4 className="font-display font-semibold text-silver-muted mb-1">{pillar.title}</h4>
                    <p className="text-xs text-silver-muted/60 mb-1">{pillar.titleZh}</p>
                    <p className="text-sm text-silver-muted/70">{pillar.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <LiquidGlassButton href="/about" variant="secondary">
                  Learn More
                </LiquidGlassButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-silver mb-6">
              Ready to Explore?
            </h2>
            <p className="text-silver-muted/70 text-lg mb-12">
              加入我们，一起探索 AI 与科幻的无限可能
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <LiquidGlassButton href="/join" pulse>
                Join Us Now
              </LiquidGlassButton>
              <LiquidGlassButton href="/activities">
                View Activities
              </LiquidGlassButton>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
