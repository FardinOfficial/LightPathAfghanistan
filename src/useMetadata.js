import { useEffect } from 'react'
import { getPageMetadata } from './data/site'

export function useMetadata(pathname) {
  useEffect(() => {
    const page = getPageMetadata(pathname)
    document.title = page.title
    const update = (tag, attribute, key, value, dataAttribute) => {
      let element = document.head.querySelector(`${tag}[${attribute}="${key}"]`)
      if (!value) {
        element?.remove()
        return
      }
      if (!element) {
        element = document.createElement(tag)
        element.setAttribute(attribute, key)
        document.head.append(element)
      }
      element.setAttribute(dataAttribute, value)
    }
    update('link', 'rel', 'canonical', page.canonical, 'href')
    for (const [name, content] of Object.entries({
      description: page.description, robots: page.indexable ? 'index,follow' : 'noindex,follow',
      'twitter:card': 'summary_large_image', 'twitter:title': page.title, 'twitter:description': page.description,
      'twitter:image': page.image,
    })) update('meta', 'name', name, content, 'content')
    for (const [name, content] of Object.entries({ 'og:title': page.title, 'og:description': page.description, 'og:url': page.canonical, 'og:image': page.image, 'og:image:width': '1200', 'og:image:height': '630' })) {
      update('meta', 'property', name, content, 'content')
    }
    const prior = document.getElementById('page-schema')
    if (!page.schema) {
      prior?.remove()
      return
    }
    const schema = prior || document.createElement('script')
    schema.id = 'page-schema'
    schema.type = 'application/ld+json'
    schema.textContent = JSON.stringify(page.schema)
    if (!prior) document.head.append(schema)
  }, [pathname])
}
