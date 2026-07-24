import { Check } from 'lucide-react'
import Reveal from './Reveal'

const trust = ['Photos familiales', 'Interface claire', 'Configuration à distance', 'Installation guidée']

export default function FinalCTA() {
  return (
    <section id="cta" className="bg-white py-32 lg:py-40">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-10">
        <Reveal>
          <p className="eyebrow mb-5" style={{ color: 'var(--color-blue)' }}>
            Une application pensée pour les familles
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-[2.4rem] font-extrabold leading-[1.08] sm:text-[3rem]">
            Plus qu&apos;un appel.
            <br />
            Une présence au quotidien.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-md text-[1.05rem] leading-relaxed" style={{ color: 'var(--color-slate)' }}>
            Un proche prépare l&apos;application à distance. Le senior n&apos;a plus qu&apos;à reconnaître un visage,
            le toucher et appeler.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href="#top" className="btn-primary">
              Découvrir PicPhone
            </a>
            <a href="#comment" className="btn-ghost">
              Voir comment ça marche
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2.5">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-1.5 text-sm" style={{ color: 'var(--color-slate)' }}>
                <Check size={15} style={{ color: 'var(--color-teal)' }} strokeWidth={2.5} />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
