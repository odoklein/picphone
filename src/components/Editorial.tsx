import type { ReactNode } from 'react'

/** Running chapter index — threads a page like a magazine's section marks.
 *  Shared across Home and Résidences so both read as one design system. */
export function SectionIndex({ n, label, center }: { n: string; label: string; center?: boolean }) {
  return (
    <span className={center ? 'kicker center' : 'kicker'}>
      <span className="kicker-no">{n}</span>
      <span className="kicker-bar" aria-hidden />
      <span className="kicker-lb">{label}</span>
    </span>
  )
}

/** A single keyword underlined by hand — echoes the hero marker as a motif. */
export function Underline({ children }: { children: ReactNode }) {
  return (
    <span className="ul">
      {children}
      <svg viewBox="0 0 300 16" preserveAspectRatio="none" aria-hidden>
        <path d="M5 11 C 78 4 222 4 295 8" />
      </svg>
    </span>
  )
}
