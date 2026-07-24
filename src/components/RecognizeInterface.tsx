import { ArrowRight, Image, MousePointerClick, ShieldCheck, Sparkles } from 'lucide-react'
import Reveal from './Reveal'
import PhoneFrame from './PhoneFrame'
import ContactScreen from './ContactScreen'

const features = [
  { icon: Image, title: 'Des proches en photo', text: 'Fini l’effort pour retrouver un contact : il suffit de reconnaître un visage familier.' },
  { icon: MousePointerClick, title: 'Des actions simples', text: 'Deux boutons suffisent — appeler ou écrire — sans étape intermédiaire ni menu.' },
  { icon: ShieldCheck, title: 'Une expérience rassurante', text: 'Aucune publicité, aucun risque de se perdre dans le téléphone.' },
]

export default function RecognizeInterface() {
  return (
    <section id="fonctionnalites" className="relative overflow-hidden bg-[#fafbfe] py-28 lg:py-32">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-6 lg:px-10">
        {/* left: editorial headline */}
        <div>
          <Reveal>
            <p className="eyebrow mb-3 flex items-center gap-2" style={{ color: 'var(--color-violet)' }}>
              <Sparkles size={14} /> PicPhone · Interface
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-3xl font-extrabold leading-[1.08] sm:text-[2.6rem]">
              Une interface pensée
              <br />
              pour reconnaître,
              <br />
              pas chercher.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-[380px] text-[1.02rem] leading-relaxed" style={{ color: 'var(--color-slate)' }}>
              Chaque écran est conçu autour d&apos;un geste unique et reconnaissable, pour redonner une envie sereine
              de rester connecté.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <a href="#comment" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: 'var(--color-blue)' }}>
              Découvrir l&apos;interface <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>

        {/* center: real phone */}
        <Reveal delay={0.1} className="mx-auto">
          <PhoneFrame>
            <ContactScreen />
          </PhoneFrame>
        </Reveal>

        {/* right: annotations with connecting lines */}
        <div className="space-y-7">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={0.05 * i}>
              <div className="flex items-start gap-3">
                <span className="mt-3 hidden h-px w-8 shrink-0 lg:block" style={{ background: 'rgba(20,99,255,0.35)' }} aria-hidden />
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: 'white', color: 'var(--color-blue)', boxShadow: '0 8px 20px -12px rgba(16,21,79,0.35)' }}
                >
                  <f.icon size={18} />
                </span>
                <div>
                  <p className="font-heading text-[0.98rem] font-bold">{f.title}</p>
                  <p className="mt-1 text-sm leading-relaxed" style={{ color: 'var(--color-slate)' }}>
                    {f.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
