import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import {
  ArrowLeft, ArrowRight, Camera, Hand, Mail, MessageCircle, MessageSquare,
  Phone, Send, Video,
} from 'lucide-react'
import PhoneFrame from './PhoneFrame'
import AppScreenshot from './AppScreenshot'

/* ---------- Slide visuals ----------
   The carrousel tells the same story as the page, in five swipes: the clutter,
   the hesitation, the caregiver's setup, the screen that gets simple, the call.
   Where a real app screen exists, we show it rather than an abstraction. */

/** Seven tiles, because the caption says seven. Deliberately generic glyphs
 *  rather than brand marks: the argument is the noise, not who makes it. */
const NOISE = [
  { Icon: Phone, badge: 3 }, { Icon: MessageSquare, badge: 0 }, { Icon: Send, badge: 12 },
  { Icon: MessageCircle, badge: 0 }, { Icon: Video, badge: 2 }, { Icon: Mail, badge: 8 },
  { Icon: Camera, badge: 5 },
]

function NoiseGrid({ dim = false }: { dim?: boolean }) {
  return (
    <div className={dim ? 'cv-grid is-dim' : 'cv-grid'} aria-hidden>
      {NOISE.map(({ Icon, badge }, i) => (
        <span className="cv-tile" key={i}>
          <Icon size={22} />
          {badge > 0 && <i className="cv-badge">{badge}</i>}
        </span>
      ))}
    </div>
  )
}

function VueClutter() {
  return <div className="cv-stage"><NoiseGrid /></div>
}

function VueHesitation() {
  return (
    <div className="cv-stage">
      <NoiseGrid dim />
      <span className="cv-hand" aria-hidden>
        <i className="cv-ring" /><i className="cv-ring r2" />
        <Hand size={38} />
      </span>
    </div>
  )
}

function VueSetup() {
  return (
    <div className="cv-stage">
      <PhoneFrame width={152} statusBar={false}>
        <AppScreenshot src="/images/app/aidant-contacts.jpg" alt="Depuis son téléphone, l’aidant range les contacts prioritaires et ajoute une photo" cropTop={0} />
      </PhoneFrame>
      <span className="cv-chip" aria-hidden><i className="dot ok" /> Contact ajouté</span>
    </div>
  )
}

function VueSimple() {
  return (
    <div className="cv-stage">
      <PhoneFrame width={152} statusBar={false}>
        <AppScreenshot src="/images/app/senior-accueil.jpg" alt="L’écran d’accueil du senior : uniquement les visages de ses proches" cropTop={0} />
      </PhoneFrame>
    </div>
  )
}

function VueAppel() {
  return (
    <div className="cv-stage">
      <PhoneFrame width={152} statusBar={false}>
        <AppScreenshot src="/images/app/senior-appel.jpg" alt="Un appui sur la photo ouvre l’appel" cropTop={0} />
      </PhoneFrame>
      <span className="cv-live" aria-hidden>
        <img src="/images/family-senior-lifestyle.png" alt="" loading="lazy" />
        <i className="cv-live-dot" />
      </span>
    </div>
  )
}

const SLIDES: { key: string; step: string; Visual: () => ReactNode; caption: string }[] = [
  { key: 'clutter', step: 'Le point de départ', Visual: VueClutter, caption: 'Sept applications pour dire bonjour. Elle n’en ouvre plus aucune.' },
  { key: 'hesitation', step: 'Trop compliqué', Visual: VueHesitation, caption: 'À force d’hésiter, on n’appelle plus.' },
  { key: 'setup', step: 'Vous configurez', Visual: VueSetup, caption: 'Vous ajoutez les visages. En quelques minutes, depuis votre téléphone.' },
  { key: 'simple', step: 'L’écran devient simple', Visual: VueSimple, caption: 'Chez elle, il ne reste que les visages.' },
  { key: 'appel', step: 'L’appel démarre', Visual: VueAppel, caption: 'Un appui. Et vous êtes là.' },
]

/** Swipe-first, five views. Scroll-snap does the work on touch; the dots and
 *  arrows exist for pointer and keyboard. No CTA of its own — the page's single
 *  button sits right below. */
export default function JourneyCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const onScroll = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const slides = Array.from(track.children) as HTMLElement[]
    let best = 0
    let bestGap = Infinity
    slides.forEach((s, i) => {
      const gap = Math.abs(s.offsetLeft - track.scrollLeft - track.clientLeft)
      if (gap < bestGap) { bestGap = gap; best = i }
    })
    setActive(best)
  }, [])

  useEffect(() => { onScroll() }, [onScroll])

  const go = (i: number) => {
    const track = trackRef.current
    if (!track) return
    const target = track.children[Math.max(0, Math.min(SLIDES.length - 1, i))] as HTMLElement | undefined
    target?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
  }

  return (
    <div className="carou" role="group" aria-roledescription="carrousel" aria-label="De l’aidant au senior, en cinq étapes">
      <div className="carou-track" ref={trackRef} onScroll={onScroll} tabIndex={0}>
        {SLIDES.map(({ key, step, Visual, caption }, i) => (
          <article className="carou-slide" key={key} aria-label={`${i + 1} sur ${SLIDES.length} — ${step}`}>
            <Visual />
            <span className="carou-step">{String(i + 1).padStart(2, '0')} · {step}</span>
            <p className="carou-cap">{caption}</p>
          </article>
        ))}
      </div>

      <div className="carou-nav">
        <div className="carou-dots">
          {SLIDES.map((s, i) => (
            <button
              key={s.key}
              className={i === active ? 'carou-dot is-on' : 'carou-dot'}
              aria-label={`Aller à la vue ${i + 1} : ${s.step}`}
              aria-current={i === active}
              onClick={() => go(i)}
            />
          ))}
        </div>
        <div className="carou-arrows">
          <button className="carou-arrow" aria-label="Vue précédente" disabled={active === 0} onClick={() => go(active - 1)}>
            <ArrowLeft size={18} />
          </button>
          <button className="carou-arrow" aria-label="Vue suivante" disabled={active === SLIDES.length - 1} onClick={() => go(active + 1)}>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
