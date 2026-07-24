interface AppScreenshotProps {
  src: string
  alt: string
  /** % of the source screenshot's height to crop off the top (its real status bar / debug bar), so only PhoneFrame's own drawn status bar shows. */
  cropTop?: number
  className?: string
}

/**
 * Renders a real PicPhone screenshot to fill a PhoneFrame's screen slot.
 * Crops the device's native status bar (and, where present, the TestFlight
 * debug row) off the top — PhoneFrame draws its own status bar on top, so
 * without this crop the two would double up.
 */
export default function AppScreenshot({ src, alt, cropTop = 5, className = '' }: AppScreenshotProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="eager"
        decoding="async"
        className="absolute left-0 w-full object-cover"
        style={{ top: `-${cropTop}%`, height: `calc(100% + ${cropTop}%)` }}
      />
    </div>
  )
}
