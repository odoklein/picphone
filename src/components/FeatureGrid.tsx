import { Users, Pill, HeartPulse, LayoutDashboard, ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import AppScreenshot from './AppScreenshot'

const features = [
  {
    Icon: Users,
    tag: 'Contacts',
    title: 'Reconnaître d’un regard.',
    text: 'Grandes photos, deux gestes — appeler ou écrire. Fini les carnets d’adresses à rallonge.',
    src: '/images/screen-contact-actions.jpg',
    alt: 'Écran d’un contact avec les actions rapides : appeler, vidéo, message, dicter',
    cropTop: 8,
    tint: 'linear-gradient(160deg, #eefaf1 0%, #d7f2f0 100%)',
    accent: 'var(--color-teal)',
    span: 'lg:col-span-1 lg:row-span-2',
  },
  {
    Icon: Pill,
    tag: 'Traitements',
    title: 'Un rappel préparé à distance.',
    text: 'L’aidant configure les médicaments et horaires. Le senior est notifié au bon moment, en toute simplicité.',
    src: '/images/screen-medication-form.jpg',
    alt: 'Formulaire de création de médicament avec nom, dosage, horaires et répétition',
    cropTop: 9,
    tint: 'linear-gradient(160deg, #eef2fb 0%, #dfe8ff 100%)',
    accent: 'var(--color-blue)',
    span: 'lg:col-span-1',
  },
  {
    Icon: HeartPulse,
    tag: 'Humeur',
    title: 'Une nouvelle chaque jour.',
    text: 'Trois émoticônes, une réponse. L’aidant reçoit un signal doux, jamais alarmant.',
    src: '/images/screen-mood-check.jpg',
    alt: 'Écran de suivi de l’humeur avec trois options : Très bien, Bien, Mal',
    cropTop: 5,
    tint: 'linear-gradient(160deg, #f5f7fc 0%, #eef2fb 100%)',
    accent: 'var(--color-violet)',
    span: 'lg:col-span-1',
  },
  {
    Icon: LayoutDashboard,
    tag: 'Tableau de bord',
    title: 'Une vue d’ensemble apaisée.',
    text: 'Photos, humeur, alertes, contacts — tout ce qui compte, réuni sur un seul écran d’aidant.',
    src: '/images/screen-caregiver-dashboard.jpg',
    alt: 'Tableau de bord de l’aidant avec humeur du jour, contacts, photos, services et alertes SOS',
    cropTop: 9,
    tint: 'linear-gradient(160deg, #fff3ec 0%, #fce6d6 100%)',
    accent: '#e07a3c',
    span: 'lg:col-span-2',
  },
]

export default function FeatureGrid() {
  return (
    <section id="fonctionnalites" className="bg-white py-28 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4" style={{ color: 'var(--color-blue)' }}>
            Ce que PicPhone fait au quotidien
          </p>
          <h2 className="text-3xl font-extrabold leading-[1.08] sm:text-[2.7rem]">
            Quatre gestes essentiels.
            <br />
            <span style={{ color: 'var(--color-blue)' }}>Zéro complexité.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[1.02rem] leading-relaxed" style={{ color: 'var(--color-slate)' }}>
            Chaque fonctionnalité a été pensée pour être immédiate côté senior, et complètement pilotable à
            distance côté aidant.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:grid-rows-2">
          {features.map((f, i) => {
            const isTall = f.span?.includes('row-span-2')
            const isWide = f.span?.includes('col-span-2')

            return (
              <Reveal key={f.title} delay={i * 0.05} className={f.span}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[18px] border border-black/5 bg-white shadow-[0_18px_44px_-28px_rgba(16,21,79,0.35)] transition-shadow duration-300 hover:shadow-[0_26px_60px_-28px_rgba(16,21,79,0.45)]">
                  {/* screenshot region */}
                  <div
                    className={`relative overflow-hidden ${isWide ? 'aspect-[16/9]' : isTall ? 'aspect-[9/13]' : 'aspect-[16/12]'}`}
                    style={{ background: f.tint }}
                  >
                    <div
                      className={`absolute ${
                        isWide
                          ? 'left-1/2 top-8 w-[52%] -translate-x-1/2'
                          : isTall
                            ? 'left-1/2 top-8 w-[62%] -translate-x-1/2'
                            : 'left-1/2 top-6 w-[54%] -translate-x-1/2'
                      } transition-transform duration-500 group-hover:-translate-y-1`}
                    >
                      <div className="relative overflow-hidden rounded-[22px] border-[6px] border-black bg-black shadow-[0_20px_40px_-14px_rgba(16,21,79,0.4)]">
                        <div className="relative aspect-[9/19.5] w-full">
                          <AppScreenshot src={f.src} alt={f.alt} cropTop={f.cropTop} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* content */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2">
                      <span
                        className="flex h-8 w-8 items-center justify-center rounded-lg"
                        style={{ background: 'var(--color-grey)', color: f.accent }}
                      >
                        <f.Icon size={16} />
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: f.accent }}>
                        {f.tag}
                      </span>
                    </div>
                    <h3 className="mt-3 font-heading text-[1.15rem] font-bold leading-snug">{f.title}</h3>
                    <p className="mt-2 text-[0.9rem] leading-relaxed" style={{ color: 'var(--color-slate)' }}>
                      {f.text}
                    </p>
                    <a
                      href="#cta"
                      className="mt-4 inline-flex items-center gap-1 self-start text-[0.82rem] font-semibold transition-opacity group-hover:opacity-100"
                      style={{ color: f.accent, opacity: 0.85 }}
                    >
                      En savoir plus <ArrowUpRight size={13} />
                    </a>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
