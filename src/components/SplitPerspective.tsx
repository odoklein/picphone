import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, HeartHandshake, UserRound } from 'lucide-react'
import Reveal from './Reveal'
import PhoneFrame from './PhoneFrame'
import AppScreenshot from './AppScreenshot'

/**
 * The core value of PicPhone: one shared moment, seen from both sides.
 * Left phone = senior's screen (mood check-in). Right phone = aidant's dashboard,
 * where that answer arrives in real time. Connected visually by an animated arrow.
 */
export default function SplitPerspective() {
  const reduce = useReducedMotion()

  return (
    <section className="relative overflow-hidden py-28 lg:py-32" style={{ background: '#fafbfe' }}>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(20,99,255,0.15), transparent)' }}
      />

      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4" style={{ color: 'var(--color-blue)' }}>
            Un lien discret, en temps réel
          </p>
          <h2 className="text-3xl font-extrabold leading-[1.08] sm:text-[2.7rem]">
            Un moment. <span style={{ color: 'var(--color-blue)' }}>Deux écrans.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[1.02rem] leading-relaxed" style={{ color: 'var(--color-slate)' }}>
            Ce que votre parent partage d&apos;un simple geste apparaît instantanément dans votre espace — sans
            appli complexe, sans notification intrusive.
          </p>
        </Reveal>

        <div className="relative mt-16 grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
          {/* Senior side */}
          <div className="flex flex-col items-center lg:items-end">
            <Reveal>
              <div className="mb-5 flex items-center gap-2 rounded-full border border-black/5 bg-white px-4 py-1.5 text-xs font-semibold shadow-sm">
                <span
                  className="flex h-5 w-5 items-center justify-center rounded-full"
                  style={{ background: 'rgba(57,173,181,0.15)', color: 'var(--color-teal)' }}
                >
                  <UserRound size={12} />
                </span>
                Écran de votre parent
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <PhoneFrame>
                <AppScreenshot
                  src="/images/screen-mood-check.jpg"
                  alt="Écran de suivi de l’humeur affiché sur le téléphone du senior"
                  cropTop={5}
                />
              </PhoneFrame>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-[260px] text-center text-sm leading-relaxed lg:text-right" style={{ color: 'var(--color-slate)' }}>
                <strong style={{ color: 'var(--color-ink)' }}>Un geste, une réponse.</strong> Il choisit son humeur du jour parmi trois options claires.
              </p>
            </Reveal>
          </div>

          {/* Animated flowing arrow */}
          <div className="relative flex items-center justify-center py-4 lg:py-0" aria-hidden>
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden lg:block"
            >
              <svg width="120" height="80" viewBox="0 0 120 80" fill="none" className="text-blue">
                <motion.path
                  d="M 4 40 Q 60 4, 116 40"
                  stroke="var(--color-blue)"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  strokeLinecap="round"
                  fill="none"
                  initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: 0.3, ease: 'easeInOut' }}
                />
                <motion.circle
                  cx="60"
                  cy="10"
                  r="6"
                  fill="var(--color-blue)"
                  initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.15 }}
                />
              </svg>
              <p className="mt-2 text-center text-[11px] font-semibold uppercase tracking-widest" style={{ color: 'var(--color-blue)' }}>
                Temps réel
              </p>
            </motion.div>

            {/* Mobile connector: down-arrow */}
            <div className="flex flex-col items-center gap-2 lg:hidden">
              <span className="h-8 w-px" style={{ background: 'rgba(20,99,255,0.35)' }} />
              <ArrowRight size={20} className="rotate-90" style={{ color: 'var(--color-blue)' }} />
              <span className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: 'var(--color-blue)' }}>
                Temps réel
              </span>
              <span className="h-8 w-px" style={{ background: 'rgba(20,99,255,0.35)' }} />
            </div>
          </div>

          {/* Aidant side */}
          <div className="flex flex-col items-center lg:items-start">
            <Reveal delay={0.15}>
              <div className="mb-5 flex items-center gap-2 rounded-full border border-black/5 bg-white px-4 py-1.5 text-xs font-semibold shadow-sm">
                <span
                  className="flex h-5 w-5 items-center justify-center rounded-full"
                  style={{ background: 'rgba(20,99,255,0.12)', color: 'var(--color-blue)' }}
                >
                  <HeartHandshake size={12} />
                </span>
                Votre écran
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="relative">
                <PhoneFrame>
                  <AppScreenshot
                    src="/images/screen-caregiver-dashboard.jpg"
                    alt="Tableau de bord de l’aidant affichant l’humeur du senior en temps réel"
                    cropTop={9}
                  />
                </PhoneFrame>

                {/* Live status pill */}
                <motion.div
                  className="absolute -right-4 top-24 rounded-[11px] border border-black/5 bg-white px-3 py-2 shadow-[0_16px_36px_-16px_rgba(16,21,79,0.4)] sm:-right-8"
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" style={{ background: 'var(--color-teal)' }} />
                      <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: 'var(--color-teal)' }} />
                    </span>
                    <span className="text-[11px] font-semibold" style={{ color: 'var(--color-ink)' }}>
                      Humeur mise à jour
                    </span>
                  </div>
                </motion.div>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-5 max-w-[260px] text-center text-sm leading-relaxed lg:text-left" style={{ color: 'var(--color-slate)' }}>
                <strong style={{ color: 'var(--color-ink)' }}>Une info claire, jamais anxiogène.</strong> Vous voyez comment il va, sans avoir à demander.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
