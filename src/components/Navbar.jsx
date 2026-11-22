import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { EMAIL, NAV_LINKS } from '../data/navigation'
import { useI18n } from '../hooks/useLocale'

function Brand({ light, onClick }) {
  const { t } = useI18n()
  return (
    <Link to="/" onClick={onClick} className={`group relative z-10 flex shrink-0 items-center gap-3 ${light ? 'text-white' : 'text-forest'}`} aria-label="Light Path Afghanistan — home">
      <span className="font-display text-[1.12rem] font-semibold leading-none tracking-tight md:text-[1.3rem]">
        Light Path
        <span className="mt-1 block font-sans text-[0.54rem] font-bold uppercase tracking-[0.28em] opacity-80 md:text-[0.6rem]">Afghanistan</span>
      </span>
      <span className="sr-only" lang="ps" dir="rtl">{t('common.pashtoName')}</span>
    </Link>
  )
}

export default function Navbar() {
  const { pathname } = useLocation()
  const { t } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const progress = useRef(null)
  const toggle = useRef(null)
  const menu = useRef(null)
  const firstLink = useRef(null)
  const transparent = pathname === '/' && !scrolled && !open

  useEffect(() => {
    let frame
    const update = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight
      const ratio = available > 0 ? window.scrollY / available : 0
      if (progress.current) progress.current.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`
      setScrolled(window.scrollY > 36)
    }
    const schedule = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    if (!open) return undefined
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const focusTimer = requestAnimationFrame(() => firstLink.current?.focus())
    const breakpoint = window.matchMedia('(min-width: 1024px)')
    const closeOnDesktop = (event) => { if (event.matches) setOpen(false) }
    breakpoint.addEventListener('change', closeOnDesktop)
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggle.current?.focus()
      }
      if (event.key === 'Tab') {
        const links = menu.current?.querySelectorAll('a')
        if (!links?.length) return
        const first = toggle.current
        const last = links[links.length - 1]
        const active = document.activeElement
        if (event.shiftKey ? active === first : active === last) {
          event.preventDefault()
          const destination = event.shiftKey ? last : first
          destination?.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      cancelAnimationFrame(focusTimer)
      breakpoint.removeEventListener('change', closeOnDesktop)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <header className={`site-header fixed inset-x-0 top-0 z-50 ${transparent ? '' : 'header-solid'}`}>
        <div className="shell flex h-full items-center justify-between gap-6">
          <Brand light={transparent} onClick={() => setOpen(false)} />

          <nav className="hidden items-center gap-6 lg:flex xl:gap-9" aria-label="Main navigation">
            {NAV_LINKS.filter(({ path }) => path !== '/' && path !== '/get-involved').map(({ name, path, key }) => (
              <NavLink
                key={path}
                to={path}
                end={path !== '/programs'}
                className={({ isActive }) =>
                  `nav-relative nav-underline text-[0.8rem] font-bold uppercase tracking-[0.12em] transition-colors duration-300 ${
                    transparent ? 'text-white/85 hover:text-gold' : 'text-forest/80 hover:text-forest'
                  } ${isActive && !transparent ? '!text-gold-ink' : ''}`
                }
              >
                {t(key) || name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <NavLink
              to="/get-involved"
              className={`inline-flex min-h-[46px] items-center gap-2 border px-5 text-[0.76rem] font-bold uppercase tracking-[0.14em] transition-all duration-300 ${
                transparent
                  ? 'border-gold bg-gold text-forest hover:bg-white hover:border-white'
                  : 'border-forest bg-forest text-white hover:border-deep hover:bg-deep'
              }`}
            >
              {t('nav.cta')} <ArrowUpRight size={16} strokeWidth={1.9} aria-hidden="true" />
            </NavLink>
          </div>

          <button
            ref={toggle}
            type="button"
            className={`inline-flex min-h-[44px] items-center gap-2 border px-3 text-[0.78rem] font-bold uppercase tracking-[0.12em] lg:hidden ${
              transparent ? 'border-white/50 text-white' : 'border-forest/30 text-forest'
            }`}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
            {open ? t('nav.close') : t('nav.menu')}
          </button>
        </div>
        <div ref={progress} className="scroll-progress absolute inset-x-0 bottom-0 h-[2px]" aria-hidden="true" />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            ref={menu}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto overscroll-contain bg-forest text-paper lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
          >
            <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.04]" aria-hidden="true" />
            <nav className="relative flex flex-1 flex-col justify-center gap-1 px-7 pb-5 pt-24" aria-label="Mobile navigation">
              {NAV_LINKS.map(({ name, path, key }, index) => (
                <motion.div
                  key={path}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.08 + index * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <NavLink
                    ref={index === 0 ? firstLink : undefined}
                    to={path}
                    end={path !== '/programs'}
                    onClick={() => {
                      setOpen(false)
                      if (pathname === path) toggle.current?.focus()
                    }}
                    className={({ isActive }) =>
                      `block border-b border-white/10 py-3 font-display text-[clamp(2rem,9vw,3.2rem)] leading-none tracking-tight ${
                        isActive ? 'text-gold' : 'text-paper'
                      }`
                    }
                  >
                    {t(key) || name}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <div className="relative flex items-center justify-between border-t border-white/15 px-7 py-6">
              <span lang="ps" dir="rtl" className="text-gold">{t('common.pashtoName')}</span>
              <a href={`mailto:${EMAIL}`} className="text-[0.8rem] font-bold uppercase tracking-[0.12em] text-paper/80">Email us</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
