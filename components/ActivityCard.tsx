'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

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
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
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
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-silver-bright/10 to-silver-muted/5 flex items-center justify-center">
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
            {category === 'tech' ? 'AI' : 'Sci-Fi'}
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
          <h3 className="font-display text-xl font-semibold text-silver-bright mb-1 group-hover:text-white transition-colors">
            {title}
          </h3>
          <p className="text-sm text-silver-muted mb-3">{titleZh}</p>
          <p className="text-sm text-silver-muted/70 leading-relaxed">
            {description}
          </p>
          
          {/* Arrow indicator */}
          <div className="mt-4 flex items-center gap-2 text-silver-muted/50 group-hover:text-silver-bright transition-colors">
            <span className="text-xs font-mono">Read More</span>
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
      />
      
      {/* Card */}
      <ActivityCard {...props} />
    </div>
  )
}
