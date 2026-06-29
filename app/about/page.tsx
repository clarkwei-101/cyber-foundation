'use client'

import { motion } from 'framer-motion'
import SectionTitle, { SectionDivider } from '@/components/SectionTitle'
import { MembersGrid } from '@/components/MemberCard'
import LiquidGlassButton from '@/components/LiquidGlassButton'
import { aiSection, sciFiSection, committeeMembers } from '@/lib/constants'

export default function AboutPage() {
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
            <span className="inline-block text-xs font-mono text-silver-muted tracking-[0.3em] uppercase mb-4">
              Organization
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-silver mb-6">
              社团架构
            </h1>
            <p className="text-silver-muted/70 text-lg max-w-2xl mx-auto">
              Cyber Foundation 采用独特的双轨架构，平等承载 AI 应用与科幻文学两大创作社群
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Dual Track Architecture */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="DUAL TRACK MODEL">
            双轨架构
          </SectionTitle>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16"
          >
            {/* Architecture Visual */}
            <div className="relative max-w-3xl mx-auto">
              {/* Center */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10 glass-card p-8 text-center mx-auto max-w-md"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-silver-bright/20 to-silver-muted/10 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 40 40" className="text-silver-bright">
                    <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M20 8 L32 16 L32 28 L20 36 L8 28 L8 16 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-silver-bright mb-2">Cyber Foundation</h3>
                <p className="text-sm text-silver-muted">联席主席制</p>
              </motion.div>

              {/* Left Track - AI */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="absolute top-1/2 left-0 -translate-y-1/2 glass-card p-6 w-64"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-silver-bright/10 flex items-center justify-center">
                    <span className="font-display font-bold text-silver-bright">AI</span>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-silver-bright text-sm">AI Co-Chair</h4>
                    <p className="text-xs text-silver-muted">AI事务联席主席</p>
                  </div>
                </div>
                <p className="text-xs text-silver-muted/70">主导 AI 应用方向的战略规划与执行</p>
              </motion.div>

              {/* Right Track - Sci-Fi */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute top-1/2 right-0 -translate-y-1/2 glass-card p-6 w-64"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-silver-muted/10 flex items-center justify-center">
                    <span className="font-display font-semibold text-silver-muted">SF</span>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-silver-muted text-sm">Sci-Fi Co-Chair</h4>
                    <p className="text-xs text-silver-muted/70">科幻事务联席主席</p>
                  </div>
                </div>
                <p className="text-xs text-silver-muted/70">主导科幻分会的创作培育与活动组织</p>
              </motion.div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full -z-10" preserveAspectRatio="none">
                <motion.path
                  d="M 128 128 L 64 128"
                  stroke="rgba(192,192,192,0.3)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                />
                <motion.path
                  d="M 192 128 L 256 128"
                  stroke="rgba(192,192,192,0.3)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* AI Section Details */}
      <section className="relative py-32 px-6 bg-silver-bright/[0.02]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="AI APPLICATIONS" align="left">
            {aiSection.name}
          </SectionTitle>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {aiSection.pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-silver-bright/10 flex items-center justify-center mb-4">
                  <span className="text-xl">0{index + 1}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-silver-bright mb-1">{pillar.title}</h3>
                <p className="text-xs text-silver-muted mb-3">{pillar.titleZh}</p>
                <p className="text-sm text-silver-muted/70">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Sci-Fi Section Details */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="SCIENCE FICTION" align="left">
            {sciFiSection.name}
          </SectionTitle>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {sciFiSection.pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-silver-muted/10 flex items-center justify-center mb-4">
                  <span className="text-xl text-silver-muted">0{index + 1}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-silver-muted mb-1">{pillar.title}</h3>
                <p className="text-xs text-silver-muted/60 mb-3">{pillar.titleZh}</p>
                <p className="text-sm text-silver-muted/70">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Committee Members */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="OUR TEAM">
            执委会成员
          </SectionTitle>

          <div className="mt-16">
            <MembersGrid members={committeeMembers} />
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
            <h2 className="font-display text-4xl font-bold text-gradient-silver mb-6">
              成为我们的一员
            </h2>
            <p className="text-silver-muted/70 text-lg mb-8">
              加入 Cyber Foundation，与我们一起创造未来
            </p>
            <LiquidGlassButton href="/join" pulse>
              立即加入
            </LiquidGlassButton>
          </motion.div>
        </div>
      </section>
    </>
  )
}
