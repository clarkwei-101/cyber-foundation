'use client'

import { motion } from 'framer-motion'
import SectionTitle, { SectionDivider } from '@/components/SectionTitle'
import ProjectCard from '@/components/ProjectCard'
import LiquidGlassButton from '@/components/LiquidGlassButton'
import { projects } from '@/lib/constants'

export default function ProjectsPage() {
  const activeProjects = projects.filter(p => p.status === 'active')
  const planningProjects = projects.filter(p => p.status === 'planning')
  const completedProjects = projects.filter(p => p.status === 'completed')

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
              Our Work
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-silver mb-6">
              项目展示
            </h1>
            <p className="text-silver-muted/70 text-lg max-w-2xl mx-auto">
              从 AI Agent 到科幻期刊，这些项目代表了我们对技术与创意的追求
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Active Projects */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="IN PROGRESS">
            进行中
          </SectionTitle>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {activeProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Planning Projects */}
      <section className="relative py-32 px-6 bg-silver-bright/[0.02]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="COMING SOON">
            规划中
          </SectionTitle>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {planningProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Project Philosophy */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="OUR PHILOSOPHY">
            项目理念
          </SectionTitle>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Vibe Coding',
                titleZh: 'AI辅助开发',
                description: '使用 Cursor, Copilot, Claude 等 AI 编程工具，快速构建可投产的网页与移动应用',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                ),
              },
              {
                title: 'Open Source',
                titleZh: '开源商业化',
                description: '发掘高星开源项目，评估市场潜力，转化为可行的商业产品或 SaaS 服务',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                ),
              },
              {
                title: 'AIGC',
                titleZh: 'AI内容创作',
                description: '在 YouTube、Bilibili、小红书等平台发布 AI 教程、AIGC 短剧与产品 Vlog',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
                    <circle cx="12" cy="13" r="3"/>
                  </svg>
                ),
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-silver-bright/10 flex items-center justify-center text-silver-bright">
                  {item.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-silver-bright mb-1">{item.title}</h3>
                <p className="text-xs text-silver-muted mb-4">{item.titleZh}</p>
                <p className="text-sm text-silver-muted/70">{item.description}</p>
              </motion.div>
            ))}
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
              参与项目开发
            </h2>
            <p className="text-silver-muted/70 text-lg mb-8">
              加入我们，一起构建下一个令人兴奋的项目
            </p>
            <LiquidGlassButton href="/join" pulse>
              申请加入
            </LiquidGlassButton>
          </motion.div>
        </div>
      </section>
    </>
  )
}
