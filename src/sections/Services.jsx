import { useLanguage } from '../i18n/LanguageContext'
import { services } from '../data/services'
import { serviceIcons, IconWhatsApp } from '../components/icons'
import { whatsappUrl, serviceInquiryMessage } from '../utils/whatsapp'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

export default function Services() {
  const { t, lang } = useLanguage()

  return (
    <section id="services" className="section services">
      <div className="shell">
        <SectionHeading
          kicker={t.sections.servicesKicker}
          title={t.sections.servicesTitle}
          subtitle={t.sections.servicesSub}
        />
        <div className="services-grid">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.icon]
            return (
              <Reveal key={s.id} delay={(i % 3) * 90} className="service-cell">
                <article className="service-card">
                  <span className="service-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <h3 className="service-title">{s.title[lang]}</h3>
                  <p className="service-body">{s.body[lang]}</p>
                  <a
                    className="service-cta"
                    href={whatsappUrl(serviceInquiryMessage(lang, s.title[lang]))}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconWhatsApp width={15} height={15} />
                    <span>{t.services.discussCta}</span>
                  </a>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
