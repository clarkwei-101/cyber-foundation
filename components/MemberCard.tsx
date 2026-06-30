'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useApp } from '@/lib/context'
import { committeeMembers } from '@/lib/constants'

interface Member {
  name: string
  role: string
  roleZh: string
  bio: string
  bioZh: string
  category: 'tech' | 'creative' | 'both'
  imageUrl?: string
}

interface MemberCardProps {
  member: Member
}

export default function MemberCard({ member }: MemberCardProps) {
  const { t, theme } = useApp()
  const isZh = t.nav.about === '社团架构'

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
        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${categoryColor[member.category] || categoryColor.both} blur-xl opacity-50 group-hover:opacity-80 transition-opacity`} />
        {member.imageUrl ? (
          <Image
            src={member.imageUrl}
            alt={member.name}
            fill
            className="rounded-full object-cover border border-white/10"
          />
        ) : (
          <div className="w-full h-full rounded-full bg-gradient-to-br from-silver-bright/20 to-silver-muted/10 border border-white/10 flex items-center justify-center" style={{ borderColor: theme === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)' }}>
            <span className="text-2xl font-display font-bold" style={{ color: theme === 'light' ? 'rgba(26,26,26,0.6)' : 'rgba(232,232,232,0.6)' }}>
              {member.name.charAt(0)}
            </span>
          </div>
        )}
        
        {/* Category indicator */}
        <div 
          className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono font-bold border ${
            member.category === 'tech' 
              ? 'bg-silver-bright/20 border-silver-bright/40' 
              : member.category === 'creative'
              ? 'bg-silver-muted/20 border-silver-muted/40'
              : 'bg-white/10 border-white/30'
          }`}
          style={{ 
            color: member.category === 'tech' 
              ? (theme === 'light' ? '#1A1A1A' : '#E8E8E8')
              : member.category === 'creative'
              ? (theme === 'light' ? '#4A4A4A' : '#8A8A8A')
              : (theme === 'light' ? '#1A1A1A' : '#E8E8E8')
          }}
        >
          {member.category === 'both' ? '✦' : member.category === 'tech' ? (isZh ? 'AI' : 'AI') : (isZh ? '创' : 'SF')}
        </div>
      </div>

      {/* Info */}
      <div className="text-center">
        <h3 className="font-display text-lg font-semibold mb-1" style={{ color: theme === 'light' ? '#1A1A1A' : '#E8E8E8' }}>
          {member.name}
        </h3>
        <p className="text-xs font-mono mb-3" style={{ color: theme === 'light' ? '#6B6B80' : '#8A8A8A' }}>
          {isZh ? member.roleZh : member.role}
        </p>
        <p className="text-sm leading-relaxed" style={{ color: theme === 'light' ? '#4A4A4A' : '#8A8A8A', opacity: 0.7 }}>
          {isZh ? member.bioZh : member.bio}
        </p>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ borderColor: theme === 'light' ? 'rgba(26,26,26,0.2)' : 'rgba(232,232,232,0.2)' }}>
        <div className="absolute inset-0 rounded-2xl border" style={{ borderColor: theme === 'light' ? 'rgba(26,26,26,0.2)' : 'rgba(232,232,232,0.2)' }} />
      </div>
    </motion.div>
  )
}

interface MembersGridProps {
  members?: Member[]
}

export function MembersGrid({ members = committeeMembers as unknown as Member[] }: MembersGridProps) {
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
          <MemberCard member={member} />
        </motion.div>
      ))}
    </div>
  )
}
