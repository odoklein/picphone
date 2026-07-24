interface LogoProps {
  className?: string
  /** White variant for dark backgrounds (mark + wordmark rendered white). */
  dark?: boolean
  /** Rendered height in px. Width scales from the 500×94 lockup. */
  height?: number
}

export default function Logo({ className = '', dark = false, height = 28 }: LogoProps) {
  return (
    <img
      src="/images/logo.png"
      alt="PicPhone"
      width={Math.round((height * 500) / 94)}
      height={height}
      className={className}
      style={{ height, width: 'auto', display: 'block', filter: dark ? 'brightness(0) invert(1)' : undefined }}
    />
  )
}
