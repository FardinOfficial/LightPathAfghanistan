import { Link } from 'react-router-dom'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import AnimatedText from '../components/AnimatedText'
import PageIntro from '../components/PageIntro'
import Photo from '../components/Photo'
import SectionTitle from '../components/SectionTitle'
import TeamPortrait from '../components/TeamPortrait'
import { LEADERSHIP } from '../data/team'
import { useI18n } from '../hooks/useLocale'
import { FIELD_INTERVIEW, NGO_REGISTRY } from '../data/navigation'
import { REGIONAL_RECORD } from '../data/mission'

export default function About() {
  const { t } = useI18n()

  return (
    <>
      <PageIntro
        tone="sand"
        className="intro-split"
        photo="about-hero"
        photoPosition="center 46%"
        eyebrow={t('about.heroEyebrow')}
        lines={t('about.heroLines')}
        accent={t('about.heroAccent')}
        body={t('about.heroBody')}
      />

      {/* Introduction */}
      <section className="section-pad bg-paper">
        <div className="shell about-intro-grid">
          <div className="max-w-4xl" data-reveal-left>
            <p className="eyebrow" data-reveal>{t('about.introEyebrow')}</p>
            <AnimatedText as="h2" lines={[t('about.introTitle')]} className="display-lg mt-6 text-forest" />
            <p className="lede mt-8" data-reveal>{t('about.introBody')}</p>
            <a href={FIELD_INTERVIEW} target="_blank" rel="noreferrer" className="text-link mt-8" data-reveal>
              {t('about.introLink')} <ExternalLink size={16} aria-hidden="true" />
            </a>
          </div>
          <Photo image="library-shelves" className="about-intro-photo" showCaption objectPosition="center center" />
        </div>
      </section>

      {/* Story timeline */}
      <section className="section-pad bg-sand">
        <div className="shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="self-start lg:sticky lg:top-28">
            <SectionTitle eyebrow={t('about.storyEyebrow')} title={t('about.storyTitle')} />
          </div>
          <ol className="relative space-y-12 border-l border-forest/20 pl-10 md:pl-14">
            <span data-timeline-line className="absolute left-0 top-0 h-full w-px origin-top bg-gold-ink" aria-hidden="true" />
            {t('about.milestones').map((milestone) => (
              <li key={milestone.year} className="relative" data-reveal>
                <span className="absolute -left-[2.72rem] top-2 h-3.5 w-3.5 rounded-full border-2 border-sand bg-gold-ink md:-left-[3.6rem]" aria-hidden="true" />
                <span className="block font-display text-5xl leading-none text-gold-ink/35">{milestone.year}</span>
                <h3 className="display-md mt-3 text-forest">{milestone.title}</h3>
                <p className="lede mt-4 max-w-xl">{milestone.body}</p>
              </li>
            ))}
            <li data-reveal>
              <a href={NGO_REGISTRY} target="_blank" rel="noreferrer" className="text-link">
                {t('about.sourceLink')} <ExternalLink size={16} aria-hidden="true" />
              </a>
            </li>
          </ol>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="section-pad bg-forest text-paper">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-20">
          {[
            { eyebrow: t('about.missionEyebrow'), title: t('about.missionTitle'), body: t('about.missionBody') },
            { eyebrow: t('about.visionEyebrow'), title: t('about.visionTitle'), body: t('about.visionBody') },
          ].map((item, index) => (
            <article key={item.eyebrow} className="relative border-t border-white/25 pt-10" data-reveal-scale>
              <span className="absolute right-0 top-6 font-display text-7xl text-white/5">0{index + 1}</span>
              <p className="eyebrow eyebrow-light">{item.eyebrow}</p>
              <h2 className="display-md mt-5 text-paper">{item.title}</h2>
              <p className="lede mt-6 max-w-lg text-paper/70">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-paper">
        <div className="shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <SectionTitle eyebrow={t('about.valuesEyebrow')} title={t('about.valuesTitle')} />
          <ol className="grid gap-x-12 gap-y-0 sm:grid-cols-2" data-reveal-group>
            {t('about.values').map((value, index) => (
              <li key={value} className="flex items-baseline gap-5 border-t border-forest/15 py-6">
                <span className="font-display text-2xl text-gold-ink/60">{String(index + 1).padStart(2, '0')}</span>
                <span className="font-display text-[1.3rem] leading-snug text-forest">{value}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Approach */}
      <section className="section-pad bg-sand">
        <div className="shell">
          <SectionTitle eyebrow={t('about.approachEyebrow')} title={t('about.approachTitle')} body={t('about.approachBody')} />
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8" data-reveal-group>
            {t('about.approachSteps').map((step, index) => (
              <article key={step.title} className="border-t border-forest/20 pt-6">
                <span className="mt-7 block font-display text-4xl text-gold-ink/50">0{index + 1}</span>
                <h3 className="display-md mt-3 text-forest">{step.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-stone">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width photograph */}
      <section className="about-wide">
        <div data-parallax="5">
          <Photo image="science-workshop" className="about-wide-photo" showCaption objectPosition="center 45%" />
        </div>
      </section>

      {/* Geographic focus */}
      <section className="relative isolate overflow-hidden bg-forest text-paper" id="regions">
        <div className="shell py-24 md:py-32">
          <SectionTitle light eyebrow={t('about.regionsEyebrow')} title={t('about.regionsTitle')} body={t('about.regionsBody')} />
          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
            <dl className="divide-y divide-white/20 border-y border-white/20" data-reveal-group>
              {REGIONAL_RECORD.map(([region, record]) => (
                <div key={region} className="grid gap-2 py-5 sm:grid-cols-[140px_1fr] sm:gap-6">
                  <dt className="font-display text-2xl text-gold">{region}</dt>
                  <dd className="text-sm leading-relaxed text-paper/75">{record}</dd>
                </div>
              ))}
            </dl>
            <p className="self-end text-xs leading-relaxed text-paper/50" data-reveal>{t('about.regionsNote')}</p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-pad bg-paper">
        <div className="shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <SectionTitle eyebrow={t('about.teamEyebrow')} title={t('about.teamTitle')} body={t('about.teamBody')} />
          <div className="grid gap-6 sm:grid-cols-2" data-reveal-group>
            {LEADERSHIP.map((person) => (
              <article key={person.id} className="border border-forest/15 bg-sand p-6">
                <TeamPortrait member={person} className="aspect-[4/3]" objectPosition="center 30%" />
                <h3 className="mt-6 font-display text-2xl font-medium text-forest">{person.name}</h3>
                <p className="mt-1 text-[0.76rem] font-bold uppercase tracking-[0.14em] text-gold-ink">{person.role}</p>
                {person.bio && <p className="mt-4 text-sm leading-relaxed text-stone">{person.bio}</p>}
              </article>
            ))}
          </div>
          <div className="lg:col-start-2" data-reveal>
            <Link to="/team" className="text-link">
              Meet the full team <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

    </>
  )
}
