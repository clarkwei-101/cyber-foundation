'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useApp } from '@/lib/context'

interface ActivityCardProps {
  title: string
  titleZh: string
  date: string
  description: string
  category: 'tech' | 'creative'
  imageUrl?: string
  href?: string
}

export default function ActivityCard({ 
  title, 
  titleZh, 
  date, 
  description, 
  category,
  imageUrl,
  href = '#'
}: ActivityCardProps) {
  const { t, theme, isZh } = useApp()
  const formattedDate = new Date(date).toLocaleDateString(isZh ? 'zh-CN' : 'en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
    >
      <Link href={href} className="block glass-card overflow-hidden group">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={isZh ? titleZh : title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-silver-bright/10 to-silver-muted/5 flex items-center justify-center" style={{ 
              '--tw-gradient-from': theme === 'light' ? 'rgba(26,26,26,0.1)' : 'rgba(232,232,232,0.1)',
              '--tw-gradient-to': theme === 'light' ? 'rgba(74,74,74,0.05)' : 'rgba(138,138,138,0.05)'
            } as React.CSSProperties }>
              <div className={`w-16 h-16 rounded-xl border border-dashed ${
                category === 'tech' ? 'border-silver-bright/30' : 'border-silver-muted/30'
              } flex items-center justify-center`}>
                <span className={`text-2xl font-display font-bold ${
                  category === 'tech' ? 'text-silver-bright/40' : 'text-silver-muted/40'
                }`}>
                  {category === 'tech' ? 'AI' : 'SF'}
                </span>
              </div>
            </div>
          )}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Category badge */}
          <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-mono font-semibold ${
            category === 'tech' 
              ? 'bg-silver-bright/20 text-silver-bright border border-silver-bright/30'
              : 'bg-silver-muted/20 text-silver-muted border border-silver-muted/30'
          }`}>
            {category === 'tech' ? t.common.tech : t.creative.scifi}
          </div>
          
          {/* Date */}
          <div className="absolute bottom-4 left-4">
            <span className="text-xs font-mono text-silver-bright/80">
              {formattedDate}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-display text-xl font-semibold mb-1 group-hover:opacity-100 transition-colors" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>
            {isZh ? titleZh : title}
          </h3>
          <p className="text-sm mb-3" style={{ color: theme === 'light' ? '#6B6B80' : '#8A8A8A' }}>{isZh ? title : titleZh}</p>
          <p className="text-sm leading-relaxed" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A', opacity: 0.7 }}>
            {description}
          </p>
          
          {/* Arrow indicator */}
          <div className="mt-4 flex items-center gap-2" style={{ color: theme === 'light' ? '#6B6B80' : '#6B6B80', opacity: 0.5 }}>
            <span className="text-xs font-mono">{t.common.readMore}</span>
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </motion.svg>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

interface TimelineActivityProps extends ActivityCardProps {
  isPast?: boolean
}

export function TimelineActivity({ isPast = false, ...props }: TimelineActivityProps) {
  const { theme } = useApp()
  
  return (
    <div className="relative pl-8 md:pl-12">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-silver-muted/30 via-silver-muted/10 to-transparent" />
      
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className={`absolute left-[-4px] top-6 w-2 h-2 rounded-full ${
          isPast 
            ? 'bg-silver-muted/40' 
            : 'bg-silver-bright animate-pulse'
        }`}
        style={{ 
          backgroundColor: isPast 
            ? (theme === 'light' ? 'rgba(74,74,74,0.4)' : 'rgba(138,138,138,0.4)')
            : (theme === 'light' ? '#1A1A1A' : '#E8E8E8')
        }}
      />
      
      {/* Card */}
      <ActivityCard {...props} />
    </div>
  )
}
