import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

/**
 * The hero photograph, crossfading between the families we have.
 *
 * Every image dropped into `src/assets/hero/` joins the rotation, in filename
 * order — adding or removing one needs no code change. Same composition, other
 * families: the point is that a visitor recognises their own, so the fade is
 * slow and silent rather than a slideshow that asks to be watched.
 */
const SOURCES = Object.entries(
  import.meta.glob('../assets/hero/*.{jpg,jpeg,png,webp}', {
    eager: true, query: '?url', import: 'default',
  }) as Record<string, string>,
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, url]) => url)

const STATIC = typeof window !== 'undefined' && window.location.search.includes('static')
/** Time one photograph holds before the next takes over. The fade itself is CSS. */
const HOLD_MS = 6500
/** The first frame carries the hero's LCP; the others wait until it has landed. */
const MOUNT_REST_MS = 1800

export default function HeroBackdrop() {
  const reduce = useReducedMotion()
  const still = Boolean(reduce) || STATIC || SOURCES.length < 2
  const [index, setIndex] = useState(0)
  const [rest, setRest] = useState(false)

  useEffect(() => {
    if (still) return
    const t = setTimeout(() => setRest(true), MOUNT_REST_MS)
    return () => clearTimeout(t)
  }, [still])

  useEffect(() => {
    if (still || !rest) return
    const t = setInterval(() => setIndex((i) => (i + 1) % SOURCES.length), HOLD_MS)
    return () => clearInterval(t)
  }, [still, rest])

  const shown = still || !rest ? SOURCES.slice(0, 1) : SOURCES

  return (
    <>
      {shown.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={i === index ? 'is-on' : undefined}
          fetchPriority={i === 0 ? 'high' : 'low'}
          decoding="async"
        />
      ))}
    </>
  )
}
