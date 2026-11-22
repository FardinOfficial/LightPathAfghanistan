export default function Stats({ figures, light = false, className = '' }) {
  return (
    <dl className={`grid grid-cols-1 gap-y-14 gap-x-12 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-20 ${className}`} data-reveal-group>
      {figures.map((figure) => (
        <div key={figure.label} className={`flex flex-col border-t pt-7 ${light ? 'border-white/30' : 'border-forest/20'}`}>
          <dt className={`text-[0.78rem] font-bold uppercase tracking-[0.16em] ${light ? 'text-gold' : 'text-gold-ink'}`}>
            {figure.label}
          </dt>
          <dd className="mt-6 flex flex-col gap-6">
            <span className="stat-number block">
              <span data-count={figure.value} data-suffix={figure.suffix || ''}>0{figure.suffix || ''}</span>
            </span>
            {figure.note && (
              <span className={`block max-w-sm text-sm leading-relaxed ${light ? 'text-paper/70' : 'text-stone'}`}>
                {figure.note}
              </span>
            )}
          </dd>
        </div>
      ))}
    </dl>
  )
}
