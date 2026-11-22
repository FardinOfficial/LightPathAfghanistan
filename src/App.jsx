import { MotionConfig } from 'framer-motion'
import { BrowserRouter, Route, Routes, StaticRouter, useLocation } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import PageTransition from './components/PageTransition'
import ScrollManager from './components/ScrollManager'
import { ALIASES } from './data/site'
import { LocaleProvider, useI18n } from './hooks/useLocale'
import { useMetadata } from './useMetadata'
import {
  About, Contact, Gallery, GetInvolved, Home, Impact, NotFound, ProgramDetail, Programs, Team,
} from './pages'

const routePages = [
  ['/', Home],
  ['/about', About],
  ['/team', Team],
  ['/programs', Programs],
  ['/programs/:programId', ProgramDetail],
  ['/impact', Impact],
  ['/gallery', Gallery],
  ['/get-involved', GetInvolved],
  ['/contact', Contact],
  ['*', NotFound],
]

function SkipLink() {
  const { t } = useI18n()
  return <a className="skip-link" href="#main-content">{t('common.skip')}</a>
}

function Site() {
  const location = useLocation()
  const { pathname } = location
  useMetadata(pathname)
  const canonicalPath = ALIASES[pathname.replace(/\/+$/, '').toLowerCase()]
  const routeKey = pathname.replace(/\/+$/, '') || '/'

  return (
    <MotionConfig reducedMotion="user">
      <LocaleProvider>
        <ScrollManager />
        <SkipLink />
        <MainLayout>
          <PageTransition key={routeKey} routeKey={routeKey}>
            <main id="main-content" tabIndex={-1} className="flex-1">
              <Routes location={canonicalPath ? { ...location, pathname: canonicalPath } : location}>
                {routePages.map(([path, Page]) => <Route key={path} path={path} element={<Page />} />)}
              </Routes>
            </main>
          </PageTransition>
        </MainLayout>
      </LocaleProvider>
    </MotionConfig>
  )
}

export function StaticApp({ path }) {
  return <StaticRouter location={path}><Site /></StaticRouter>
}

export default function App() {
  return <BrowserRouter><Site /></BrowserRouter>
}
