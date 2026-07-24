import { Suspense, lazy, useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'

const RemotionPlayer = lazy(() => import('./RemotionPlayer'))

function Skeleton() {
  return (
    <div className="flex h-full w-full items-center justify-center" style={{ background: 'linear-gradient(160deg, #10154f, #1a2b4a)' }}>
      <span className="text-sm font-medium text-white/40">Chargement de l&apos;animation…</span>
    </div>
  )
}

export default function RemotionBand() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { rootMargin: '250px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section className="relative overflow-hidden bg-[#0b1030] py-28 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <Reveal className="mx-auto mb-12 max-w-xl text-center">
          <p className="eyebrow mb-4" style={{ color: 'var(--color-teal)' }}>
            PicPhone en mouvement
          </p>
          <h2 className="text-3xl font-extrabold leading-[1.1] text-white sm:text-[2.6rem]">
            Une présence qui prend vie.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[0.98rem] leading-relaxed" style={{ color: 'rgba(255,255,255,0.66)' }}>
            Des repères clairs, des visages familiers et des gestes simples — réunis dans une expérience pensée pour
            rapprocher les familles.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <div
            ref={ref}
            className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-[20px] border border-white/10 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.8)]"
          >
            {inView ? (
              <Suspense fallback={<Skeleton />}>
                <RemotionPlayer />
              </Suspense>
            ) : (
              <Skeleton />
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
