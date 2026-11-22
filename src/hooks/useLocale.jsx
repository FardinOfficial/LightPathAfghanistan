import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { DEFAULT_LOCALE, directionFor, translate } from '../data/i18n'

const LocaleContext = createContext(null)

/**
 * Provides locale state and a `t()` helper to the whole application.
 * English is the published default. Dari and Pashto can be enabled by adding
 * approved strings to their dictionaries — no component rewrites required.
 */
export function LocaleProvider({ children, initialLocale = DEFAULT_LOCALE }) {
  const [locale, setLocale] = useState(initialLocale)
  const direction = directionFor(locale)
  const t = useMemo(() => (path, vars) => translate(locale, path, vars), [locale])

  useEffect(() => {
    if (typeof document === 'undefined') return
    document.documentElement.lang = locale
    document.documentElement.dir = direction
  }, [locale, direction])

  const value = useMemo(() => ({ locale, setLocale, direction, t }), [locale, direction, t])
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useI18n() {
  const context = useContext(LocaleContext)
  if (context) return context
  // Safe fallback for isolated tests or server rendering without a provider.
  return { locale: DEFAULT_LOCALE, setLocale: () => {}, direction: 'ltr', t: (path) => translate(DEFAULT_LOCALE, path) }
}
