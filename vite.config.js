import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFile } from 'node:fs/promises'
import { ALIASES, INDEXABLE_PATHS } from './src/data/site.js'

const pages = new Set([...INDEXABLE_PATHS, ...Object.keys(ALIASES)])

function previewStaticPages() {
  return {
    name: 'preview-static-pages',
    configurePreviewServer(server) {
      server.middlewares.use(async (request, response, next) => {
        const url = new URL(request.url, 'http://localhost')
        const path = url.pathname.replace(/\/$/, '') || '/'
        if (pages.has(path)) {
          if (path !== '/') request.url = `${path}/${url.search}`
          return next()
        }
        if (!request.headers.accept?.includes('text/html') || path === '/404.html') return next()

        try {
          const page = await readFile(new URL('./dist/404.html', import.meta.url))
          response.statusCode = 404
          response.setHeader('Content-Type', 'text/html; charset=utf-8')
          response.end(request.method === 'HEAD' ? undefined : page)
        } catch (error) {
          next(error)
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), previewStaticPages()],
  server: {
    host: true,
    port: 3000,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['gsap', 'react', 'react-dom', 'react-router-dom'],
  },
})