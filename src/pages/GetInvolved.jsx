import { Link } from 'react-router-dom'
import {
  BookOpen, Globe2, Handshake, HeartHandshake, Lightbulb, Users, ArrowUpRight,
} from 'lucide-react'
import PageIntro from '../components/PageIntro'
import Photo from '../components/Photo'
import SectionTitle from '../components/SectionTitle'
import { useI18n } from '../hooks/useLocale'

const OPTIONS = [
  { title: 'Volunteer', topic: 'Volunteering', body: 'Tell us what you can offer and how much time you have. We welcome inquiries from people with experience in education, translation and community outreach.', Icon: HeartHandshake },
  { title: 'Share knowledge', topic: 'Educational workshops', body: 'If you have skills in teaching, technology, science or literacy, let the team know how you could contribute to learning activities.', Icon: Lightbulb },
  { title: 'Support educational activities', topic: 'Learning materials', body: 'Tell us about books or classroom supplies you can offer so the team can discuss current needs and delivery with you.', Icon: BookOpen },
  { title: 'Collaborate', topic: 'Partnerships', body: 'Schools, libraries and community groups are invited to get in touch where our work and interests overlap.', Icon: Users },
  { title: 'Become a partner', topic: 'Partnerships', body: 'If your organization works on education access, start a conversation about practical ways to work together.', Icon: Handshake },
  { title: 'Expand learning opportunities', topic: 'General inquiry', body: 'Have an idea that could bring learning closer to underserved communities? Share it with the team.', Icon: Globe2 },
]

export default function GetInvolved() {
  const { t } = useI18n()

  return (
    <>
      <PageIntro
        tone="sand"
        className="intro-involved"
        photo="get-involved-hero"
        photoPosition="center 42%"
        eyebrow={t('involved.heroEyebrow')}
        lines={t('involved.heroLines')}
        accent={t('involved.heroAccent')}
        body={t('involved.heroBody')}
      />

      <section className="section-pad bg-paper">
        <div className="shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div>
            <SectionTitle eyebrow={t('involved.optionsEyebrow')} title={t('involved.optionsTitle')} body={t('involved.optionsBody')} />
            <Photo image="community-study" className="mt-10" ratio="4 / 3" showCaption objectPosition="center center" />
          </div>
          <div className="grid gap-x-10 sm:grid-cols-2" data-reveal-group>
            {OPTIONS.map(({ title, topic, body, Icon }, index) => (
              <article key={title} className="border-t border-forest/20 py-8">
                <div className="flex items-baseline justify-between">
                  <Icon size={30} strokeWidth={1.4} className="text-gold-ink" aria-hidden="true" />
                  <span className="font-display text-2xl text-gold-ink/40">0{index + 1}</span>
                </div>
                <h3 className="mt-6 font-display text-[1.5rem] font-medium text-forest">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">{body}</p>
                <Link to={`/contact?topic=${encodeURIComponent(topic)}`} className="text-link mt-5 text-[0.82rem]">
                  Ask about this <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-sand">
        <div className="shell">
          <SectionTitle eyebrow={t('involved.processEyebrow')} title={t('involved.processTitle')} body={t('involved.processBody')} />
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8" data-reveal-group>
            {t('involved.processSteps').map((step, index) => (
              <article key={step.title} className="relative border-t border-forest/20 pt-8">
                <span className="font-display text-6xl leading-none text-gold-ink/25">0{index + 1}</span>
                <h3 className="mt-6 font-display text-[1.7rem] font-medium text-forest">{step.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-stone">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-paper">
        <div className="shell grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <SectionTitle eyebrow={t('involved.faqEyebrow')} title={t('involved.faqTitle')} />
          <div className="divide-y divide-forest/15 border-y border-forest/15" data-reveal-left>
            {t('involved.faqs').map((faq) => (
              <details key={faq.q} className="faq-item group py-1">
                <summary className="flex min-h-[62px] items-center justify-between gap-6 py-4 font-display text-[1.15rem] font-medium text-forest md:text-[1.3rem]">
                  {faq.q}
                  <span className="faq-icon text-2xl font-light text-gold-ink" aria-hidden="true">+</span>
                </summary>
                <p className="max-w-2xl pb-6 pr-8 text-sm leading-relaxed text-stone">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
