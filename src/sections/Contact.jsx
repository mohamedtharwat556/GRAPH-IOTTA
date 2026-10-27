import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { services } from '../data/services'
import { BRAND } from '../config/siteConfig'
import { whatsappUrl, formInquiryMessage, heroInquiryMessage } from '../utils/whatsapp'
import { IconWhatsApp, IconPhone, IconFacebook } from '../components/icons'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

const initialForm = {
  name: '',
  contact: '',
  category: '',
  description: '',
  budget: '',
  timeline: '',
  replyLang: 'ar',
}

export default function Contact() {
  const { t, lang } = useLanguage()
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})

  const set = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = t.form.errors.name
    if (!form.contact.trim()) next.contact = t.form.errors.contact
    if (!form.category) next.category = t.form.errors.category
    if (!form.description.trim()) next.description = t.form.errors.description
    return next
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) {
      const firstKey = Object.keys(next)[0]
      const field = document.getElementById(`field-${firstKey}`)
      if (field) field.focus()
      return
    }
    // Opens WhatsApp with the composed message — nothing is sent to a server.
    window.open(whatsappUrl(formInquiryMessage(form.replyLang === 'ar' ? 'ar' : 'en', form)), '_blank', 'noopener')
  }

  const fieldError = (key) =>
    errors[key] ? (
      <p className="field-error" id={`error-${key}`} role="alert">
        {errors[key]}
      </p>
    ) : null

  return (
    <section id="contact" className="section contact">
      <div className="shell contact-shell">
        <SectionHeading
          kicker={t.sections.contactKicker}
          title={t.sections.contactTitle}
          subtitle={t.sections.contactSub}
        />

        <div className="contact-grid">
          <Reveal className="contact-direct">
            <a
              className="btn btn-primary contact-wa"
              href={whatsappUrl(heroInquiryMessage(lang))}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWhatsApp />
              {t.contact.whatsappCta}
            </a>
            <ul className="contact-lines">
              <li>
                <IconPhone aria-hidden="true" />
                <div>
                  <span className="contact-line-label">{t.contact.phoneLabel}</span>
                  <a href={`tel:+${BRAND.whatsappNumber}`} dir="ltr">
                    {BRAND.phoneDisplay}
                  </a>
                </div>
              </li>
              <li>
                <IconFacebook aria-hidden="true" />
                <div>
                  <span className="contact-line-label">{t.contact.facebookLabel}</span>
                  <a href={BRAND.facebook} target="_blank" rel="noopener noreferrer">
                    GRAPH IOTTA
                  </a>
                </div>
              </li>
            </ul>
            <p className="contact-reply-note">{t.contact.replyNote}</p>
          </Reveal>

          <Reveal delay={120}>
            <form className="inquiry-form" onSubmit={onSubmit} noValidate>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="field-name">{t.form.name}</label>
                  <input
                    id="field-name"
                    type="text"
                    value={form.name}
                    onChange={set('name')}
                    placeholder={t.form.namePlaceholder}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'error-name' : undefined}
                    required
                  />
                  {fieldError('name')}
                </div>
                <div className="form-field">
                  <label htmlFor="field-contact">{t.form.contactMethod}</label>
                  <input
                    id="field-contact"
                    type="text"
                    value={form.contact}
                    onChange={set('contact')}
                    placeholder={t.form.contactPlaceholder}
                    aria-invalid={Boolean(errors.contact)}
                    aria-describedby={errors.contact ? 'error-contact' : undefined}
                    required
                  />
                  {fieldError('contact')}
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="field-category">{t.form.category}</label>
                  <select
                    id="field-category"
                    value={form.category}
                    onChange={set('category')}
                    aria-invalid={Boolean(errors.category)}
                    aria-describedby={errors.category ? 'error-category' : undefined}
                    required
                  >
                    <option value="" disabled>
                      {t.form.categoryPlaceholder}
                    </option>
                    {services.map((s) => (
                      <option key={s.id} value={s.title[lang]}>
                        {s.title[lang]}
                      </option>
                    ))}
                  </select>
                  {fieldError('category')}
                </div>
                <div className="form-field">
                  <label htmlFor="field-replyLang">{t.form.langField}</label>
                  <select id="field-replyLang" value={form.replyLang} onChange={set('replyLang')}>
                    <option value="ar">العربية</option>
                    <option value="en">English</option>
                  </select>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="field-description">{t.form.description}</label>
                <textarea
                  id="field-description"
                  rows="5"
                  value={form.description}
                  onChange={set('description')}
                  placeholder={t.form.descriptionPlaceholder}
                  aria-invalid={Boolean(errors.description)}
                  aria-describedby={errors.description ? 'error-description' : undefined}
                  required
                />
                {fieldError('description')}
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="field-budget">{t.form.budget}</label>
                  <input id="field-budget" type="text" value={form.budget} onChange={set('budget')} />
                </div>
                <div className="form-field">
                  <label htmlFor="field-timeline">{t.form.timeline}</label>
                  <input id="field-timeline" type="text" value={form.timeline} onChange={set('timeline')} />
                </div>
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                <IconWhatsApp />
                {t.form.submit}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
