interface LogoProps {
  className?: string
  /** White wordmark for dark backgrounds; the app icon keeps its colours. */
  dark?: boolean
  /** Rendered height in px; the wordmark scales with it. */
  height?: number
}

/** App icon + « PicPhone » wordmark. The wordmark is live text rather than the
 *  old lockup image, whose lettering read « picphone » in lower case — the
 *  brand is written with both P capitalised, on the site as in the video. */
export default function Logo({ className = '', dark = false, height = 32 }: LogoProps) {
  return (
    <span
      className={`logo ${className}`}
      style={{ height, gap: Math.round(height * 0.3), fontSize: Math.round(height * 0.8), color: dark ? '#fff' : 'var(--ink)' }}
    >
      <img src="/images/logo-mark.png" alt="" width={height} height={height} style={{ height, width: height }} />
      <span>PicPhone</span>
    </span>
  )
}
