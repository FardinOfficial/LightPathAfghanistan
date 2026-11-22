import { Link } from 'react-router-dom'

const VARIANTS = {
  forest: 'btn-forest',
  gold: 'btn-gold',
  outline: 'btn-outline',
  'outline-light': 'btn-outline-light',
  'ghost-light': 'btn-ghost-light',
}

/** Flexible action: internal route (`to`), external link (`href`) or handler (`onClick`). */
export default function Button({
  to, href, onClick, children, variant = 'forest', className = '', icon: Icon, iconRight = true, type = 'button', ...rest
}) {
  const classes = `btn ${VARIANTS[variant] || VARIANTS.forest} ${className}`.trim()
  const content = (
    <>
      {Icon && !iconRight && <Icon size={17} strokeWidth={1.8} aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconRight && <Icon size={17} strokeWidth={1.8} aria-hidden="true" />}
    </>
  )

  if (to) {
    return <Link to={to} className={classes} {...rest}>{content}</Link>
  }
  if (href) {
    return <a href={href} className={classes} {...rest}>{content}</a>
  }
  return <button type={type} onClick={onClick} className={classes} {...rest}>{content}</button>
}
