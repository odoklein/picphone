import { motion, useReducedMotion } from 'framer-motion'
import { Contact, Image, Grid2x2, BellRing } from 'lucide-react'
import Reveal from './Reveal'
import PhoneFrame from './PhoneFrame'
import AppScreenshot from './AppScreenshot'

const trust = ['Photos familiales', 'Interface claire', 'Configuration à distance', 'Installation guidée']

const labels = [
  { icon: Contact, text: 'Contacts et proches', pos: 'left-0 top-6', side: 'right' as const },
  { icon: Image, text: 'Photos partagées', pos: 'right-0 top-20', side: 'left' as const },
  { icon: Grid2x2, text: 'Services du quotidien', pos: 'left-0 bottom-28', side: 'right' as const },
  { icon: BellRing, text: 'Alertes importantes', pos: 'right-0 bottom-12', side: 'left' as const },
]

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="top"
      className="relative overflow-hidden pb-24 pt-32 lg:pt-36"
      style={{ background: 'linear-gradient(180deg, #f5f7fc 0%, #eef2fb 100%)' }}
    >
      {/* soft abstract shape */}
      <div
        className="pointer-events-none absolute right-[-12%] top-[-10%] h-[620px] w-[620px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(20,99,255,0.10), transparent 68%)' }}
      />
      <div
        className="pointer-events-none absolute left-[-14%] top-[45%] h-[420px] w-[420px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(57,173,181,0.10), transparent 68%)' }}
      />

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-14 px-6 lg:grid-cols-[1.05fr_1fr] lg:px-10">
        <div>
          <Reveal>
            <p className="eyebrow mb-4" style={{ color: 'var(--color-blue)' }}>
              Surveiller moins. Rester présent.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-[2.6rem] font-extrabold leading-[1.05] sm:text-5xl lg:text-[3.5rem]">
              Tout gérer,
              <br />
              même <span style={{ color: 'var(--color-blue)' }}>à distance.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[480px] text-[1.05rem] leading-relaxed" style={{ color: 'var(--color-slate)' }}>
              Depuis son espace, le proche aidant supervise l&apos;application de son parent, partage des photos et
              organise ses services au quotidien — sans jamais être intrusif.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#cta" className="btn-primary">
                Découvrir l&apos;espace aidant
              </a>
              <a href="#comment" className="btn-ghost">
                Voir comment ça marche
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2">
              {trust.map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-slate)' }}>
                  <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: 'var(--color-teal)' }} />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Composition — layered phones: caregiver dashboard behind, senior home screen in front */}
        <div className="relative mx-auto w-full max-w-[460px] pl-6 sm:pl-10">
          {/* back phone — caregiver's view, offset and rotated */}
          <motion.div
            className="absolute -right-2 top-8 z-0 hidden w-[210px] -rotate-6 opacity-95 sm:block lg:w-[230px]"
            initial={reduce ? { opacity: 0 } : { opacity: 0, x: 20, rotate: 0 }}
            whileInView={{ opacity: 0.95, x: 0, rotate: -6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <PhoneFrame statusDark>
              <AppScreenshot src="/images/screen-caregiver-dashboard.jpg" alt="Tableau de bord de l’aidant sur PicPhone" cropTop={9} />
            </PhoneFrame>
          </motion.div>

          {/* connector labels — desktop */}
          <div className="pointer-events-none absolute inset-0 z-20 hidden lg:block">
            {labels.map((l, i) => (
              <motion.div
                key={l.text}
                className={`absolute ${l.pos} flex items-center gap-2`}
                initial={reduce ? { opacity: 0 } : { opacity: 0, x: l.side === 'right' ? -14 : 14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              >
                {l.side === 'left' && <Connector side="left" />}
                <span className="pointer-events-auto flex items-center gap-2 rounded-[11px] border border-black/5 bg-white px-3 py-2 text-xs font-semibold shadow-[0_10px_24px_-14px_rgba(16,21,79,0.4)]">
                  <span
                    className="flex h-6 w-6 items-center justify-center rounded-lg"
                    style={{ background: 'var(--color-grey)', color: 'var(--color-blue)' }}
                  >
                    <l.icon size={13} />
                  </span>
                  {l.text}
                </span>
                {l.side === 'right' && <Connector side="right" />}
              </motion.div>
            ))}
          </div>

          {/* front phone — real senior home screen */}
          <motion.div
            className={`relative z-10 ${reduce ? '' : 'animate-float'}`}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <PhoneFrame>
              <AppScreenshot src="/images/screen-senior-home.jpg" alt="Écran d’accueil du senior sur PicPhone : rappel de médicament, humeur du jour et contact rapide" cropTop={5} />
            </PhoneFrame>
          </motion.div>

          {/* mobile labels */}
          <div className="relative z-10 mt-6 flex flex-wrap justify-center gap-2 lg:hidden">
            {labels.map((l) => (
              <span
                key={l.text}
                className="flex items-center gap-2 rounded-[11px] border border-black/5 bg-white px-3 py-2 text-xs font-semibold shadow-sm"
              >
                <l.icon size={13} style={{ color: 'var(--color-blue)' }} />
                {l.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Connector({ side }: { side: 'left' | 'right' }) {
  return (
    <span className="flex items-center" aria-hidden>
      {side === 'right' && <span className="h-px w-8" style={{ background: 'rgba(20,99,255,0.4)' }} />}
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: 'var(--color-blue)' }} />
      {side === 'left' && <span className="h-px w-8" style={{ background: 'rgba(20,99,255,0.4)' }} />}
    </span>
  )
}
