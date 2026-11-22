import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react'
import PageIntro from '../components/PageIntro'
import Photo from '../components/Photo'
import { CLASSROOM_POST } from '../data/field'
import { PROGRAM_PHOTO_KEYS } from '../data/photography'
import { FIELD_INTERVIEW } from '../data/navigation'
import { PROGRAMS } from '../data/programs'
import NotFound from './NotFound'

export default function ProgramDetail() {
  const { programId } = useParams()
  const program = PROGRAMS.find(({ id }) => id === programId?.toLowerCase())

  if (!program) return <NotFound />

  const isFocus = program.status === 'focus'

  return (
    <>
      <PageIntro
        tone="sand"
        className="intro-article"
        photo={PROGRAM_PHOTO_KEYS[program.id] || 'books-materials'}
        photoPosition="center 40%"
        eyebrow={program.region}
        lines={[program.name]}
        body={program.description}
      />

      <div className="shell">
        <nav className="flex flex-wrap items-center gap-3 py-8 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-stone" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-gold-ink">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/programs" className="hover:text-gold-ink">Programs</Link>
          <span aria-hidden="true">/</span>
          <span className="text-forest" aria-current="page">{program.shortName}</span>
        </nav>

        <section className="program-detail-layout border-t border-forest/15 pb-20 pt-14">
          <Photo
            image={PROGRAM_PHOTO_KEYS[program.id] || 'books-materials'}
            className="program-detail-photo"
            ratio="4 / 3"
            showCaption
            objectPosition="center center"
          />
          <div>
            <p className="eyebrow">
              {isFocus ? 'Area of focus' : 'Documented work · February 2024 account'}
            </p>
            <h2 className="display-md mt-6 text-forest">
              {isFocus ? 'What is known so far' : 'How the work began'}
            </h2>
            <p className="lede mt-7">{program.detail}</p>

            <dl className="mt-10 border-t border-forest/15">
              <div className="grid gap-1 border-b border-forest/15 py-5 sm:grid-cols-[170px_1fr]">
                <dt className="text-[0.76rem] font-bold uppercase tracking-[0.14em] text-gold-ink">Who it serves</dt>
                <dd className="text-sm text-stone">{program.serves}</dd>
              </div>
              <div className="grid gap-1 border-b border-forest/15 py-5 sm:grid-cols-[170px_1fr]">
                <dt className="text-[0.76rem] font-bold uppercase tracking-[0.14em] text-gold-ink">Geographic note</dt>
                <dd className="text-sm text-stone">{program.region}</dd>
              </div>
            </dl>

            {!isFocus && (
              <a href={FIELD_INTERVIEW} target="_blank" rel="noreferrer" className="text-link mt-8">
                Read the published account <ExternalLink size={16} aria-hidden="true" />
              </a>
            )}
            {program.id === 'schools' && (
              <p className="mt-6">
                <a className="text-link" href={CLASSROOM_POST.url} target="_blank" rel="noreferrer">
                  Read the Omna classroom announcement <ExternalLink size={16} aria-hidden="true" />
                </a>
              </p>
            )}
            {isFocus && (
              <p className="mt-8 border-l-2 border-gold-ink/40 pl-5 text-sm leading-relaxed text-stone">
                For current dates, eligibility and availability, contact Light Path.
                <Link to={`/contact?topic=${encodeURIComponent(program.topic)}`} className="text-link ml-2">Ask the team <ArrowUpRight size={15} aria-hidden="true" /></Link>
              </p>
            )}
          </div>
        </section>
      </div>

      <section className="bg-sand py-10">
        <div className="shell flex flex-wrap items-center justify-between gap-6">
          <Link to="/programs" className="inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-forest transition-colors hover:text-gold-ink">
            <ArrowLeft size={17} aria-hidden="true" /> All programs
          </Link>
          <Link
            to={`/contact?topic=${encodeURIComponent(program.topic)}`}
            className="btn btn-forest"
          >
            Ask about this work <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>

    </>
  )
}
