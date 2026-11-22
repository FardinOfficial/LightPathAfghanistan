import { EMAIL } from '../data/navigation'

/**
 * Contact delivery is intentionally a front-end prototype.
 * `submitContact` is the single integration point: replace the mailto return
 * with a POST to a future backend without touching the form component.
 */
export function buildMailto({ name, email, topic, message }) {
  const subject = encodeURIComponent(topic || 'General inquiry')
  const body = encodeURIComponent(
    `${message.trim()}\n\n—\n${name.trim()}\n${email.trim()}`,
  )
  return `mailto:${EMAIL}?subject=${subject}&body=${body}`
}

export async function submitContact(values) {
  // Future backend integration:
  // const response = await fetch('/api/contact', { method: 'POST', ... })
  // return { method: 'backend', ok: response.ok }
  return { method: 'mailto', url: buildMailto(values) }
}
