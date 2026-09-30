import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ArrowRight, Pause, Play, RotateCcw, SkipBack, SkipForward, X } from 'lucide-react'
import PhoneFrame from './PhoneFrame'
import AppScreenshot from './AppScreenshot'
import { TRIAL_LABEL, TRIAL_MICRO, TRIAL_START } from '../trial'

export interface DemoSlide {
  src: string
  alt: string
  caption: string
  detail?: string
  /** Where the demo finger taps before the next screen, in % of the screen (x, y). */
  tap?: [number, number]
}

interface VideoPreviewProps {
  /** Poster shown on the page before the demo is opened. */
  src: string
  alt: string
  slides: DemoSlide[]
  label: string
  /** Phone width in px — bigger for the full démonstration section, smaller
   *  alongside copy in La solution. */
  width?: number
  className?: string
}

const SLIDE_MS = 4000
const TAP_FROM = 0.55
const TAP_TO = 0.9

const fmt = (ms: number) => {
  const s = Math.floor(ms / 1000)
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
}

/** Stands in for a real demo video until one is filmed: clicking the phone
 *  opens a player that walks through real app screenshots on a timeline, with
 *  chapters, a tap marker and an end card. */
export default function VideoPreview({ src, alt, slides, label, width = 232, className = '' }: VideoPreviewProps) {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const close = useCallback(() => {
    setOpen(false)
    triggerRef.current?.focus()
  }, [])

  return (
    <div className={`video-frame ${className}`}>
      <button ref={triggerRef} type="button" className="video-frame-phone" onClick={() => setOpen(true)} aria-label={`${label} (vidéo, ${fmt(slides.length * SLIDE_MS)})`}>
        <PhoneFrame width={width} statusBar={false}><AppScreenshot src={src} alt={alt} cropTop={0} /></PhoneFrame>
        <span className="video-frame-play" aria-hidden><Play size={22} fill="currentColor" /></span>
        <span className="video-frame-dur" aria-hidden>{fmt(slides.length * SLIDE_MS)}</span>
      </button>
      <span className="video-frame-badge">{label}</span>
      {open && <DemoPlayer slides={slides} title={label} onClose={close} />}
    </div>
  )
}

function DemoPlayer({ slides, title, onClose }: { slides: DemoSlide[]; title: string; onClose: () => void }) {
  const total = slides.length * SLIDE_MS
  const [elapsed, setElapsed] = useState(0)
  const [playing, setPlaying] = useState(true)
  const dialogRef = useRef<HTMLDivElement>(null)

  const ended = elapsed >= total
  const index = Math.min(slides.length - 1, Math.floor(elapsed / SLIDE_MS))
  const within = ended ? 1 : (elapsed - index * SLIDE_MS) / SLIDE_MS
  const slide = slides[index]
  const showTap = !ended && slide.tap && within >= TAP_FROM && within <= TAP_TO

  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialogRef.current?.focus()
    return () => { document.body.style.overflow = prevOverflow }
  }, [])

  // JS clock rather than CSS animations: the site's reduced-motion rule
  // disables every animation, which would otherwise freeze playback.
  useEffect(() => {
    if (!playing || ended) return
    let last = performance.now()
    let raf = requestAnimationFrame(function tick(now) {
      // The first frame's timestamp can precede `last` (negative dt); a
      // backgrounded tab returns with a huge one. Clamp both ends.
      const dt = Math.max(0, Math.min(now - last, 100))
      last = now
      setElapsed((e) => Math.min(total, e + dt))
      raf = requestAnimationFrame(tick)
    })
    return () => cancelAnimationFrame(raf)
  }, [playing, ended, total])

  const seek = useCallback((i: number) => {
    setElapsed(Math.max(0, Math.min(slides.length, i)) * SLIDE_MS)
  }, [slides.length])
  const next = useCallback(() => setElapsed((e) => Math.min(total, (Math.floor(e / SLIDE_MS) + 1) * SLIDE_MS)), [total])
  const prev = useCallback(() => setElapsed((e) => Math.max(0, Math.floor(e / SLIDE_MS) - 1) * SLIDE_MS), [])
  const toggle = useCallback(() => {
    if (ended) { setElapsed(0); setPlaying(true) } else setPlaying((p) => !p)
  }, [ended])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>('button, a[href]')
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        const active = document.activeElement
        if (e.shiftKey && (active === first || active === dialogRef.current)) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && active === last) { e.preventDefault(); first.focus() }
      }
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === ' ' && !(e.target instanceof HTMLButtonElement || e.target instanceof HTMLAnchorElement)) {
        e.preventDefault()
        toggle()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, next, prev, toggle])

  const fill = (i: number) => (i < index || ended ? 1 : i > index ? 0 : within)

  return createPortal(
    <div className="demo" role="dialog" aria-modal="true" aria-label={title} ref={dialogRef} tabIndex={-1} onClick={onClose}>
      <div className="demo-inner" onClick={(e) => e.stopPropagation()}>
        <div className="demo-head">
          <span className="demo-title">{title}</span>
          <button type="button" className="demo-icon-btn" onClick={onClose} aria-label="Fermer la vidéo"><X size={20} /></button>
        </div>

        <div className="demo-stage">
          <div className="demo-phone" onClick={toggle}>
            <PhoneFrame width={300} statusBar={false}>
              {slides.map((s, i) => (
                <div key={s.src} className={i === index ? 'demo-screen is-on' : 'demo-screen'} aria-hidden={i !== index}>
                  <AppScreenshot src={s.src} alt={s.alt} cropTop={0} />
                </div>
              ))}
              {showTap && slide.tap && (
                <span className="demo-tap" style={{ left: `${slide.tap[0]}%`, top: `${slide.tap[1]}%` }} aria-hidden />
              )}
              {!playing && !ended && (
                <span className="demo-paused" aria-hidden><Play size={26} fill="currentColor" /></span>
              )}
              {ended && (
                <div className="demo-end" onClick={(e) => e.stopPropagation()}>
                  <p className="demo-end-title">Prêt à essayer ?</p>
                  <p className="demo-end-micro">{TRIAL_MICRO}</p>
                  <a className="btn btn-primary" href={TRIAL_START} onClick={onClose}>{TRIAL_LABEL} <ArrowRight size={16} /></a>
                  <button type="button" className="demo-replay" onClick={toggle}><RotateCcw size={15} /> Revoir la vidéo</button>
                </div>
              )}
            </PhoneFrame>
          </div>

          <p className="sr-only" aria-live="polite">
            {ended ? 'Fin de la vidéo' : `Écran ${index + 1} sur ${slides.length} : ${slide.caption}`}
          </p>
          <ol className="demo-chapters">
            {slides.map((s, i) => (
              <li key={s.src} className={i === index && !ended ? 'demo-chapter is-on' : i < index || ended ? 'demo-chapter is-done' : 'demo-chapter'}>
                <button type="button" onClick={() => seek(i)} aria-current={i === index && !ended ? 'step' : undefined}>
                  <span className="demo-chapter-no">{String(i + 1).padStart(2, '0')}</span>
                  <span className="demo-chapter-body">
                    <span className="demo-chapter-title">{s.caption}</span>
                    {s.detail && <span className="demo-chapter-detail">{s.detail}</span>}
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>

        <div className="demo-controls">
          <button type="button" className="demo-icon-btn is-main" onClick={toggle} aria-label={ended ? 'Revoir la vidéo' : playing ? 'Pause' : 'Lecture'}>
            {ended ? <RotateCcw size={18} /> : playing ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
          </button>
          <button type="button" className="demo-icon-btn" onClick={prev} aria-label="Écran précédent"><SkipBack size={17} /></button>
          <div className="demo-track">
            {slides.map((s, i) => (
              <button type="button" key={s.src} className="demo-seg" onClick={() => seek(i)} aria-label={`Aller à l’écran ${i + 1} : ${s.caption}`}>
                <i style={{ transform: `scaleX(${fill(i)})` }} />
              </button>
            ))}
          </div>
          <button type="button" className="demo-icon-btn" onClick={next} aria-label="Écran suivant"><SkipForward size={17} /></button>
          <span className="demo-time">{fmt(elapsed)} / {fmt(total)}</span>
        </div>
      </div>
    </div>,
    document.body,
  )
}
