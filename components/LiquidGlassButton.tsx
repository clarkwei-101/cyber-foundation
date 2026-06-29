'use client'

import { useRef, useState, useCallback, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface LiquidGlassButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost' | 'icon'
  pulse?: boolean
  className?: string
  icon?: ReactNode
}

export default function LiquidGlassButton({
  children,
  onClick,
  href,
  variant = 'primary',
  pulse = false,
  className = '',
  icon
}: LiquidGlassButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return
    const rect = buttonRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    buttonRef.current.style.setProperty('--mouse-x', `${x}%`)
    buttonRef.current.style.setProperty('--mouse-y', `${y}%`)
  }, [])

  const baseClasses = 'relative inline-flex items-center justify-center gap-2 select-none'

  const variantClasses = {
    primary: 'px-8 py-4 text-base font-semibold rounded-2xl',
    secondary: 'px-6 py-3 text-sm font-medium rounded-xl border border-silver-muted/30',
    ghost: 'px-4 py-2 text-sm font-normal rounded-lg',
    icon: 'w-12 h-12 rounded-full p-0',
  }

  const glassClasses = variant !== 'ghost'
    ? 'liquid-glass'
    : 'bg-transparent hover:bg-silver-muted/10 transition-colors duration-300'

  const Component = href ? motion.a : motion.button

  return (
    <div
      ref={buttonRef}
      className={`${baseClasses} ${variantClasses[variant]} ${glassClasses} ${pulse ? 'liquid-glass-pulse' : ''} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Component
        href={href}
        onClick={onClick}
        className="relative z-10 flex items-center gap-2 text-silver-bright font-display"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </Component>

      {/* Glow effect on hover */}
      {isHovered && variant !== 'ghost' && (
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(192, 192, 192, 0.15) 0%, transparent 50%)',
          }}
        />
      )}
    </div>
  )
}
