import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { defaultLang, strings } from './translations'

const LanguageContext = createContext(null)

function readStoredLang() {
  try {
    const stored = localStorage.getItem('gi-lang')
    if (stored === 'ar' || stored === 'en') return stored
  } catch {
    /* private mode — fall through to default */
  }
  return defaultLang
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readStoredLang)

  useEffect(() => {
    const dir = strings[lang].dir
    document.documentElement.lang = lang
    document.documentElement.dir = dir
    document.title = strings[lang].pageTitle
    try {
      localStorage.setItem('gi-lang', lang)
    } catch {
      /* ignore */
    }
  }, [lang])

  const setLang = useCallback((next) => setLangState(next), [])
  const toggleLang = useCallback(
    () => setLangState((current) => (current === 'ar' ? 'en' : 'ar')),
    [],
  )

  const value = useMemo(
    () => ({ lang, dir: strings[lang].dir, t: strings[lang], setLang, toggleLang }),
    [lang, setLang, toggleLang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
