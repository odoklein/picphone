import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { AtSign, Camera, Mail, MessageCircle, Phone, Send, Video } from 'lucide-react'
import PhoneFrame from './PhoneFrame'
import AppScreenshot from './AppScreenshot'

const STATIC = typeof window !== 'undefined' && window.location.search.includes('static')

/** Seven tiles standing for communication overload — the same seven the caption
 *  and the carrousel claim. Deliberately generic glyphs rather than brand marks:
 *  the argument is the noise, not who makes it — and it keeps us clear of
 *  comparative-use trouble with the platforms' trademarks. */
const TILES = [
  { Icon: Phone, x: 1, y: 5, s: 66, dx: -40, dy: -26, badge: 3 },
  { Icon: Send, x: 76, y: 8, s: 60, dx: 42, dy: -30, badge: 12 },
  { Icon: MessageCircle, x: 0, y: 35, s: 54, dx: -46, dy: -4 },
  { Icon: Video, x: 80, y: 37, s: 62, dx: 48, dy: 6 },
  { Icon: AtSign, x: 2, y: 64, s: 58, dx: -42, dy: 28 },
  { Icon: Camera, x: 36, y: 78, s: 52, dx: -8, dy: 44, badge: 5 },
  { Icon: Mail, x: 74, y: 67, s: 60, dx: 44, dy: 32 },
]

/** Scroll-triggered, plays once: the clutter appears, drifts away, and one calm
 *  screen is left standing. Reduced-motion and ?static=1 get the resting state —
 *  faded tiles around a clear phone — so the argument still reads without motion.
 *
 *  Timing is deliberately unhurried: the clutter has to be *read* before it can
 *  be missed. Tiles hold for ~2.5s, and the « Avant » caption stays up with them. */
export default function AppClutter() {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const still = Boolean(reduce) || STATIC
  const inView = useInView(ref, { once: true, margin: '-140px' })
  const play = inView && !still

  return (
    <div className="clutter" ref={ref}>
      <div className="clutter-halo" aria-hidden />

      <div className="clutter-field" aria-hidden>
        {TILES.map((t, i) => (
          <motion.span
            key={i}
            className={still ? 'clutter-tile is-still' : 'clutter-tile'}
            style={{ left: `${t.x}%`, top: `${t.y}%`, width: t.s, height: t.s }}
            initial={still ? false : { opacity: 0, scale: 0.86 }}
            animate={play ? { opacity: [0, 1, 1, 0], scale: [0.86, 1, 1, 0.78], x: [0, 0, 0, t.dx], y: [0, 0, 0, t.dy] } : undefined}
            transition={{ duration: 3.8, times: [0, 0.11, 0.72, 1], delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
          >
            <t.Icon size={Math.round(t.s * 0.42)} />
            {t.badge && <i className="clutter-badge">{t.badge}</i>}
          </motion.span>
        ))}
      </div>

      <motion.div
        className="clutter-phone"
        initial={still ? false : { opacity: 0, y: 26, scale: 0.97 }}
        animate={play ? { opacity: 1, y: 0, scale: 1 } : undefined}
        transition={{ duration: 1, delay: 3, ease: [0.22, 1, 0.36, 1] }}
      >
        <PhoneFrame width={250} statusBar={false}>
          <AppScreenshot
            src="/images/app/senior-accueil.jpg"
            alt="L’écran d’accueil PicPhone : uniquement les visages de ses proches"
            cropTop={0}
          />
        </PhoneFrame>
      </motion.div>

      {!still && (
        <motion.span
          className="clutter-tag t-before"
          initial={{ opacity: 0, y: 10 }}
          animate={play ? { opacity: [0, 1, 1, 0], y: [10, 0, 0, -8] } : undefined}
          transition={{ duration: 3.4, times: [0, 0.09, 0.79, 1], ease: 'easeOut' }}
        >
          <i className="dot warn" /> Avant · sept applications
        </motion.span>
      )}

      <motion.span
        className="clutter-tag t-after"
        initial={still ? false : { opacity: 0, y: 10 }}
        animate={play ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.8, delay: 3.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <i className="dot ok" /> Avec PicPhone · un seul écran
      </motion.span>
    </div>
  )
}
