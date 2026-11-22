import AnimatedText from './AnimatedText'
import { getPhoto } from '../data/photography'

/**
 * Shared cinematic hero. A photographic variant adds a full-bleed, locally
 * hosted photograph with a tone-aware gradient so every page keeps the same
 * refined typography while retaining its own visual identity.
 */
export default function PageIntro({
  eyebrow, lines, accent = -1, body, children, tone = 'forest', className = '',
  photo, photoPosition = 'center center',
}) {
  const image = photo ? getPhoto(photo) : null
  const light = tone === 'sand'

  const tones = {
    forest: 'bg-forest text-paper',
    deep: 'bg-deep text-paper',
    sand: 'bg-sand text-forest border-b border-forest/10',
  }

  return (
    <section className={`page-intro relative isolate overflow-hidden ${image ? 'photo-intro' : ''} ${tones[tone] || tones.forest} ${className}`}>
      {image && (
        <>
          <div className="page-intro-media" data-hero-image aria-hidden="true">
            <img
              src={image.src}
              alt=""
              style={{ objectPosition: photoPosition }}
              fetchpriority="high"
              decoding="async"
            />
          </div>
          <div className={`page-intro-overlay ${light ? 'overlay-light' : 'overlay-dark'}`} aria-hidden="true" />
        </>
      )}
      <div className="shell intro-layout relative pt-16 pb-14 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24">
        {eyebrow && (
          <div data-hero-fade>
            <p className={`eyebrow ${light ? '' : 'eyebrow-light'}`}>{eyebrow}</p>
          </div>
        )}
        <AnimatedText
          lines={lines}
          as="h1"
          accent={accent}
          accentClass={light ? 'text-gold-ink' : 'text-gold'}
          className="intro-title display-xl mt-6 max-w-[15ch]"
        />
        {body && (
          <div data-hero-fade className="intro-body mt-8 max-w-2xl">
            <p className={`lede ${light ? 'text-stone' : 'text-paper/80'}`}>{body}</p>
          </div>
        )}
        {children && <div data-hero-fade>{children}</div>}
      </div>
    </section>
  )
}
