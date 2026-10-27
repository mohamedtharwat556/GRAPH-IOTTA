import { useId, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { faqs } from '../data/faq'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

function FaqItem({ q, a, delay }) {
  const [open, setOpen] = useState(false)
  const id = useId()
  return (
    <Reveal delay={delay} className="faq-item">
      <h3 className="faq-question-row">
        <button
          type="button"
          className="faq-question"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          onClick={() => setOpen((v) => !v)}
        >
          <span>{q}</span>
          <span className={`faq-chevron ${open ? 'is-open' : ''}`} aria-hidden="true">
            <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M3 6l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        className={`faq-answer ${open ? 'is-open' : ''}`}
        hidden={!open}
      >
        <p>{a}</p>
      </div>
    </Reveal>
  )
}

export default function Faq() {
  const { t, lang } = useLanguage()
  return (
    <section id="faq" className="section faq">
      <div className="shell shell-narrow">
        <SectionHeading kicker={t.sections.faqKicker} title={t.sections.faqTitle} />
        <div className="faq-list">
          {faqs.map((f, i) => (
            <FaqItem key={f.q.en} q={f.q[lang]} a={f.a[lang]} delay={i * 45} />
          ))}
        </div>
      </div>
    </section>
  )
}
