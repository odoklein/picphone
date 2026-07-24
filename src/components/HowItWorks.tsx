import { UserRound, Phone, KeyRound, UserPlus } from 'lucide-react'
import Reveal from './Reveal'
import AppScreenshot from './AppScreenshot'

const steps = [
  {
    n: '01',
    Icon: UserRound,
    title: 'Qui êtes-vous ?',
    text: 'L’aidant choisit son rôle et crée un espace sécurisé pour son proche.',
    src: '/images/screen-who-are-you.jpg',
    alt: 'Écran de sélection du rôle : aidant ou senior, sur PicPhone',
    cropTop: 9,
  },
  {
    n: '02',
    Icon: Phone,
    title: 'Un numéro suffit',
    text: 'Pas de mot de passe à retenir : juste un numéro de téléphone à confirmer.',
    src: '/images/screen-phone-entry.jpg',
    alt: 'Écran de saisie du numéro de téléphone sur PicPhone',
    cropTop: 9,
  },
  {
    n: '03',
    Icon: KeyRound,
    title: 'Jumelage en un code',
    text: 'Le senior entre un code à 8 caractères transmis par son aidant, et c’est tout.',
    src: '/images/screen-pairing-code.jpg',
    alt: 'Écran de jumelage par code sur PicPhone',
    cropTop: 5,
  },
  {
    n: '04',
    Icon: UserPlus,
    title: 'Le profil est prêt',
    text: 'L’aidant renseigne les informations essentielles, à distance, en quelques minutes.',
    src: '/images/screen-add-elder.jpg',
    alt: 'Écran d’ajout du profil senior sur PicPhone',
    cropTop: 9,
  },
]

export default function HowItWorks() {
  return (
    <section id="comment" className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="eyebrow mb-4" style={{ color: 'var(--color-violet)' }}>
            Comment ça marche
          </p>
          <h2 className="text-3xl font-extrabold leading-[1.1] sm:text-[2.6rem]">Un accompagnement en quatre étapes.</h2>
          <p className="mx-auto mt-4 max-w-md text-[1.02rem] leading-relaxed" style={{ color: 'var(--color-slate)' }}>
            Rapide, sécurisé et pensé pour être installé à distance — sans compétence technique requise.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <div className="flex h-full flex-col rounded-[16px] border border-black/5 bg-[#fafbfe] p-5 shadow-[0_16px_40px_-28px_rgba(16,21,79,0.4)]">
                <div className="mx-auto mb-5 w-[132px] overflow-hidden rounded-[22px] border-[6px] border-black bg-black shadow-[0_18px_36px_-16px_rgba(16,21,79,0.5)]">
                  <div className="relative aspect-[9/19.5] w-full">
                    <AppScreenshot src={s.src} alt={s.alt} cropTop={s.cropTop} />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold tracking-widest" style={{ color: 'var(--color-blue)' }}>
                    {s.n}
                  </span>
                  <span
                    className="flex h-7 w-7 items-center justify-center rounded-lg"
                    style={{ background: 'var(--color-grey)', color: 'var(--color-blue)' }}
                  >
                    <s.Icon size={14} />
                  </span>
                </div>
                <p className="mt-3 font-heading text-[0.98rem] font-bold leading-snug">{s.title}</p>
                <p className="mt-1.5 text-[0.85rem] leading-relaxed" style={{ color: 'var(--color-slate)' }}>
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
