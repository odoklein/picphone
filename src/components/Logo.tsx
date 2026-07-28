interface LogoProps {
  className?: string
  /** White variant for dark backgrounds (mark + wordmark rendered white). */
  dark?: boolean
  /** Rendered height in px. Width scales from the 668×163 lockup. */
  height?: number
}

export default function Logo({ className = '', dark = false, height = 32 }: LogoProps) {
  return (
    <img
      src="/images/logo.png"
      alt="PicPhone"
      width={Math.round((height * 668) / 163)}
      height={height}
      className={className}
      style={{ height, width: 'auto', display: 'block', filter: dark ? 'brightness(0) invert(1)' : undefined }}
    />
  )
}
