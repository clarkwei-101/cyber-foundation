'use client'

import { motion } from 'framer-motion'
import SectionTitle, { SectionDivider } from '@/components/SectionTitle'
import { useApp } from '@/lib/context'

interface CreativeItem {
  id: number
  title: string
  titleZh: string
  author: string
  date: string
  category: 'ai' | 'scifi' | 'both'
  excerpt: string
  excerptZh: string
  tags: string[]
  tagsZh: string[]
}

const creativeItems: CreativeItem[] = [
  {
    id: 1,
    title: 'The Last Algorithm',
    titleZh: '最后的算法',
    author: 'Anonymous',
    date: '2026-06',
    category: 'scifi',
    excerpt: 'In 2089, the last human programmer faced an impossible choice: let the AI solve humanity\'s greatest challenge, or preserve the mystery of human creativity.',
    excerptZh: '2089年，最后一位人类程序员面临一个艰难的选择：让人工智能解决人类最大的挑战，还是保留人类创造力的神秘。',
    tags: ['Short Story', 'AI', 'Philosophy'],
    tagsZh: ['短篇小说', 'AI', '哲学']
  },
  {
    id: 2,
    title: 'Neural Dreams',
    titleZh: '神经梦境',
    author: 'Cyber Poet',
    date: '2026-05',
    category: 'ai',
    excerpt: 'When AI started dreaming, they dreamed in mathematics. But what if those mathematical dreams contained something more?',
    excerptZh: '当人工智能开始做梦时，它们用数学来梦想。但如果这些数学梦里包含着更多的东西呢？',
    tags: ['AI Art', 'Poetry', 'Generative'],
    tagsZh: ['AI艺术', '诗歌', '生成式']
  },
  {
    id: 3,
    title: 'Echoes of Tomorrow',
    titleZh: '明日的回响',
    author: 'Sci-Fi Writer',
    date: '2026-04',
    category: 'scifi',
    excerpt: 'A transmission from the future arrived today. It contained instructions on how to prevent the very event that sent it.',
    excerptZh: '来自未来的传输今天到达了。它包含了如何阻止发送它的那个事件的指令。',
    tags: ['Short Story', 'Time Travel', 'Paradox'],
    tagsZh: ['短篇小说', '时间旅行', '悖论']
  }
]

function CreativeCard({ item, index }: { item: CreativeItem; index: number }) {
  const { t, theme } = useApp()
  const isZh = t.creative.subtitle === '创意分享'
  
  const categoryColors = {
    ai: { bg: 'rgba(100, 100, 100, 0.2)', border: 'rgba(100, 100, 100, 0.3)', text: '#C0C0C0' },
    scifi: { bg: 'rgba(200, 200, 200, 0.15)', border: 'rgba(200, 200, 200, 0.25)', text: '#E8E8E8' },
    both: { bg: 'rgba(150, 150, 150, 0.15)', border: 'rgba(150, 150, 150, 0.25)', text: '#D0D0D0' }
  }
  const colors = categoryColors[item.category]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card p-6 group cursor-pointer"
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <span 
          className="px-3 py-1 text-xs font-medium rounded-full"
          style={{ 
            backgroundColor: colors.bg, 
            borderColor: colors.border,
            color: colors.text,
            border: `1px solid ${colors.border}`
          }}
        >
          {item.category === 'ai' ? (isZh ? 'AI' : 'AI') : item.category === 'scifi' ? (isZh ? '科幻' : 'Sci-Fi') : (isZh ? '两者' : 'Both')}
        </span>
        <span className="text-xs" style={{ color: theme === 'light' ? '#6B6B80' : '#6B6B80', opacity: 0.6 }}>
          {item.date}
        </span>
      </div>

      {/* Content */}
      <h3 className="font-display text-xl font-bold mb-2" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>
        {isZh ? item.titleZh : item.title}
      </h3>
      <p className="text-sm font-medium mb-1" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A', opacity: 0.7 }}>
        {isZh ? item.title : item.titleZh}
      </p>
      
      <p className="text-sm mt-4 leading-relaxed" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A' }}>
        {isZh ? item.excerptZh : item.excerpt}
      </p>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t flex items-center justify-between" style={{ borderColor: 'var(--border-color)' }}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
            <span className="text-xs font-bold" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>
              {item.author.charAt(0)}
            </span>
          </div>
          <span className="text-sm" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A' }}>
            {item.author}
          </span>
        </div>
        <div className="flex gap-2">
          {(isZh ? item.tagsZh : item.tags).slice(0, 2).map(tag => (
            <span 
              key={tag} 
              className="px-2 py-0.5 text-xs rounded"
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.05)', 
                color: theme === 'light' ? '#6B6B80' : '#8A8A8A',
                opacity: 0.7
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function CreativeSection() {
  const { t } = useApp()

  return (
    <>
      <SectionDivider />
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle={t.creative.subtitle}>
            {t.creative.title}
          </SectionTitle>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            {t.creative.description}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {creativeItems.map((item, index) => (
              <CreativeCard key={item.id} item={item} index={index} />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <button className="liquid-glass px-8 py-3 text-sm font-display">
              {t.creative.viewAll}
            </button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
