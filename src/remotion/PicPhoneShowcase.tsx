import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion'

const BLUE = '#1463ff'
const TEAL = '#39adb5'
const VIOLET = '#6647e8'

const chips = [
  { label: 'Contacts et proches', color: BLUE },
  { label: 'Photos partagées', color: TEAL },
  { label: 'Services du quotidien', color: VIOLET },
  { label: 'Alertes importantes', color: '#f5a623' },
]

// White logo variant for the dark navy backdrop: white body, teal accent, blue dot.
function LogoMark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <path
        d="M20 3C11.716 3 5 9.716 5 18c0 5.7 3.15 10.66 7.8 13.24-.52-1.02-.8-2.17-.8-3.4 0-4.14 3.36-7.5 7.5-7.5S27 23.7 27 27.84c0 3.25-2.06 6.02-4.95 7.08C31.06 34.02 38 26.85 38 18 38 9.716 29.284 3 20 3Z"
        fill="#ffffff"
      />
      <path
        d="M19.5 20.34c-4.14 0-7.5 3.36-7.5 7.5 0 3.66 2.62 6.7 6.09 7.36 1.6.3 1.91-1.98 1.91-1.98v-.06c0-4.14 3.36-7.5 7.5-7.5.9 0 1.76.16 2.56.45-.86-3.29-3.36-5.9-6.56-6.9-1.28-.4-2.65-.53-4-.87Z"
        fill={TEAL}
      />
      <circle cx="20" cy="20" r="2.6" fill={BLUE} />
    </svg>
  )
}

export function PicPhoneShowcase() {
  const frame = useCurrentFrame()
  const { fps, durationInFrames } = useVideoConfig()

  // Soft global fade at the loop seam (in at start, out at end)
  const seam = interpolate(
    frame,
    [0, 10, durationInFrames - 14, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' },
  )

  const logoSpring = spring({ frame: frame - 6, fps, config: { damping: 14, mass: 0.7 } })
  const wordShift = interpolate(logoSpring, [0, 1], [16, 0])

  const tagIn = spring({ frame: frame - 24, fps, config: { damping: 16 } })
  const tagShift = interpolate(tagIn, [0, 1], [22, 0])

  // gentle seamless float (period divides duration for a clean loop)
  const floatA = Math.sin((frame / 90) * Math.PI * 2) * 14
  const floatB = Math.cos((frame / 90) * Math.PI * 2) * 18

  return (
    <AbsoluteFill style={{ opacity: seam, fontFamily: 'Manrope, Inter, system-ui, sans-serif' }}>
      {/* background */}
      <AbsoluteFill style={{ background: 'linear-gradient(160deg, #10154f 0%, #1a2b4a 100%)' }} />
      {/* ambient orbs */}
      <AbsoluteFill>
        <div
          style={{
            position: 'absolute',
            left: 120 + floatB,
            top: 90 + floatA,
            width: 360,
            height: 360,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${TEAL}44, transparent 68%)`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: 100 - floatB,
            bottom: 70 + floatA,
            width: 420,
            height: 420,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${BLUE}55, transparent 68%)`,
          }}
        />
      </AbsoluteFill>

      {/* center content */}
      <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, transform: `scale(${0.6 + logoSpring * 0.4})`, opacity: logoSpring }}>
          <LogoMark size={72} />
          <span style={{ fontSize: 72, fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', transform: `translateX(${wordShift}px)` }}>
            PicPhone
          </span>
        </div>

        <div
          style={{
            marginTop: 26,
            fontSize: 34,
            fontWeight: 700,
            color: 'rgba(255,255,255,0.92)',
            letterSpacing: '-0.02em',
            transform: `translateY(${tagShift}px)`,
            opacity: tagIn,
          }}
        >
          Tout gérer, même{' '}
          <span style={{ color: '#5b8bff' }}>à distance.</span>
        </div>

        {/* feature chips */}
        <div style={{ marginTop: 46, display: 'flex', gap: 16 }}>
          {chips.map((c, i) => {
            const s = spring({ frame: frame - (44 + i * 7), fps, config: { damping: 15, mass: 0.6 } })
            return (
              <div
                key={c.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '12px 18px',
                  borderRadius: 12,
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: '#fff',
                  fontSize: 18,
                  fontWeight: 600,
                  transform: `translateY(${interpolate(s, [0, 1], [26, 0])}px)`,
                  opacity: s,
                }}
              >
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: c.color }} />
                {c.label}
              </div>
            )
          })}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  )
}
