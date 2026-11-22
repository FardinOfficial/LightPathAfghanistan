import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from './useReducedMotion'
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Central GSAP engine for a page. Everything is created inside a gsap.context
 * scoped to the page root, so a single ctx.revert() removes every tween and
 * ScrollTrigger when the route changes. Desktop-only pinned sequences live in
 * a gsap.matchMedia() context that is reverted separately.
 */
export function useGSAPAnimations(scopeRef, routeKey = '') {
  useIsomorphicLayoutEffect(() => {
    const scope = scopeRef.current
    if (!scope || typeof window === 'undefined' || prefersReducedMotion()) return undefined

    let matchMedia

    const context = gsap.context(() => {
      const q = gsap.utils.selector(scope)
      const ease = 'power3.out'

      /* ---------- Opening sequence ---------- */
      const heroLines = q('[data-hero-line]')
      const heroFades = q('[data-hero-fade]')
      const heroImage = q('[data-hero-image]')
      if (heroLines.length || heroFades.length || heroImage.length) {
        const intro = gsap.timeline({ defaults: { ease, clearProps: 'transform,opacity,clipPath' } })
        if (heroLines.length) {
          intro.from(heroLines, { yPercent: 108, duration: 1, stagger: 0.11 }, 0.05)
        }
        if (heroFades.length) {
          intro.from(heroFades, { y: 18, opacity: 0, duration: 0.7, stagger: 0.08 }, 0.34)
        }
        if (heroImage.length) {
          intro.from(heroImage[0], { clipPath: 'inset(0 0 100% 0)', duration: 1.25, ease: 'power4.inOut' }, 0)
          const image = heroImage[0].querySelector('img')
          if (image) intro.from(image, { scale: 1.18, duration: 1.6, ease: 'power3.out' }, 0)
        }

        // Once the opening reveal has settled, let hero photographs drift
        // gently with the scroll. Created after intro so transforms never clash.
        intro.eventCallback('onComplete', () => {
          heroImage.forEach((frame) => {
            const image = frame.querySelector('img')
            if (!image) return
            gsap.fromTo(image, { yPercent: -3 }, {
              yPercent: 6,
              ease: 'none',
              scrollTrigger: {
                trigger: frame.closest('section') || frame,
                start: 'top top',
                end: 'bottom top',
                scrub: 0.6,
              },
            })
          })
        })
      }

      /* ---------- Scroll reveals ---------- */
      q('[data-reveal]').forEach((element) => {
        gsap.from(element, {
          y: 36,
          opacity: 0,
          duration: 0.9,
          ease,
          clearProps: 'transform,opacity',
          scrollTrigger: { trigger: element, start: 'top 88%', once: true },
        })
      })

      q('[data-reveal-group]').forEach((group) => {
        const children = Array.from(group.children)
        if (!children.length) return
        gsap.from(children, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.09,
          ease,
          clearProps: 'transform,opacity',
          scrollTrigger: { trigger: group, start: 'top 85%', once: true },
        })
      })

      /* ---------- Distinct secondary reveals ---------- */
      q('[data-reveal-left]').forEach((element) => {
        gsap.from(element, {
          x: -30,
          opacity: 0,
          duration: 0.8,
          ease,
          clearProps: 'transform,opacity',
          scrollTrigger: { trigger: element, start: 'top 88%', once: true },
        })
      })

      q('[data-reveal-scale]').forEach((element) => {
        gsap.from(element, {
          scale: 0.965,
          y: 22,
          opacity: 0,
          duration: 0.95,
          ease,
          clearProps: 'transform,opacity',
          scrollTrigger: { trigger: element, start: 'top 87%', once: true },
        })
      })

      q('[data-divider]').forEach((element) => {
        gsap.fromTo(element, { scaleX: 0 }, {
          scaleX: 1,
          duration: 0.95,
          ease: 'power2.inOut',
          scrollTrigger: { trigger: element, start: 'top 93%', once: true },
        })
      })

      /* ---------- Masked image reveals ---------- */
      q('[data-reveal-mask]').forEach((frame) => {
        gsap.fromTo(
          frame,
          { clipPath: 'inset(0 0 100% 0)' },
          {
            clipPath: 'inset(0 0 0% 0)',
            duration: 1.05,
            ease: 'power3.inOut',
            scrollTrigger: { trigger: frame, start: 'top 86%', once: true },
          },
        )
        const image = frame.querySelector('img')
        if (image) {
          gsap.fromTo(image, { scale: 1.12 }, {
            scale: 1,
            duration: 1.4,
            ease: 'power3.out',
            scrollTrigger: { trigger: frame, start: 'top 86%', once: true },
          })
        }
      })

      /* ---------- Gentle parallax ---------- */
      q('[data-parallax]').forEach((element) => {
        const distance = Number(element.dataset.parallax) || 8
        gsap.fromTo(element, { yPercent: -distance / 2 }, {
          yPercent: distance / 2,
          ease: 'none',
          scrollTrigger: {
            trigger: element.parentElement || element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
          },
        })
      })

      /* ---------- Animated counters ---------- */
      const numberFormat = new Intl.NumberFormat('en')
      q('[data-count]').forEach((element) => {
        const target = Number(element.dataset.count) || 0
        const state = { value: 0 }
        gsap.to(state, {
          value: target,
          duration: 1.8,
          ease: 'power2.out',
          onUpdate: () => { element.textContent = `${numberFormat.format(Math.round(state.value))}${element.dataset.suffix || ''}` },
          scrollTrigger: { trigger: element, start: 'top 90%', once: true },
        })
      })

      /* ---------- Timeline progress line ---------- */
      q('[data-timeline-line]').forEach((line) => {
        gsap.fromTo(line, { scaleY: 0 }, {
          scaleY: 1,
          ease: 'none',
          transformOrigin: 'top center',
          scrollTrigger: { trigger: line.parentElement, start: 'top 78%', end: 'bottom 72%', scrub: 0.4 },
        })
      })

      /* ---------- Cinematic footer: image, headline, dividers, links ---------- */
      const footerRoot = document.querySelector('[data-footer]')
      if (footerRoot) {
        const media = footerRoot.querySelector('[data-footer-image]')
        if (media) {
          gsap.fromTo(media, { clipPath: 'inset(0 0 100% 0)' }, {
            clipPath: 'inset(0 0 0% 0)',
            duration: 1.15,
            ease: 'power3.inOut',
            scrollTrigger: { trigger: footerRoot, start: 'top 92%', once: true },
          })
          const mediaImage = media.querySelector('img')
          if (mediaImage) {
            gsap.fromTo(mediaImage, { scale: 1.08 }, {
              scale: 1,
              duration: 1.5,
              ease: 'power3.out',
              scrollTrigger: { trigger: footerRoot, start: 'top 92%', once: true },
            })
          }
        }
        const heading = footerRoot.querySelector('[data-footer-heading]')
        if (heading) {
          gsap.from(heading, {
            y: 34, opacity: 0, duration: 0.9, ease,
            clearProps: 'transform,opacity',
            scrollTrigger: { trigger: heading, start: 'top 90%', once: true },
          })
        }
        const divider = footerRoot.querySelector('[data-footer-divider]')
        if (divider) {
          gsap.fromTo(divider, { scaleX: 0 }, {
            scaleX: 1, duration: 1, ease: 'power2.inOut',
            scrollTrigger: { trigger: divider, start: 'top 94%', once: true },
          })
        }
        const closing = footerRoot.querySelector('[data-footer-closing]')
        if (closing) {
          gsap.from(closing, {
            y: 22, opacity: 0, duration: 0.85, ease,
            clearProps: 'transform,opacity',
            scrollTrigger: { trigger: closing, start: 'top 92%', once: true },
          })
        }
      }
      const footer = document.querySelector('[data-footer-reveal]')
      if (footer) {
        gsap.from(footer.children, {
          y: 28,
          opacity: 0,
          duration: 0.85,
          stagger: 0.08,
          ease,
          clearProps: 'transform,opacity',
          scrollTrigger: { trigger: footer, start: 'top 92%', once: true },
        })
      }

      /* ---------- Desktop-only pinned horizontal storytelling ---------- */
      matchMedia = gsap.matchMedia()
      matchMedia.add('(min-width: 900px) and (min-height: 680px) and (prefers-reduced-motion: no-preference)', () => {
        const cleanups = []
        scope.querySelectorAll('[data-horizontal]').forEach((section) => {
          const viewport = section.querySelector('[data-horizontal-viewport]')
          const track = section.querySelector('[data-horizontal-track]')
          const progress = section.querySelector('[data-horizontal-progress]')
          if (!viewport || !track) return

          section.dataset.horizontalActive = ''
          const travel = () => Math.max(0, track.scrollWidth - viewport.clientWidth)
          if (travel() < 40) {
            delete section.dataset.horizontalActive
            return
          }

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              end: () => `+=${Math.max(window.innerHeight * 0.8, travel() * 1.05)}`,
              pin: true,
              scrub: 0.8,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          })
          timeline.to(track, { x: () => -travel(), ease: 'none' }, 0)
          if (progress) timeline.to(progress, { scaleX: 1, ease: 'none' }, 0)
          cleanups.push(() => {
            timeline.scrollTrigger?.kill()
            delete section.dataset.horizontalActive
          })
        })
        return () => cleanups.forEach((cleanup) => cleanup())
      })
    }, scope)

    let resizeFrameId
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(resizeFrameId)
      resizeFrameId = requestAnimationFrame(() => ScrollTrigger.refresh())
    })
    observer.observe(scope)

    return () => {
      cancelAnimationFrame(resizeFrameId)
      observer.disconnect()
      matchMedia?.revert()
      context.revert()
    }
  }, [scopeRef, routeKey])
}
