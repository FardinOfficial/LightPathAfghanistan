import { useI18n } from '../hooks/useLocale'

/**
 * Editorial headline with GSAP-ready line masks. Pass either `lines` or a
 * translation key that resolves to an array of strings.
 */
export default function AnimatedText({
  lines, keys, as: Tag = 'h1', accent = -1, accentClass = 'text-gold', className = '', lineClassName = '',
}) {
  const { t } = useI18n()
  const content = lines || (keys ? t(keys) : [])
  const items = Array.isArray(content) ? content : [content]

  return (
    <Tag className={className}>
      {items.map((line, index) => (
        <span className={`reveal-line ${lineClassName}`} key={`${line}-${index}`}>
          <span data-hero-line>
            {index === accent ? <em className={`${accentClass} font-normal`}>{line}</em> : line}
          </span>
        </span>
      ))}
    </Tag>
  )
}
