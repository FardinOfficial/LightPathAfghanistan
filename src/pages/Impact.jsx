import { Link } from 'react-router-dom'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import PageIntro from '../components/PageIntro'
import Photo from '../components/Photo'
import SectionTitle from '../components/SectionTitle'
import Stats from '../components/Stats'
import { useI18n } from '../hooks/useLocale'
import { FIELD_INTERVIEW } from '../data/navigation'
import { MILESTONES, VERIFIED_FIGURES } from '../data/impact'
import { REGIONAL_RECORD } from '../data/mission'

export default function Impact() {
  const { t } = useI18n()

  return (
    <>
      <PageIntro
        tone="forest"
        className="intro-record"
        photo="impact-hero"
        photoPosition="center 45%"
        eyebrow={t('impact.heroEyebrow')}
        lines={t('impact.heroLines')}
        accent={t('impact.heroAccent')}
        body={t('impact.heroBody')}
      />

      {/* Verified figures */}
      <section className="section-pad bg-night text-paper">
        <div className="shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <SectionTitle light eyebrow={t('impact.recordEyebrow')} title={t('impact.recordTitle')} body={t('impact.recordBody')} />
          <div data-reveal-scale>
            <Stats figures={VERIFIED_FIGURES} light />
            <a href={FIELD_INTERVIEW} target="_blank" rel="noreferrer" className="text-link text-link-light mt-10">
              {t('impact.sourceLink')} <ExternalLink size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Field story */}
      <section className="section-pad bg-paper">
        <div className="shell impact-story-grid">
          <Photo image="community-study" className="impact-story-photo" showCaption objectPosition="center center" />
          <div>
            <p className="eyebrow" data-reveal>{t('impact.storyEyebrow')}</p>
            <h2 className="display-md mt-6 text-forest" data-reveal>{t('impact.storyTitle')}</h2>
            <p className="lede mt-7" data-reveal>{t('impact.storyBody')}</p>
            <a href={FIELD_INTERVIEW} target="_blank" rel="noreferrer" className="text-link mt-8" data-reveal>
              {t('impact.sourceLink')} <ExternalLink size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-sand">
        <div className="shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="self-start lg:sticky lg:top-28">
            <SectionTitle eyebrow={t('impact.timelineEyebrow')} title={t('impact.timelineTitle')} />
          </div>
          <ol className="relative space-y-12 border-l border-forest/20 pl-10 md:pl-14">
            <span data-timeline-line className="absolute left-0 top-0 h-full w-px origin-top bg-gold-ink" aria-hidden="true" />
            {MILESTONES.map(([title, body], index) => (
              <li key={title} className="relative" data-reveal>
                <span className="absolute -left-[2.72rem] top-2 h-3.5 w-3.5 rounded-full border-2 border-sand bg-gold-ink md:-left-[3.6rem]" aria-hidden="true" />
                <span className="block font-display text-4xl leading-none text-gold-ink/35">0{index + 1}</span>
                <h3 className="mt-4 font-display text-[1.6rem] font-medium text-forest">{title}</h3>
                <p className="lede mt-4 max-w-xl">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Regional focus */}
      <section className="section-pad bg-forest text-paper">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionTitle light eyebrow={t('about.regionsEyebrow')} title={t('about.regionsTitle')} body={t('about.regionsBody')} />
          <dl className="divide-y divide-white/20 border-y border-white/20" data-reveal-group>
            {REGIONAL_RECORD.map(([region, record]) => (
              <div key={region} className="grid gap-2 py-5 sm:grid-cols-[150px_1fr] sm:gap-6">
                <dt className="font-display text-2xl text-gold">{region}</dt>
                <dd className="text-sm leading-relaxed text-paper/75">{record}</dd>
              </div>
            ))}
          </dl>
        </div>
        <p className="shell mt-10 text-xs text-paper/50">{t('about.regionsNote')}</p>
      </section>

      <section className="section-pad-sm bg-sand">
        <div className="shell flex flex-wrap items-center justify-between gap-6">
          <div data-reveal>
            <p className="eyebrow">{t('home.galleryEyebrow')}</p>
            <h2 className="display-md mt-4 text-forest">Updates from the field</h2>
          </div>
          <Link to="/gallery" className="text-link" data-reveal>
            Browse field updates <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

    </>
  )
}
