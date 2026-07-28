import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  { label: 'Ce que ça change', href: '#benefice' },
  { label: 'Fonctionnalités', href: '#/fonctionnalites' },
  { label: 'Écran par écran', href: '#ecrans' },
  { label: 'Pour les établissements', href: '#/ehpad' },
  { label: 'Questions', href: '#faq' },
]

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={scrolled ? 'nav is-scrolled' : 'nav'}>
      <div className="nav-inner">
        <a href="#/" aria-label="PicPhone, accueil"><Logo /></a>
        <nav className="nav-center" aria-label="Navigation principale">
          {navLinks.map((l) => <a key={l.label} href={l.href}>{l.label}</a>)}
        </nav>
        <div className="nav-right">
          <a className="nav-login" href="#cta">Se connecter</a>
          <a className="btn btn-primary nav-cta" href="#cta">Essayer gratuitement</a>
          <button className="nav-burger" aria-expanded={menuOpen} aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="mobile-menu">
          {navLinks.map((l) => <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>)}
          <a href="#cta" onClick={() => setMenuOpen(false)}>Se connecter</a>
          <a href="#cta" onClick={() => setMenuOpen(false)}>Essayer gratuitement</a>
        </nav>
      )}
    </header>
  )
}
