import { Star } from 'lucide-react'
import Reveal from './Reveal'

const testimonials = [
  { name: 'Sophie Lucarelli', role: "Fille d'utilisateur", text: 'Une interface si simple qu’elle m’a permis de rester connectée à mon père, où que je sois.' },
  { name: 'David Kim', role: 'Aidant familial', text: "Ma mère m'appelle beaucoup plus facilement. Elle n'a plus peur de se tromper de numéro." },
  { name: 'Regina Ford', role: 'Family manager', text: 'Suivre son humeur au fil de la journée nous apaise énormément.' },
  { name: 'Marcus Vance', role: 'Fils aidant', text: "Bien plus simple que tout ce qu'on avait essayé. Mon père l'a adoptée en quelques minutes." },
  { name: 'Chloé & Julien', role: 'Petits-enfants', text: 'On envoie des photos, et notre grand-mère les voit directement en grand, sans manipulation.' },
  { name: 'Arthur Pemberton', role: 'Aidant', text: "Le rappel des médicaments et l'alerte SOS m'ont vraiment rassuré au quotidien." },
  { name: 'Clara & Tom', role: "Enfants d'un senior", text: 'On a tout configuré à distance en dix minutes, depuis notre salon.' },
  { name: 'Oliver Voight', role: 'Aidant à distance', text: 'Enfin une solution pensée pour les seniors, pas une appli de plus à gérer.' },
  { name: 'Sarah Weaver', role: 'Fille aidante', text: "Ma mère sait qu'elle peut nous joindre en un geste, à tout moment." },
]

const avatarColors = ['#1463ff', '#39adb5', '#6647e8', '#2f6bff', '#f5a623', '#2fbf6e']

function initials(name: string) {
  return name
    .split(/[\s&]+/)
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
}

export default function Testimonials() {
  return (
    <section id="tarifs" className="relative overflow-hidden py-28 lg:py-32" style={{ background: 'var(--color-blue)' }}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(circle at 18% 12%, rgba(255,255,255,0.10), transparent 42%)' }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-extrabold leading-[1.08] text-white sm:text-[2.7rem]">
            Adoré par
            <br />
            nos familles.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[0.98rem] leading-relaxed" style={{ color: 'rgba(255,255,255,0.78)' }}>
            Des milliers de familles utilisent PicPhone pour garder un contact régulier et accompagner leurs proches
            avec sérénité.
          </p>
        </Reveal>

        <div className="mt-14 gap-5 [column-fill:_balance] sm:columns-2 lg:columns-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.05} className="mb-5 break-inside-avoid">
              <figure className="rounded-[16px] p-6" style={{ background: 'var(--color-navy)' }}>
                <div className="mb-3 flex gap-0.5" style={{ color: '#f5a623' }} aria-label="Note 5 sur 5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={12} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="text-[0.92rem] leading-relaxed" style={{ color: 'rgba(255,255,255,0.86)' }}>
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-full text-[0.7rem] font-bold text-white"
                    style={{ background: avatarColors[i % avatarColors.length] }}
                    aria-hidden
                  >
                    {initials(t.name)}
                  </span>
                  <div>
                    <p className="text-[0.86rem] font-semibold text-white">{t.name}</p>
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      {t.role}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
