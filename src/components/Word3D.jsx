import { Fragment } from 'react'

/**
 * Splits text into per-word spans for 3D entrance animations.
 * Words (not letters) so Arabic glyph shaping stays intact.
 */
export default function Word3D({ text, className = '' }) {
  const words = String(text).split(/\s+/).filter(Boolean)
  return (
    <span className={`word-3d ${className}`.trim()}>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className="w3d" style={{ '--i': i }}>
            {word}
          </span>
          {i < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </span>
  )
}
