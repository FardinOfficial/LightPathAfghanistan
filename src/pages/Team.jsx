import { Link } from 'react-router-dom'
import { ArrowDown, ArrowUpRight, ExternalLink } from 'lucide-react'
import AnimatedText from '../components/AnimatedText'
import Photo from '../components/Photo'
import TeamPortrait from '../components/TeamPortrait'
import { BOARD, LEADERSHIP, TEAM_MEMBERS, TEAM_SOURCES } from '../data/team'

function PortraitCaption({ member, index, large = false }) {
  return (
    <div className="team-caption" data-reveal>
      <div className="team-caption-line" data-divider aria-hidden="true" />
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <span className="team-index">{String(index + 1).padStart(2, '0')}</span>
        <span className="team-role">{member.role}</span>
      </div>
      <h3 className={`mt-4 font-display font-medium leading-tight tracking-tight text-forest ${large ? 'team-name-large' : 'team-name'}`}>
        {member.name}
      </h3>
      {member.bio && <p className="mt-4 max-w-md text-sm leading-relaxed text-stone">{member.bio}</p>}
      {member.role === 'Co-founder' && (
        <a href={TEAM_SOURCES.interview} target="_blank" rel="noreferrer" className="text-link mt-5 text-[0.82rem]">
          Read the source interview <ExternalLink size={14} aria-hidden="true" />
        </a>
      )}
    </div>
  )
}

export default function Team() {
  return (
    <>
      {/* 1 — Cinematic hero */}
      <section className="team-hero">
        <div className="team-hero-bg" data-hero-image aria-hidden="true">
          <img
            src="/images/field-conversation.jpg"
            alt=""
            className="h-full w-full object-cover"
            style={{ objectPosition: 'center 40%' }}
            fetchpriority="high"
          />
        </div>
        <div className="team-hero-shade" aria-hidden="true" />
        <div className="shell relative z-10">
          <div data-hero-fade>
            <p className="eyebrow eyebrow-light">The people of Light Path</p>
          </div>
          <AnimatedText
            lines={['The People Behind', 'the Purpose.']}
            as="h1"
            accent={1}
            accentClass="team-hero-accent"
            className="team-hero-title"
          />
          <div className="team-hero-bottom" data-hero-fade>
            <p>
              Meet the people working together to expand access to education, knowledge,
              and opportunity through Light Path Afghanistan.
            </p>
            <a href="#leadership" className="team-scroll" aria-label="Scroll to leadership">
              <ArrowDown size={20} aria-hidden="true" /> <span>Meet the team</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2 — Leadership */}
      <section id="leadership" className="team-leadership section-pad">
        <div className="shell">
          <div className="team-section-head" data-reveal-left>
            <p className="eyebrow">Leadership</p>
            <h2 className="display-lg mt-5 text-forest">Two people. One shared beginning.</h2>
            <p className="lede mt-6 max-w-2xl">
              Light Path Afghanistan was founded in 2021 by Kamran Rayan and Abdul Wasi Wahdat.
              Both are named as co-founders in a published interview about the organization’s early work.
            </p>
          </div>

          <div className="team-leadership-grid">
            {LEADERSHIP.map((member, index) => (
              <article key={member.id} className={`team-lead ${index === 1 ? 'team-lead-offset' : ''}`}>
                <TeamPortrait member={member} priority={index === 0} className="team-lead-photo" objectPosition="center 30%" />
                <PortraitCaption member={member} index={index} large />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — Board of Directors */}
      <section className="team-board section-pad" id="board">
        <div className="shell team-board-grid">
          <div className="team-board-media">
            <TeamPortrait member={BOARD[0]} className="team-board-photo" objectPosition="center 24%" />
          </div>
          <div className="team-board-copy">
            <p className="eyebrow eyebrow-light" data-reveal-left>Board of Directors</p>
            <h2 className="display-lg mt-5 text-paper" data-reveal-left>Guidance that keeps the mission in view.</h2>
            <div className="team-board-rule" data-divider aria-hidden="true" />
            <p className="team-board-role" data-reveal>{BOARD[0].role}</p>
            <h3 className="team-board-name" data-reveal>{BOARD[0].name}</h3>
            <p className="lede mt-6 text-paper/75" data-reveal>{BOARD[0].bio}</p>
            <blockquote className="team-board-quote" data-reveal>
              <span aria-hidden="true">“</span>{BOARD[0].quote}<span aria-hidden="true">”</span>
            </blockquote>
          </div>
        </div>
      </section>

      {/* 4 — Team & Coordination */}
      <section className="team-coordination section-pad" id="team">
        <div className="shell">
          <div className="team-section-head" data-reveal-left>
            <p className="eyebrow">Team &amp; coordination</p>
            <h2 className="display-lg mt-5 text-forest">Working together, close to the work.</h2>
            <p className="lede mt-6 max-w-2xl">
              These team members support Light Path’s coordination and community work
              alongside the organization’s co-founders.
            </p>
          </div>

          <div className="team-grid" data-reveal-group>
            {TEAM_MEMBERS.map((member, index) => (
              <article key={member.id} className="team-member">
                <TeamPortrait member={member} className="team-member-photo" objectPosition="center 28%" />
                <PortraitCaption member={member} index={index + 2} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Our Shared Purpose */}
      <section className="team-purpose section-pad">
        <div className="shell team-purpose-grid">
          <Photo image="library-shelves" className="team-purpose-photo" showCaption objectPosition="center center" />
          <div>
            <div data-reveal-left>
              <p className="eyebrow eyebrow-light">Our shared purpose</p>
              <h2 className="display-lg mt-5 text-paper">Every role serves the same goal.</h2>
            </div>
            <p className="lede mt-7 text-paper/75" data-reveal>
              Light Path Afghanistan works to expand access to education in underserved
              communities, with particular attention to Loya Paktia. The team’s work ranges
              from community visits and learning materials to libraries and school access.
            </p>
            <div className="mt-9 flex flex-wrap gap-4" data-reveal>
              <a href={TEAM_SOURCES.interview} target="_blank" rel="noreferrer" className="btn btn-gold">
                Read the field account <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <Link to="/about" className="btn btn-outline-light">About Light Path</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6 — Closing CTA */}
      <section className="team-cta">
        <div className="shell team-cta-inner" data-reveal>
          <div>
            <p className="eyebrow eyebrow-light">Get involved</p>
            <h2 className="display-lg mt-5 text-paper">Be Part of the Journey.</h2>
            <p className="lede mt-6 max-w-xl text-paper/70">
              Learn about the programs behind the work, or find a way to contribute to
              expanding learning opportunities in Afghanistan.
            </p>
          </div>
          <div className="team-cta-actions">
            <Link to="/programs" className="btn btn-gold">Explore Our Programs <ArrowUpRight size={17} aria-hidden="true" /></Link>
            <Link to="/get-involved" className="btn btn-outline-light">Get Involved <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
