import { useEffect, useState } from 'react'
import { SPLASH } from '../config/siteConfig'
import { useLanguage } from '../i18n/LanguageContext'

/**
 * Opening splash: the official logo holds for SPLASH.logoDurationMs,
 * then the overlay fades away to reveal the site.
 */
export default function Splash() {
  const { t } = useLanguage()
  const [phase, setPhase] = useState(SPLASH.enabled ? 'show' : 'done')
  const [showTyping, setShowTyping] = useState(false)

  useEffect(() => {
    if (!SPLASH.enabled) return
    document.body.classList.add('is-splashing')
    const t1 = setTimeout(() => setPhase('fade'), SPLASH.logoDurationMs)
    const t2 = setTimeout(() => {
      setPhase('done')
      document.body.classList.remove('is-splashing')
    }, SPLASH.logoDurationMs + SPLASH.fadeOutMs)
    const t3 = setTimeout(() => setShowTyping(true), 400)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      document.body.classList.remove('is-splashing')
    }
  }, [])

  if (phase === 'done') return null

  // Generate random particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 2 + Math.random() * 2,
    size: 2 + Math.random() * 4,
  }))

  return (
    <div className={`splash ${phase === 'fade' ? 'is-fading' : ''}`} aria-hidden="true">
      <div className="splash-particles">
        {particles.map(p => (
          <div
            key={p.id}
            className="splash-particle"
            style={{
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
          />
        ))}
      </div>
      <div className="splash-inner">
        <div className="splash-logo-wrapper">
          <img
            className="splash-logo"
            src="images/logo-512.png"
            alt=""
            width="168"
            height="168"
          />
        </div>
        <p className={`splash-tagline ${showTyping ? 'splash-tagline-typing' : ''}`}>
          {t.splashTagline}
        </p>
        <div className="splash-progress">
          <div className="splash-progress-bar" />
        </div>
      </div>
    </div>
  )
}
