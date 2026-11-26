import { Link } from 'react-router-dom'
import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { EMAIL, NAV_LINKS, PHONE, PHONE_LABEL, SOCIAL_LINKS } from '../data/navigation'
import { PROGRAMS } from '../data/programs'
import { useI18n } from '../hooks/useLocale'

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer className="site-footer relative overflow-hidden text-paper" data-footer>
      <div className="footer-media" data-footer-image aria-hidden="true">
        <img
          src="/images/students-computer-classroom.webp"
          alt=""
          loading="lazy"
          decoding="async"
          style={{ objectPosition: 'center 45%' }}
        />
      </div>
      <div className="footer-shade" aria-hidden="true" />
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.04]" aria-hidden="true" />

      <div className="shell relative">
        <div className="footer-lead-block">
          <div data-footer-heading>
            <p className="eyebrow eyebrow-light">Light Path Afghanistan</p>
            <h2 className="display-lg mt-5 max-w-2xl text-paper">{t('footer.lead')}</h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-paper/70">{t('common.brandMessage')}</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex min-h-[54px] shrink-0 items-center gap-3 border border-gold bg-gold px-7 text-[0.82rem] font-bold uppercase tracking-[0.14em] text-forest transition-all duration-300 hover:bg-paper hover:border-paper"
          >
            {t('footer.leadButton')} <ArrowUpRight size={18} strokeWidth={1.8} aria-hidden="true" />
          </Link>
        </div>

        <div className="footer-rule" data-footer-divider aria-hidden="true" />

        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr] lg:gap-10" data-footer-reveal>
          <div>
            <Link to="/" className="inline-flex items-center gap-3 text-white" aria-label="Light Path Afghanistan — home">
              <img src="/images/logo-emblem.jpg" alt="" width="52" height="52" className="h-12 w-12 shrink-0 rounded-[2px] bg-paper p-1.5 object-contain" />
              <span className="font-display text-[1.35rem] font-semibold leading-none tracking-tight">
                Light Path
                <span className="mt-1 block font-sans text-[0.56rem] font-bold uppercase tracking-[0.28em] text-gold">Afghanistan</span>
              </span>
            </Link>
            <p lang="ps" dir="rtl" className="mt-6 text-lg text-gold">{t('common.pashtoName')}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/65">{t('common.brandMessage')}</p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-col gap-3">
            <p className="mb-2 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-gold">{t('footer.explore')}</p>
            {NAV_LINKS.map(({ name, path, key }) => (
              <Link key={path} to={path} className="w-fit text-sm text-paper/75 transition-colors hover:text-gold">{t(key) || name}</Link>
            ))}
          </nav>

          <nav aria-label="Program links" className="flex flex-col gap-3">
            <p className="mb-2 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-gold">{t('footer.programs')}</p>
            {PROGRAMS.map(({ id, shortName }) => (
              <Link key={id} to={`/programs/${id}`} className="w-fit text-sm text-paper/75 transition-colors hover:text-gold">{shortName}</Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="mb-2 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-gold">{t('footer.connect')}</p>
            <span className="text-sm text-paper/75">{t('footer.location')}</span>
            <a href={`mailto:${EMAIL}`} className="w-fit break-all text-sm text-paper/75 transition-colors hover:text-gold">{EMAIL}</a>
            <a href={`tel:${PHONE}`} className="w-fit text-sm text-paper/75 transition-colors hover:text-gold" dir="ltr">{PHONE_LABEL}</a>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
              {SOCIAL_LINKS.map(({ name, url }) => (
                <a key={name} href={url} target="_blank" rel="noreferrer" className="text-[0.76rem] font-bold uppercase tracking-[0.1em] text-gold/90 transition-colors hover:text-white">{name}</a>
              ))}
            </div>
          </div>
        </div>

        <p className="footer-closing" data-footer-closing>
          {t('common.brandMessage')}
        </p>

        <div className="footer-bottom" data-footer-reveal>
          <div>
            <small className="text-xs">© {new Date().getFullYear()} {t('footer.rights')}</small>
          </div>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}
            className="inline-flex min-h-[44px] items-center gap-2 self-start text-[0.76rem] font-bold uppercase tracking-[0.12em] text-paper/75 transition-colors hover:text-gold"
          >
            {t('common.backToTop')} <ArrowUp size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  )
}
