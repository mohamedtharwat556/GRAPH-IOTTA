import { useLanguage } from '../i18n/LanguageContext'
import { processSteps } from '../data/process'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

export default function Process() {
  const { t, lang } = useLanguage()

  return (
    <section id="process" className="section process">
      <div className="shell">
        <SectionHeading
          kicker={t.sections.processKicker}
          title={t.sections.processTitle}
          subtitle={t.sections.processSub}
        />
        <ol className="process-track">
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.num} delay={i * 70} className="process-step">
              <span className="step-index" aria-hidden="true">{step.num}</span>
              <div className="step-body">
                <h3 className="step-title">{step.title[lang]}</h3>
                <p className="step-text">{step.body[lang]}</p>
              </div>
            </Reveal>
          ))}
        </ol>
        <p className="process-note">{t.process.stepsNote}</p>
      </div>
    </section>
  )
}
