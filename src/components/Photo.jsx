import { getPhoto } from '../data/photography'

/** Responsive photograph sourced from the central image registry. */
export default function Photo({
  image, className = '', ratio, priority = false, mask = true, showCaption = false, objectPosition,
}) {
  const photo = getPhoto(image)
  if (!photo) return null

  return (
    <figure className={className}>
      <div
        className="site-photo"
        style={{ aspectRatio: ratio || `${photo.width} / ${photo.height}` }}
        data-reveal-mask={mask || undefined}
      >
        <img
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          loading={priority ? 'eager' : 'lazy'}
          fetchpriority={priority ? 'high' : undefined}
          decoding="async"
          style={objectPosition ? { objectPosition } : undefined}
        />
      </div>
      {showCaption && (
        <figcaption className="photo-caption">
          {photo.caption} · {photo.credit}
        </figcaption>
      )}
    </figure>
  )
}
