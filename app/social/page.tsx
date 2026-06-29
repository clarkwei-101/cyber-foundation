'use client'

import { motion } from 'framer-motion'
import SectionTitle, { SectionDivider } from '@/components/SectionTitle'
import { SocialGrid } from '@/components/SocialLink'
import { socialLinks } from '@/lib/constants'

export default function SocialPage() {
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
              Follow Us
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-silver mb-6">
              官方账号
            </h1>
            <p className="text-silver-muted/70 text-lg max-w-2xl mx-auto">
              在各大平台关注我们，获取最新资讯、活动通知与精彩内容
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Social Grid */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <SocialGrid />
        </div>
      </section>

      <SectionDivider />

      {/* Platform Descriptions */}
      <section className="relative py-32 px-6 bg-silver-bright/[0.02]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="OUR PRESENCE">
            平台内容
          </SectionTitle>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                platform: 'Bilibili',
                content: 'AI 教程视频、AIGC 短剧、技术分享',
                color: '#00A1D6',
                icon: 'bilibili',
              },
              {
                platform: 'Instagram',
                content: '活动回顾、社员风采、设计美图',
                color: '#E4405F',
                icon: 'instagram',
              },
              {
                platform: '小红书',
                content: 'AI 工具测评、科幻书单、社团日常',
                color: '#FF2442',
                icon: 'xiaohongshu',
              },
              {
                platform: '抖音',
                content: '短视频内容、热点捕捉、创意展示',
                color: '#161616',
                icon: 'douyin',
              },
              {
                platform: 'YouTube',
                content: '长视频教程、深度解析、纪录片',
                color: '#FF0000',
                icon: 'youtube',
              },
              {
                platform: 'GitHub',
                content: '开源项目、代码分享、技术文档',
                color: '#FFFFFF',
                icon: 'github',
              },
              {
                platform: 'LinkedIn',
                content: '职业发展、行业连接、社团动态',
                color: '#0A66C2',
                icon: 'linkedin',
              },
            ].map((item, index) => (
              <motion.div
                key={item.platform}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-card p-6 group cursor-pointer"
                style={{ '--platform-color': item.color } as React.CSSProperties}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <SocialIcon name={item.icon} color={item.color} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-silver-bright">{item.platform}</h3>
                  </div>
                </div>
                <p className="text-sm text-silver-muted/70">{item.content}</p>
                <div 
                  className="mt-4 h-[1px] bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-30 transition-opacity"
                  style={{ color: item.color }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Content Strategy */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="CONTENT STRATEGY">
            内容策略
          </SectionTitle>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* AI Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-silver-bright/10 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-silver-bright">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-silver-bright">AI 内容</h3>
                  <p className="text-sm text-silver-muted">人工智能应用</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { freq: '每周', content: 'AI 工具教程与测评' },
                  { freq: '每月', content: 'AIGC 短剧与创意内容' },
                  { freq: '不定期', content: '项目进度更新与 Demo 展示' },
                  { freq: '活动后', content: '工作坊回顾与技术总结' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="px-2 py-1 text-xs font-mono bg-silver-bright/10 text-silver-bright rounded">
                      {item.freq}
                    </span>
                    <span className="text-sm text-silver-muted/80">{item.content}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Sci-Fi Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-silver-muted/10 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-silver-muted">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-silver-muted">Sci-Fi 内容</h3>
                  <p className="text-sm text-silver-muted/70">科幻文学创作</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { freq: '每月', content: '科幻期刊更新与作品推荐' },
                  { freq: '活动前', content: '读书会与工作坊预告' },
                  { freq: '不定期', content: '作家专访与创作灵感' },
                  { freq: '年度', content: '征文比赛全程报道' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="px-2 py-1 text-xs font-mono bg-silver-muted/10 text-silver-muted rounded">
                      {item.freq}
                    </span>
                    <span className="text-sm text-silver-muted/80">{item.content}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Subscribe CTA */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold text-gradient-silver mb-6">
              关注我们
            </h2>
            <p className="text-silver-muted/70 text-lg mb-8">
              在你喜欢的平台上关注我们，不要错过任何精彩内容
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {socialLinks.slice(0, 4).map((link) => (
                <motion.a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="liquid-glass px-6 py-3 text-sm font-display text-silver-bright"
                >
                  {link.platform}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

function SocialIcon({ name, color }: { name: string; color: string }) {
  const icons: Record<string, JSX.Element> = {
    bilibili: <svg width="24" height="24" viewBox="0 0 24 24" fill={color}><path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333l-.32 1.6H3.2V4.653h.747l.32 1.6h3.12v7.04l-1.6-.213v3.413h4.48l.534 2.133h1.6V11.92l2.133.32v4.266l-1.6-.213-.213 1.067h4.48l.32-1.6h.747l-.32-1.6zM7.2 9.307v3.413h3.2V9.307h1.6l1.707-2.133h1.386l-1.813 2.133h1.813v5.12H7.2v1.067h10.666v-1.067h-1.6v-4.053h1.6v-1.067H11.2l-1.707 2.133H7.2v-5.12h1.6l1.707-2.133h.96l-1.8 2.133H7.2zM8.533 5.173l-.32 1.6h3.947l-.32-1.6H8.533zm3.413 0l-.32 1.6h3.947l-.32-1.6h-3.307z"/></svg>,
    instagram: <svg width="24" height="24" viewBox="0 0 24 24" fill={color}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
    youtube: <svg width="24" height="24" viewBox="0 0 24 24" fill={color}><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
    github: <svg width="24" height="24" viewBox="0 0 24 24" fill={color}><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>,
  }
  return icons[name] || <span style={{ color }}>{name[0]}</span>
}
