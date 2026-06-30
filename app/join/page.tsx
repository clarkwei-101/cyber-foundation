'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import SectionTitle, { SectionDivider } from '@/components/SectionTitle'
import LiquidGlassButton from '@/components/LiquidGlassButton'
import { contactInfo } from '@/lib/constants'
import { useApp } from '@/lib/context'

interface FormData {
  name: string
  email: string
  studentId: string
  major: string
  interest: 'ai' | 'scifi' | 'both'
  experience: string
  motivation: string
}

export default function JoinPage() {
  const { t, theme, isZh } = useApp()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    studentId: '',
    major: '',
    interest: 'both',
    experience: '',
    motivation: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})

  const validateForm = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {}
    const requiredError = isZh ? '此项为必填' : 'This field is required'
    
    if (!formData.name.trim()) newErrors.name = requiredError
    if (!formData.email.trim()) {
      newErrors.email = requiredError
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = isZh ? '请输入有效的邮箱地址' : 'Please enter a valid email address'
    }
    if (!formData.studentId.trim()) newErrors.studentId = requiredError
    if (!formData.major.trim()) newErrors.major = requiredError
    if (!formData.motivation.trim()) newErrors.motivation = requiredError
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const inputStyle = (hasError: boolean) => ({
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: hasError ? '#EF4444' : 'var(--border-color)',
    color: theme === 'light' ? '#1A1A1A' : '#E8E8E8'
  })

  if (submitted) {
    return (
      <section className="relative pt-32 pb-20 px-6 min-h-[80vh] flex items-center">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gradient-silver">
              {t.join.submitSuccess}
            </h1>
            <p className="text-lg mb-8" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A' }}>
              {t.join.submitSuccessDesc}
            </p>
            <LiquidGlassButton href="/">
              {t.join.backHome}
            </LiquidGlassButton>
          </motion.div>
        </div>
      </section>
    )
  }

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
              {t.join.subtitle}
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient-silver">
              {t.join.title}
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: theme === 'light' ? '#6B6B80' : '#6B6B80', opacity: 0.7 }}>
              {t.join.description}
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Application Form */}
      <section className="relative py-32 px-6">
        <div className="max-w-2xl mx-auto">
          <SectionTitle subtitle={t.join.application}>
            {t.join.applicationTitle}
          </SectionTitle>

          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass-card p-8 mt-12"
          >
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>
                  {t.join.name} <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none"
                  style={inputStyle(!!errors.name)}
                  placeholder={t.join.namePlaceholder}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>
                  {t.join.email} <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none"
                  style={inputStyle(!!errors.email)}
                  placeholder={t.join.emailPlaceholder}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Student ID & Major */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>
                    {t.join.studentId} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none"
                    style={inputStyle(!!errors.studentId)}
                    placeholder={t.join.studentIdPlaceholder}
                  />
                  {errors.studentId && <p className="text-red-400 text-xs mt-1">{errors.studentId}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>
                    {t.join.major} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="major"
                    value={formData.major}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none"
                    style={inputStyle(!!errors.major)}
                    placeholder={t.join.majorPlaceholder}
                  />
                  {errors.major && <p className="text-red-400 text-xs mt-1">{errors.major}</p>}
                </div>
              </div>

              {/* Interest */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>
                  {t.join.interest}
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: 'ai', label: t.join.interestAi },
                    { value: 'scifi', label: t.join.interestSciFi },
                    { value: 'both', label: t.join.interestBoth }
                  ].map(option => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, interest: option.value as FormData['interest'] }))}
                      className="px-4 py-3 rounded-xl border text-sm font-medium transition-all"
                      style={{
                        backgroundColor: formData.interest === option.value ? 'rgba(232, 232, 232, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                        borderColor: formData.interest === option.value ? (theme === 'light' ? '#1A1A1A' : '#E8E8E8') : 'var(--border-color)',
                        color: formData.interest === option.value ? (theme === 'light' ? '#1A1A1A' : '#E8E8E8') : (theme === 'light' ? '#4A4A4A' : '#8A8A8A')
                      }}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>
                  {t.join.experience}
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none resize-none"
                  style={inputStyle(false)}
                  placeholder={t.join.experiencePlaceholder}
                />
              </div>

              {/* Motivation */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>
                  {t.join.motivation} <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none resize-none"
                  style={inputStyle(!!errors.motivation)}
                  placeholder={t.join.motivationPlaceholder}
                />
                {errors.motivation && <p className="text-red-400 text-xs mt-1">{errors.motivation}</p>}
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full liquid-glass liquid-glass-pulse px-8 py-4 text-base font-display flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.3"/>
                        <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                      </svg>
                      {t.join.submitting}
                    </>
                  ) : (
                    t.join.submit
                  )}
                </button>
              </div>
            </div>
          </motion.form>
        </div>
      </section>

      <SectionDivider />

      {/* Membership Types */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle={t.join.membership}>
            {t.join.membershipTitle}
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
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: theme === 'light' ? 'rgba(26,26,26,0.1)' : 'rgba(192,192,192,0.1)' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold mb-2" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>{t.join.fullMember}</h3>
                <p className="text-sm mb-6" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A' }}>{t.join.fullMemberTitle}</p>
                <ul className="space-y-3 mb-8">
                  {(isZh 
                    ? ['HKUSTSFAIC 正式成员', '投票权与选举权', '参与所有活动', '担任职务资格']
                    : ['HKUSTSFAIC Full Member', 'Voting & Election Rights', 'Participate in All Activities', 'Eligibility for Positions']
                  ).map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
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
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: theme === 'light' ? 'rgba(74,74,74,0.1)' : 'rgba(138,138,138,0.1)' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A' }}>
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold mb-2" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A' }}>{t.join.associateMember}</h3>
                <p className="text-sm mb-6" style={{ color: theme === 'light' ? '#6B6B80' : '#8A8A8A', opacity: 0.7 }}>{t.join.associateMemberTitle}</p>
                <ul className="space-y-3 mb-8">
                  {(isZh 
                    ? ['港科大学生', '参与所有活动', '无投票权', '无担任职务资格']
                    : ['HKUST Student', 'Participate in All Activities', 'No Voting Rights', 'No Position Eligibility']
                  ).map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm" style={{ color: theme === 'light' ? '#6B6B80' : '#8A8A8A', opacity: 0.8 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A' }}>
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
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
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8', opacity: 0.6 }}>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold mb-2" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8', opacity: 0.6 }}>{t.join.honoraryMember}</h3>
                <p className="text-sm mb-6" style={{ color: theme === 'light' ? '#6B6B80' : '#8A8A8A', opacity: 0.5 }}>{t.join.honoraryMemberTitle}</p>
                <ul className="space-y-3 mb-8">
                  {(isZh 
                    ? ['委员会授予', '对社团杰出贡献', '享有正式会员权利']
                    : ['Granted by Committee', 'Outstanding Contribution', 'Full Member Rights']
                  ).map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm" style={{ color: theme === 'light' ? '#6B6B80' : '#8A8A8A', opacity: 0.6 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8', opacity: 0.4 }}>
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="text-xs text-center" style={{ color: theme === 'light' ? '#6B6B80' : '#8A8A8A', opacity: 0.4 }}>
                  {isZh ? '由委员会邀请' : 'By Committee Invitation'}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Benefits */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle={t.join.benefits}>
            {t.join.benefitsTitle}
          </SectionTitle>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: t.join.benefit1Title, 
                desc: t.join.benefit1Desc,
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 10v6M2 10l10-5 10 5z"/>
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
                  </svg>
                )
              },
              { 
                title: t.join.benefit2Title, 
                desc: t.join.benefit2Desc,
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                )
              },
              { 
                title: t.join.benefit3Title, 
                desc: t.join.benefit3Desc,
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                )
              },
              { 
                title: t.join.benefit4Title, 
                desc: t.join.benefit4Desc,
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                )
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center" style={{ backgroundColor: theme === 'light' ? 'rgba(26,26,26,0.1)' : 'rgba(232, 232, 232, 0.1)' }}>
                  <span style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>{item.icon}</span>
                </div>
                <h3 className="font-display font-semibold mb-2" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A', opacity: 0.7 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Contact */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionTitle subtitle={t.join.contact}>
            {t.join.contactTitle}
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
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: theme === 'light' ? 'rgba(26,26,26,0.1)' : 'rgba(232, 232, 232, 0.1)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display font-semibold" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>{t.join.emailLabel}</h3>
                  <p className="text-sm" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A' }}>{contactInfo.email}</p>
                </div>
              </div>
              <p className="text-sm" style={{ color: theme === 'light' ? '#6B6B80' : '#8A8A8A', opacity: 0.7 }}>
                {t.join.emailDesc}
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
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(88, 101, 242, 0.1)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#5865F2">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display font-semibold" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>{t.join.discordLabel}</h3>
                  <p className="text-sm" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A' }}>{contactInfo.discord}</p>
                </div>
              </div>
              <p className="text-sm" style={{ color: theme === 'light' ? '#6B6B80' : '#8A8A8A', opacity: 0.7 }}>
                {t.join.discordDesc}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
