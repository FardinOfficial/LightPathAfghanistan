import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ArrowUpRight, Check, Mail, MapPin, Phone, Send } from 'lucide-react'
import Button from '../components/Button'
import PageIntro from '../components/PageIntro'
import SectionTitle from '../components/SectionTitle'
import { useI18n } from '../hooks/useLocale'
import { CONTACT_TOPICS, EMAIL, PHONE, PHONE_LABEL, SOCIAL_LINKS } from '../data/navigation'
import { submitContact } from '../utils/contact'

const EMPTY = { name: '', email: '', topic: CONTACT_TOPICS[0], message: '' }

function ContactForm({ initialTopic }) {
  const { t } = useI18n()
  const [values, setValues] = useState({ ...EMPTY, topic: initialTopic })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [draft, setDraft] = useState('')

  useEffect(() => {
    setValues((current) => ({ ...current, topic: initialTopic }))
  }, [initialTopic])

  function update(field, value) {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    if (status !== 'idle') setStatus('idle')
  }

  function validate() {
    const next = {}
    if (!values.name.trim()) next.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) next.email = 'Please enter a valid email address.'
    if (values.message.trim().length < 10) next.message = 'Please write at least 10 characters.'
    return next
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length) {
      setStatus('error')
      return
    }
    const result = await submitContact(values)
    setDraft(result.url)
    setStatus('success')
    window.location.href = result.url
  }

  return (
    <form className="border border-forest/15 bg-paper p-7 shadow-editorial md:p-10" onSubmit={handleSubmit} noValidate>
      <p className="eyebrow">{t('contact.formEyebrow')}</p>
      <h2 className="display-md mt-4 text-forest">Prepare an email</h2>
      <p className="mt-5 max-w-xl text-sm leading-relaxed text-stone">{t('contact.formBody')}</p>

      <div className="mt-9 grid gap-5 sm:grid-cols-2">
        <div className="form-field">
          <label htmlFor="contact-name">{t('contact.formName')} *</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(event) => update('name', event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'error-name' : undefined}
            maxLength={100}
            placeholder="Your full name"
          />
          {errors.name && <span className="form-error" id="error-name">{errors.name}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="contact-email">{t('contact.formEmail')} *</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => update('email', event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'error-email' : undefined}
            maxLength={160}
            placeholder="Your email address"
          />
          {errors.email && <span className="form-error" id="error-email">{errors.email}</span>}
        </div>
      </div>

      <div className="form-field mt-5">
        <label htmlFor="contact-topic">{t('contact.formTopic')}</label>
        <select id="contact-topic" name="topic" value={values.topic} onChange={(event) => update('topic', event.target.value)}>
          {CONTACT_TOPICS.map((topic) => <option key={topic} value={topic}>{topic}</option>)}
        </select>
      </div>

      <div className="form-field mt-5">
        <label htmlFor="contact-message">{t('contact.formMessage')} *</label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          maxLength={1200}
          value={values.message}
          onChange={(event) => update('message', event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'error-message' : undefined}
          placeholder="Tell us how you would like to help or what you would like to know."
        />
        {errors.message && <span className="form-error" id="error-message">{errors.message}</span>}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-5">
        <Button type="submit" variant="forest" icon={Send}>
          Open email draft
        </Button>
        {status === 'error' && (
          <p role="alert" className="text-sm font-semibold text-red-700">{t('contact.formError')}</p>
        )}
      </div>

      {status === 'success' && (
        <div role="status" className="mt-7 flex items-start gap-3 border border-gold-ink/40 bg-sand p-5">
          <Check size={20} className="mt-0.5 shrink-0 text-gold-ink" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-forest">
            {t('contact.formSuccess')}{' '}
            <a href={draft} className="font-bold underline underline-offset-2">{t('contact.formSuccessLink')}</a>
          </p>
        </div>
      )}
    </form>
  )
}

function LocationIllustration() {
  const { t } = useI18n()
  return (
    <div className="mt-8 border-l-2 border-gold-ink/50 bg-sand px-6 py-5">
      <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-gold-ink">{t('contact.mapEyebrow')}</p>
      <p className="mt-2 font-display text-2xl text-forest">{t('contact.mapTitle')}</p>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-stone">{t('contact.mapBody')}</p>
    </div>
  )
}

export default function Contact() {
  const { t } = useI18n()
  const [params] = useSearchParams()
  const requestedTopic = params.get('topic')
  const initialTopic = CONTACT_TOPICS.includes(requestedTopic) ? requestedTopic : CONTACT_TOPICS[0]

  return (
    <>
      <PageIntro
        tone="sand"
        className="intro-contact"
        photo="community-ribbon"
        photoPosition="center 45%"
        eyebrow={t('contact.heroEyebrow')}
        lines={t('contact.heroLines')}
        accent={t('contact.heroAccent')}
        body={t('contact.heroBody')}
      />

      <section className="section-pad bg-sand">
        <div className="shell grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <aside data-reveal-left>
            <p className="eyebrow">{t('contact.infoEyebrow')}</p>
            <h2 className="display-md mt-5 text-forest">{t('contact.infoTitle')}</h2>

            <div className="mt-10 space-y-7">
              <div className="flex gap-4">
                <MapPin size={21} strokeWidth={1.6} className="mt-1 shrink-0 text-gold-ink" aria-hidden="true" />
                <div>
                  <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-stone">{t('contact.infoLocation')}</p>
                  <p className="mt-1 font-display text-xl text-forest">{t('footer.location')}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail size={21} strokeWidth={1.6} className="mt-1 shrink-0 text-gold-ink" aria-hidden="true" />
                <div>
                  <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-stone">{t('contact.infoEmail')}</p>
                  <a href={`mailto:${EMAIL}`} className="mt-1 block break-all text-forest underline decoration-gold underline-offset-4 hover:text-gold-ink">{EMAIL}</a>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone size={21} strokeWidth={1.6} className="mt-1 shrink-0 text-gold-ink" aria-hidden="true" />
                <div>
                  <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-stone">{t('contact.infoPhone')}</p>
                  <a href={`tel:${PHONE}`} dir="ltr" className="mt-1 block text-forest underline decoration-gold underline-offset-4 hover:text-gold-ink">{PHONE_LABEL}</a>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-stone">{t('contact.infoSocial')}</p>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                {SOCIAL_LINKS.map(({ name, url }) => (
                  <a key={name} href={url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[0.78rem] font-bold uppercase tracking-[0.1em] text-forest transition-colors hover:text-gold-ink">
                    {name} <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            <LocationIllustration />
          </aside>

          <div data-reveal-scale>
            <ContactForm key={initialTopic} initialTopic={initialTopic} />
          </div>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="shell grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <SectionTitle eyebrow={t('contact.faqEyebrow')} title={t('contact.faqTitle')} />
          <div className="divide-y divide-forest/15 border-y border-forest/15" data-reveal>
            {t('contact.faqs').map((faq) => (
              <details key={faq.q} className="faq-item py-1">
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
