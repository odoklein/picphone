import { Pill } from 'lucide-react'
import Reveal from './Reveal'
import PhoneFrame from './PhoneFrame'

export default function DiscreteHelp() {
  return (
    <section
      id="etablissements"
      className="relative overflow-hidden py-28 lg:py-32"
      style={{ background: 'linear-gradient(160deg, #10154f 0%, #1a2b4a 100%)' }}
    >
      <div
        className="pointer-events-none absolute left-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(57,173,181,0.22), transparent 70%)' }}
      />

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        {/* phone with layered supporting panels */}
        <div className="relative order-2 flex items-center justify-center lg:order-1">
          <div
            className="absolute h-[380px] w-[240px] -rotate-6 rounded-[36px]"
            style={{ background: 'rgba(20,99,255,0.18)', left: '18%' }}
            aria-hidden
          />
          <div
            className="absolute h-[400px] w-[250px] rotate-6 rounded-[36px]"
            style={{ background: 'rgba(57,173,181,0.16)', right: '18%' }}
            aria-hidden
          />

          <Reveal className="relative z-10">
            <PhoneFrame statusDark>
              <div className="flex h-full flex-col bg-white px-4 pt-14">
                <p className="mb-3 text-xs font-semibold">‹ Retour</p>
                <p className="mb-2 text-center text-[11px] font-semibold uppercase tracking-wide" style={{ color: 'var(--color-slate)' }}>
                  Nouveau médicament
                </p>
                <div className="mx-auto my-2 flex h-14 w-14 items-center justify-center rounded-2xl" style={{ background: 'rgba(20,99,255,0.1)' }}>
                  <Pill style={{ color: 'var(--color-blue)' }} />
                </div>
                <div className="mt-1 space-y-2.5">
                  {['Nom du médicament', 'Dosage', 'Horaires'].map((label) => (
                    <div key={label}>
                      <p className="mb-1 text-[10px] font-semibold" style={{ color: 'var(--color-slate)' }}>
                        {label} *
                      </p>
                      <div className="h-7 rounded-lg" style={{ background: 'var(--color-grey)' }} />
                    </div>
                  ))}
                  <p className="pt-1 text-[10px] font-semibold" style={{ color: 'var(--color-slate)' }}>
                    Répétition
                  </p>
                  <div className="flex gap-1.5">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <span key={i} className="h-6 w-6 rounded-full" style={{ background: 'var(--color-teal)' }} />
                    ))}
                  </div>
                </div>
              </div>
            </PhoneFrame>
          </Reveal>
        </div>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="eyebrow mb-4" style={{ color: 'var(--color-teal)' }}>
              Une aide discrète, au bon moment
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-3xl font-extrabold leading-[1.1] text-white sm:text-[2.6rem]">
              Les repères importants,
              <br />
              simplement organisés.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-[460px] text-[1.02rem] leading-relaxed" style={{ color: 'rgba(255,255,255,0.68)' }}>
              Depuis son espace, l&apos;aidant prépare les rappels de médicaments, les rendez-vous et les repères du
              quotidien. Le senior les retrouve au bon moment, sans jamais avoir à les configurer lui-même.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {[
                ['Rappels préparés à distance', 'var(--color-teal)'],
                ['Aucune manipulation côté senior', 'var(--color-blue)'],
              ].map(([t, c]) => (
                <span key={t} className="flex items-center gap-2 text-sm font-medium text-white/80">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: c }} />
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
