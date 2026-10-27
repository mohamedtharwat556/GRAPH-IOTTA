import { useLanguage } from '../i18n/LanguageContext'
import { IconCheck } from '../components/icons'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

export default function WhyUs() {
  const { t } = useLanguage()

  return (
    <section id="why" className="section why">
      <div className="shell">
        <SectionHeading kicker={t.sections.whyKicker} title={t.sections.whyTitle} />
        <div className="why-grid">
          {t.why.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 80}>
              <div className="why-item">
                <span className="why-check" aria-hidden="true">
                  <IconCheck width={16} height={16} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
