import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { services } from '../data/services'
import { serviceIcons, IconWhatsApp, IconCheck } from '../components/icons'
import { whatsappUrl, builderMessage } from '../utils/whatsapp'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

const STEP_KEYS = ['type', 'features', 'timeline', 'review']

export default function Builder() {
  const { t, lang } = useLanguage()
  const b = t.builder
  const [step, setStep] = useState(0)
  const [type, setType] = useState('')
  const [features, setFeatures] = useState([])
  const [timeline, setTimeline] = useState('')
  const [notes, setNotes] = useState('')

  const toggleFeature = (f) =>
    setFeatures((prev) => (prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]))

  const canAdvance =
    step === 0 ? Boolean(type) : step === 1 ? features.length > 0 : step === 2 ? Boolean(timeline) : true

  const goNext = () => canAdvance && setStep((s) => Math.min(s + 1, 3))
  const goBack = () => setStep((s) => Math.max(s - 1, 0))

  const waHref = whatsappUrl(builderMessage(lang, { type, features, timeline, notes }))

  return (
    <section id="builder" className="section builder">
      <div className="shell">
        <SectionHeading kicker={b.kicker} title={b.title} subtitle={b.sub} />

        <Reveal>
          <div className="builder-card">
            <ol className="builder-steps" aria-label={b.progressLabel}>
              {STEP_KEYS.map((key, i) => (
                <li
                  key={key}
                  className={`builder-pill ${i === step ? 'is-current' : ''} ${i < step ? 'is-done' : ''}`}
                  aria-current={i === step ? 'step' : undefined}
                >
                  <span className="pill-index" aria-hidden="true">
                    {i < step ? <IconCheck width={13} height={13} /> : String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="pill-label">{b.steps[key]}</span>
                </li>
              ))}
            </ol>

            <div className="builder-stage" key={step}>
              {step === 0 && (
                <>
                  <p className="builder-hint">{b.typeHint}</p>
                  <div className="type-grid">
                    {services.map((s) => {
                      const Icon = serviceIcons[s.icon]
                      const selected = type === s.title[lang]
                      return (
                        <button
                          key={s.id}
                          type="button"
                          className={`type-tile ${selected ? 'is-selected' : ''}`}
                          aria-pressed={selected}
                          onClick={() => setType(s.title[lang])}
                        >
                          <span className="type-icon" aria-hidden="true">
                            <Icon width={20} height={20} />
                          </span>
                          <span className="type-title">{s.title[lang]}</span>
                        </button>
                      )
                    })}
                  </div>
                </>
              )}

              {step === 1 && (
                <>
                  <p className="builder-hint">{b.featuresHint}</p>
                  <div className="feature-chips" role="group" aria-label={b.steps.features}>
                    {b.featureOptions.map((f) => {
                      const selected = features.includes(f)
                      return (
                        <button
                          key={f}
                          type="button"
                          className={`feature-chip ${selected ? 'is-selected' : ''}`}
                          aria-pressed={selected}
                          onClick={() => toggleFeature(f)}
                        >
                          {selected && <IconCheck width={13} height={13} />}
                          {f}
                        </button>
                      )
                    })}
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <p className="builder-hint">{b.timelineHint}</p>
                  <div className="feature-chips is-timeline" role="group" aria-label={b.steps.timeline}>
                    {b.timelines.map((opt) => {
                      const selected = timeline === opt
                      return (
                        <button
                          key={opt}
                          type="button"
                          className={`feature-chip ${selected ? 'is-selected' : ''}`}
                          aria-pressed={selected}
                          onClick={() => setTimeline(opt)}
                        >
                          {opt}
                        </button>
                      )
                    })}
                  </div>
                  <label className="builder-notes" htmlFor="builder-notes">
                    {b.notesLabel}
                    <textarea
                      id="builder-notes"
                      rows="3"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder={b.notesPlaceholder}
                    />
                  </label>
                </>
              )}

              {step === 3 && (
                <div className="order-card" role="group" aria-label={b.cardTitle}>
                  <div className="order-card-head">
                    <span className="order-card-logo" aria-hidden="true" />
                    <h3 className="order-card-title">{b.cardTitle}</h3>
                    <p className="order-card-brand">GRAPH IOTTA</p>
                  </div>
                  <dl className="order-card-body">
                    <div>
                      <dt>{b.fieldType}</dt>
                      <dd>{type || b.noneSelected}</dd>
                    </div>
                    <div>
                      <dt>{b.fieldFeatures}</dt>
                      <dd>{features.length ? features.join(lang === 'ar' ? '، ' : ', ') : b.noneSelected}</dd>
                    </div>
                    <div>
                      <dt>{b.fieldTimeline}</dt>
                      <dd>{timeline || b.noneSelected}</dd>
                    </div>
                    {notes.trim() && (
                      <div>
                        <dt>{b.fieldNotes}</dt>
                        <dd>{notes.trim()}</dd>
                      </div>
                    )}
                  </dl>
                  <p className="order-card-hint">{b.editHint}</p>
                </div>
              )}
            </div>

            <div className="builder-nav">
              {step > 0 ? (
                <button type="button" className="btn btn-ghost btn-sm" onClick={goBack}>
                  {b.back}
                </button>
              ) : (
                <span />
              )}
              {step < 3 ? (
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={goNext}
                  disabled={!canAdvance}
                >
                  {b.next}
                </button>
              ) : (
                <a
                  className="btn btn-primary"
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconWhatsApp width={16} height={16} />
                  {b.sendWa}
                </a>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
