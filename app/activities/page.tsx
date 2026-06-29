'use client'

import { motion } from 'framer-motion'
import SectionTitle, { SectionDivider } from '@/components/SectionTitle'
import ActivityCard, { TimelineActivity } from '@/components/ActivityCard'
import LiquidGlassButton from '@/components/LiquidGlassButton'
import { activities } from '@/lib/constants'

export default function ActivitiesPage() {
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
              Events & Activities
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-silver mb-6">
              活动中心
            </h1>
            <p className="text-silver-muted/70 text-lg max-w-2xl mx-auto">
              从 Vibe Coding 工作坊到科幻读书会，探索 AI 与科幻的无限可能
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Upcoming Events */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="COMING SOON">
            即将举办
          </SectionTitle>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.upcoming.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ActivityCard {...activity} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Past Events */}
      <section className="relative py-32 px-6 bg-silver-bright/[0.02]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="MEMORIES">
            往期活动
          </SectionTitle>

          <div className="mt-16 space-y-8">
            {activities.past.map((activity, index) => (
              <TimelineActivity key={activity.id} {...activity} isPast />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Activity Categories */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="CATEGORIES">
            活动类型
          </SectionTitle>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AI Activities */}
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
                  <h3 className="font-display text-xl font-bold text-silver-bright">AI 活动</h3>
                  <p className="text-sm text-silver-muted">人工智能应用</p>
                </div>
              </div>

              <ul className="space-y-3">
                {[
                  'Vibe Coding 工作坊',
                  'AIGC 内容创作培训',
                  'AI Demo Day 成果展示',
                  '行业嘉宾分享会',
                  'AI Hackathon 黑客松',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-silver-muted/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-silver-bright/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Sci-Fi Activities */}
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
                  <h3 className="font-display text-xl font-bold text-silver-muted">Sci-Fi 活动</h3>
                  <p className="text-sm text-silver-muted/70">科幻文学创作</p>
                </div>
              </div>

              <ul className="space-y-3">
                {[
                  '科幻写作工作坊',
                  '科幻读书会',
                  '知名作家讲座',
                  '科幻 AIGC 电影节',
                  '全港科幻征文比赛',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-silver-muted/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-silver-muted/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
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
              参与我们的活动
            </h2>
            <p className="text-silver-muted/70 text-lg mb-8">
              关注我们的社交媒体，获取最新活动通知
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <LiquidGlassButton href="/join" pulse>
                报名参与
              </LiquidGlassButton>
              <LiquidGlassButton href="/social">
                关注我们
              </LiquidGlassButton>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
