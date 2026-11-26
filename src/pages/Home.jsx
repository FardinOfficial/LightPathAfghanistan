import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import AnimatedText from '../components/AnimatedText'
import ClassroomFeature from '../components/ClassroomFeature'
import Photo from '../components/Photo'
import VideoFeature from '../components/VideoFeature'
import Stats from '../components/Stats'
import { FIELD_INTERVIEW } from '../data/navigation'
import { DOCUMENTED_PROGRAMS } from '../data/programs'
import { VERIFIED_FIGURES } from '../data/impact'

export default function Home() {
  return (
    <>
      <section className="field-hero">
        <div className="field-hero-bg" data-hero-image aria-hidden="true">
          <img
            src="/images/Hero.jpeg"
            alt=""
            className="h-full w-full object-cover"
            style={{ objectPosition: 'center 42%' }}
            fetchpriority="high"
          />
        </div>
        <div className="field-hero-shade" aria-hidden="true" />
        <div className="shell">
          <div className="field-masthead" data-hero-fade>
            <p>Education access in Afghanistan</p>
            <p lang="ps" dir="rtl">د رڼا لار افغانستان</p>
          </div>
          <AnimatedText lines={['Learning in', 'Loya Paktia.']} accent={1} className="field-headline" accentClass="field-accent" />
          <div className="field-hero-bottom" data-hero-fade>
            <div>
              <p>Light Path Afghanistan brings books and learning opportunities to underserved communities, with a focus on Loya Paktia.</p>
              <Link to="/team" className="text-link mt-4">Meet the team <ArrowUpRight size={16} aria-hidden="true" /></Link>
            </div>
            <Link to="/programs" className="field-button">Explore our work <ArrowUpRight size={19} aria-hidden="true" /></Link>
            <a href="#classroom" className="field-down" aria-label="Read the classroom update"><ArrowDown size={22} aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <ClassroomFeature />

      <section className="field-photo-feature">
        <div className="shell field-photo-layout">
          <div data-parallax="5">
            <Photo image="community-study" className="field-photo-image" showCaption objectPosition="center center" />
          </div>
          <div data-reveal-left>
            <p className="eyebrow">Quality education</p>
            <h2 className="display-lg mt-5">Learning that meets learners where they are.</h2>
            <p className="lede mt-6">
              From classrooms to community libraries, Light Path Afghanistan supports
              practical learning opportunities that children and young people can actually reach.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/programs" className="btn btn-forest">Explore our programs <ArrowUpRight size={17} aria-hidden="true" /></Link>
              <Link to="/team" className="btn btn-outline">Meet the team</Link>
            </div>
          </div>
        </div>
      </section>

      <VideoFeature id="field-film" />

      <section className="field-chapters section-pad" data-horizontal>
        <div className="shell">
          <div className="field-section-heading" data-reveal-left>
            <h2 className="display-lg">What we do</h2>
            <Link className="text-link" to="/programs">All programs <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
          <div className="field-viewport" data-horizontal-viewport>
            <ol className="field-track" data-horizontal-track>
              {DOCUMENTED_PROGRAMS.map((program) => (
                <li key={program.id} className="field-chapter">
                  <p>{program.region}</p>
                  <h3>{program.name}</h3>
                  <p>{program.description}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="field-meter" aria-hidden="true"><span data-horizontal-progress /></div>
        </div>
      </section>

      <section className="field-record section-pad">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-24">
          <div data-reveal>
            <h2 className="display-lg">The early work</h2>
            <p className="mt-6 max-w-sm">Co-founder Abdul Wasi Wahdat described Light Path’s first projects in a February 2024 interview.</p>
            <a href={FIELD_INTERVIEW} className="text-link text-link-light mt-7" target="_blank" rel="noreferrer">Read the interview <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
          <div data-reveal-scale>
            <Stats figures={VERIFIED_FIGURES} light />
            <Link className="text-link text-link-light mt-8" to="/impact">See the impact record <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
