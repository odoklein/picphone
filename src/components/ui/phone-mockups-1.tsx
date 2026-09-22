import { type ImageItem, PhoneCarousel } from '@/components/ui/phone-mockups-1-utils/phone-carousel'

const exampleImages: ImageItem[] = [
  { src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=85', alt: 'Smartphone présentant une interface colorée' },
  { src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=85', alt: 'Smartphone tenu dans une main' },
  { src: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=900&q=85', alt: 'Application mobile sur un smartphone' },
  { src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85', alt: 'Écran de téléphone dans un environnement lumineux' },
]

export default function PhoneMockupBasic() { return <PhoneCarousel images={exampleImages} /> }
