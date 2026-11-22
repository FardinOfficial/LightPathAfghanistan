import { build } from 'esbuild'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ALIASES, getPageMetadata, INDEXABLE_PATHS, ORIGIN } from '../src/data/site.js'

const dist = fileURLToPath(new URL('../dist/', import.meta.url))
const template = await readFile(join(dist, 'index.html'), 'utf8')
const scratch = await mkdtemp(fileURLToPath(new URL('../node_modules/.lightpath-render-', import.meta.url)))
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
const meta = (type, key, value) => `<meta ${type}="${key}" content="${escape(value)}">`

try {
  const outfile = join(scratch, 'render.cjs')
  await build({
    entryPoints: ['src/prerender.jsx'], outfile, bundle: true, packages: 'external',
    loader: { '.js': 'js', '.jsx': 'jsx' }, platform: 'node', format: 'cjs',
    jsx: 'automatic', jsxImportSource: 'react',
  })
  const { renderPage } = createRequire(import.meta.url)(outfile)
  for (const path of [...INDEXABLE_PATHS, ...Object.keys(ALIASES), '/404']) {
    const page = getPageMetadata(path)
    const tags = [
      `<title>${escape(page.title)}</title>`,
      meta('name', 'description', page.description),
      meta('name', 'robots', page.indexable ? 'index,follow' : 'noindex,follow'),
      ...(page.canonical ? [`<link rel="canonical" href="${page.canonical}">`, meta('property', 'og:url', page.canonical)] : []),
      meta('property', 'og:title', page.title),
      meta('property', 'og:description', page.description),
      meta('property', 'og:image', page.image),
      meta('property', 'og:image:width', '1200'),
      meta('property', 'og:image:height', '630'),
      meta('name', 'twitter:card', 'summary_large_image'),
      meta('name', 'twitter:title', page.title),
      meta('name', 'twitter:description', page.description),
      meta('name', 'twitter:image', page.image),
      ...(page.schema ? [`<script id="page-schema" type="application/ld+json">${JSON.stringify(page.schema).replaceAll('<', '\\u003c')}</script>`] : []),
    ]
    const html = template.replace('<!-- page-metadata -->', tags.join('\n    '))
      .replace('<div id="root"></div>', () => `<div id="root" data-path="${path}">${renderPage(path)}</div>`)
    const folder = join(dist, path)
    if (path !== '/404') await mkdir(folder, { recursive: true })
    await writeFile(path === '/404' ? join(dist, '404.html') : join(folder, 'index.html'), html)
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${INDEXABLE_PATHS.map(path => `  <url><loc>${ORIGIN + path}</loc></url>`).join('\n')}\n</urlset>\n`
  await writeFile(join(dist, 'sitemap.xml'), sitemap)
  await writeFile(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${ORIGIN}/sitemap.xml\n`)
  const redirects = [
    ...Object.entries(ALIASES).map(([from, to]) => `${from} ${to} 301!`),
    ...INDEXABLE_PATHS.filter(path => path !== '/').map(path => `${path} ${path}/index.html 200`),
    '/* /404.html 404',
  ]
  await writeFile(join(dist, '_redirects'), redirects.join('\n') + '\n')
  console.log(`Prerendered ${INDEXABLE_PATHS.length} canonical pages, legacy aliases and 404.html`)
} finally {
  await rm(scratch, { recursive: true, force: true })
}
