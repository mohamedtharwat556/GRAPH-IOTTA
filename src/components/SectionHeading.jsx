import Reveal from './Reveal'
import Word3D from './Word3D'

export default function SectionHeading({ kicker, title, subtitle, id }) {
  return (
    <header className="section-heading">
      <Reveal>
        <p className="kicker">
          <span className="kicker-line" aria-hidden="true" />
          {kicker}
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="section-title" id={id}>
          <Word3D text={title} />
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={160}>
          <p className="section-sub">{subtitle}</p>
        </Reveal>
      )}
    </header>
  )
}
