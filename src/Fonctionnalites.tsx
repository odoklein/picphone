import { useEffect, useRef, type ComponentType } from 'react'
import {
  ArrowRight, Cake, CloudSun, Footprints, GlassWater, GripVertical, KeyRound,
  MapPin, MessageCircle, Phone, Pill, ScanFace, ShieldAlert, Siren, Smile,
  Stethoscope, UserPlus, Utensils, Video,
} from 'lucide-react'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'
import PhoneFrame from './components/PhoneFrame'
import AppScreenshot from './components/AppScreenshot'
import ScreenCrop from './components/ScreenCrop'
import Reveal from './components/Reveal'
import { SectionIndex, Underline } from './components/Editorial'
import { TRIAL_LABEL, TRIAL_MICRO, TRIAL_START } from './trial'

/* ---------- Content ----------
   Rule for this page: only what the app actually does today, described by the
   gesture it takes. Every screenshot is a real capture, none is a mockup. */

type Item = { Icon: ComponentType<{ size?: number }>; title: string; text: string }

const callFeatures: Item[] = [
  {
    Icon: ScanFace, title: 'L’écran d’accueil à visages',
    text: 'Rien à faire : c’est l’écran par défaut de son téléphone. Il ne peut pas en sortir, donc il ne peut pas s’y perdre.',
  },
  {
    Icon: Phone, title: 'Appeler d’un appui',
    text: 'Un appui sur la photo ouvre sa fiche : appeler, appel vidéo, message.',
  },
  {
    Icon: Video, title: 'L’appel vidéo',
    text: 'Le bouton violet. Le même geste que l’appel, en se voyant.',
  },
  {
    Icon: MessageCircle, title: 'Envoyer un message',
    text: 'Le bouton Messages affiche les mêmes visages. On choisit une photo, puis SMS, WhatsApp ou Telegram — selon ce que la famille utilise déjà.',
  },
  {
    Icon: GripVertical, title: 'Les contacts prioritaires',
    text: 'Vous marquez jusqu’à trois proches comme prioritaires : ce sont eux qui occupent le haut de son écran.',
  },
  {
    Icon: UserPlus, title: 'Ajouter un proche, à distance',
    text: 'Photo, prénom, lien de parenté, numéro. Le visage apparaît chez lui sans qu’il touche à quoi que ce soit.',
  },
]

/** The six daily cues, each shown by cropping the band that actually differs
 *  between otherwise identical home screens. */
const cues: { Icon: ComponentType<{ size?: number }>; src: string; title: string; text: string }[] = [
  { Icon: Pill, src: '/images/app/senior-rappels.jpg', title: 'Le médicament', text: 'Le nom, la dose, et une coche quand c’est pris.' },
  { Icon: Utensils, src: '/images/app/widget-repas.jpg', title: 'Le repas', text: 'Le déjeuner, le goûter, le dîner — à l’heure que vous choisissez.' },
  { Icon: GlassWater, src: '/images/app/widget-hydratation.jpg', title: 'L’hydratation', text: 'Le compte des verres dans la journée, un objectif simple.' },
  { Icon: Footprints, src: '/images/app/widget-mouvement.jpg', title: 'Le mouvement', text: 'Une marche, une durée. Rien de sportif, juste un rappel.' },
  { Icon: Stethoscope, src: '/images/app/widget-rendez-vous.jpg', title: 'Le rendez-vous médical', text: 'Le nom du médecin, l’heure, le jour. Affiché la veille et le jour même.' },
  { Icon: Cake, src: '/images/app/senior-accueil.jpg', title: 'L’anniversaire d’un proche', text: 'La photo, le prénom, l’âge. De quoi décrocher pour une bonne raison.' },
]

const careFeatures: Item[] = [
  {
    Icon: Siren, title: 'Le bouton SOS',
    text: 'Un appui sur SOS, une confirmation « OUI - Appeler SOS ». Deux gestes, pas un de plus.',
  },
  {
    Icon: ShieldAlert, title: 'Le contact d’urgence',
    text: 'Vous désignez qui décroche, parmi les proches déjà enregistrés. Lui ne peut pas le changer par erreur.',
  },
  {
    Icon: MapPin, title: 'L’alerte, avec la position',
    text: 'Vous recevez l’heure de l’alerte, vous ouvrez sa position, vous marquez comme résolue une fois rassuré.',
  },
  {
    Icon: Smile, title: 'L’humeur du jour',
    text: 'Trois visages sur son écran. Un appui, jamais obligatoire. De votre côté, l’historique et la tendance.',
  },
]

const steps = [
  {
    n: '01', title: 'Vous créez votre compte',
    text: 'Prénom, e-mail, mot de passe. Aucune carte bancaire demandée.',
    src: '/images/app/aidant-compte.jpg', alt: 'Écran de création de compte aidant',
  },
  {
    n: '02', title: 'Vous créez son profil',
    text: 'Prénom, date de naissance, numéro, adresse. Deux minutes, depuis votre canapé.',
    src: '/images/app/aidant-profil-senior.jpg', alt: 'Formulaire « Ajouter un senior » dans l’application aidant',
  },
  {
    n: '03', title: 'Vous récupérez le code',
    text: 'Paramètres → Synchroniser. Un code de 8 caractères, à copier et à lui envoyer.',
    src: '/images/app/aidant-code-appairage.jpg', alt: 'Code d’appairage à 8 caractères affiché dans l’application aidant',
  },
  {
    n: '04', title: 'Il saisit le code, une seule fois',
    text: 'Un écran, un champ, des gros caractères. Ensuite l’écran à visages s’installe, et il n’en sort plus.',
    src: '/images/app/senior-code.jpg', alt: 'Écran de saisie du code de jumelage sur le téléphone du senior',
  },
]

/* ---------- Page ---------- */

export default function Fonctionnalites() {
  const familles = useRef<HTMLElement>(null)
  const reperes = useRef<HTMLElement>(null)
  const urgence = useRef<HTMLElement>(null)
  const install = useRef<HTMLElement>(null)

  useEffect(() => {
    const prev = document.title
    document.title = 'PicPhone | Les fonctionnalités, et comment elles s’utilisent'
    window.scrollTo(0, 0)
    return () => { document.title = prev }
  }, [])

  /* The router keeps the page identity in the hash, so a second `#anchor` is
     impossible here — the summary scrolls by hand instead. */
  const jump = (ref: React.RefObject<HTMLElement | null>) =>
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  const summary: { label: string; ref: React.RefObject<HTMLElement | null> }[] = [
    { label: 'Appeler, parler, voir', ref: familles },
    { label: 'Les repères du jour', ref: reperes },
    { label: 'Urgence et nouvelles', ref: urgence },
    { label: 'L’installation', ref: install },
  ]

  return (
    <div>
      <SiteHeader />

      <main id="top">
        {/* ============ HERO ============ */}
        <section className="ft-hero">
          <div className="shell">
            <Reveal className="ft-hero-copy">
              <span className="eyebrow">Ce que fait l’application, écran réel à l’appui</span>
              <h1 className="h-display ft-h1">
                Tout ce que PicPhone sait faire.<br />
                Et le geste que ça <Underline>demande.</Underline>
              </h1>
              <p className="lead">
                Dix-sept fonctions, trois familles. Aucune capture inventée : ce sont les écrans
                de l’application telle qu’elle est aujourd’hui, côté senior comme côté aidant.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary btn-lg" href={TRIAL_START}>{TRIAL_LABEL} <ArrowRight size={18} /></a>
              </div>
              <p className="ft-micro">{TRIAL_MICRO}</p>
            </Reveal>

            <Reveal className="ft-summary" delay={0.1}>
              {summary.map(({ label, ref }, i) => (
                <button key={label} onClick={() => jump(ref)}>
                  <span className="ft-sum-no">{String(i + 1).padStart(2, '0')}</span>
                  {label}
                </button>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ============ 01 — APPELER, PARLER, VOIR ============ */}
        <section className="section ft-fam" ref={familles}>
          <div className="shell">
            <Reveal className="head">
              <SectionIndex n="01" label="Appeler, parler, voir" />
              <h2 className="h-section">Un visage,<br />et le lien <Underline>repart.</Underline></h2>
              <p>
                Tout part de la même grille de photos. Appeler, se voir, écrire : c’est toujours
                le même premier geste, choisir un visage.
              </p>
            </Reveal>

            <Reveal className="ft-shots" delay={0.08}>
              <figure>
                <PhoneFrame width={214} statusBar={false}>
                  <AppScreenshot src="/images/app/senior-accueil.jpg" alt="Écran d’accueil du senior avec les visages de ses proches" cropTop={0} />
                </PhoneFrame>
                <figcaption>Son écran d’accueil</figcaption>
              </figure>
              <figure>
                <PhoneFrame width={214} statusBar={false}>
                  <AppScreenshot src="/images/app/senior-appel.jpg" alt="Fiche d’un proche : appeler, appel vidéo, message" cropTop={0} />
                </PhoneFrame>
                <figcaption>La fiche d’un proche</figcaption>
              </figure>
              <figure>
                <PhoneFrame width={214} statusBar={false}>
                  <AppScreenshot src="/images/app/senior-message.jpg" alt="Écran « Envoyer un message » : les mêmes visages" cropTop={0} />
                </PhoneFrame>
                <figcaption>Envoyer un message</figcaption>
              </figure>
            </Reveal>

            <div className="ft-list">
              {callFeatures.map(({ Icon, title, text }, i) => (
                <Reveal className="ft-item" key={title} delay={0.04 * i}>
                  <span className="ic"><Icon size={20} /></span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 02 — LES REPÈRES DU JOUR ============ */}
        <section className="section ft-cues" ref={reperes}>
          <div className="shell">
            <Reveal className="head">
              <SectionIndex n="02" label="Les repères du jour" />
              <h2 className="h-section">Six repères,<br />en haut de son <Underline>écran.</Underline></h2>
              <p>
                Vous les activez un par un depuis votre téléphone — heure, libellé, fréquence.
                Lui n’a qu’à les voir passer, et à cocher quand c’est fait. La météo du jour
                s’affiche en plus, sans réglage.
              </p>
            </Reveal>

            <div className="ft-cues-grid">
              <div className="ft-rail">
                {cues.map(({ Icon, src, title, text }, i) => (
                  <Reveal className="ft-rail-item" key={title} delay={0.05 * i}>
                    <ScreenCrop src={src} alt={`Le repère « ${title} » sur l’écran du senior`} x={4} y={6} w={92} h={14} />
                    <div className="ft-rail-copy">
                      <h3><span className="ic"><Icon size={17} /></span>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal className="ft-cues-aside" delay={0.1}>
                <PhoneFrame width={222} statusBar={false}>
                  <AppScreenshot src="/images/app/aidant-widgets.jpg" alt="Liste des widgets à configurer dans l’application aidant" cropTop={0} />
                </PhoneFrame>
                <span className="cap"><i />Côté aidant</span>
                <p>
                  Hydratation, médicaments, rendez-vous, mouvement, repas : chacun s’active
                  et se règle ici. Rien ne s’affiche chez lui tant que vous ne l’avez pas voulu.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ 03 — URGENCE ET NOUVELLES ============ */}
        <section className="section ft-fam ft-care" ref={urgence}>
          <div className="shell">
            <Reveal className="head">
              <SectionIndex n="03" label="Urgence et nouvelles" />
              <h2 className="h-section">Savoir que ça va,<br />sans le <Underline>surveiller.</Underline></h2>
              <p>
                Pas de micro ouvert, pas de position suivie en continu. Une alerte quand il la
                déclenche, des nouvelles quand il en donne.
              </p>
            </Reveal>

            <Reveal className="ft-shots" delay={0.08}>
              <figure>
                <PhoneFrame width={214} statusBar={false}>
                  <AppScreenshot src="/images/app/senior-sos.jpg" alt="Confirmation « Appeler le contact SOS ? » sur l’écran du senior" cropTop={0} />
                </PhoneFrame>
                <figcaption>L’appui sur SOS</figcaption>
              </figure>
              <figure>
                <PhoneFrame width={214} statusBar={false}>
                  <AppScreenshot src="/images/app/aidant-alerte-sos.jpg" alt="Détail d’une alerte SOS côté aidant, avec la position" cropTop={0} />
                </PhoneFrame>
                <figcaption>L’alerte, chez vous</figcaption>
              </figure>
              <figure>
                <PhoneFrame width={214} statusBar={false}>
                  <AppScreenshot src="/images/app/aidant-humeur.jpg" alt="Historique d’humeur dans l’application aidant" cropTop={0} />
                </PhoneFrame>
                <figcaption>L’humeur, jour après jour</figcaption>
              </figure>
            </Reveal>

            <div className="ft-list">
              {careFeatures.map(({ Icon, title, text }, i) => (
                <Reveal className="ft-item" key={title} delay={0.04 * i}>
                  <span className="ic"><Icon size={20} /></span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 04 — L'INSTALLATION ============ */}
        <section className="section ft-install" ref={install}>
          <div className="shell">
            <Reveal className="head">
              <SectionIndex n="04" label="L’installation" />
              <h2 className="h-section">Quatre écrans,<br />et c’est <Underline>installé.</Underline></h2>
              <p>
                Trois se passent sur votre téléphone. Le quatrième est le seul geste demandé à
                votre parent, et il ne se répète jamais.
              </p>
            </Reveal>

            <div className="ft-steps">
              {steps.map(({ n, title, text, src, alt }, i) => (
                <Reveal className="ft-step" key={n} delay={0.08 * i}>
                  <div className="ft-step-phone">
                    <PhoneFrame width={186} statusBar={false}>
                      <AppScreenshot src={src} alt={alt} cropTop={0} />
                    </PhoneFrame>
                    <span className="ft-step-no">{n}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </Reveal>
              ))}
            </div>

            <Reveal className="ft-install-foot" delay={0.2}>
              <span><KeyRound size={17} /> Un seul code, une seule fois. Ensuite tout se met à jour tout seul.</span>
              <span><CloudSun size={17} /> L’application existe en français et en anglais, des deux côtés.</span>
            </Reveal>
          </div>
        </section>

        {/* ============ CTA — le même bouton que partout ============ */}
        <section id="cta" className="cta on-blue ft-cta">
          <div className="shell">
            <Reveal className="ft-cta-inner">
              <h2>Le plus simple reste de l’essayer.</h2>
              <p>Quatre contacts, leurs photos, et une semaine pour voir ce que ça change.</p>
              <div className="cta-actions">
                <a className="btn btn-white btn-lg" href={TRIAL_START}>{TRIAL_LABEL} <ArrowRight size={18} /></a>
              </div>
              <p className="cta-micro">{TRIAL_MICRO}</p>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
