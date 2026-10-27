import { useLanguage } from '../i18n/LanguageContext'
import { whatsappUrl, quoteCtaMessage } from '../utils/whatsapp'
import { IconWhatsApp } from '../components/icons'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

export default function Quote() {
  const { t, lang } = useLanguage()

  return (
    <section id="quote" className="section quote">
      <div className="shell quote-shell">
        <div className="quote-copy">
          <SectionHeading
            kicker={t.sections.quoteKicker}
            title={t.sections.quoteTitle}
            subtitle={t.sections.quoteSub}
          />
          <Reveal delay={120}>
            <div className="quote-actions">
              <a
                className="btn btn-primary"
                href={whatsappUrl(quoteCtaMessage(lang))}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWhatsApp />
                {t.quote.cta}
              </a>
              <a className="btn btn-ghost" href="#builder">
                {t.quote.builderCta}
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={100} className="quote-factors">
          <h3 className="quote-factors-title">{t.sections.quoteFactorsTitle}</h3>
          <ul>
            {t.quote.factors.map((f, i) => (
              <li key={f}>
                <span className="factor-index" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {f}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
