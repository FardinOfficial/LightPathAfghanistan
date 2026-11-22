import { useEffect, useState } from 'react'

const EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp']

function initials(name) {
  return name.split(' ').filter(Boolean).slice(0, 2).map((part) => part[0]).join('').toUpperCase()
}

/**
 * Team portrait with graceful degradation.
 *
 * Probes common extensions for the roster's photo base name and checks the
 * response content type, so a missing file (or a dev server's HTML fallback)
 * never leaves a blank frame. Until a real photograph is available, an
 * elegant typographic placeholder is shown — never a stock or generated face.
 * Identity always comes from the roster, never from the image.
 */
export default function TeamPortrait({ member, className = '', priority = false, objectPosition = 'center 35%' }) {
  const [src, setSrc] = useState(null)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    let cancelled = false
    async function locate() {
      for (const extension of EXTENSIONS) {
        const candidate = `${member.photoBase}.${extension}`
        try {
          const response = await fetch(candidate, { method: 'HEAD' })
          const type = response.headers.get('content-type') || ''
          if (response.ok && type.startsWith('image/')) {
            if (!cancelled) {
              setSrc(candidate)
              setChecked(true)
            }
            return
          }
        } catch {
          // try the next extension
        }
      }
      if (!cancelled) {
        setSrc(null)
        setChecked(true)
      }
    }
    locate()
    return () => { cancelled = true }
  }, [member.photoBase])

  const showPhoto = checked && src

  return (
    <div className={`team-portrait ${className}`} data-reveal-mask>
      {showPhoto ? (
        <img
          src={src}
          alt={`Portrait of ${member.name}`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          style={{ objectPosition }}
        />
      ) : (
        <div className="team-portrait-fallback" role="img" aria-label={`Portrait of ${member.name}`}>
          <span>{initials(member.name)}</span>
        </div>
      )}
    </div>
  )
}
