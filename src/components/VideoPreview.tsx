import { Play } from 'lucide-react'
import PhoneFrame from './PhoneFrame'
import AppScreenshot from './AppScreenshot'

interface VideoPreviewProps {
  src: string
  alt: string
  label?: string
  /** Phone width in px — bigger for the full démonstration section, smaller
   *  alongside copy in La solution. */
  width?: number
  className?: string
}

/** Stands in for a real demo video wherever the brief calls for one, reusing
 *  a screenshot already in the project inside the same phone frame used
 *  everywhere else on the site — rather than an invented video player. The
 *  play button is decorative: there is no video file yet, so the badge names
 *  it plainly as a preview instead of pretending it plays. */
export default function VideoPreview({ src, alt, label = 'Vidéo de démonstration — à venir', width = 232, className = '' }: VideoPreviewProps) {
  return (
    <div className={`video-frame ${className}`}>
      <div className="video-frame-phone">
        <PhoneFrame width={width} statusBar={false}><AppScreenshot src={src} alt={alt} cropTop={0} /></PhoneFrame>
        <span className="video-frame-play" aria-hidden><Play size={22} fill="currentColor" /></span>
      </div>
      <span className="video-frame-badge">{label}</span>
    </div>
  )
}
