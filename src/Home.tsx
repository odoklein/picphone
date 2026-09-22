import { type ComponentType } from 'react'
import {
  AlarmClockCheck, ArrowRight, Check, Gift, Hand, HeartHandshake, ImagePlus, KeyRound,
  Mail, MapPin, MessageCircleHeart, Mic, Phone, RefreshCw, Search, Smartphone, Smile,
  UserPlus, UserRoundPlus,
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

/* 02 — Le constat. Figures and wording come from the client's brief
   (2 M / 750 000, « mort sociale », « problème d'accès ») and are laid out as
   chiffres → constat → problème → réponse rather than one block of prose. */
const isolationStats: { value: string; unit?: string; text: string; accent?: boolean }[] = [
  { value: '2', unit: 'millions', text: 'de seniors en situation d’isolement social en France.' },
  { value: '750 000', text: 'd’entre eux sont en situation de mort sociale.', accent: true },
]

/* The three gestures that stand between the senior and a call — the barrier
   the client asked to make visible rather than describe in a paragraph. */
const frictions = [
  { Icon: Search, text: 'Ouvrir la bonne application' },
  { Icon: UserRoundPlus, text: 'Retrouver un nom dans une liste' },
  { Icon: Hand, text: 'Appuyer au bon endroit' },
]

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

/* 04 — Configuration par l'aidant. Reprend le paramétrage décrit dans la spec
   parcours transmise par la cliente (docs/parcours-4-etapes.md, étapes 1 et 2),
   pour montrer concrètement ce que l'aidant fait, écran par écran. Le code de
   jumelage est décrit tel que l'application le génère aujourd'hui : 8 caractères. */
const configSteps = [
  {
    num: '01', Icon: UserPlus, title: 'L’aidant crée son compte',
    text: 'Une adresse e-mail et un mot de passe, ou une connexion Apple ou Google. Aucun paiement, aucune carte bancaire pour commencer.',
  },
  {
    num: '02', Icon: Smile, title: 'Il indique pour qui',
    text: 'Le prénom du senior, le lien de parenté, et une photo s’il le souhaite. Ces informations servent uniquement à personnaliser la suite du parcours.',
  },
  {
    num: '03', Icon: ImagePlus, title: 'Il ajoute les proches',
    text: 'Pour chaque contact : une photo, le prénom affiché, un numéro. L’aidant place ensuite chaque visage dans la grille du senior, par glisser-déposer.',
  },
  {
    num: '04', Icon: AlarmClockCheck, title: 'Il choisit les rappels du quotidien',
    text: 'Rappel de médicament, météo, message du jour : chaque élément s’active séparément, et reste désactivé tant que l’aidant ne l’a pas choisi.',
  },
  {
    num: '05', Icon: KeyRound, title: 'Il envoie le code de jumelage',
    text: 'Un code à 8 caractères, transmis par SMS ou par WhatsApp. Le senior le saisit une seule fois, en gros caractères, sur un écran qui ne demande rien d’autre.',
  },
  {
    num: '06', Icon: RefreshCw, title: 'Tout reste synchronisé',
    text: 'Une photo ajoutée, un contact modifié, un rappel déplacé : la mise à jour part aussitôt sur le téléphone du senior, sans aucune manipulation de sa part.',
  },
]

/* What the senior explicitly never has to do — the counterpart of the six
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
    cta: 'Commencer gratuitement',
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
    cta: 'Démarrer gratuitement',
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
            </Reveal>

            {/* Chiffres */}
            <div className="constat-stats">
              {isolationStats.map(({ value, unit, text, accent }, i) => (
                <Reveal className={accent ? 'constat-stat is-accent' : 'constat-stat'} key={value} delay={i * 0.1}>
                  <p className="constat-stat-fig">
                    <span className="constat-stat-val">{value}</span>
                    {unit && <span className="constat-stat-unit">{unit}</span>}
                  </p>
                  <p className="constat-stat-text">{text}</p>
                </Reveal>
              ))}
              <Reveal className="constat-precision" delay={0.2}>
                <strong>« Mort sociale »</strong> désigne une situation sans aucun contact humain :
                ni famille, ni amis, ni voisins, ni société.
              </Reveal>
            </div>

            {/* Constat */}
            <Reveal className="constat-said" delay={0.08}>
              <p>
                Leurs proches pensent pourtant à eux toute la journée. Ils aimeraient juste entendre
                leur voix, voir leur visage.
              </p>
              <p className="constat-claim">
                Ce n’est pas un problème d’envie.<br />
                C’est un <Underline>problème d’accès.</Underline>
              </p>
            </Reveal>

            {/* Problème : la complexité des outils, rendue visible */}
            <div className="constat-friction">
              <Reveal className="constat-friction-head">
                <h3>Trois gestes de trop, avant même d’entendre une voix.</h3>
                <p>
                  Ouvrir la bonne application, retrouver un nom, appuyer au bon endroit… c’est devenu
                  une source d’angoisse. Ce n’est pas l’envie de communiquer qui manque, c’est la peur
                  de faire une erreur face à des outils trop complexes. Et l’isolement s’installe,
                  silencieusement.
                </p>
              </Reveal>
              <ul className="constat-friction-list">
                {frictions.map(({ Icon, text }, i) => (
                  <Reveal as="li" className="constat-friction-item" key={text} delay={i * 0.1}>
                    <span className="constat-friction-ic" aria-hidden><Icon size={20} /></span>
                    <span>{text}</span>
                  </Reveal>
                ))}
              </ul>
            </div>

            {/* Réponse */}
            <Reveal className="constat-answer" delay={0.1}>
              <p>PicPhone a été conçu pour lever cette barrière.</p>
              <a className="tlink" href="#solution">Voir comment <ArrowRight size={17} /></a>
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

        {/* ============ 05 — CONFIGURATION PAR L’AIDANT ============
             Remplace l’ancien couple « Comment ça marche » + « Démonstration » :
             la démo reprenait la même interface que La solution, sans rien
             apprendre de plus. Cette section détaille le paramétrage, ce que la
             précédente ne faisait pas. */}
        <section id="configuration" className="section eh-deploy config">
          <div className="shell">
            <Reveal className="head eh-center">
              <SectionIndex n="04" label="Configuration par l’aidant" center />
              <h2 className="h-section">C’est l’aidant qui <Underline>configure.</Underline><br />Le senior n’a rien à installer.</h2>
              <p>
                Tout le paramétrage se fait depuis le téléphone de l’aidant, en quelques minutes :
                les proches, leurs photos, les rappels du quotidien. Le senior, lui, reçoit un écran
                déjà prêt.
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
                  <figure className="config-shot">
                    <PhoneFrame width={252} statusBar={false}>
                      <AppScreenshot
                        src="/images/app/aidant-tableau-de-bord.jpg"
                        alt="Tableau de bord de l’aidant : les proches configurés, les rappels et l’activité du senior"
                        cropTop={0}
                      />
                    </PhoneFrame>
                    <figcaption>Le tableau de bord de l’aidant</figcaption>
                  </figure>
                </Reveal>
                <Reveal className="config-note" delay={0.16}>
                  <h3><Smartphone size={18} /> Côté senior, rien à faire</h3>
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

        {/* ============ 06 — TÉMOIGNAGES ============ */}
        <section id="temoignages" className="section tstm">
          <div className="shell">
            <Reveal className="head eh-center">
              <SectionIndex n="05" label="Témoignages" center />
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

        {/* ============ 07 — TARIFS ============ */}
        <section id="tarifs" className="section tarifs">
          <div className="shell">
            <Reveal className="head eh-center">
              <SectionIndex n="06" label="Tarifs" center />
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
