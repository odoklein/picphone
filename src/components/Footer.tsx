import { Apple, Play } from 'lucide-react'
import Logo from './Logo'

const columns = [
  { title: 'Produit', links: ['Fonctionnalités', 'Comment ça marche', 'Tarifs', 'Sécurité'] },
  { title: 'Pour qui ?', links: ['Familles', 'Aidants', 'Établissements', 'Seniors'] },
  { title: 'Ressources', links: ['Guide d’installation', 'FAQ', 'Support', 'Contact'] },
  { title: 'Légal', links: ['Confidentialité', 'CGU', 'Mentions légales'] },
]

function StoreBadge({ icon: Icon, top, bottom }: { icon: typeof Apple; top: string; bottom: string }) {
  return (
    <a
      href="#"
      className="flex items-center gap-2.5 rounded-[11px] px-4 py-2.5 text-white transition-transform hover:-translate-y-0.5"
      style={{ background: 'var(--color-ink)' }}
    >
      <Icon size={22} />
      <span className="text-left leading-tight">
        <span className="block text-[0.6rem] opacity-75">{top}</span>
        <span className="block text-sm font-semibold">{bottom}</span>
      </span>
    </a>
  )
}

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-grey)' }}>
      <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          {/* brand */}
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed" style={{ color: 'var(--color-slate)' }}>
              La façon la plus simple, pour un senior, de rester proche de sa famille au quotidien.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <StoreBadge icon={Apple} top="Télécharger sur" bottom="l'App Store" />
              <StoreBadge icon={Play} top="Disponible sur" bottom="Google Play" />
            </div>
          </div>

          {/* nav columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="mb-4 text-xs font-bold uppercase tracking-wide" style={{ color: 'var(--color-ink)' }}>
                  {col.title}
                </p>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm transition-colors hover:text-[color:var(--color-blue)]"
                        style={{ color: 'var(--color-slate)' }}
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-16 flex flex-col items-center justify-between gap-3 border-t pt-8 text-xs sm:flex-row"
          style={{ borderColor: 'rgba(20,27,69,0.1)', color: 'var(--color-slate)' }}
        >
          <p>© {new Date().getFullYear()} PicPhone. Tous droits réservés.</p>
          <p>Fait avec attention, pour les familles.</p>
        </div>
      </div>
    </footer>
  )
}
