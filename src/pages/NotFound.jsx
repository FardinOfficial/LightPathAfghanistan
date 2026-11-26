import Button from '../components/Button'
import AnimatedText from '../components/AnimatedText'
import { useI18n } from '../hooks/useLocale'

export default function NotFound() {
  const { t } = useI18n()

  return (
    <section className="relative isolate flex min-h-[80svh] items-center overflow-hidden bg-forest text-paper">

      <div className="page-intro-media" data-hero-image aria-hidden="true">
        <img src="/images/not-found-hero.jpg" alt="" className="h-full w-full object-cover" style={{ objectPosition: 'center 45%' }} fetchpriority="high" />
      </div>
      <div className="page-intro-overlay overlay-dark" aria-hidden="true" />

      <div className="shell relative z-10 grid gap-12 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
        <div>
          <span className="block font-display text-[7rem] leading-none text-gold md:text-[12rem]" data-hero-fade>404</span>
          <p className="eyebrow eyebrow-light mt-6" data-hero-fade>{t('notFound.eyebrow')}</p>
        </div>
        <div>
          <AnimatedText
            lines={t('notFound.lines')}
            accent={t('notFound.accent')}
            as="h1"
            className="display-lg text-paper"
          />
          <p className="lede mt-8 max-w-xl text-paper/70" data-hero-fade>{t('notFound.body')}</p>
          <div className="mt-10 flex flex-wrap gap-4" data-hero-fade>
            <Button to="/" variant="gold">{t('notFound.home')}</Button>
            <Button to="/contact" variant="outline-light">{t('notFound.contact')}</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
