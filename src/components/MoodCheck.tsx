import { ChevronLeft, ChevronRight } from 'lucide-react'
import Reveal from './Reveal'
import PhoneFrame from './PhoneFrame'

const moods = [
  { label: 'Très bien', color: '#2fbf6e', face: '😊' },
  { label: 'Bien', color: '#f5a623', face: '🙂' },
  { label: 'Mal', color: '#ef4444', face: '☹️' },
]

export default function MoodCheck() {
  return (
    <section id="comment" className="py-28 lg:py-32" style={{ background: 'var(--color-grey)' }}>
      <div className="mx-auto grid max-w-[1280px] items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <Reveal>
            <p className="eyebrow mb-4" style={{ color: 'var(--color-blue)' }}>
              Une interface pensée pour être reconnue
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-3xl font-extrabold leading-[1.1] sm:text-[2.6rem]">
              Un geste simple pour
              <br />
              <span style={{ color: 'var(--color-teal)' }}>rassurer</span> ses proches.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-[460px] text-[1.02rem] leading-relaxed" style={{ color: 'var(--color-slate)' }}>
              En un seul geste, le senior partage comment il se sent aujourd&apos;hui. Ses proches reçoivent
              l&apos;information en douceur, sans intrusion — juste ce qu&apos;il faut pour être rassuré.
            </p>
          </Reveal>
        </div>

        {/* phone with layered directional cards + arrows */}
        <div className="relative flex items-center justify-center">
          <div
            className="absolute h-[360px] w-[230px] -rotate-[10deg] rounded-[34px]"
            style={{ background: 'linear-gradient(160deg, #2f6bff, #1463ff)', left: '14%', opacity: 0.9 }}
            aria-hidden
          />
          <div
            className="absolute h-[380px] w-[240px] rotate-[8deg] rounded-[34px]"
            style={{ background: 'linear-gradient(160deg, #4f83ff, #2f6bff)', right: '14%', opacity: 0.6 }}
            aria-hidden
          />

          <button
            aria-hidden
            tabIndex={-1}
            className="absolute left-0 z-20 hidden h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_10px_24px_-12px_rgba(16,21,79,0.5)] sm:flex"
          >
            <ChevronLeft style={{ color: 'var(--color-blue)' }} />
          </button>

          <Reveal className="relative z-10">
            <PhoneFrame>
              <div className="flex h-full flex-col items-center bg-white px-5 pt-16 text-center">
                <h3 className="font-heading text-lg font-bold" style={{ color: '#2fbf6e' }}>
                  Comment vous sentez-vous aujourd&apos;hui ?
                </h3>
                <div className="mt-6 flex w-full flex-1 flex-col gap-3">
                  {moods.map((m) => (
                    <div key={m.label} className="flex items-center justify-between rounded-2xl px-4 py-3" style={{ background: 'var(--color-grey)' }}>
                      <span className="text-sm font-bold" style={{ color: m.color }}>
                        {m.label}
                      </span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full text-lg" style={{ background: m.color }}>
                        {m.face}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mb-6 w-full rounded-2xl py-3 text-sm font-semibold" style={{ background: 'var(--color-grey)', color: 'var(--color-slate)' }}>
                  Terminé
                </div>
              </div>
            </PhoneFrame>
          </Reveal>

          <button
            aria-hidden
            tabIndex={-1}
            className="absolute right-0 z-20 hidden h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_10px_24px_-12px_rgba(16,21,79,0.5)] sm:flex"
          >
            <ChevronRight style={{ color: 'var(--color-blue)' }} />
          </button>
        </div>
      </div>
    </section>
  )
}
