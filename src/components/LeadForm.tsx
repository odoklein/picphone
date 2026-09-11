import { useId, useState, type FormEvent } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

interface LeadFormProps {
  submitLabel?: string
  className?: string
}

/** The site's two contact forms (FAQ and Contact) share the same four fields
 *  and the same wording. No backend exists yet, so submitting only confirms
 *  the message was captured in the UI — nothing is sent anywhere. */
export default function LeadForm({ submitLabel = 'Envoyer ma demande', className = '' }: LeadFormProps) {
  const id = useId()
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className={`lead-form-done ${className}`} role="status">
        <CheckCircle2 size={22} />
        <p>Merci, votre message a bien été noté. Notre équipe revient vers vous rapidement.</p>
      </div>
    )
  }

  return (
    <form className={`lead-form ${className}`} onSubmit={onSubmit}>
      <div className="lead-form-row">
        <div className="lead-field">
          <label htmlFor={`${id}-nom`}>Nom</label>
          <input id={`${id}-nom`} name="nom" type="text" autoComplete="family-name" required />
        </div>
        <div className="lead-field">
          <label htmlFor={`${id}-prenom`}>Prénom</label>
          <input id={`${id}-prenom`} name="prenom" type="text" autoComplete="given-name" required />
        </div>
      </div>
      <div className="lead-field">
        <label htmlFor={`${id}-email`}>E-mail</label>
        <input id={`${id}-email`} name="email" type="email" autoComplete="email" required />
      </div>
      <div className="lead-field">
        <label htmlFor={`${id}-message`}>Message</label>
        <textarea id={`${id}-message`} name="message" rows={4} required />
      </div>
      <button className="btn btn-primary" type="submit">{submitLabel} <ArrowRight size={18} /></button>
    </form>
  )
}
