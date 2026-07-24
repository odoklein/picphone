import type { ReactNode } from 'react'

interface PhoneFrameProps {
  children: ReactNode
  className?: string
  statusDark?: boolean
  /** Device width in px. Height follows the 9/19.5 aspect. Defaults to 288. */
  width?: number
}

export default function PhoneFrame({ children, className = '', statusDark = false, width = 288 }: PhoneFrameProps) {
  const tint = statusDark ? '#ffffff' : 'var(--ink)'

  return (
    <div className={`relative mx-auto select-none ${className}`} style={{ width, maxWidth: '100%' }}>
      <div className="relative rounded-[46px] bg-black p-[10px] shadow-[0_34px_70px_-20px_rgba(16,21,79,0.5)]">
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[38px] bg-white">
          {/* notch */}
          <div className="absolute left-1/2 top-2 z-20 h-[26px] w-[92px] -translate-x-1/2 rounded-full bg-black" />
          {/* status bar */}
          <div
            className="absolute left-1/2 top-[15px] z-20 flex w-[calc(100%-40px)] -translate-x-1/2 items-center justify-between text-[11px] font-semibold"
            style={{ color: tint }}
          >
            <span>11:08</span>
            <span className="flex items-center gap-1.5" aria-hidden>
              <SignalBars tint={tint} />
              <WifiGlyph tint={tint} />
              <BatteryGlyph tint={tint} />
            </span>
          </div>
          <div className="absolute inset-0">{children}</div>
        </div>
      </div>
    </div>
  )
}

function SignalBars({ tint }: { tint: string }) {
  return (
    <svg width="17" height="11" viewBox="0 0 17 11" fill={tint}>
      <rect x="0" y="7" width="3" height="4" rx="1" opacity="0.9" />
      <rect x="4.5" y="5" width="3" height="6" rx="1" opacity="0.9" />
      <rect x="9" y="2.5" width="3" height="8.5" rx="1" opacity="0.9" />
      <rect x="13.5" y="0" width="3" height="11" rx="1" opacity="0.4" />
    </svg>
  )
}

function WifiGlyph({ tint }: { tint: string }) {
  return (
    <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
      <path d="M7.5 2.2c2.4 0 4.6.9 6.2 2.4l-1.3 1.4A6.7 6.7 0 0 0 7.5 4.2 6.7 6.7 0 0 0 2.6 6L1.3 4.6A9 9 0 0 1 7.5 2.2Z" fill={tint} opacity="0.9" />
      <path d="M7.5 5.6c1.4 0 2.7.5 3.6 1.5l-1.4 1.4a3 3 0 0 0-4.4 0L3.9 7.1c1-.9 2.2-1.5 3.6-1.5Z" fill={tint} opacity="0.9" />
      <circle cx="7.5" cy="9.4" r="1.3" fill={tint} />
    </svg>
  )
}

function BatteryGlyph({ tint }: { tint: string }) {
  return (
    <svg width="26" height="12" viewBox="0 0 26 12" fill="none">
      <rect x="0.5" y="0.5" width="22" height="11" rx="3" stroke={tint} opacity="0.4" />
      <rect x="2" y="2" width="16" height="8" rx="1.6" fill={tint} />
      <rect x="24" y="4" width="2" height="4" rx="1" fill={tint} opacity="0.4" />
    </svg>
  )
}
