import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { projects } from '../data/projects'
import { IconExternal, IconPlay } from '../components/icons'
import { whatsappUrl, projectInquiryMessage } from '../utils/whatsapp'
import ProjectModal from '../components/ProjectModal'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Tilt3D from '../components/Tilt3D'

/**
 * Neutral geometric preview panel (not a screenshot) — used until real
 * screenshots are captured from each published site and placed in
 * public/images/projects/<id>.jpg with `preview` set in data/projects.js.
 */
function PreviewPanel({ project, lang }) {
  const initials = project.title[lang]
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
  return (
    <div className="preview-panel" aria-hidden="true">
      <div className="preview-geometry">
        <span className="preview-ring" />
        <span className="preview-line preview-line-a" />
        <span className="preview-line preview-line-b" />
        <span className="preview-dot" />
      </div>
      <span className="preview-initials">{initials}</span>
      <span className="preview-kind">WEB</span>
    </div>
  )
}

function ProjectCard({ project, featured = false, onPreview }) {
  const { t, lang } = useLanguage()
  return (
    <Tilt3D className="project-tilt" max={5} shine>
      <article className={`project-card ${featured ? 'is-featured' : ''}`}>
      <button
        type="button"
        className="project-media"
        onClick={() => onPreview(project)}
        aria-label={`${t.work.livePreview} — ${project.title[lang]}`}
      >
        {project.preview ? (
          <img
            src={project.preview}
            alt={`${project.title[lang]} — ${t.work.screenshotNote}`}
            loading="lazy"
            width="800"
            height="500"
          />
        ) : (
          <PreviewPanel project={project} lang={lang} />
        )}
        <span className="media-play" aria-hidden="true">
          <IconPlay width={18} height={18} />
          <span>{t.work.livePreview}</span>
        </span>
      </button>
      <div className="project-info">
        <p className="project-category">{project.category[lang]}</p>
        <h3 className="project-title">
          <a
            className="project-title-link"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title[lang]} — ${t.work.externalNote}`}
          >
            {project.title[lang]}
            <IconExternal width={14} height={14} />
          </a>
        </h3>
        <p className="project-desc">{project.description[lang]}</p>
        <ul className="project-highlights">
          {project.highlights[lang].map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
        <div className="project-actions">
          <button type="button" className="btn btn-primary btn-sm" onClick={() => onPreview(project)}>
            {t.work.livePreview}
            <IconPlay width={14} height={14} />
          </button>
          <a
            className="project-inquire"
            href={whatsappUrl(projectInquiryMessage(lang, project.title[lang]))}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.work.inquireSimilar}
          </a>
        </div>
      </div>
      </article>
    </Tilt3D>
  )
}

export default function Portfolio() {
  const { t, lang } = useLanguage()
  const [first, ...rest] = projects
  const [preview, setPreview] = useState(null)

  return (
    <section id="work" className="section portfolio">
      <div className="shell">
        <SectionHeading
          kicker={t.sections.workKicker}
          title={t.sections.workTitle}
          subtitle={t.sections.workSub}
        />

        <Reveal className="portfolio-featured">
          <ProjectCard project={first} featured onPreview={setPreview} />
        </Reveal>

        <div className="portfolio-grid">
          {rest.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 110}>
              <ProjectCard project={p} onPreview={setPreview} />
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={preview} onClose={() => setPreview(null)} />
    </section>
  )
}
