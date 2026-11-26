import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ArrowUpRight, ChevronLeft, ChevronRight, Plus, X } from 'lucide-react'
import PageIntro from '../components/PageIntro'
import VideoFeature from '../components/VideoFeature'
import { useI18n } from '../hooks/useLocale'
import { GALLERY_CATEGORIES, GALLERY_KEYS, getPhoto } from '../data/photography'
import { FIELD_POSTS } from '../data/field'

export default function Gallery() {
  const { t } = useI18n()
  const [params, setParams] = useSearchParams()
  const [active, setActive] = useState(null)
  const dialog = useRef(null)
  const opener = useRef(null)

  const requested = params.get('category')
  const category = GALLERY_CATEGORIES.includes(requested) ? requested : 'All'
  const filtered = category === 'All'
    ? GALLERY_KEYS
    : GALLERY_KEYS.filter((key) => getPhoto(key).category === category)

  const requestedPhoto = params.get('photo')
  const photoKey = active || (GALLERY_KEYS.includes(requestedPhoto) ? requestedPhoto : null)
  const selected = filtered.indexOf(photoKey)
  const photo = selected >= 0 ? getPhoto(filtered[selected]) : null

  useEffect(() => {
    if (!photo || !dialog.current) {
      if (dialog.current?.open) dialog.current.close()
      return
    }
    if (!dialog.current.open) {
      dialog.current.showModal()
      dialog.current.querySelector('.lightbox-close')?.focus()
    }
  }, [photo])

  function changeCategory(next) {
    setActive(null)
    setParams(next === 'All' ? {} : { category: next }, { preventScrollReset: true })
  }

  function move(direction) {
    if (!filtered.length) return
    setActive(filtered[(selected + direction + filtered.length) % filtered.length])
  }

  return (
    <>
      <PageIntro
        tone="sand"
        className="intro-split"
        photo="gallery-hero"
        photoPosition="center 42%"
        eyebrow="Photo & film archive"
        lines={['From the field.']}
        body="Photographs published by Light Path Afghanistan, alongside films and updates from its education work."
      />

      <section className="section-pad bg-paper">
        <div className="shell">
          <div className="flex flex-wrap gap-3" role="group" aria-label={t('gallery.filterLabel')}>
            {GALLERY_CATEGORIES.map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={option === category}
                onClick={() => changeCategory(option)}
                className={`min-h-[46px] border px-5 text-[0.76rem] font-bold uppercase tracking-[0.12em] transition-colors ${
                  option === category
                    ? 'border-forest bg-forest text-white'
                    : 'border-forest/25 text-forest hover:border-gold-ink hover:bg-sand'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <p className="sr-only" role="status">{filtered.length} photographs shown</p>

          <div className="photo-grid" key={category} data-reveal-group>
            {filtered.map((key) => {
              const item = getPhoto(key)
              return (
                <article key={key} className="photo-grid-item">
                  <button
                    type="button"
                    className="photo-grid-button"
                    aria-label={`View photograph: ${item.caption}`}
                    onClick={(event) => {
                      opener.current = event.currentTarget
                      setActive(key)
                    }}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="photo-grid-plus"><Plus size={20} aria-hidden="true" /></span>
                  </button>
                  <div className="photo-grid-caption">
                    <p className="field-label">{item.category}</p>
                    <h2 className="mt-2 font-display text-[1.4rem] font-medium text-forest">{item.caption}</h2>
                    <p className="mt-2 text-[0.72rem] text-stone/70">{item.credit}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <VideoFeature />

      <section className="shell section-pad-sm" aria-label="Field posts">
        <ol className="field-dispatches">
          {FIELD_POSTS.map(({ title, summary, credit, action, url }) => (
            <li key={title} data-reveal>
              <p className="field-label">{credit}</p>
              <h2 className="display-md">{title}</h2>
              <div>
                <p>{summary}</p>
                <a className="text-link mt-4" href={url} target="_blank" rel="noreferrer">{action} <ArrowUpRight size={16} aria-hidden="true" /></a>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <dialog
        ref={dialog}
        className="lightbox"
        aria-label="Photo viewer"
        onClose={() => {
          setActive(null)
          if (requestedPhoto) setParams(category === 'All' ? {} : { category }, { replace: true, preventScrollReset: true })
          ;(opener.current || document.querySelector('.photo-grid-button'))?.focus()
        }}
        onClick={(event) => { if (event.target === event.currentTarget) dialog.current.close() }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1) }
          if (event.key === 'ArrowRight') { event.preventDefault(); move(1) }
        }}
      >
        {photo && (
          <div className="lightbox-inner">
            <button type="button" className="lightbox-close" aria-label="Close photograph" onClick={() => dialog.current.close()}>
              <X size={20} aria-hidden="true" />
            </button>
            <img key={photoKey} src={photo.src} alt={photo.alt} />
            <div className="lightbar">
              <p aria-live="polite">
                <span className="font-display text-lg">{photo.caption}</span>
                <span className="text-gold ml-3 text-xs">{selected + 1} / {filtered.length}</span>
                <span className="mt-1 block text-[0.7rem] text-paper/50">{photo.credit}</span>
              </p>
              {filtered.length > 1 && (
                <div className="flex gap-2">
                  <button type="button" className="lightbox-nav" aria-label="Previous photograph" onClick={() => move(-1)}><ChevronLeft size={20} aria-hidden="true" /></button>
                  <button type="button" className="lightbox-nav" aria-label="Next photograph" onClick={() => move(1)}><ChevronRight size={20} aria-hidden="true" /></button>
                </div>
              )}
            </div>
          </div>
        )}
      </dialog>
    </>
  )
}
