'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  tiltAmount?: number
}

export default function TiltCard({ children, className = '', tiltAmount = 15 }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -tiltAmount
    const rotateY = ((x - centerX) / centerX) * tiltAmount

    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={cardRef}
      className={`transition-transform duration-300 ${className}`}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ transform: 'translateZ(30px)' }}>
        {children}
      </div>
    </motion.div>
  )
}
