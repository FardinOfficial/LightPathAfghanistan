import { useRef } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayoutEffect'

/** Handles scroll restoration, in-page anchors and refresh after route changes. */
export default function ScrollManager() {
  const { pathname, key, hash } = useLocation()
  const navigationType = useNavigationType()
  const previousPath = useRef(null)
  const positions = useRef(new Map())

  useIsomorphicLayoutEffect(() => {
    const previous = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'
    // Prevent ScrollTrigger.refresh() from restoring the outgoing page's scroll.
    ScrollTrigger.clearScrollMemory('manual')

    const changed = previousPath.current !== pathname
    previousPath.current = pathname

    let anchor = hash.slice(1)
    try { anchor = decodeURIComponent(anchor) } catch { /* Use the original fragment. */ }
    const target = anchor && document.getElementById(anchor)
    const saved = positions.current.get(key)

    let targetY
    if (target) {
      target.scrollIntoView({ block: 'start' })
    } else if (navigationType === 'POP' && saved !== undefined) {
      targetY = saved
    } else if (changed) {
      targetY = 0
    }
    if (targetY !== undefined) window.scrollTo(0, targetY)
    if (changed && navigationType === 'PUSH' && !target) {
      document.getElementById('main-content')?.focus({ preventScroll: true })
    }

    const save = () => positions.current.set(key, window.scrollY)
    window.addEventListener('scroll', save, { passive: true })

    const refresh = requestAnimationFrame(() => {
      ScrollTrigger.clearScrollMemory('manual')
      if (targetY !== undefined && window.scrollY !== targetY) window.scrollTo(0, targetY)
      ScrollTrigger.refresh()
    })

    return () => {
      window.removeEventListener('scroll', save)
      cancelAnimationFrame(refresh)
      window.history.scrollRestoration = previous
    }
  }, [key, pathname, hash, navigationType])

  return null
}
