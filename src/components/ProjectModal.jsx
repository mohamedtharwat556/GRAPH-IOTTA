import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { IconExternal, IconWhatsApp } from './icons'
import { whatsappUrl, projectInquiryMessage } from '../utils/whatsapp'

/**
 * Live in-browser-frame preview of a real published project.
 * Some hosts send X-Frame-Options and refuse embedding — the footer note
 * and toolbar always expose a direct open link, so the preview never
 * becomes a dead end.
 */
export default function ProjectModal({ project, onClose }) {
  const { t, lang } = useLanguage()
  const [loaded, setLoaded] = useState(false)
  const closeRef = useRef(null)

  useEffect(() => {
    if (!project) return undefined
    setLoaded(false)
    document.body.classList.add('is-modal-open')
    closeRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('is-modal-open')
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div className="project-modal-root">
      <div className="project-modal-veil" onClick={onClose} aria-hidden="true" />
      <section
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title[lang]} — ${t.work.livePreview}`}
      >
        <header className="browser-bar">
          <span className="browser-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="browser-url" dir="ltr">
            {project.url.replace(/^https:\/\//, '')}
          </span>
          <a
            className="browser-open"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.work.openTab}
            title={t.work.openTab}
          >
            <IconExternal width={16} height={16} />
          </a>
          <button
            type="button"
            ref={closeRef}
            className="project-modal-close"
            onClick={onClose}
            aria-label={t.work.closePreview}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </header>

        <div className={`browser-stage ${loaded ? 'is-loaded' : ''}`}>
          {!loaded && (
            <div className="preview-loading" aria-hidden="true">
              <span className="preview-loader" />
              <p>{t.work.loadingPreview}</p>
            </div>
          )}
          <iframe
            title={`${project.title[lang]} — ${t.work.livePreview}`}
            src={project.url}
            onLoad={() => setLoaded(true)}
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>

        <footer className="project-modal-foot">
          <div className="project-modal-meta">
            <p className="project-category">{project.category[lang]}</p>
            <h3 className="project-title">{project.title[lang]}</h3>
          </div>
          <p className="framing-note">{t.work.framingNote}</p>
          <a
            className="btn btn-primary btn-sm"
            href={whatsappUrl(projectInquiryMessage(lang, project.title[lang]))}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWhatsApp width={15} height={15} />
            {t.work.inquireSimilar}
          </a>
        </footer>
      </section>
    </div>
  )
}
