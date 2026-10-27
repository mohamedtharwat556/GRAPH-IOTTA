import { useLanguage } from '../i18n/LanguageContext'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

export default function About() {
  const { t, lang } = useLanguage()
  const a = t.about

  const facts = [
    { label: a.experience, value: a.experienceValue, note: a.experienceNote },
    { label: a.markets, value: a.marketsValue, note: a.marketsNote },
    { label: a.delivery, value: a.deliveryValue, note: a.deliveryNote },
  ]

  return (
    <section id="about" className="section about">
      <div className="shell about-shell">
        <div className="about-copy">
          <SectionHeading
            kicker={t.sections.aboutKicker}
            title={t.sections.aboutTitle}
            subtitle={t.sections.aboutSub}
          />
          {a.paragraphs.map((p) => (
            <Reveal key={p} delay={80}>
              <p className="about-paragraph">{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140} className="about-visual" >
          <div className="about-composition" aria-hidden="true">
            <div className="about-frame" />
            <div className="about-orbit" />
            <svg className="about-threads" viewBox="0 0 300 300">
              <path d="M20 280 C 90 180, 120 120, 280 30" stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.55" />
              <path d="M10 220 C 110 160, 170 140, 290 80" stroke="#A9B4C7" strokeWidth="0.7" fill="none" opacity="0.3" />
              <path d="M60 290 C 140 220, 200 170, 270 130" stroke="#A9B4C7" strokeWidth="0.7" fill="none" opacity="0.22" />
              <circle cx="280" cy="30" r="4" fill="var(--accent)" />
              <circle cx="20" cy="280" r="3" fill="#F5F7FB" opacity="0.7" />
            </svg>
            <ul className="about-facts">
              {facts.map((f) => (
                <li key={f.value} className="about-fact">
                  <span className="fact-label">{f.label}</span>
                  <span className="fact-value">{f.value}</span>
                  <span className="fact-note">{f.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
