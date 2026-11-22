export default function Stats({ figures, light = false, className = '' }) {
  return (
    <dl className={`grid gap-10 sm:grid-cols-2 lg:gap-16 ${className}`} data-reveal-group>
      {figures.map((figure) => (
        <div key={figure.label} className={`border-t pt-6 ${light ? 'border-white/30' : 'border-forest/20'}`}>
          <dt className={`text-[0.78rem] font-bold uppercase tracking-[0.16em] ${light ? 'text-gold' : 'text-gold-ink'}`}>{figure.label}</dt>
          <dd className="stat-number mt-4">
            <span data-count={figure.value} data-suffix={figure.suffix || ''}>0{figure.suffix || ''}</span>
          </dd>
          {figure.note && <p className={`mt-4 max-w-sm text-sm ${light ? 'text-paper/70' : 'text-stone'}`}>{figure.note}</p>}
        </div>
      ))}
    </dl>
  )
}
