import { Contact, Phone, Video, MessageCircle, Mic } from 'lucide-react'

const actions = [
  { icon: Phone, bg: '#2fbf6e' },
  { icon: Video, bg: 'var(--color-violet)' },
  { icon: MessageCircle, bg: 'var(--color-blue)' },
  { icon: Mic, bg: '#e4e6f0' },
]

/** The authentic PicPhone contact quick-actions screen (call / video / message / mic). */
export default function ContactScreen() {
  return (
    <div className="flex h-full flex-col items-center bg-gradient-to-b from-white to-[#eef2fb] px-5 pt-16 text-center">
      <button className="mb-3 self-start text-xs font-semibold" style={{ color: 'var(--color-ink)' }}>
        ✕ Fermer
      </button>
      <div
        className="flex h-24 w-24 items-center justify-center rounded-full"
        style={{ background: 'rgba(57,173,181,0.15)' }}
      >
        <Contact size={44} style={{ color: 'var(--color-teal)' }} />
      </div>
      <p className="mt-4 font-heading text-lg font-bold">Raphael Fils</p>
      <div className="mt-7 grid w-full grid-cols-2 gap-3">
        {actions.map(({ icon: Icon, bg }, i) => (
          <div key={i} className="flex aspect-square items-center justify-center rounded-3xl" style={{ background: bg }}>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
              <Icon size={22} style={{ color: bg === '#e4e6f0' ? 'var(--color-slate)' : bg }} />
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
