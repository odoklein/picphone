import Logo from './Logo'
import { TRIAL_LABEL } from '../trial'

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo />
            <p>Une application pensée pour que les familles restent vraiment proches, simplement.</p>
            <div className="footer-stores">
              <a className="store-badge" href="#cta" aria-label="Télécharger sur l’App Store"><AppleGlyph /><span><small>Télécharger sur</small><strong>App Store</strong></span></a>
              <a className="store-badge" href="#cta" aria-label="Disponible sur Google Play"><PlayGlyph /><span><small>Disponible sur</small><strong>Google Play</strong></span></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Produit</h4>
            <a href="#constat">Le constat</a>
            <a href="#solution">La solution</a>
            <a href="#configuration">Configuration par l’aidant</a>
            <a href="#tarifs">Tarifs</a>
            <a href="#/ehpad">Pour les établissements</a>
            <a href="#cta">{TRIAL_LABEL}</a>
          </div>
          <div className="footer-col">
            <h4>Ressources</h4>
            <a href="#faq">Questions fréquentes</a>
            <a href="#constat">Isolement des seniors</a>
            <a href="#temoignages">Témoignages de familles</a>
            <a href="#contact">Support</a>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href="mailto:bonjour@picphone.fr">bonjour@picphone.fr</a>
            <a href="tel:+33100000000">01 00 00 00 00</a>
            <div className="footer-social">
              <a href="#/" aria-label="Instagram"><InstaGlyph /></a>
              <a href="#/" aria-label="LinkedIn"><InGlyph /></a>
              <a href="#/" aria-label="Facebook"><FbGlyph /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} PicPhone — Rester proches, simplement.</span>
          <div className="footer-legal">
            <a href="#/">Mentions légales</a>
            <a href="#/">Confidentialité</a>
            <a href="#/">CGU</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ---------- Small footer glyphs ---------- */
function AppleGlyph() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" aria-hidden><path d="M17.05 12.5c-.03-2.6 2.12-3.85 2.22-3.9-.98-1.43-2.5-1.62-3.03-1.64-1.29-.13-2.52.76-3.17.76-.65 0-1.66-.74-2.73-.72-1.4.02-2.7.82-3.42 2.07-1.46 2.53-.37 6.27 1.05 8.32.7 1 1.51 2.13 2.58 2.09 1.04-.04 1.43-.67 2.69-.67 1.25 0 1.61.67 2.71.65 1.12-.02 1.83-1.02 2.51-2.03.79-1.16 1.12-2.28 1.13-2.34-.02-.01-2.17-.83-2.2-3.3zM14.99 4.9c.57-.7.96-1.66.85-2.62-.82.03-1.82.55-2.41 1.24-.53.61-.99 1.6-.87 2.53.92.07 1.85-.46 2.43-1.15z" /></svg> }
function PlayGlyph() { return <svg width="18" height="20" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M3.5 2.3 14 12 3.5 21.7c-.3-.2-.5-.6-.5-1.1V3.4c0-.5.2-.9.5-1.1z" fill="#4FC3F7" /><path d="M14 12 3.5 2.3c.3-.2.7-.2 1.1 0l9.9 5.6L14 12z" fill="#00E676" /><path d="M14 12l.5-3.9 3.4 1.9c.9.5.9 1.7 0 2.2l-3.4 1.9L14 12z" fill="#FFC400" /><path d="m14 12-9.4 9.7c-.4.2-.8.2-1.1 0L14 12z" fill="#FF3D00" /></svg> }
function InstaGlyph() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" /><circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" /></svg> }
function InGlyph() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M6.94 8.5H4.06V20h2.88V8.5zM5.5 4a1.67 1.67 0 100 3.34A1.67 1.67 0 005.5 4zM20 13.4c0-2.9-1.55-4.25-3.62-4.25-1.67 0-2.42.92-2.84 1.56V8.5H10.7V20h2.85v-6.1c0-1.53.9-2 1.72-2 .8 0 1.5.55 1.5 2V20H20v-6.6z" /></svg> }
function FbGlyph() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M14 8.5V6.8c0-.8.5-1 .9-1H16V3h-2.2C11.4 3 11 4.8 11 6.5v2H9V11h2v9h3v-9h2.1l.4-2.5H14z" /></svg> }
