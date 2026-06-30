'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[200] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #C0C0C0, #E8E8E8, #C0C0C0)'
      }}
    />
  )
}
