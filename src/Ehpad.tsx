import { useEffect, type ComponentType } from 'react'
import {
  ArrowRight, BadgeCheck, Building2, CalendarHeart, HeartHandshake, LayoutDashboard,
  LifeBuoy, Lock, Phone, ScanFace, ShieldCheck, Smartphone, Smile, Sparkles, Users,
} from 'lucide-react'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'
import PhoneFrame from './components/PhoneFrame'
import AppScreenshot from './components/AppScreenshot'
import Reveal from './components/Reveal'

/* ---------- Content ---------- */

const stats = [
  { value: '1 résident sur 4', label: 'en EHPAD ne reçoit quasiment jamais de visite' },
  { value: '−40 %', label: 'de sentiment de solitude rapporté quand le lien familial est maintenu' },
  { value: '5 min', label: 'pour équiper une chambre, sans formation technique' },
]

const audiences: { Icon: ComponentType<{ size?: number }>; tag: string; title: string; text: string; tint: string }[] = [
  {
    Icon: Smile, tag: 'Pour les résidents', tint: 'teal',
    title: 'Un écran qu’ils comprennent',
    text: 'Des visages familiers, de grands boutons, aucun menu. Le résident appelle sa famille d’un seul geste, sans aide.',
  },
  {
    Icon: HeartHandshake, tag: 'Pour les familles', tint: 'blue',
    title: 'Une présence retrouvée',
    text: 'Les proches partagent photos et nouvelles à distance, et gardent un lien vivant entre deux visites.',
  },
  {
    Icon: Users, tag: 'Pour vos équipes', tint: 'violet',
    title: 'Zéro charge supplémentaire',
    text: 'Aucune manipulation quotidienne. Tout se configure à distance : le personnel n’a rien à gérer.',
  },
]

const deploy = [
  { num: '01', Icon: Building2, title: 'Nous équipons l’établissement', text: 'Appareils préconfigurés PicPhone, livrés prêts à l’emploi pour vos chambres et espaces communs.' },
  { num: '02', Icon: Users, title: 'Les familles prennent la main', text: 'Chaque famille configure son espace à distance : contacts, photos et repères, en quelques minutes.' },
  { num: '03', Icon: Sparkles, title: 'Le lien s’installe au quotidien', text: 'Appels, messages et humeurs circulent naturellement, sans mobiliser vos équipes.' },
]

const features: { Icon: ComponentType<{ size?: number }>; title: string; text: string }[] = [
  { Icon: LayoutDashboard, title: 'Tableau de bord établissement', text: 'Suivez les appareils, les familles connectées et l’activité, depuis une console unique.' },
  { Icon: Smartphone, title: 'Déploiement multi-appareils', text: 'De 5 à 500 chambres. Provisionnement centralisé et mises à jour à distance.' },
  { Icon: ShieldCheck, title: 'Conforme RGPD', text: 'Données hébergées en France, chiffrées. Consentement des familles intégré.' },
  { Icon: LifeBuoy, title: 'Support dédié', text: 'Un interlocuteur unique, une hotline prioritaire et un accompagnement au lancement.' },
  { Icon: CalendarHeart, title: 'Animation & repères', text: 'Programme d’activités, rappels et moments partagés, préparés avec vos animateurs.' },
  { Icon: BadgeCheck, title: 'Formation incluse', text: 'Une session courte pour vos équipes. Aucune compétence technique requise.' },
]

const faqItems = [
  { q: 'PicPhone remplace-t-il notre matériel existant ?', a: 'Non. PicPhone se déploie sur des appareils dédiés que nous fournissons, sans interférer avec votre infrastructure ni votre logiciel de soins.' },
  { q: 'Nos équipes ont-elles quelque chose à gérer au quotidien ?', a: 'Rien. Les familles configurent et alimentent l’espace à distance. Le personnel n’a aucune manipulation récurrente à effectuer.' },
  { q: 'Les données des résidents sont-elles protégées ?', a: 'Oui. Les données sont hébergées en France, chiffrées, et conformes au RGPD. Le consentement des familles est recueilli à l’activation.' },
  { q: 'Comment se passe le déploiement dans une grande résidence ?', a: 'Nous livrons des appareils préconfigurés et vous accompagnons chambre par chambre. Le provisionnement et les mises à jour sont centralisés.' },
  { q: 'Quel est le tarif pour un établissement ?', a: 'L’offre Résidences est sur devis, selon le nombre de chambres et le niveau d’accompagnement. Contactez-nous pour une proposition adaptée.' },
]

/* ---------- Page ---------- */

export default function Ehpad() {
  useEffect(() => {
    const prev = document.title
    document.title = 'PicPhone Résidences | Rompre l’isolement en EHPAD'
    window.scrollTo(0, 0)
    return () => { document.title = prev }
  }, [])

  return (
    <div>
      <SiteHeader />

      <main id="top">
        {/* ============ HERO ============ */}
        <section className="eh-hero on-dark">
          <div className="eh-hero-glow" aria-hidden />
          <div className="shell eh-hero-grid">
            <Reveal className="eh-hero-copy">
              <span className="eyebrow"><Building2 size={15} /> PicPhone Résidences · EHPAD & résidences seniors</span>
              <h1 className="h-display">
                Rompre l’isolement,<br />
                <span className="mark">chambre par chambre.
                  <svg viewBox="0 0 320 20" preserveAspectRatio="none"><path d="M6 13 C 80 4 240 4 314 11" /></svg>
                </span>
              </h1>
              <p className="lead">
                PicPhone rétablit le lien entre vos résidents et leurs familles, sans mobiliser vos équipes
                ni compliquer leur quotidien. Un écran simple, configuré entièrement à distance par les proches.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary btn-lg" href="#demo">Demander une démonstration <ArrowRight size={18} /></a>
                <a className="btn btn-outline-light btn-lg" href="#deploy">Voir le déploiement</a>
              </div>
              <div className="hero-assure">
                <span><ShieldCheck size={17} /> Conforme RGPD · hébergé en France</span>
                <span><LifeBuoy size={17} /> Support dédié</span>
                <span><ScanFace size={17} /> Zéro formation pour le résident</span>
              </div>
            </Reveal>
            <div className="eh-hero-stage">
              <div className="eh-hero-phone">
                <PhoneFrame width={240}><AppScreenshot src="/images/screen-home-faces.jpg" alt="Écran d’accueil d’un résident avec les visages de ses proches" cropTop={4} /></PhoneFrame>
              </div>
              <Reveal className="eh-chip c1" delay={0.3}>
                <span className="ic teal"><HeartHandshake size={16} /></span>
                <div><small>Famille connectée</small><strong>La famille Bertrand</strong></div>
              </Reveal>
              <Reveal className="eh-chip c2" delay={0.45}>
                <span className="ic blue"><Smile size={16} /></span>
                <div><small>Humeur du jour</small><strong>Partagée à 9h12</strong></div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ STATS ============ */}
        <section className="eh-stats">
          <div className="shell eh-stats-inner">
            {stats.map((s) => (
              <div className="eh-stat" key={s.value}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ============ PROBLEM / WHY ============ */}
        <section className="section eh-why">
          <div className="shell eh-why-grid">
            <Reveal className="head">
              <span className="eyebrow">Pourquoi PicPhone en établissement</span>
              <h2 className="h-section">L’isolement pèse sur vos résidents.<br />Le lien ne devrait pas peser sur vos équipes.</h2>
              <p>Les tablettes classiques finissent au fond d’un placard : trop de menus, trop d’assistance. PicPhone prend le problème à l’envers — l’écran du résident reste identique chaque jour, et ce sont les familles qui l’animent, de loin.</p>
              <a className="tlink" href="#deploy">Comment ça se déploie <ArrowRight size={16} /></a>
            </Reveal>
            <Reveal className="eh-why-media" delay={0.12}>
              <img src="/images/ephad.png" alt="Une résidente en appel vidéo avec un proche depuis sa chambre" loading="lazy" />
              <div className="eh-why-badge"><ScanFace size={18} /><span>Interface basée sur les visages</span></div>
            </Reveal>
          </div>
        </section>

        {/* ============ THREE AUDIENCES ============ */}
        <section className="section eh-aud">
          <div className="shell">
            <Reveal className="head eh-center">
              <span className="eyebrow">Un seul outil, trois bénéfices</span>
              <h2 className="h-section">Tout le monde y gagne.</h2>
            </Reveal>
            <div className="eh-aud-grid">
              {audiences.map(({ Icon, tag, title, text, tint }, i) => (
                <Reveal className={`eh-card t-${tint}`} key={title} delay={i * 0.1}>
                  <span className="eh-card-ic"><Icon size={24} /></span>
                  <span className="eh-card-tag">{tag}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ DEPLOYMENT ============ */}
        <section id="deploy" className="section eh-deploy">
          <div className="shell">
            <Reveal className="head eh-center">
              <span className="eyebrow">Déploiement</span>
              <h2 className="h-section">Opérationnel en une journée.</h2>
              <p>Un déploiement pensé pour ne rien ajouter à la charge de vos soignants.</p>
            </Reveal>
            <div className="eh-deploy-flow">
              {deploy.map(({ num, Icon, title, text }, i) => (
                <Reveal className="eh-deploy-step" key={num} delay={i * 0.12}>
                  <span className="eh-deploy-num"><Icon size={22} /><i>{num}</i></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ FEATURES ============ */}
        <section className="section eh-feat">
          <div className="shell">
            <Reveal className="head eh-center">
              <span className="eyebrow">Pensé pour les établissements</span>
              <h2 className="h-section">Ce qu’il faut pour gérer sereinement.</h2>
            </Reveal>
            <div className="eh-feat-grid">
              {features.map(({ Icon, title, text }, i) => (
                <Reveal className="eh-feat-card" key={title} delay={(i % 3) * 0.08}>
                  <span className="eh-feat-ic"><Icon size={22} /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ TESTIMONIAL ============ */}
        <section className="eh-quote on-dark">
          <div className="eh-quote-glow" aria-hidden />
          <Reveal className="shell eh-quote-inner">
            <div className="eh-quote-mark" aria-hidden>“</div>
            <blockquote>
              Depuis PicPhone, nos résidents rappellent leur famille sans passer par le personnel.
              Les visites sont plus fréquentes, les repas plus animés. Ça a changé l’ambiance de l’étage.
            </blockquote>
            <figcaption>
              <span className="eh-quote-av">D</span>
              <span><strong>Delphine Rousseau</strong><small>Directrice · Résidence Les Tilleuls, Angers</small></span>
            </figcaption>
          </Reveal>
        </section>

        {/* ============ FAQ ============ */}
        <section className="section eh-faq">
          <div className="shell eh-faq-grid">
            <Reveal className="head">
              <span className="eyebrow">Questions des établissements</span>
              <h2 className="h-section">Ce que les directions nous demandent.</h2>
              <p>Une question spécifique à votre structure ? Notre équipe vous répond sous 24 h.</p>
              <a className="tlink" href="#demo">Nous contacter <ArrowRight size={16} /></a>
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

        {/* ============ CTA / DEMO ============ */}
        <section id="demo" className="eh-cta on-blue">
          <div className="shell eh-cta-inner">
            <Reveal>
              <span className="eyebrow eh-cta-eye"><Lock size={14} /> Sans engagement</span>
              <h2>Offrez à vos résidents un lien qui tient.</h2>
              <p>Réservez une démonstration de 20 minutes. Nous évaluons ensemble vos besoins et préparons une proposition adaptée à votre nombre de chambres.</p>
              <div className="cta-actions">
                <a className="btn btn-white btn-lg" href="mailto:etablissements@picphone.fr?subject=Demande%20de%20d%C3%A9monstration%20PicPhone%20R%C3%A9sidences">Demander une démonstration <ArrowRight size={18} /></a>
                <a className="btn btn-outline-light btn-lg" href="tel:+33100000000"><Phone size={17} /> 01 00 00 00 00</a>
              </div>
              <div className="eh-cta-trust">
                <span><ShieldCheck size={16} /> RGPD · France</span>
                <span><BadgeCheck size={16} /> Formation incluse</span>
                <span><LifeBuoy size={16} /> Support dédié</span>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
