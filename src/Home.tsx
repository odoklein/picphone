import { type ComponentType } from 'react'
import {
  ArrowRight, Check, Gift, HeartHandshake, Mail, MapPin, MessageCircleHeart,
  Mic, Phone, RefreshCw, Smartphone, Smile,
} from 'lucide-react'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'
import PhoneFrame from './components/PhoneFrame'
import AppScreenshot from './components/AppScreenshot'
import HeroBackdrop from './components/HeroBackdrop'
import VideoPreview from './components/VideoPreview'
import LeadForm from './components/LeadForm'
import Reveal from './components/Reveal'
import { SectionIndex, Underline } from './components/Editorial'
import { DISCOVER_ANCHOR, DISCOVER_LABEL, TRIAL_LABEL, TRIAL_MICRO, TRIAL_START } from './trial'

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

const steps = [
  { num: '01', Icon: Smartphone, title: 'L’aidant installe', text: 'L’aidant installe et paramètre PicPhone.' },
  { num: '02', Icon: RefreshCw, title: 'L’aidant synchronise', text: 'Les aidants configurent et synchronisent l’interface du senior avec les contacts et les éléments nécessaires à son utilisation.' },
  { num: '03', Icon: Check, title: 'C’est prêt', text: 'Le senior retrouve une interface simple avec les photos de ses proches et les fonctions utiles à son quotidien.' },
]

/* Placeholders, not real customers — the brief lists these as
   [TÉMOIGNAGE 01/02/03] to collect, not copy to write. */
const testimonialSlots = [1, 2, 3]

/* Placeholders, not a validated tariff — the brief defers the real pricing
   proposal. Names and inclusions are indicative, ready to be replaced. */
const plans = [
  {
    name: 'Découverte', price: 'Essai gratuit', note: '7 jours, sans carte bancaire',
    features: ['Jusqu’à 4 contacts avec photo', 'Appels audio et vidéo', 'Rappels du quotidien'],
  },
  {
    name: 'Famille', price: 'Tarif à définir', note: 'par mois, un aidant',
    features: ['Contacts illimités', 'Tous les rappels et widgets', 'Support par e-mail'],
    highlight: true,
  },
  {
    name: 'Famille+', price: 'Tarif à définir', note: 'par mois, plusieurs aidants',
    features: ['Tout Famille, et plus', 'Plusieurs aidants sur un même profil senior', 'Support prioritaire'],
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
                  PicPhone permet aux personnes âgées d’appeler et de voir leurs proches en un geste,
                  simplement en cliquant sur leur photo.
                </p>
                <div className="hero-actions">
                  <a className="btn btn-primary btn-lg" href={DISCOVER_ANCHOR}>{DISCOVER_LABEL} <ArrowRight size={18} /></a>
                </div>
              </Reveal>
              <div className="hero-cine-stage" aria-hidden />
            </div>
          </div>
        </section>

        {/* ============ 02 — LE CONSTAT ============ */}
        <section id="constat" className="section constat">
          <div className="shell">
            <Reveal className="head eh-center">
              <SectionIndex n="01" label="Le constat" center />
              <h2 className="h-section">La technologie <Underline>isole</Underline> les seniors</h2>
              <p>
                En France, de nombreux seniors vivent seuls et voient leurs proches moins souvent. Et
                lorsque la technologie devient trop compliquée, elle peut parfois renforcer cette distance
                au lieu de la réduire.
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
            <Reveal delay={0.12}>
              <VideoPreview
                src="/images/app/senior-accueil.jpg"
                alt="Interface PicPhone côté senior : les visages des proches et les rappels du quotidien"
                label="Vidéo de démonstration — à venir"
              />
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

        {/* ============ 05 — COMMENT ÇA MARCHE ? ============ */}
        <section id="comment" className="section eh-deploy">
          <div className="shell">
            <Reveal className="head eh-center">
              <SectionIndex n="04" label="Comment ça marche ?" center />
              <h2 className="h-section">PicPhone se met en place en 3 étapes.</h2>
            </Reveal>
            <div className="eh-deploy-flow">
              {steps.map(({ num, Icon, title, text }, i) => (
                <Reveal className="eh-deploy-step" key={num} delay={i * 0.12}>
                  <span className="eh-deploy-num"><Icon size={22} /><i>{num}</i></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 06 — DÉMONSTRATION DE L’APPLICATION ============ */}
        <section id="demo" className="section demo">
          <div className="shell">
            <Reveal className="head eh-center">
              <SectionIndex n="05" label="Démonstration" center />
              <h2 className="h-section">Plus qu’un appel, une présence <Underline>au quotidien.</Underline></h2>
              <p>
                La vidéo doit permettre de voir clairement l’interface et les fonctionnalités : appels
                audio et vidéo, photos des proches et rappels du quotidien.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <VideoPreview
                src="/images/app/aidant-tableau-de-bord.jpg"
                alt="Tableau de bord de l’aidant, avec les proches, les rappels et l’activité du senior"
                width={300}
              />
            </Reveal>
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

        {/* ============ 08 — TARIFS ============ */}
        <section id="tarifs" className="section tarifs">
          <div className="shell">
            <Reveal className="head eh-center">
              <SectionIndex n="07" label="Tarifs" center />
              <h2 className="h-section">Choisissez la formule qui vous convient.</h2>
            </Reveal>
            <Reveal className="parrain-banner" delay={0.08}>
              <Gift size={18} /> Pour tout parrainage, vous obtenez un mois gratuit en tant qu’aidant.
            </Reveal>
            <div className="price-grid">
              {plans.map(({ name, price, note, features, highlight }, i) => (
                <Reveal className={highlight ? 'price-card is-highlight' : 'price-card'} key={name} delay={i * 0.1}>
                  {highlight && <span className="price-tag">Formule la plus choisie</span>}
                  <h3>{name}</h3>
                  <p className="price-value">{price}</p>
                  <p className="price-note">{note} · indicatif, en cours de validation</p>
                  <ul>
                    {features.map((f) => <li key={f}><Check size={16} />{f}</li>)}
                  </ul>
                </Reveal>
              ))}
            </div>
            <Reveal className="tarifs-cta" delay={0.2}>
              <a className="btn btn-primary btn-lg" href={TRIAL_START}>{TRIAL_LABEL} <ArrowRight size={18} /></a>
            </Reveal>
          </div>
        </section>

        {/* ============ 09 — FAQ / AIDE ============ */}
        <section id="faq" className="section faq">
          <div className="shell faq-grid">
            <Reveal className="faq-aside faq-aside-form">
              <SectionIndex n="08" label="FAQ / Aide" />
              <h2 className="h-section">Vos questions, nos réponses.</h2>
              <p>Une question qui n’est pas dans la liste ? Écrivez-nous.</p>
              <LeadForm />
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

        {/* ============ 10 — CONTACT ============ */}
        <section id="contact" className="section contact">
          <div className="shell contact-grid">
            <Reveal className="head">
              <SectionIndex n="09" label="Contact" />
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

        {/* ============ 11 — CTA FINAL ============ */}
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
              <div className="cta-preview">
                <div className="pv-video">
                  <img src="/images/family-senior-lifestyle.png" alt="Aperçu d’un appel vidéo en famille" />
                  <span className="pv-live"><i /> EN DIRECT</span>
                </div>
                <div className="pv-bar">
                  <span className="pv-btn" style={{ background: 'rgba(255,255,255,.16)' }}><Mic size={15} color="#fff" /></span>
                  <span className="pv-btn" style={{ background: '#ff5b5b' }}><Phone size={15} color="#fff" /></span>
                </div>
              </div>
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
