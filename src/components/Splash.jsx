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

  useEffect(() => {
    if (!SPLASH.enabled) return
    document.body.classList.add('is-splashing')
    const t1 = setTimeout(() => setPhase('fade'), SPLASH.logoDurationMs)
    const t2 = setTimeout(() => {
      setPhase('done')
      document.body.classList.remove('is-splashing')
    }, SPLASH.logoDurationMs + SPLASH.fadeOutMs)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      document.body.classList.remove('is-splashing')
    }
  }, [])

  if (phase === 'done') return null

  return (
    <div className={`splash ${phase === 'fade' ? 'is-fading' : ''}`} aria-hidden="true">
      <div className="splash-inner">
        <img
          className="splash-logo"
          src="images/logo-512.png"
          alt=""
          width="168"
          height="168"
        />
        <p className="splash-tagline">{t.splashTagline}</p>
      </div>
    </div>
  )
}
