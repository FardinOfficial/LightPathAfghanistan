import { useRef } from 'react'
import { useGSAPAnimations } from '../hooks/useGSAPAnimations'


/** Route-aware wrapper: scoped GSAP lifecycle. */
export default function PageTransition({ routeKey, children }) {
  const scope = useRef(null)
  useGSAPAnimations(scope, routeKey)

  return (
    <div ref={scope} className="flex-1">{children}</div>
  )
}
