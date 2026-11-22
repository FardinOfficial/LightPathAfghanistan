import { ArrowUpRight } from 'lucide-react'
import { CLASSROOM_POST } from '../data/field'

export default function ClassroomFeature() {
  const { title, place, summary, credit, action, url } = CLASSROOM_POST
  return (
    <section id="classroom" className="classroom-feature">
      <div className="shell classroom-layout">
        <p data-reveal>{place}</p>
        <div data-reveal>
          <h2 className="display-lg">{title}</h2>
          <p className="lede mt-5">{summary}</p>
          <a href={url} className="text-link mt-6" target="_blank" rel="noreferrer">{action} <ArrowUpRight size={16} aria-hidden="true" /></a>
          <p className="mt-4 text-sm text-stone">{credit}</p>
        </div>
      </div>
    </section>
  )
}
