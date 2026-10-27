import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { whatsappUrl, heroInquiryMessage } from '../utils/whatsapp'
import { IconWhatsApp } from './icons'
import Logo from './Logo'

const SECTIONS = [
  ['home', 'home'],
  ['services', 'services'],
  ['work', 'work'],
  ['about', 'about'],
  ['process', 'process'],
  ['contact', 'contact'],
]

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`navbar ${scrolled || open ? 'is-scrolled' : ''}`}>
      <div className="navbar-inner shell">
        <a className="navbar-brand" href="#home" onClick={close} aria-label="GRAPH IOTTA">
          <Logo />
        </a>

        <nav className="navbar-links" aria-label={lang === 'ar' ? 'التنقل الرئيسي' : 'Main navigation'}>
          {SECTIONS.map(([id, key]) => (
            <a key={id} className="nav-link" href={`#${id}`} onClick={close}>
              {t.nav[key]}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <button
            type="button"
            className="lang-switch"
            onClick={toggleLang}
            aria-label={t.nav.languageToggle}
            title={t.nav.languageToggle}
          >
            <span className={lang === 'en' ? 'lang-active' : ''}>EN</span>
            <span className="lang-divider" aria-hidden="true" />
            <span className={lang === 'ar' ? 'lang-active' : ''}>ع</span>
          </button>

          <a
            className="btn btn-primary btn-sm nav-cta"
            href={whatsappUrl(heroInquiryMessage(lang))}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWhatsApp width={16} height={16} />
            {t.nav.startProject}
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`menu-bar ${open ? 'is-open' : ''}`} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        className={`mobile-menu ${open ? 'is-open' : ''}`}
        aria-hidden={!open}
        aria-label={lang === 'ar' ? 'قائمة الجوال' : 'Mobile navigation'}
      >
        {SECTIONS.map(([id, key]) => (
          <a key={id} className="mobile-link" href={`#${id}`} onClick={close} tabIndex={open ? 0 : -1}>
            {t.nav[key]}
          </a>
        ))}
        <a
          className="btn btn-primary mobile-cta"
          href={whatsappUrl(heroInquiryMessage(lang))}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={open ? 0 : -1}
        >
          {t.nav.startProject}
        </a>
      </nav>
    </header>
  )
}
