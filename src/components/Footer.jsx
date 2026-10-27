import { useLanguage } from '../i18n/LanguageContext'
import { BRAND } from '../config/siteConfig'
import { services } from '../data/services'
import { whatsappUrl, heroInquiryMessage } from '../utils/whatsapp'
import { IconWhatsApp, IconFacebook, IconInstagram, IconTikTok } from '../components/icons'
import Logo from '../components/Logo'
import Reveal from '../components/Reveal'

const navItems = [
  ['home', 'nav.home'],
  ['services', 'nav.services'],
  ['work', 'nav.work'],
  ['about', 'nav.about'],
  ['process', 'nav.process'],
  ['contact', 'nav.contact'],
]

export default function Footer() {
  const { t, lang } = useLanguage()
  const year = new Date().getFullYear()

  const socials = [
    { href: BRAND.facebook, Icon: IconFacebook, label: 'Facebook' },
    BRAND.instagram && { href: BRAND.instagram, Icon: IconInstagram, label: 'Instagram' },
    BRAND.tiktok && { href: BRAND.tiktok, Icon: IconTikTok, label: 'TikTok' },
  ].filter(Boolean)

  return (
    <footer className="footer">
      <div className="shell">
        <Reveal className="footer-cta">
          <p className="footer-cta-text">{t.footer.finalCta}</p>
          <a
            className="btn btn-primary"
            href={whatsappUrl(heroInquiryMessage(lang))}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWhatsApp />
            {t.footer.finalCtaButton}
          </a>
        </Reveal>

        <div className="footer-grid">
          <div className="footer-brand">
            <Logo variant="footer" />
            <p className="footer-tagline">{t.hero.tagline}</p>
            <p className="footer-blurb">{t.footer.blurb}</p>
            <ul className="footer-socials" aria-label={t.footer.followUs}>
              {socials.map(({ href, Icon, label }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav className="footer-col" aria-label={t.footer.navigation}>
            <h3 className="footer-col-title">{t.footer.navigation}</h3>
            <ul>
              {navItems.map(([id, key]) => (
                <li key={id}>
                  <a href={`#${id}`}>{t[key]}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer-col" aria-label={t.footer.services}>
            <h3 className="footer-col-title">{t.footer.services}</h3>
            <ul>
              {services.map((s) => (
                <li key={s.id}>
                  <a href="#services">{s.title[lang]}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-col">
            <h3 className="footer-col-title">{t.footer.contact}</h3>
            <ul>
              <li>
                <a
                  href={whatsappUrl(heroInquiryMessage(lang))}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconWhatsApp width={14} height={14} /> WhatsApp
                </a>
              </li>
              <li>
                <a href={`tel:+${BRAND.whatsappNumber}`} dir="ltr">
                  {BRAND.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={BRAND.facebook} target="_blank" rel="noopener noreferrer">
                  <IconFacebook width={14} height={14} /> Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} {BRAND.name} — {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
