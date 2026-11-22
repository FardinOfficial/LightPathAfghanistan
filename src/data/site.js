import { DOCUMENTED_PROGRAMS, FOCUS_PROGRAMS } from './programs.js'
import { EMAIL, SOCIAL_LINKS } from './navigation.js'

export const ORIGIN = 'https://www.lightpathafg.org'
const NAME = 'Light Path Afghanistan'
export const SITE_TITLE = 'Light Path Afghanistan | Bringing Education and Opportunity to Every Community'
export const SHARE_IMAGE = '/images/social-cover.jpg'

const pages = {
  '/': ['Home', 'Light Path Afghanistan expands access to education, books and learning opportunities in underserved Afghan communities, with a focus on Loya Paktia.', SITE_TITLE],
  '/about': ['About', 'Learn about Light Path Afghanistan, its mission, values, approach and the communities it works with.'],
  '/team': ['Our Team', 'Meet the people behind Light Path Afghanistan and the shared purpose that guides their work.'],
  '/programs': ['Our Programs', 'Explore documented work in books, community libraries and school access, plus areas of focus shared by the organization.'],
  '/impact': ['Our Impact', 'Read sourced accounts of Light Path Afghanistan’s early work distributing storybooks, opening a library and supporting school access.'],
  '/gallery': ['From the Field', 'Explore photographs from Light Path Afghanistan’s education work, an official Pashto film and updates from the field.'],
  '/get-involved': ['Get Involved', 'Connect with Light Path Afghanistan about volunteering, sharing knowledge, partnerships and learning materials.'],
  '/contact': ['Contact', 'Contact Light Path Afghanistan about education, volunteering, partnerships or learning materials.'],
  ...Object.fromEntries([...DOCUMENTED_PROGRAMS, ...FOCUS_PROGRAMS].map((program) => [
    `/programs/${program.id}`,
    [program.name, program.description],
  ])),
}

export const INDEXABLE_PATHS = Object.keys(pages)
export const ALIASES = { '/about-us': '/about', '/contact-us': '/contact', '/book-an-appointment': '/contact' }

export function getPageMetadata(pathname) {
  const path = pathname.toLowerCase().replace(/\/+$/, '') || '/'
  const canonicalPath = ALIASES[path] || path
  const page = Object.hasOwn(pages, canonicalPath) ? pages[canonicalPath] : null
  const [name, description, customTitle] = page || ['Page not found', 'Find your way back to Light Path Afghanistan.']
  const canonical = page ? ORIGIN + (canonicalPath === '/' ? '/' : canonicalPath) : null
  const crumbs = canonicalPath.startsWith('/programs/')
    ? [['Home', '/'], ['Programs', '/programs'], [name, canonicalPath]]
    : null
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORIGIN + '/#organization',
    name: NAME,
    alternateName: 'د رڼا لار افغانستان',
    url: ORIGIN + '/',
    email: EMAIL,
    sameAs: SOCIAL_LINKS.map((link) => link.url),
    areaServed: { '@type': 'Country', name: 'Afghanistan' },
  }
  const schema = crumbs
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: crumbs.map(([label, link], index) => ({
          '@type': 'ListItem', position: index + 1, name: label, item: ORIGIN + link,
        })),
      }
    : canonicalPath === '/' ? organization : null

  return {
    name,
    title: customTitle || (page ? `${name} | ${NAME}` : `Page Not Found | ${NAME}`),
    description,
    canonical,
    image: ORIGIN + SHARE_IMAGE,
    schema,
    indexable: Boolean(page),
  }
}
