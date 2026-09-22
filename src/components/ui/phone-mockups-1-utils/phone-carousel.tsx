import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useId, useState } from 'react'

import { Button } from '@/components/ui/button'

export interface ImageItem { src: string; alt: string }
interface PhoneCarouselProps { images: ImageItem[] }

/** A compact, keyboard-friendly gallery that presents each image in an iPhone frame. */
export function PhoneCarousel({ images }: PhoneCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const headingId = useId()
  const imageCount = images.length
  useEffect(() => { if (activeIndex >= imageCount) setActiveIndex(Math.max(0, imageCount - 1)) }, [activeIndex, imageCount])
  if (!imageCount) return null

  const activeImage = images[activeIndex]
  const showPrevious = () => setActiveIndex((index) => (index - 1 + imageCount) % imageCount)
  const showNext = () => setActiveIndex((index) => (index + 1) % imageCount)

  return (
    <section className="relative mx-auto flex w-full max-w-[360px] flex-col items-center" aria-labelledby={headingId}>
      <h3 id={headingId} className="sr-only">Galerie d’écrans de l’application</h3>
      <div className="relative w-full overflow-hidden rounded-[2.75rem] bg-slate-950 p-2.5 shadow-[0_32px_70px_-26px_rgba(15,23,42,0.75)]">
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.2rem] bg-slate-100">
          <img key={activeImage.src} src={activeImage.src} alt={activeImage.alt} className="h-full w-full object-cover motion-safe:animate-[phone-carousel-in_300ms_ease-out]" />
          <span className="absolute left-1/2 top-2 h-7 w-24 -translate-x-1/2 rounded-full bg-slate-950" aria-hidden />
        </div>
      </div>
      {imageCount > 1 && <div className="mt-5 flex w-full items-center justify-between gap-4">
        <Button variant="outline" size="icon" onClick={showPrevious} aria-label="Voir l’écran précédent" className="rounded-full bg-white shadow-sm"><ChevronLeft size={18} aria-hidden /></Button>
        <div className="flex items-center gap-2" role="tablist" aria-label="Choisir un écran">
          {images.map((image, index) => <button key={image.src} type="button" role="tab" aria-selected={index === activeIndex} aria-label={`Afficher ${image.alt}`} onClick={() => setActiveIndex(index)} className={`h-2.5 rounded-full transition-all ${index === activeIndex ? 'w-7 bg-[#1463FF]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'}`} />)}
        </div>
        <Button variant="outline" size="icon" onClick={showNext} aria-label="Voir l’écran suivant" className="rounded-full bg-white shadow-sm"><ChevronRight size={18} aria-hidden /></Button>
      </div>}
    </section>
  )
}
