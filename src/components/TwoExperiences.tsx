import { HeartHandshake, UserRound } from 'lucide-react'
import Reveal from './Reveal'

const cards = [
  {
    Icon: UserRound,
    title: 'Pour les proches accompagnants',
    text: 'Reconnaître ses proches en un coup d’œil, sans distraction ni manipulation.',
    accent: 'var(--color-blue)',
  },
  {
    Icon: HeartHandshake,
    title: 'Pour l’aidant',
    text: 'Organiser contacts, photos et rappels, et rester informé à distance.',
    accent: 'var(--color-teal)',
  },
]

export default function TwoExperiences() {
  return (
    <section id="familles" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-white">
      {/* Photo — family (top) + senior (bottom), full-bleed; built-in left whitespace holds the text */}
      <img
        src="/images/family-senior-lifestyle.png"
        alt="Un père et ses deux enfants regardent PicPhone sur un téléphone, et une femme âgée utilise l’application, souriante, dans son salon."
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-[38%_center] lg:object-center"
      />
      {/* subtle left scrim for text legibility over the photo's white margin */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-full lg:w-[55%]"
        style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.55) 55%, rgba(255,255,255,0) 100%)' }}
      />

      <div className="relative z-10 mx-auto flex h-full max-w-[1280px] items-center px-6 lg:px-10">
        <div className="w-full max-w-md lg:max-w-[46%]">
          <Reveal>
            <h2 className="text-3xl font-extrabold leading-[1.1] sm:text-[2.6rem]">
              Une application.
              <br />
              <span style={{ color: 'var(--color-blue)' }}>Deux expériences</span> adaptées.
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-5 max-w-md text-[1.02rem] leading-relaxed" style={{ color: 'var(--color-slate)' }}>
              Trop d&apos;écrans, trop de boutons, des mots difficiles. PicPhone remet l&apos;humain au centre :
              la technologie s&apos;adapte à la personne, et non l&apos;inverse.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={0.05 * i}>
                <div className="flex h-full items-start gap-3 rounded-[14px] border border-black/5 bg-white/90 p-4 shadow-[0_10px_30px_-18px_rgba(16,21,79,0.35)] backdrop-blur-sm">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px]"
                    style={{ background: 'color-mix(in srgb, ' + c.accent + ' 12%, white)', color: c.accent }}
                  >
                    <c.Icon size={18} />
                  </span>
                  <div>
                    <p className="font-heading text-[0.9rem] font-bold leading-snug">{c.title}</p>
                    <p className="mt-1 text-[0.82rem] leading-relaxed" style={{ color: 'var(--color-slate)' }}>
                      {c.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
