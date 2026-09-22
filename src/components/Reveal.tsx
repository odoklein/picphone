import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  /** Element to render, when a `div` would break the parent's semantics —
   *  a reveal inside a `<ul>`, for instance. */
  as?: 'div' | 'li'
}

/** QA/static render: `?static=1` disables enter animations so headless captures
 *  show final state. Real visitors keep the scroll reveals. */
const STATIC = typeof window !== 'undefined' && window.location.search.includes('static')

export default function Reveal({ children, delay = 0, y = 24, className, as = 'div' }: RevealProps) {
  const reduce = useReducedMotion()
  const Tag = as === 'li' ? 'li' : 'div'
  const Motion = as === 'li' ? motion.li : motion.div

  if (STATIC) return <Tag className={className}>{children}</Tag>

  return (
    <Motion
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: reduce ? 0.3 : 0.65, delay: reduce ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Motion>
  )
}
