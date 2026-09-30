import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { Pause, Play, Volume2, VolumeX } from 'lucide-react'

interface PresentationVideoProps {
  src: string
  poster: string
  title: string
  /** Read to screen readers in place of the text animated in the video. */
  transcript: string
}

/** A short brand clip, played inline: muted and looping while on screen,
 *  paused off screen. Visitors who ask for reduced motion start it themselves. */
export default function PresentationVideo({ src, poster, title, transcript }: PresentationVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)
  const autoplay = !useReducedMotion()
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)
  const [held, setHeld] = useState(false)

  useEffect(() => {
    const video = ref.current
    if (!video || !autoplay || held) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {})
      else video.pause()
    }, { threshold: 0.35 })
    io.observe(video)
    return () => io.disconnect()
  }, [autoplay, held])

  const togglePlay = () => {
    const video = ref.current
    if (!video) return
    if (video.paused) { setHeld(false); video.play().catch(() => {}) }
    else { setHeld(true); video.pause() }
  }

  // Turning the sound on restarts the clip so the music is heard from the top.
  const toggleSound = () => {
    const video = ref.current
    if (!video) return
    if (!video.muted) { video.muted = true; return }
    video.muted = false
    video.currentTime = 0
    setHeld(false)
    video.play().catch(() => {})
  }

  return (
    <figure className="pvid">
      <div className="pvid-frame">
        <video
          ref={ref}
          className="pvid-video"
          src={src}
          poster={poster}
          aria-label={title}
          muted
          loop
          playsInline
          preload="metadata"
          onClick={togglePlay}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onVolumeChange={(e) => setMuted(e.currentTarget.muted)}
        />
        {!playing && (held || !autoplay) && (
          <button type="button" className="pvid-bigplay" onClick={togglePlay} aria-label="Lire la vidéo">
            <Play size={26} fill="currentColor" />
          </button>
        )}
        <div className="pvid-controls">
          <button type="button" onClick={togglePlay} aria-label={playing ? 'Mettre la vidéo en pause' : 'Lire la vidéo'}>
            {playing ? <Pause size={17} fill="currentColor" /> : <Play size={17} fill="currentColor" />}
          </button>
          <button type="button" onClick={toggleSound} aria-label={muted ? 'Activer le son' : 'Couper le son'}>
            {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        </div>
      </div>
      <figcaption className="sr-only">{transcript}</figcaption>
    </figure>
  )
}
