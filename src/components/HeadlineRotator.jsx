import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { useReducedMotion } from '../hooks/useEnvironment'
import Word3D from './Word3D'

const ROTATE_MS = 3000
const DECODE_MS = 620
const DECODE_FPS = 16

/**
 * Per-character decode/scramble for the incoming headline, layered on the
 * word-3D entrance. Words stay one text node each so Arabic glyph shaping
 * survives the scramble. Interval-driven (not rAF) on purpose: the shared
 * 3D word CSS owns the entrance, this only owns the text.
 */
function useDecode(target, enabled) {
  const [text, setText] = useState(target)
  const timer = useRef(0)

  useEffect(() => {
    setText(target)
    if (!enabled) return
    const chars = [...target]
    const pool = [...new Set(chars.filter((c) => c.trim()))]
    let tick = 0
    clearInterval(timer.current)
    timer.current = setInterval(() => {
      tick += 1
      const done = Math.floor((tick * DECODE_FPS / DECODE_MS) * chars.length)
      if (done >= chars.length) {
        setText(target)
        clearInterval(timer.current)
        return
      }
      setText(
        chars
          .map((c, i) => {
            if (i < done || !c.trim()) return c
            return pool[Math.floor(Math.random() * pool.length)]
          })
          .join(''),
      )
    }, DECODE_FPS)
    return () => clearInterval(timer.current)
  }, [target, enabled])

  return text
}

/**
 * Stacked-visibility rotator: all lines share one grid cell, so the
 * headline block is always sized for the longest line and never shifts
 * the layout while cycling. Reduced motion keeps the first line static.
 */
export default function HeadlineRotator() {
  const { t } = useLanguage()
  const reduced = useReducedMotion()
  const headlines = t.hero.headlines
  const [active, setActive] = useState(0)

  useEffect(() => {
    setActive(0)
    if (reduced || headlines.length < 2) return
    const id = setInterval(
      () => setActive((prev) => (prev + 1) % headlines.length),
      ROTATE_MS,
    )
    return () => clearInterval(id)
  }, [reduced, headlines])

  const shown = useDecode(headlines[active], !reduced)

  return (
    <span className="headline-stack">
      {headlines.map((line, i) => (
        <span
          key={line}
          className={i === active ? 'hl-slide is-active' : 'hl-slide'}
        >
          {i === active ? <Word3D text={shown} /> : <Word3D text={line} />}
        </span>
      ))}
    </span>
  )
}
