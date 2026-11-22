import Button from './Button'

export default function CtaBand({ title, body, buttonLabel, buttonTo = '/get-involved', tone = 'gold' }) {
  const styles = tone === 'gold'
    ? 'bg-gold text-forest'
    : 'bg-forest text-paper'

  return (
    <section className={styles}>
      <div className="shell flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
        <div data-reveal>
          <h2 className="display-lg max-w-2xl">{title}</h2>
          {body && <p className={`lede mt-5 max-w-xl ${tone === 'gold' ? 'text-forest/75' : 'text-paper/70'}`}>{body}</p>}
        </div>
        <div data-reveal>
          <Button to={buttonTo} variant={tone === 'gold' ? 'forest' : 'gold'} className="shrink-0">
            {buttonLabel}
          </Button>
        </div>
      </div>
    </section>
  )
}
