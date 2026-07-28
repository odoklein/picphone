interface ScreenCropProps {
  src: string
  alt: string
  /** Crop window, in % of the source screenshot. */
  x: number
  y: number
  w: number
  h: number
  /** Source pixel size, used to give the box the crop's true aspect ratio. */
  srcW?: number
  srcH?: number
  className?: string
}

/**
 * Shows one band of a screenshot at full width — a widget, a toolbar, a row.
 * Seven near-identical home screens make a weak gallery; seven crops of the band
 * that actually differs make a strong one.
 *
 * The image is blown up so the crop window fills the box: a window `w`% wide
 * needs an image `100/w`% wide, shifted left by the same factor.
 */
export default function ScreenCrop({
  src, alt, x, y, w, h, srcW = 591, srcH = 1280, className = '',
}: ScreenCropProps) {
  return (
    <div
      className={`screen-crop ${className}`}
      style={{ aspectRatio: `${(srcW * w) / (srcH * h)}` }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        style={{
          width: `${100 / (w / 100)}%`,
          height: `${100 / (h / 100)}%`,
          left: `${-(x / w) * 100}%`,
          top: `${-(y / h) * 100}%`,
        }}
      />
    </div>
  )
}
