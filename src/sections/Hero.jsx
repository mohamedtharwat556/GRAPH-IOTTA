import { useLanguage } from '../i18n/LanguageContext'
import { whatsappUrl, heroInquiryMessage } from '../utils/whatsapp'
import { IconWhatsApp, IconArrowDown } from '../components/icons'
import ParticleField from '../components/ParticleField'
import HeadlineRotator from '../components/HeadlineRotator'
import Tilt3D from '../components/Tilt3D'
import Magnetic from '../components/Magnetic'
import Reveal from '../components/Reveal'

export default function Hero() {
  const { t, lang } = useLanguage()

  return (
    <section id="home" className="hero">
      {/* Site-wide background video is mounted in App.jsx (SiteBackground). */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid-lines" />
        <div className="hero-glow hero-glow-a" />
        <div className="hero-glow hero-glow-b" />
        <div className="hero-arch" />
      </div>
      <ParticleField />

      <div className="hero-content shell">
        <Reveal>
          <p className="hero-eyebrow">{t.hero.eyebrow}</p>
        </Reveal>
        <Reveal delay={120}>
          <Tilt3D className="hero-tilt">
            <h1 className="hero-headline">
              <HeadlineRotator />
            </h1>
          </Tilt3D>
        </Reveal>
        <Reveal delay={240}>
          <p className="hero-supporting">{t.hero.supporting}</p>
        </Reveal>
        <Reveal delay={360}>
          <div className="hero-actions">
            <Magnetic>
              <a
                className="btn btn-primary"
                href={whatsappUrl(heroInquiryMessage(lang))}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWhatsApp />
                {t.hero.ctaPrimary}
              </a>
            </Magnetic>
            <Magnetic>
              <a className="btn btn-ghost" href="#work">
                {t.hero.ctaSecondary}
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>

      <a className="hero-scroll" href="#services" aria-label={t.hero.scroll}>
        <span className="hero-scroll-label">{t.hero.scroll}</span>
        <IconArrowDown className="hero-scroll-icon" />
      </a>
    </section>
  )
}
