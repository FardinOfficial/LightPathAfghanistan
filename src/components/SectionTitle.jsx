import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function SectionTitle({ eyebrow, title, body, action, actionTo, light = false, className = '' }) {
  return (
    <div className={`max-w-3xl ${className}`} data-reveal>
      {eyebrow && <p className={`eyebrow ${light ? 'eyebrow-light' : ''}`}>{eyebrow}</p>}
      {title && <h2 className={`display-md mt-5 ${light ? 'text-paper' : 'text-forest'}`}>{title}</h2>}
      {body && <p className={`lede mt-6 max-w-2xl ${light ? 'text-paper/75' : ''}`}>{body}</p>}
      {action && actionTo && (
        <Link className={`text-link mt-7 ${light ? 'text-link-light' : ''}`} to={actionTo}>
          {action} <ArrowUpRight size={17} strokeWidth={1.7} aria-hidden="true" />
        </Link>
      )}
    </div>
  )
}
