import { useLanguage } from '../i18n/LanguageContext'
import { whatsappUrl, heroInquiryMessage } from '../utils/whatsapp'
import { IconWhatsApp } from './icons'

/**
 * Mobile-only fixed bottom CTA. Kept separate from the chat launcher:
 * this one goes straight to WhatsApp (the primary conversion), while the
 * orb opens the on-page assistant. CSS shows it only on small screens and
 * lifts the chat orb above it so they never overlap.
 */
export default function MobileWhatsAppBar() {
  const { t, lang } = useLanguage()
  return (
    <a
      className="mobile-wa-bar"
      href={whatsappUrl(heroInquiryMessage(lang))}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="mobile-wa-icon" aria-hidden="true">
        <IconWhatsApp width={22} height={22} />
      </span>
      <span className="mobile-wa-text">
        <strong>{t.mobileWa.cta}</strong>
        <small>{t.mobileWa.sub}</small>
      </span>
      <span className="mobile-wa-arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </span>
    </a>
  )
}
