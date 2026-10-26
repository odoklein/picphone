import { type ComponentType } from 'react'
import {
  ArrowRight, Check, Gift, HeartHandshake, ImagePlus, KeyRound,
  Mail, MapPin, MessageCircleHeart, Phone, Smartphone, Smile,
} from 'lucide-react'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'
import PhoneFrame from './components/PhoneFrame'
import AppScreenshot from './components/AppScreenshot'
import HeroBackdrop from './components/HeroBackdrop'
import VideoPreview, { type DemoSlide } from './components/VideoPreview'
import PresentationVideo from './components/PresentationVideo'
import LeadForm from './components/LeadForm'
import Reveal from './components/Reveal'
import { SectionIndex, Underline } from './components/Editorial'
import {
  DISCOVER_ANCHOR, DISCOVER_LABEL, DOWNLOAD_APP_LABEL, DOWNLOAD_INFO,
  TRIAL_LABEL, TRIAL_MICRO, TRIAL_SHORT_LABEL, TRIAL_START,
} from './trial'

/* ---------- Content ----------
   Follows the validated brief section by section (01 Hero → 11 CTA final).
   Where the brief itself flags content as unfinished — pricing, testimonials —
   the copy below says so plainly instead of inventing figures or people. */

const audiences: { Icon: ComponentType<{ size?: number }>; tag: string; title: string; text: string; points: string[]; tint: string }[] = [
  {
    Icon: Smile, tag: 'Pour les seniors', tint: 'teal',
    title: 'Une technologie qui s’adapte à eux.',
    text: 'Une interface simple, pensée pour être utilisée sans apprentissage compliqué.',
    points: ['Les proches sont visibles en photo', 'Un seul geste pour appeler', 'Pas de menus complexes'],
  },
  {
    Icon: HeartHandshake, tag: 'Pour les aidants et les familles', tint: 'blue',
    title: 'Garder le lien, simplement.',
    text: 'L’aidant configure PicPhone pour que le senior puisse ensuite l’utiliser en toute simplicité.',
    points: ['Installation et configuration par l’aidant', 'Gestion des proches', 'Synchronisation avec le téléphone du senior', 'Une solution pensée pour rassurer les proches'],
  },
]

/* 04 — Configuration par l'aidant, en trois étapes. Titres et textes repris
   du retour client (suivi du 12/10/2026) ; le code de jumelage est celui que
   l'application génère côté aidant. */
const configSteps: {
  num: string; Icon: ComponentType<{ size?: number }>; title: string; text: string
  shot: { src: string; alt: string; tap?: [number, number] }
}[] = [
  {
    num: '01', Icon: Smartphone, title: 'L’aidant installe l’application',
    text: 'Téléchargez l’application sur votre téléphone depuis l’App Store ou Google Play. Créez votre compte aidant en 5 minutes.',
    shot: { src: '/images/app/aidant-compte.jpg', alt: 'Formulaire de création du compte aidant', tap: [50, 92] },
  },
  {
    num: '02', Icon: ImagePlus, title: 'L’aidant configure l’interface',
    text: 'Ajoutez les proches avec leur photo, choisissez les contacts prioritaires et personnalisez les rappels (médicaments, rendez-vous médicaux…).',
    shot: { src: '/images/app/aidant-nouveau-contact.jpg', alt: 'Formulaire « Nouveau contact » : photo, prénom, lien, contact prioritaire', tap: [50, 18] },
  },
  {
    num: '03', Icon: KeyRound, title: 'Synchronisation avec le senior',
    text: 'Le senior télécharge l’application et la jumelle à la vôtre grâce au code que vous recevez en tant qu’aidant. Tout est prêt.',
    shot: { src: '/images/app/aidant-code-appairage.jpg', alt: 'Écran du code d’appairage à saisir sur le téléphone du senior', tap: [50, 42] },
  },
]

const configDemo: DemoSlide[] = configSteps.map(({ title, text, shot }) => ({ ...shot, caption: title, detail: text }))
/* What the senior explicitly never has to do — the counterpart of the three
   steps above, and the reassurance the caregiver is looking for. */
const seniorFreeOf = [
  'Aucun compte, aucun mot de passe, aucune adresse e-mail à créer.',
  'Un seul écran au premier lancement : la saisie du code.',
  'PicPhone devient l’écran d’accueil : pas de menu où se perdre.',
]

/* Placeholders, not real customers — the brief lists these as
   [TÉMOIGNAGE 01/02/03] to collect, not copy to write. */
const testimonialSlots = [1, 2, 3]

const plans = [
  {
    name: 'Gratuit',
    tagline: 'Pour découvrir PicPhone sans engagement',
    price: '0',
    period: '/mois',
    note: 'Jusqu’à 4 contacts · à vie',
    features: ['Jusqu’à 4 contacts avec photo', 'Appel vocal & vidéo', 'Messagerie simplifiée'],
    cta: TRIAL_LABEL,
  },
  {
    name: 'Famille',
    tagline: 'Pour un lien sans limite avec tous les proches',
    price: '5,90',
    period: '/mois',
    note: 'Dès le 5ᵉ contact · sans engagement',
    features: [
      'Contacts illimités avec photo',
      'Appel vocal & vidéo illimités',
      'Messagerie simplifiée',
      'Galerie photos illimitée',
      'Contacts prioritaires personnalisés',
      'Rappels personnalisés avancés',
      'Suivi humeur quotidien',
      'Bouton SOS',
      'Météo & rappels quotidiens',
      'Support aidant prioritaire',
    ],
    cta: TRIAL_SHORT_LABEL,
    highlight: true,
  },
]

const faqItems = [
  { q: 'PicPhone fonctionne-t-il sur tous les téléphones ?', a: 'PicPhone est compatible avec les smartphones récents sous iOS et Android, aussi bien côté senior que côté aidant.' },
  { q: 'Qui doit télécharger l’application ?', a: 'L’aidant télécharge PicPhone et crée le profil du senior. L’application est ensuite installée et synchronisée sur le téléphone du senior.' },
  { q: 'Comment paramétrer le téléphone ?', a: 'Tout se fait depuis l’application de l’aidant, en quelques étapes guidées : ajout des proches, des photos, puis synchronisation avec le téléphone du senior.' },
  { q: 'Combien de temps prend l’installation ?', a: 'Quelques minutes suffisent pour créer le profil, ajouter les premiers contacts et synchroniser le téléphone du senior.' },
  { q: 'Peut-on ajouter un deuxième aidant (ex : plusieurs enfants) avec accès au même compte senior ?', a: 'Oui. Plusieurs aidants peuvent être rattachés au même profil senior et gérer les contacts et les rappels ensemble.' },
  { q: 'L’application est-elle payante ?', a: 'PicPhone propose un essai gratuit, puis des formules payantes détaillées dans la section Tarifs.' },
  { q: 'Faut-il une connexion Internet pour utiliser PicPhone ?', a: 'Oui, une connexion Wi-Fi ou données mobiles est nécessaire pour les appels audio et vidéo.' },
  { q: 'Le senior peut-il recevoir des appels avec PicPhone ?', a: 'Oui. Le senior peut recevoir des appels de ses proches enregistrés, en plus de pouvoir en passer d’un geste.' },
  { q: 'Les proches doivent-ils installer quelque chose pour appeler le senior ?', a: 'Non, le senior peut appeler ou être appelé directement depuis son écran PicPhone, sans démarche particulière pour ses proches.' },
  { q: 'Comment fonctionne le parrainage (un mois offert) ?', a: 'En parrainant une autre famille, vous bénéficiez d’un mois gratuit sur votre formule aidant dès que le filleul s’abonne.' },
]

export default function Home() {
  return (
    <div>
      <SiteHeader />

      <main id="top">
        {/* ============ 01 — HERO ============ */}
        <section className="hero-cine on-dark">
          <div className="hero-cine-media" aria-hidden>
            <HeroBackdrop />
            <div className="hero-cine-scrim" />
          </div>
          <div className="shell">
            <div className="hero-cine-grid">
              <Reveal className="hero-cine-copy">
                <h1 className="h-display hero-h1">
                  Rester proches,<br />
                  même à <span className="mark">distance.
                    <svg viewBox="0 0 320 20" preserveAspectRatio="none"><path d="M6 13 C 80 4 240 4 314 11" /></svg>
                  </span>
                </h1>
                <p className="lead">
                  PicPhone, l’application qui permet à un senior d’appeler en audio ou en vidéo,
                  simplement en cliquant sur une photo.
                </p>
                <p className="hero-origin">Conçue par un aidant pour sa maman.</p>
                <div className="hero-actions">
                  <a className="btn btn-primary btn-lg" href="#cta">{DOWNLOAD_APP_LABEL} <ArrowRight size={18} /></a>
                  <a className="tlink" href={DISCOVER_ANCHOR}>{DISCOVER_LABEL} <ArrowRight size={17} /></a>
                </div>
                <p className="hero-download-info">{DOWNLOAD_INFO}</p>
              </Reveal>
              {/* Sous la photo de famille, l'interface du senior telle qu'il la voit. */}
              <div className="hero-cine-stage">
                <div className="hero-senior">
                  <PhoneFrame width={216} statusBar={false}>
                    <AppScreenshot src="/images/app/senior-accueil.jpg" alt="L’écran PicPhone du senior : ses proches en photo, prêts à être appelés" cropTop={0} />
                  </PhoneFrame>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ 02 — LE CONSTAT ============
             La vidéo « trop d'applications » à gauche, le texte à droite. */}
        <section id="constat" className="section constat">
          <div className="shell constat-grid">
            <Reveal className="constat-media">
              <PresentationVideo
                src="/videos/picphone-presentation.mp4"
                poster="/videos/picphone-presentation-poster.jpg"
                title="Vidéo : trop d’applications, trop de confusion pour rester en contact"
                transcript="Trop d’applications. Trop de confusion. Rester proche ne devrait pas être compliqué. Quelques réglages suffisent ! Puis tout fonctionne, naturellement. Plus qu’un appel : une présence au quotidien. PicPhone."
              />
            </Reveal>
            <Reveal className="constat-copy" delay={0.1}>
              <SectionIndex n="01" label="Le constat" />
              <h2 className="h-section">Ce n’est pas aux seniors de s’adapter. C’est à la <Underline>technologie.</Underline></h2>
              <p>
                Pour nous, appeler un proche est un réflexe. Pour beaucoup de seniors, c’est une
                succession d’étapes où l’on peut se perdre : l’écran à déverrouiller, la bonne
                application à trouver, le contact à chercher, l’appel, le message ou la vidéo à choisir.
              </p>
              <p>
                À force de craindre l’erreur, le senior finit par ne plus essayer, et l’isolement
                s’installe, doucement.
              </p>
              <p className="constat-born">PicPhone est né de ce constat.</p>
              <p>
                Fini les détours : un seul outil, les visages de ceux qu’on aime apparaissent à
                l’écran. Plus de menus à explorer. Appeler n’a jamais été aussi simple.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ============ 03 — LA SOLUTION ============ */}
        <section id="solution" className="section">
          <div className="shell eh-why-grid">
            <Reveal className="head">
              <SectionIndex n="02" label="La solution" />
              <h2 className="h-section">Appeler ses proches, simplement.<br />Des solutions pensées pour le quotidien.</h2>
              <p>
                Avec PicPhone, le senior retrouve ses proches en un geste : il suffit d’appuyer sur une
                photo pour lancer un appel audio ou vidéo. L’application l’accompagne aussi jour après jour
                avec des rappels utiles, tels que rendez-vous médicaux, prise de médicaments, hydratation,
                activité physique. PicPhone réunit ainsi le lien avec les proches et l’accompagnement du
                quotidien, dans une seule interface, pensée pour être simple.
              </p>
            </Reveal>
            {/* TODO — remplacer par la vidéo de la solution (interface senior) fournie par Sonia. */}
            <Reveal delay={0.12}>
              <PhoneFrame width={290} statusBar={false}>
                <AppScreenshot src="/images/app/senior-appel.jpg" alt="Le senior appelle un proche depuis PicPhone" cropTop={0} />
              </PhoneFrame>
            </Reveal>
          </div>
        </section>

        {/* ============ 04 — POUR QUI ? ============ */}
        <section id="pourqui" className="section pourqui">
          <div className="shell">
            <Reveal className="head eh-center">
              <SectionIndex n="03" label="Pour qui ?" center />
              <h2 className="h-section">Une application pour chacun.</h2>
            </Reveal>
            <div className="pourqui-grid">
              {audiences.map(({ Icon, tag, title, text, points, tint }, i) => (
                <Reveal className={`eh-card t-${tint}`} key={title} delay={i * 0.1}>
                  <span className="eh-card-ic"><Icon size={24} /></span>
                  <span className="eh-card-tag">{tag}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <ul className="eh-card-list">
                    {points.map((p) => <li key={p}><i aria-hidden />{p}</li>)}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 05 — CONFIGURATION PAR L’AIDANT ============
             Remplace l’ancien couple « Comment ça marche » + « Démonstration » :
             la démo reprenait la même interface que La solution, sans rien
             apprendre de plus. Cette section détaille le paramétrage, ce que la
             précédente ne faisait pas. */}
        <section id="configuration" className="section eh-deploy config">
          <div className="shell">
            <Reveal className="head eh-center">
              <SectionIndex n="04" label="Configuration par l’aidant" center />
              <h2 className="h-section">Trois étapes, <Underline>et tout est prêt.</Underline></h2>
              <p>
                Tout le paramétrage se fait depuis le téléphone de l’aidant, en quelques minutes :
                les proches, leurs photos, les rappels du quotidien. Le senior, lui, n’a qu’un code
                à saisir.
              </p>
            </Reveal>

            <div className="config-grid">
              <ol className="config-steps">
                {configSteps.map(({ num, Icon, title, text }, i) => (
                  <Reveal as="li" className="config-step" key={num} delay={i * 0.06}>
                    <span className="config-step-ic" aria-hidden><Icon size={20} /></span>
                    <div className="config-step-body">
                      <span className="config-step-no">Étape {num}</span>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </Reveal>
                ))}
              </ol>

              <div className="config-aside">
                <Reveal delay={0.1}>
                  <VideoPreview
                    src="/images/app/aidant-tableau-de-bord.jpg"
                    alt="Tableau de bord de l’aidant : les proches configurés, les rappels et l’activité du senior"
                    label="Voir le paramétrage, étape par étape"
                    width={252}
                    slides={configDemo}
                  />
                </Reveal>
                <Reveal className="config-note" delay={0.16}>
                  <h3><Smartphone size={18} /> Côté senior, un code et c’est tout</h3>
                  <ul>
                    {seniorFreeOf.map((p) => (
                      <li key={p}><span className="check-ic"><Check size={13} /></span>{p}</li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ============ 06 — TARIFS ============ */}
        <section id="tarifs" className="section tarifs">
          <div className="shell">
            <Reveal className="head eh-center">
              <SectionIndex n="05" label="Tarifs" center />
              <h2 className="h-section">Choisissez la formule qui vous convient.</h2>
            </Reveal>
            <Reveal className="parrain-banner" delay={0.08}>
              <Gift size={18} /> Pour tout parrainage, vous obtenez un mois gratuit en tant qu’aidant.
            </Reveal>
            <div className="price-grid">
              {plans.map(({ name, tagline, price, period, note, features, cta, highlight }, i) => (
                <Reveal className={highlight ? 'price-card is-highlight' : 'price-card'} key={name} delay={i * 0.1}>
                  {highlight && <span className="price-badge">Le plus choisi</span>}
                  <h3>{name}</h3>
                  <p className="price-tagline">{tagline}</p>
                  <p className="price-value">
                    <span className="price-currency">€</span>
                    <span className="price-amount">{price}</span>
                    <span className="price-period">{period}</span>
                  </p>
                  <p className="price-note">{note}</p>
                  <ul>
                    {features.map((f) => (
                      <li key={f}><span className="check-ic"><Check size={13} /></span>{f}</li>
                    ))}
                  </ul>
                  <a className={highlight ? 'btn btn-primary price-btn' : 'btn btn-ghost price-btn'} href={TRIAL_START}>
                    {cta} <ArrowRight size={16} />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 07 — TÉMOIGNAGES ============ */}
        <section id="temoignages" className="section tstm">
          <div className="shell">
            <Reveal className="head eh-center">
              <SectionIndex n="06" label="Témoignages" center />
              <h2 className="h-section">Ils restent proches grâce à <Underline>PicPhone.</Underline></h2>
            </Reveal>
            <div className="tstm-grid placeholder-grid">
              {testimonialSlots.map((n, i) => (
                <Reveal className="tcard placeholder" key={n} delay={i * 0.1}>
                  <span className="tavatar placeholder-av" aria-hidden><MessageCircleHeart size={20} /></span>
                  <blockquote>
                    Emplacement réservé pour le témoignage {String(n).padStart(2, '0')} — à recueillir
                    auprès d’une famille utilisatrice, avec son accord, avant publication.
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 08 — FAQ / AIDE ============ */}
        <section id="faq" className="section faq">
          <div className="shell faq-grid">
            {/* Pas de formulaire ici : un seul point de contact sur la page,
                celui de la section Contact. L’aside y renvoie. */}
            <Reveal className="faq-aside">
              <SectionIndex n="07" label="FAQ / Aide" />
              <h2 className="h-section">Vos questions, nos réponses.</h2>
              <p>Une question qui n’est pas dans la liste ? Notre équipe vous répond directement.</p>
              <a className="btn btn-ghost" href="#contact">Nous écrire <ArrowRight size={16} /></a>
            </Reveal>
            <div className="eh-faq-list">
              {faqItems.map((item) => (
                <details className="eh-faq-item" key={item.q}>
                  <summary>{item.q}<span className="eh-faq-icon" aria-hidden /></summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 09 — CONTACT ============ */}
        <section id="contact" className="section contact">
          <div className="shell contact-grid">
            <Reveal className="head">
              <SectionIndex n="08" label="Contact" />
              <h2 className="h-section">Une question ? <Underline>Parlons-en.</Underline></h2>
              <p>Vous souhaitez en savoir plus sur PicPhone ? Notre équipe est à votre disposition.</p>
              <div className="contact-info">
                <a href="mailto:bonjour@picphone.fr"><Mail size={17} /> bonjour@picphone.fr</a>
                <a href="tel:+33100000000"><Phone size={17} /> 01 00 00 00 00</a>
                <span><MapPin size={17} /> France</span>
              </div>
            </Reveal>
            <Reveal className="contact-card" delay={0.1}>
              <LeadForm />
            </Reveal>
          </div>
        </section>

        {/* ============ 10 — CTA FINAL ============ */}
        <section id="cta" className="cta on-blue">
          <div className="shell cta-grid">
            <Reveal className="cta-copy">
              <h2>Le lien commence par un simple appel.</h2>
              <p>Avec PicPhone, rester proche devient aussi simple qu’appuyer sur une photo.</p>
              <div className="cta-actions">
                <a className="btn btn-white btn-lg" href={TRIAL_START}>{TRIAL_LABEL} <ArrowRight size={18} /></a>
              </div>
              <p className="cta-micro">{TRIAL_MICRO}</p>
            </Reveal>
            <div className="cta-stage">
              <div className="cta-phone">
                <PhoneFrame width={276} statusBar={false}><AppScreenshot src="/images/app/senior-accueil.jpg" alt="Écran d’accueil du senior" cropTop={0} /></PhoneFrame>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
