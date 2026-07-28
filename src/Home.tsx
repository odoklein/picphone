import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Heart, Mic, Phone, ScanFace, Sparkles, Star } from 'lucide-react'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'
import PhoneFrame from './components/PhoneFrame'
import AppScreenshot from './components/AppScreenshot'
import AppClutter from './components/AppClutter'
import JourneyCarousel from './components/JourneyCarousel'
import Reveal from './components/Reveal'
import { SectionIndex, Underline } from './components/Editorial'
import { TRIAL_ANCHOR, TRIAL_LABEL, TRIAL_MICRO, TRIAL_START } from './trial'

/* ---------- Content ----------
   One message, everywhere on this page: PicPhone facilite la communication et
   réduit l'isolement des seniors. A block that explains the product without
   serving that sentence doesn't belong here.

   One button on the whole page, repeated word for word in the hero and at the
   bottom. Everything else that used to be a second path is a text link. */

const promise = [
  { icon: '/images/settings.svg', title: 'Quelques minutes', sub: 'pour tout configurer' },
  { icon: '/images/caregiving.svg', title: 'Rien à apprendre', sub: 'pour votre parent' },
  { icon: '/images/video-call.svg', title: 'Un appui', sub: 'et l’appel démarre' },
  { icon: '/images/community.svg', title: '4 contacts', sub: 'gratuits, sans engagement' },
]

/* §1.2 — the three lines that replace a feature list. No jargon, no icons. */
const benefitLines = [
  'Un seul écran, avec les visages des proches.',
  'Un appui sur une photo, l’appel démarre.',
  'Personne à appeler à l’aide pour y arriver.',
]

/* §1.3 — real app screens, one caption each. Not a tutorial: what changes. */
const screens = [
  {
    src: '/images/app/senior-accueil.jpg',
    alt: 'Écran d’accueil du senior : les visages de ses proches en grand, sans liste ni clavier',
    title: 'L’écran d’accueil du senior',
    text: 'Pas de liste de contacts, pas de clavier. Des grandes photos, dans l’ordre choisi par la famille.',
  },
  {
    src: '/images/app/senior-appel.jpg',
    alt: 'Fiche d’un proche avec les boutons appeler, appel vidéo et message',
    title: 'L’appel',
    text: 'Un appui sur la photo. L’appel part. C’est tout le geste à retenir.',
  },
  {
    src: '/images/app/senior-rappels.jpg',
    alt: 'Rappel de médicament affiché en haut de l’écran du senior',
    title: 'Les rappels du quotidien',
    text: 'Le médicament du matin, la météo du jour, un mot laissé par la famille. Des repères simples, sur le même écran.',
  },
  {
    src: '/images/app/aidant-tableau-de-bord.jpg',
    alt: 'Tableau de bord de l’aidant : contacts, photos, services et dernières nouvelles du senior',
    title: 'Le tableau de bord de l’aidant',
    text: 'À distance, vous ajoutez un contact, vous changez une photo, vous voyez que l’appel de dimanche a bien eu lieu.',
  },
]

const brandProof = [
  { Icon: Sparkles, label: 'Moins de confusion' },
  { Icon: ScanFace, label: 'Plus d’autonomie' },
  { Icon: Heart, label: 'Plus de présence' },
]

const testimonials = {
  feature: {
    body: 'Depuis PicPhone, ma mère m’envoie une photo chaque matin. On a retrouvé une forme de complicité qu’on n’avait plus depuis longtemps.',
    name: 'Camille', role: 'Fille de Nadia · Nantes', initial: 'C', tint: 't-cream',
  },
  side: [
    { body: 'Papa a 82 ans. Il n’a jamais aimé les smartphones. Aujourd’hui il utilise PicPhone tous les jours, sans nous appeler à l’aide.', name: 'Marc', role: 'Fils de Robert · Lyon', initial: 'M', tint: 't-teal' },
    { body: 'L’installation nous a pris cinq minutes. Le soir même, ma grand-mère avait partagé son humeur avec toute la famille.', name: 'Yasmine', role: 'Petite-fille de Aïcha · Marseille', initial: 'Y', tint: 't-violet' },
  ],
}

const faqItems = [
  { q: 'À qui s’adresse PicPhone ?', a: 'Aux seniors qui veulent rester en lien sans se battre avec la technologie, et aux proches qui veulent rester présents au quotidien, même à distance.' },
  { q: 'Qui installe l’application ?', a: 'Vous. Vous créez le profil, vous ajoutez les contacts avec leur photo — tout depuis votre propre téléphone. Votre parent n’a rien à installer.' },
  { q: 'Le senior doit-il savoir utiliser WhatsApp ?', a: 'Non. Il n’a ni menu ni application à apprendre. Sur son écran, il touche un visage et l’appel démarre.' },
  { q: 'Faut-il être présent pour l’installer ?', a: 'Presque pas. Tout se prépare à distance. Une seule étape demande d’être ensemble : la première fois que les deux téléphones se reconnaissent.' },
  { q: 'Et si nos proches utilisent des applications différentes ?', a: 'C’est justement le problème que PicPhone règle. Peu importe ce que vous utilisez de votre côté : de son côté à lui, il n’y a qu’un écran avec des visages.' },
  { q: 'Que contient l’essai gratuit ?', a: 'Jusqu’à quatre contacts, avec leurs photos, sans engagement et sans carte bancaire. De quoi voir ce que ça change en une semaine.' },
]

/* ---------- Decorative SVG ---------- */

function RibbonSymbol() {
  return (
    <svg className="ribbon-symbol" width="72" height="44" viewBox="0 0 72 44" fill="none" aria-hidden>
      <defs>
        <linearGradient id="rs" x1="0" y1="0" x2="72" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5FA0FF" /><stop offset="1" stopColor="#5AD1CE" />
        </linearGradient>
      </defs>
      <path d="M6 22 C 6 6 26 6 36 22 C 46 38 66 38 66 22 C 66 6 46 6 36 22 C 26 38 6 38 6 22 Z" stroke="url(#rs)" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  )
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div>
      <SiteHeader />

      <main id="top">
        {/* ============ 1.1 — HERO ============ */}
        <section className="hero-cine on-dark">
          <div className="hero-cine-media" aria-hidden>
            <img src="/images/family-senior-lifestyle.png" alt="" />
            <div className="hero-cine-scrim" />
          </div>
          <div className="shell">
            <div className="hero-cine-grid">
              <Reveal className="hero-cine-copy">
                <span className="eyebrow">Vous le configurez. Il n’a qu’à appuyer.</span>
                <h1 className="h-display hero-h1">
                  Redonnez à chaque appel<br />
                  la simplicité d’un <span className="mark">visage familier.
                    <svg viewBox="0 0 320 20" preserveAspectRatio="none"><path d="M6 13 C 80 4 240 4 314 11" /></svg>
                  </span>
                </h1>
                <p className="lead">
                  PicPhone remplace les menus, les icônes et les mots de passe par des visages.
                  Votre parent appuie sur la photo de sa fille, de son fils, de son petit-fils —
                  et l’appel démarre.
                </p>
                <p className="hero-assure-line">
                  Configurez PicPhone en quelques minutes, depuis votre propre téléphone.
                </p>
                <div className="hero-actions">
                  <a className="btn btn-primary btn-lg" href={TRIAL_ANCHOR}>{TRIAL_LABEL} <ArrowRight size={18} /></a>
                </div>
                <p className="hero-micro">{TRIAL_MICRO}</p>
              </Reveal>
              <div className="hero-cine-stage" aria-hidden />
            </div>
          </div>
        </section>

        {/* ============ PROMISE STRIP ============ */}
        <section className="promise">
          <div className="shell promise-inner">
            {promise.map(({ icon, title, sub }) => (
              <div className="promise-item" key={title + sub}>
                <img className="promise-ic" src={icon} alt="" aria-hidden />
                <p>{title}<span>{sub}</span></p>
              </div>
            ))}
          </div>
        </section>

        {/* ============ 1.2 — BÉNÉFICE CENTRAL ============ */}
        <section id="benefice" className="section benefice">
          <div className="shell">
            <Reveal className="head bene-head">
              <SectionIndex n="01" label="Le bénéfice" center />
              <h2 className="h-section">Moins d’écrans à comprendre.<br />Plus d’appels qui <Underline>arrivent.</Underline></h2>
              <p>
                Beaucoup de personnes âgées arrêtent d’appeler, non pas par manque d’envie, mais
                parce que le téléphone est devenu difficile. Trop d’applications, trop d’étapes,
                la crainte de se tromper. Petit à petit, les appels s’espacent.
              </p>
              <p className="bene-turn">PicPhone enlève tout ça.</p>
            </Reveal>

            <Reveal className="bene-lines" delay={0.1}>
              {benefitLines.map((line) => (
                <p key={line}><i aria-hidden /> {line}</p>
              ))}
            </Reveal>

            <Reveal className="bene-bridge" delay={0.18}>
              <span>Et du côté de la famille, on voit que le lien tient.</span>
            </Reveal>
          </div>
        </section>

        {/* ============ 1.3 — ÉCRAN PAR ÉCRAN (vraies captures) ============ */}
        <section id="ecrans" className="section ecrans">
          <div className="shell">
            <Reveal className="head">
              <SectionIndex n="02" label="Dans l’application" />
              <h2 className="h-section">Ce que ça change,<br />écran par <Underline>écran.</Underline></h2>
            </Reveal>

            <div className="ecrans-grid">
              {screens.map(({ src, alt, title, text }, i) => (
                <Reveal className="ecran" key={title} delay={0.08 * i}>
                  <div className="ecran-phone">
                    <PhoneFrame width={208} statusBar={false}><AppScreenshot src={src} alt={alt} cropTop={0} /></PhoneFrame>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </Reveal>
              ))}
            </div>

            {/* Visuel de transition — l'encombrement, ramené à un seul point d'entrée */}
            <Reveal className="ecrans-turn" delay={0.1}>
              <AppClutter />
              <p className="ecrans-turn-cap">Toutes les façons de s’appeler, ramenées à une seule.</p>
            </Reveal>
          </div>
        </section>

        {/* ============ 2 — CARROUSEL « De l'aidant au senior » ============ */}
        <section id="parcours" className="section parcours">
          <div className="shell">
            <Reveal className="head">
              <SectionIndex n="03" label="De l’aidant au senior" />
              <h2 className="h-section">Cinq images,<br />et tout est <Underline>dit.</Underline></h2>
            </Reveal>
          </div>
          <Reveal delay={0.08}>
            <div className="shell parcours-shell">
              <JourneyCarousel />
            </div>
          </Reveal>
        </section>

        {/* ============ LE LIEN — l'isolement, la raison d'être ============ */}
        <section id="lien" className="brand on-dark grain">
          <div className="brand-grid">
            <Reveal className="brand-copy">
              <SectionIndex n="04" label="Le lien retrouvé" />
              <h2>On croit qu’ils s’éloignent.<br />En réalité, ils n’y arrivent <Underline>plus.</Underline></h2>
              <p>PicPhone ne demande rien au senior : pas de mise à jour, pas de mot de passe, pas d’application à apprendre. Juste des visages connus. Et des nouvelles qui reviennent.</p>
              <div className="brand-proof">
                {brandProof.map(({ Icon, label }) => (
                  <span key={label}><Icon size={16} /> {label}</span>
                ))}
              </div>
              <div className="brand-stats">
                <div className="brand-stat">
                  <strong>750 000</strong>
                  <span>seniors en situation d’isolement en France</span>
                </div>
                <p className="brand-note">
                  L’isolement n’est pas qu’une tristesse. C’est un facteur de risque reconnu pour la santé.
                </p>
              </div>
            </Reveal>
            <div className="brand-media">
              <img src="/images/ephad.png" alt="Une senior en appel vidéo avec un proche, reliée par un ruban lumineux" loading="lazy" />
            </div>
          </div>
        </section>

        {/* ============ TÉMOIGNAGES ============ */}
        <section id="familles" className="section tstm">
          <div className="shell">
            <Reveal className="head">
              <SectionIndex n="05" label="Ce qu’en disent les familles" />
              <h2 className="h-section">Ce qui change,<br />ce sont les <Underline>habitudes.</Underline></h2>
            </Reveal>
            <div className="tstm-grid">
              <Reveal className={`tcard feature ${testimonials.feature.tint}`}>
                <div className="tstars" aria-label="Cinq étoiles sur cinq">{[0, 1, 2, 3, 4].map((i) => <Star key={i} size={17} fill="currentColor" strokeWidth={0} />)}</div>
                <blockquote>{testimonials.feature.body}</blockquote>
                <figcaption className="tcap">
                  <span className="tavatar" aria-hidden>{testimonials.feature.initial}</span>
                  <span><strong>{testimonials.feature.name}</strong><small>{testimonials.feature.role}</small></span>
                </figcaption>
              </Reveal>
              {testimonials.side.map((t, i) => (
                <Reveal className={`tcard ${t.tint}`} key={t.name} delay={0.12 + i * 0.1}>
                  <div className="tstars" aria-label="Cinq étoiles sur cinq">{[0, 1, 2, 3, 4].map((n) => <Star key={n} size={14} fill="currentColor" strokeWidth={0} />)}</div>
                  <blockquote>{t.body}</blockquote>
                  <figcaption className="tcap">
                    <span className="tavatar" aria-hidden>{t.initial}</span>
                    <span><strong>{t.name}</strong><small>{t.role}</small></span>
                  </figcaption>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 1.4 — EHPAD, replié, jamais un second bouton ============ */}
        <section id="residences" className="section-tight residences">
          <div className="shell">
            <Reveal>
              <details className="res-fold">
                <summary>
                  <span className="res-sum">
                    <SectionIndex n="06" label="Résidences" />
                    <h2 className="h-sub">Rompre l’isolement chambre par chambre</h2>
                  </span>
                  <span className="res-icon" aria-hidden />
                </summary>
                <div className="res-body">
                  <p>
                    Dans une résidence, le lien avec la famille dépend souvent du temps que le
                    personnel peut y consacrer. PicPhone est installé comme pour une famille :
                    les proches d’un résident sont ajoutés une fois, et l’appel devient possible
                    sans accompagnement.
                  </p>
                  <p className="res-claim">Le lien ne devrait pas peser sur vos équipes.</p>
                  <p className="res-note">
                    C’est la même application que pour les familles. Rien de spécifique à installer,
                    rien à administrer.
                  </p>
                  <a className="tlink" href="#/ehpad">En parler pour votre résidence <ArrowRight size={16} /></a>
                </div>
              </details>
            </Reveal>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section id="faq" className="section faq">
          <div className="shell faq-grid">
            <Reveal className="faq-aside">
              <SectionIndex n="07" label="FAQ" />
              <h2 className="h-section">Les questions que les familles se posent.</h2>
              <p>Tout ce que les proches nous demandent avant de se lancer. Une autre question ?</p>
              <a className="tlink" href="mailto:bonjour@picphone.fr">Écrire à notre équipe <ArrowRight size={16} /></a>
            </Reveal>
            <div className="faq-list">
              {faqItems.map((item, i) => {
                const open = openFaq === i
                return (
                  <div className={open ? 'faq-item open' : 'faq-item'} key={item.q}>
                    <button className="faq-q" aria-expanded={open} onClick={() => setOpenFaq(open ? null : i)}>
                      {item.q}<span className="faq-icon" aria-hidden />
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div className="faq-a" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}>
                          <p>{item.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ============ STATEMENT ============ */}
        <section id="statement" className="statement on-dark grain">
          <div className="st-glow" />
          <Reveal>
            <RibbonSymbol />
            <blockquote>Le lien avec ceux qu’on aime<br /><em>ne devrait jamais dépendre</em><br />d’un écran compliqué.</blockquote>
          </Reveal>
        </section>

        {/* ============ 1.5 — CTA FINAL (le même, unique) ============ */}
        <section id="cta" className="cta on-blue">
          <div className="shell cta-grid">
            <Reveal className="cta-copy">
              <h2>Essayez avec quatre personnes qui comptent.</h2>
              <p>Choisissez jusqu’à quatre contacts, ajoutez leurs photos, et voyez ce que ça change en une semaine.</p>
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
