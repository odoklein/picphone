import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const links = [
  { label: 'Familles', href: '#familles' },
  { label: 'Comment ça marche', href: '#comment' },
  { label: 'Fonctionnalités', href: '#fonctionnalites' },
  { label: 'Établissements', href: '#etablissements' },
  { label: 'Tarifs', href: '#tarifs' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-black/5 bg-white/90 shadow-[0_6px_24px_-18px_rgba(16,21,79,0.5)] backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[70px] max-w-[1280px] items-center justify-between px-6 lg:px-10">
        <a href="#top" aria-label="PicPhone — accueil" className="shrink-0">
          <Logo />
        </a>

        <nav aria-label="Navigation principale" className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.9rem] font-medium transition-colors hover:text-[color:var(--color-blue)]"
              style={{ color: 'var(--color-slate)' }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#cta"
            className="rounded-[11px] bg-[color:var(--color-blue)] px-4 py-2 text-[0.9rem] font-semibold text-white shadow-[0_10px_22px_-12px_rgba(20,99,255,0.7)] transition-transform hover:-translate-y-0.5"
          >
            Découvrir PicPhone
          </a>
        </div>

        <button
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-[11px] border border-black/10 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="mx-4 mb-4 rounded-2xl border border-black/5 bg-white p-5 shadow-xl lg:hidden">
          <nav aria-label="Navigation mobile" className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium"
                style={{ color: 'var(--color-slate)' }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-[11px] bg-[color:var(--color-blue)] px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Découvrir PicPhone
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
