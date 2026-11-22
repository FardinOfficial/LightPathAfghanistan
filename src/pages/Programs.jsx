import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import PageIntro from '../components/PageIntro'
import Photo from '../components/Photo'
import SectionTitle from '../components/SectionTitle'
import { useI18n } from '../hooks/useLocale'
import { DOCUMENTED_PROGRAMS, FOCUS_PROGRAMS } from '../data/programs'
import { PROGRAM_PHOTO_KEYS } from '../data/photography'

function ProgramRow({ program }) {
  const { t } = useI18n()
  return (
    <article
      id={program.id}
      className="program-record scroll-mt-24"
      data-reveal-scale
    >
      <Photo
        image={PROGRAM_PHOTO_KEYS[program.id] || 'books-materials'}
        className="program-record-photo"
        ratio="4 / 3"
        showCaption
        objectPosition="center center"
      />
      <div>
        <p className="field-label">{program.region}</p>
        <h3 className="display-md mt-6 text-forest">{program.name}</h3>
        <p className="lede mt-6">{program.description}</p>
        <p className="mt-5 text-sm leading-relaxed text-stone"><strong className="text-forest">Who it serves: </strong>{program.serves}</p>
        <Link to={`/programs/${program.id}`} className="text-link mt-8">
          {t('common.learnMore')} <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}

export default function Programs() {
  const { t } = useI18n()

  return (
    <>
      <PageIntro
        tone="deep"
        className="intro-index"
        photo="teacher-session"
        photoPosition="center 38%"
        eyebrow={t('programs.heroEyebrow')}
        lines={t('programs.heroLines')}
        accent={t('programs.heroAccent')}
        body={t('programs.heroBody')}
      />

      <nav className="shell flex flex-wrap gap-4 border-b border-forest/10 py-6" aria-label="Programs on this page">
        {DOCUMENTED_PROGRAMS.map((program) => (
          <a key={program.id} href={`#${program.id}`} className="text-[0.76rem] font-bold uppercase tracking-[0.12em] text-forest/70 transition-colors hover:text-gold-ink">
            {program.shortName}
          </a>
        ))}
      </nav>

      <section className="shell">
        <div className="max-w-3xl pt-16 md:pt-20">
          <SectionTitle eyebrow={t('programs.documentedEyebrow')} title={t('programs.documentedTitle')} body={t('programs.documentedBody')} />
        </div>
        <div className="mt-10 divide-y divide-forest/15">
          {DOCUMENTED_PROGRAMS.map((program) => <ProgramRow key={program.id} program={program} />)}
        </div>
      </section>

      <section className="section-pad bg-sand">
        <div className="shell">
          <SectionTitle eyebrow={t('programs.focusEyebrow')} title={t('programs.focusTitle')} body={t('programs.focusBody')} />
          <div className="mt-14 grid gap-8 md:grid-cols-3" data-reveal-group>
            {FOCUS_PROGRAMS.map((program) => (
              <article key={program.id} className="group flex flex-col border-t border-gold-ink/50 pt-7">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-gold-ink">Area of focus</p>
                <h3 className="mt-4 font-display text-[1.6rem] font-medium leading-snug text-forest">{program.name}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-stone">{program.description}</p>
                <Link to={`/programs/${program.id}`} className="text-link mt-7 self-start">
                  {t('common.learnMore')} <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-forest text-paper">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-20">
          <SectionTitle light eyebrow={t('programs.studentEyebrow')} title={t('programs.studentTitle')} body={t('programs.studentBody')} />
          <div data-reveal>
            <Link to="/contact?topic=Student%20and%20scholarship%20inquiries" className="btn btn-gold">
              {t('programs.studentLink')} <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

    </>
  )
}
