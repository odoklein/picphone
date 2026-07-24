import { useState, type ComponentType } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Activity, ArrowRight, Bell, Check, Clock, Heart, Image as ImageIcon,
  MessageCircle, Mic, Phone, ScanFace, Smile, Sparkles, Star, Users, Wifi,
} from 'lucide-react'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'
import PhoneFrame from './components/PhoneFrame'
import AppScreenshot from './components/AppScreenshot'
import Reveal from './components/Reveal'

/* ---------- Content ---------- */

const promise = [
  { icon: '/images/settings.svg', title: '5 min', sub: 'pour configurer' },
  { icon: '/images/community.svg', title: '4 contacts', sub: 'dans la version gratuite' },
  { icon: '/images/video-call.svg', title: 'Appels, messages', sub: 'et vidéo' },
  { icon: '/images/caregiving.svg', title: 'Pensé', sub: 'avec les familles' },
]

const benefits: { Icon: ComponentType<{ size?: number }>; title: string; text: string; tint: string }[] = [
  { Icon: Phone, title: 'Appeler un proche', text: 'Un visage, un geste, et l’appel démarre aussitôt.', tint: '' },
  { Icon: MessageCircle, title: 'Envoyer un message', text: 'Un mot ou une note vocale, sans clavier compliqué.', tint: 'b-teal' },
  { Icon: Bell, title: 'Voir les rappels du jour', text: 'Les repères préparés par la famille, au bon moment.', tint: '' },
  { Icon: Smile, title: 'Exprimer son humeur', text: 'Trois réponses claires pour donner de ses nouvelles.', tint: 'b-violet' },
]

const steps = [
  { num: '01', title: 'Le proche crée le profil', text: 'Vous ouvrez l’espace aidant et renseignez les informations utiles.', src: '/images/screen-add-elder.jpg', crop: 9, icon: '/images/caregiving.svg' },
  { num: '02', title: 'Il ajoute les contacts et les repères', text: 'Photos, appels favoris, rappels et activités, préparés à distance.', src: '/images/screen-activity.jpg', crop: 4, icon: '/images/calendar-reminder.svg' },
  { num: '03', title: 'Le téléphone du senior se synchronise', text: 'Un code de jumelage relie les deux écrans, sans étape technique.', src: '/images/screen-pairing-code.jpg', crop: 4, icon: '/images/settings.svg' },
]

const brandProof = [
  { Icon: Sparkles, label: 'Moins de confusion' },
  { Icon: ScanFace, label: 'Plus d’autonomie' },
  { Icon: Heart, label: 'Plus de présence' },
]

const brandStats = [
  { value: '750 000', label: 'seniors concernés par l’isolement social en France' },
  { value: '5 min', label: 'suffisent pour configurer l’expérience' },
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
  { q: 'À qui s’adresse PicPhone ?', a: 'Aux seniors qui veulent rester en lien sans se perdre dans la technologie, et aux proches qui souhaitent rester présents au quotidien, même à distance.' },
  { q: 'Qui configure l’application ?', a: 'Le proche aidant. Il crée le profil, ajoute les contacts avec leur photo et prépare les repères, entièrement depuis son propre téléphone.' },
  { q: 'Le senior doit-il savoir utiliser WhatsApp ?', a: 'Non. Il n’a ni menu ni application à apprendre. Sur son écran, il touche un visage familier et l’appel démarre.' },
  { q: 'Peut-on gérer PicPhone à distance ?', a: 'Oui. Tout se configure à distance. Une seule étape demande d’être ensemble : la synchronisation initiale des deux appareils.' },
  { q: 'Existe-t-il une version gratuite ?', a: 'Oui. PicPhone est gratuit jusqu’à 4 contacts, sans limite de durée. L’offre Famille reste sans engagement au-delà.' },
]

/* ---------- Decorative SVGs ---------- */

function HeroRibbon() {
  return (
    <svg className="hero-ribbon" viewBox="0 0 520 560" fill="none" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id="hr" x1="20" y1="380" x2="500" y2="90" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1463FF" /><stop offset="1" stopColor="#5AD1CE" />
        </linearGradient>
      </defs>
      <path d="M20 380 C 150 350 230 250 290 195 C 350 140 430 165 505 120" stroke="url(#hr)" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
      <path className="ribbon-path" d="M20 380 C 150 350 230 250 290 195 C 350 140 430 165 505 120" stroke="#EAF2FF" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
    </svg>
  )
}

function ExpConnect() {
  return (
    <svg className="exp-connect" viewBox="0 0 800 60" fill="none" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id="ec" x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1463FF" stopOpacity="0" /><stop offset="0.5" stopColor="#1463FF" /><stop offset="1" stopColor="#39ADB5" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M40 30 C 260 -6 540 66 760 30" stroke="url(#ec)" strokeWidth="2" strokeDasharray="2 8" strokeLinecap="round" />
    </svg>
  )
}

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
        {/* ============ HERO — full-bleed cinematic ============ */}
        <section className="hero-cine on-dark">
          <div className="hero-cine-media" aria-hidden>
            <img src="/images/family-senior-lifestyle.png" alt="" />
            <div className="hero-cine-scrim" />
          </div>
          <div className="shell">
            <div className="hero-cine-grid">
              <Reveal className="hero-cine-copy">
                <span className="eyebrow">Pensé pour les seniors. Configuré par leurs proches.</span>
                <h1 className="h-display">
                  Rester proches,<br />
                  <span className="mark">simplement.
                    <svg viewBox="0 0 320 20" preserveAspectRatio="none"><path d="M6 13 C 80 4 240 4 314 11" /></svg>
                  </span>
                </h1>
                <p className="lead">
                  PicPhone transforme le téléphone en un espace familier, simple et rassurant, où chaque visage
                  devient un raccourci vers ceux qui comptent.
                </p>
                <div className="hero-actions">
                  <a className="btn btn-primary btn-lg" href="#cta">Découvrir PicPhone <ArrowRight size={18} /></a>
                  <a className="btn btn-outline-light btn-lg" href="#how">Voir comment ça marche</a>
                </div>
                <div className="hero-assure">
                  <span><Wifi size={17} /> Configuration à distance</span>
                  <span><ScanFace size={17} /> Interface basée sur les visages</span>
                  <span><Clock size={17} /> Installation en quelques minutes</span>
                </div>
              </Reveal>
              <div className="hero-cine-stage">
                <HeroRibbon />
                <div className="hero-cine-phone">
                  <PhoneFrame width={248}><AppScreenshot src="/images/screen-contact-portrait.jpg" alt="Fiche contact de Nadia avec de grands boutons d’appel" cropTop={4} /></PhoneFrame>
                </div>
                <div className="hero-chip c-call">
                  <span className="dot-live" />
                  <div><small>Appel vidéo</small><strong>Nadia · maintenant</strong></div>
                </div>
                <div className="hero-chip c-photo">
                  <span className="ic"><ImageIcon size={16} /></span>
                  <div><small>Nouvelle photo</small><strong>Reçue ce matin</strong></div>
                </div>
              </div>
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

        {/* ============ TWO EXPERIENCES ============ */}
        <section id="experiences" className="section exp">
          <div className="shell">
            <Reveal className="head">
              <h2 className="h-section">Pour lui, tout est évident.<br />Pour vous, tout reste à portée.</h2>
              <p>PicPhone relie un écran pensé pour le senior à un espace de gestion pensé pour les proches — deux extrémités d’un même lien.</p>
            </Reveal>
            <div className="exp-grid">
              <ExpConnect />
              <Reveal className="exp-col senior">
                <div className="ground" />
                <div className="exp-phone"><PhoneFrame width={262}><AppScreenshot src="/images/screen-home-faces.jpg" alt="Écran d’accueil du senior avec les visages de ses proches" cropTop={4} /></PhoneFrame></div>
                <span className="exp-label"><Smile size={15} /> Pour lui</span>
                <h3>Son écran</h3>
                <p>Des visages connus, de grands boutons et aucune navigation compliquée.</p>
              </Reveal>
              <span className="exp-bridge"><Wifi size={14} /> Reliés à distance</span>
              <Reveal className="exp-col family" delay={0.12}>
                <div className="ground" />
                <div className="exp-phone"><PhoneFrame width={262} statusDark><AppScreenshot src="/images/screen-caregiver-dashboard.jpg" alt="Tableau de bord de l’aidant" cropTop={9} /></PhoneFrame></div>
                <span className="exp-label"><Users size={15} /> Pour vous</span>
                <h3>Votre espace</h3>
                <p>Vous configurez les contacts, les repères et les informations utiles à distance.</p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ PRODUCT PRINCIPLE ============ */}
        <section id="principle" className="section principle">
          <div className="shell principle-grid">
            <Reveal>
              <div className="head">
                <span className="eyebrow">Le quotidien, simplifié</span>
                <h2 className="h-section">Tout ce qui est utile,<br />au bon endroit.</h2>
              </div>
              <div className="benefits">
                {benefits.map(({ Icon, title, text, tint }) => (
                  <div className={`benefit ${tint}`} key={title}>
                    <span className="ic"><Icon size={24} /></span>
                    <div><h3>{title}</h3><p>{text}</p></div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal className="principle-stage" delay={0.15}>
              <div className="halo" />
              <div className="principle-phone"><PhoneFrame width={300}><AppScreenshot src="/images/screen-senior-home.jpg" alt="Écran d’accueil du senior : rappel, humeur et contacts" cropTop={4} /></PhoneFrame></div>
              <Reveal className="annot a1" delay={0.3}><span className="ic"><Bell size={15} /></span> Rappel du jour</Reveal>
              <Reveal className="annot a2" delay={0.42}><span className="ic"><Smile size={15} /></span> Humeur en un geste</Reveal>
              <Reveal className="annot a3" delay={0.54}><span className="ic"><Phone size={15} /></span> Appeler & messages</Reveal>
            </Reveal>
          </div>
        </section>

        {/* ============ HOW IT WORKS ============ */}
        <section id="how" className="section how">
          <div className="shell">
            <Reveal className="head">
              <span className="eyebrow">Installation</span>
              <h2 className="h-section">Quelques réglages suffisent.</h2>
            </Reveal>
            <div className="how-flow">
              <svg className="how-arrow a1" width="60" height="24" viewBox="0 0 60 24" fill="none" aria-hidden><path d="M2 12h50m0 0-8-7m8 7-8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <svg className="how-arrow a2" width="60" height="24" viewBox="0 0 60 24" fill="none" aria-hidden><path d="M2 12h50m0 0-8-7m8 7-8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              {steps.map((s, i) => (
                <Reveal className="how-step" key={s.num} delay={i * 0.12}>
                  <div className="how-device"><PhoneFrame width={202}><AppScreenshot src={s.src} alt={s.title} cropTop={s.crop} /></PhoneFrame></div>
                  <span className="how-num"><img className="how-ic" src={s.icon} alt="" aria-hidden />{s.num}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </Reveal>
              ))}
            </div>
            <Reveal className="how-foot" delay={0.2}>
              <span><Sparkles size={18} /> Une fois configuré, PicPhone devient l’écran principal du quotidien.</span>
            </Reveal>
          </div>
        </section>

        {/* ============ EMOTIONAL BRAND ============ */}
        <section id="lien" className="brand on-dark">
          <div className="brand-grid">
            <Reveal className="brand-copy">
              <span className="eyebrow">Le lien retrouvé</span>
              <h2>Recommencer un lien numérique,<br />sans charger leur quotidien.</h2>
              <p>PicPhone ne demande rien au senior : pas de mise à jour, pas de mot de passe, pas d’apprentissage. Juste des visages familiers, et la présence des siens qui revient, jour après jour.</p>
              <div className="brand-proof">
                {brandProof.map(({ Icon, label }) => (
                  <span key={label}><Icon size={16} /> {label}</span>
                ))}
              </div>
              <div className="brand-stats">
                {brandStats.map((s) => (
                  <div className="brand-stat" key={s.value}><strong>{s.value}</strong><span>{s.label}</span></div>
                ))}
              </div>
              <a className="tlink brand-link" href="#/ehpad">Vous êtes un établissement ? Découvrir PicPhone Résidences <ArrowRight size={16} /></a>
            </Reveal>
            <div className="brand-media">
              <img src="/images/ephad.png" alt="Une senior en appel vidéo avec un proche, reliée par un ruban lumineux" loading="lazy" />
            </div>
          </div>
        </section>

        {/* ============ TESTIMONIALS ============ */}
        <section id="familles" className="section tstm">
          <div className="shell">
            <Reveal className="head">
              <span className="eyebrow">Ce qu’en disent les familles</span>
              <h2 className="h-section">Une application discrète,<br />qui laisse revenir les habitudes.</h2>
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

        {/* ============ DAILY SUPPORT ============ */}
        <section id="daily" className="section daily">
          <div className="shell">
            <Reveal className="head">
              <span className="eyebrow">Un accompagnement discret</span>
              <h2 className="h-section">Un quotidien plus simple,<br />sans devenir intrusif.</h2>
              <p>Depuis votre espace, vous préparez les repères importants. Le senior, lui, ne voit qu’un écran calme et familier.</p>
            </Reveal>
            <div className="daily-stage">
              <div className="daily-halo" />
              <Reveal className="daily-phone" delay={0.1}><PhoneFrame width={286} statusDark><AppScreenshot src="/images/screen-caregiver-dashboard.jpg" alt="Tableau de bord de l’aidant" cropTop={9} /></PhoneFrame></Reveal>

              <Reveal className="dmod m1" delay={0.24}>
                <div className="dmod-head"><span className="ic"><Bell size={18} /></span><div><small>Rappel du jour</small><strong>Doliprane 1 g</strong></div></div>
                <div className="row"><span>Aujourd’hui · 08:30</span><span className="pill" style={{ background: 'var(--tint-blue)', color: 'var(--blue)' }}>Préparé</span></div>
              </Reveal>

              <Reveal className="dmod m2" delay={0.36}>
                <div className="dmod-head"><span className="ic"><Smile size={18} /></span><div><small>Humeur</small><strong>Très bien aujourd’hui</strong></div></div>
                <div className="mood-face">
                  <i style={{ background: '#3FBF6B' }}><Smile size={17} color="#fff" /></i>
                  <i style={{ background: '#F3F5F8' }}><Smile size={17} color="#F59E0B" /></i>
                  <i style={{ background: '#F3F5F8' }}><Smile size={17} color="#E4574C" /></i>
                </div>
              </Reveal>

              <Reveal className="dmod m3" delay={0.48}>
                <div className="dmod-head"><span className="ic"><Activity size={18} /></span><div><small>Activité récente</small><strong>Marche · 15 min</strong></div></div>
                <div className="row"><span>Aujourd’hui, 10:12</span><Check size={16} color="var(--teal)" /></div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section id="faq" className="section faq">
          <div className="shell faq-grid">
            <Reveal className="faq-aside">
              <span className="eyebrow">FAQ</span>
              <h2 className="h-section">Les questions que les familles se posent.</h2>
              <p>Tout ce que les proches nous demandent avant de se lancer. Une autre question ?</p>
              <a className="tlink" href="#cta">Parler à notre équipe <ArrowRight size={16} /></a>
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

        {/* ============ EMOTIONAL STATEMENT ============ */}
        <section id="statement" className="statement on-dark">
          <div className="st-glow" />
          <Reveal>
            <RibbonSymbol />
            <blockquote>Le lien avec ceux qu’on aime<br /><em>ne devrait jamais dépendre</em><br />d’un écran compliqué.</blockquote>
          </Reveal>
        </section>

        {/* ============ FINAL CTA ============ */}
        <section id="cta" className="cta on-blue">
          <div className="shell cta-grid">
            <Reveal className="cta-copy">
              <h2>Commencez par un simple échange.</h2>
              <p>Configurez PicPhone en quelques minutes et redonnez à chaque appel la simplicité d’un visage familier.</p>
              <div className="cta-actions">
                <a className="btn btn-white btn-lg" href="#top">Découvrir PicPhone <ArrowRight size={18} /></a>
                <a className="btn btn-outline-light btn-lg" href="mailto:bonjour@picphone.fr">Parler à notre équipe</a>
              </div>
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
              <div className="cta-phone"><PhoneFrame width={276}><AppScreenshot src="/images/screen-home-faces.jpg" alt="Écran d’accueil du senior" cropTop={4} /></PhoneFrame></div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
