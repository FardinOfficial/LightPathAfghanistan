import { useState } from 'react'
import { ArrowUpRight, Play } from 'lucide-react'
import { FILM_EMBED, FILM_URL } from '../data/navigation'

export default function VideoFeature({ id }) {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="field-film section-pad" id={id}>
      <div className="shell field-film-grid">
        <div data-reveal>
          <p className="field-label">Field film · Pashto</p>
          <h2 className="display-lg mt-5">Why communities want education</h2>
          <p className="lede mt-6">Light Path Afghanistan shares what it hears about education from communities in the plains and mountains.</p>
          <a className="text-link mt-6" href={FILM_URL} target="_blank" rel="noreferrer">Open on YouTube <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
        <figure>
          <div className="field-player" data-reveal-mask>
            {playing ? (
              <iframe
                src={FILM_EMBED}
                title="Light Path Afghanistan field film in Pashto"
                allow="encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            ) : (
              <button type="button" onClick={() => setPlaying(true)}>
                <img src="/images/education-film-poster.jpg" alt="" loading="lazy" decoding="async" />
                <span><Play size={19} fill="currentColor" aria-hidden="true" /> Load film</span>
              </button>
            )}
          </div>
          <figcaption className="field-credit">Source · Light Path Afghanistan on YouTube</figcaption>
        </figure>
      </div>
    </section>
  )
}
