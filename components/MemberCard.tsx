'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { committeeMembers } from '@/lib/constants'

interface MemberCardProps {
  name: string
  role: string
  category: 'tech' | 'creative' | 'both'
  bio: string
  imageUrl?: string
}

export default function MemberCard({ name, role, category, bio, imageUrl }: MemberCardProps) {
  const categoryColor: Record<string, string> = {
    tech: 'from-silver-bright/20 to-transparent',
    creative: 'from-silver-muted/20 to-transparent',
    both: 'from-white/10 to-transparent',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="glass-card p-6 group cursor-pointer"
    >
      {/* Avatar */}
      <div className="relative w-20 h-20 mx-auto mb-4">
        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${categoryColor[category] || categoryColor.both} blur-xl opacity-50 group-hover:opacity-80 transition-opacity`} />
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="rounded-full object-cover border border-white/10"
          />
        ) : (
          <div className="w-full h-full rounded-full bg-gradient-to-br from-silver-bright/20 to-silver-muted/10 border border-white/10 flex items-center justify-center">
            <span className="text-2xl font-display font-bold text-silver-bright/60">
              {name.charAt(0)}
            </span>
          </div>
        )}
        
        {/* Category indicator */}
        <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono font-bold border ${
          category === 'tech' 
            ? 'bg-silver-bright/20 border-silver-bright/40 text-silver-bright' 
            : category === 'creative'
            ? 'bg-silver-muted/20 border-silver-muted/40 text-silver-muted'
            : 'bg-white/10 border-white/30 text-silver-bright'
        }`}>
          {category === 'both' ? '✦' : category === 'tech' ? 'AI' : 'SF'}
        </div>
      </div>

      {/* Info */}
      <div className="text-center">
        <h3 className="font-display text-lg font-semibold text-silver-bright mb-1">
          {name}
        </h3>
        <p className="text-xs font-mono text-silver-muted mb-3">
          {role}
        </p>
        <p className="text-sm text-silver-muted/70 leading-relaxed">
          {bio}
        </p>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl border border-silver-bright/20" />
      </div>
    </motion.div>
  )
}

interface MembersGridProps {
  members?: typeof committeeMembers
}

export function MembersGrid({ members = committeeMembers }: MembersGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {members.map((member, index) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <MemberCard {...member} />
        </motion.div>
      ))}
    </div>
  )
}
