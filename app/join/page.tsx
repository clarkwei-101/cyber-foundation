'use client'

import { motion } from 'framer-motion'
import SectionTitle, { SectionDivider } from '@/components/SectionTitle'
import LiquidGlassButton from '@/components/LiquidGlassButton'
import { contactInfo, membershipLink } from '@/lib/constants'

export default function JoinPage() {
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
              Get Involved
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-silver mb-6">
              加入我们
            </h1>
            <p className="text-silver-muted/70 text-lg max-w-2xl mx-auto">
              成为 Cyber Foundation 的一员，与我们一起探索 AI 与科幻的无限可能
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Membership Types */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="MEMBERSHIP">
            会员类型
          </SectionTitle>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Full Member */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-silver-bright/10 to-transparent rounded-bl-full" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-silver-bright/10 flex items-center justify-center mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-silver-bright">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-silver-bright mb-2">Full Member</h3>
                <p className="text-sm text-silver-muted mb-6">正式会员</p>
                <ul className="space-y-3 mb-8">
                  {[
                    'HKUSTSFAIC 正式成员',
                    '投票权与选举权',
                    '参与所有活动',
                    '担任职务资格',
                    '享受所有设施',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-silver-muted/80">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-silver-bright flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={membershipLink} className="block">
                  <LiquidGlassButton className="w-full justify-center" pulse>
                    申请加入
                  </LiquidGlassButton>
                </a>
              </div>
            </motion.div>

            {/* Associate Member */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-silver-muted/10 to-transparent rounded-bl-full" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-silver-muted/10 flex items-center justify-center mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-silver-muted">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-silver-muted mb-2">Associate Member</h3>
                <p className="text-sm text-silver-muted/70 mb-6">联系会员</p>
                <ul className="space-y-3 mb-8">
                  {[
                    '港科大学生',
                    '参与所有活动',
                    '无投票权',
                    '无担任职务资格',
                    '支持社团目标',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-silver-muted/80">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-silver-muted flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <LiquidGlassButton className="w-full justify-center">
                  申请加入
                </LiquidGlassButton>
              </div>
            </motion.div>

            {/* Honorary Member */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-silver-bright/60">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-silver-bright/60 mb-2">Honorary Member</h3>
                <p className="text-sm text-silver-muted/50 mb-6">荣誉会员</p>
                <ul className="space-y-3 mb-8">
                  {[
                    '委员会授予',
                    '对社团杰出贡献',
                    '享有正式会员权利',
                    '特别表彰',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-silver-muted/60">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-silver-bright/40 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="text-xs text-silver-muted/40 text-center">
                  由委员会邀请
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Contact */}
      <section className="relative py-32 px-6 bg-silver-bright/[0.02]">
        <div className="max-w-4xl mx-auto">
          <SectionTitle subtitle="CONTACT">
            联系方式
          </SectionTitle>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-silver-bright/10 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-silver-bright">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-silver-bright">Email</h3>
                  <p className="text-sm text-silver-muted">{contactInfo.email}</p>
                </div>
              </div>
              <p className="text-sm text-silver-muted/70">
                如有任何问题，欢迎发送邮件咨询
              </p>
            </motion.div>

            {/* Discord */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#5865F2]/10 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#5865F2]">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-silver-bright">Discord</h3>
                  <p className="text-sm text-silver-muted">{contactInfo.discord}</p>
                </div>
              </div>
              <p className="text-sm text-silver-muted/70">
                加入我们的 Discord 社区，与成员实时交流
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* What to Expect */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="WHAT TO EXPECT">
            你将获得
          </SectionTitle>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '技能培训', desc: 'Vibe Coding、Git、AI工具使用等实用技能', icon: '🎓' },
              { title: '项目经验', desc: '参与真实项目，从开发到上线的完整流程', icon: '🚀' },
              { title: '人脉网络', desc: '连接学生开发者、导师与行业人士', icon: '🤝' },
              { title: '创作平台', desc: '科幻写作、出版与展示的绝佳机会', icon: '✨' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-display font-semibold text-silver-bright mb-2">{item.title}</h3>
                <p className="text-sm text-silver-muted/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
