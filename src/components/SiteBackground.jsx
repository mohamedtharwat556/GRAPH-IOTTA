import { useCallback, useEffect, useRef, useState } from 'react'
import { SITE_VIDEO } from '../config/siteConfig'
import { useReducedMotion } from '../hooks/useEnvironment'

/**
 * Fixed, site-wide background video layer.
 * All clips in SITE_VIDEO.sources play in sequence with a crossfade and
 * loop forever. Clips that fail to load are skipped; if every clip fails
 * (or the file is missing) the layer unmounts and the body gradient shows.
 * Skipped entirely for reduced-motion / data-saver / slow connections.
 */
export default function SiteBackground() {
  const videoRefs = useRef([])
  const [active, setActive] = useState(0)
  const [status, setStatus] = useState('idle') // idle | ready | failed
  const failedRef = useRef(new Set())
  const reduced = useReducedMotion()

  const sources = SITE_VIDEO.sources
  const conn = navigator.connection
  const shouldAttempt =
    SITE_VIDEO.enabled &&
    sources.length > 0 &&
    !reduced &&
    !(conn && conn.saveData) &&
    !(conn && /(^|-)2g/.test(conn.effectiveType || ''))

  const tryPlay = useCallback((i) => {
    const el = videoRefs.current[i]
    if (!el) return
    // A rejected play() (autoplay policy, unfocused tab) is NOT a permanent
    // failure — onCanPlay and visibilitychange retry it.
    el.play().catch(() => {})
  }, [])

  const advance = useCallback(
    (fromIdx) => {
      for (let step = 1; step <= sources.length; step++) {
        const next = (fromIdx + step) % sources.length
        if (!failedRef.current.has(next)) {
          const el = videoRefs.current[next]
          if (el) el.currentTime = 0
          setActive(next)
          tryPlay(next)
          return
        }
      }
      setStatus('failed')
    },
    [sources.length, tryPlay],
  )

  useEffect(() => {
    if (!shouldAttempt) return
    const first = videoRefs.current[0]
    if (!first) return
    const onReady = () => setStatus('ready')
    first.addEventListener('loadeddata', onReady, { once: true })
    tryPlay(0)
    return () => first.removeEventListener('loadeddata', onReady)
  }, [shouldAttempt, tryPlay])

  useEffect(() => {
    if (!shouldAttempt) return
    const onVis = () => {
      if (document.visibilityState === 'visible') {
        const el = videoRefs.current[active]
        if (el && el.paused) tryPlay(active)
      }
    }
    document.addEventListener('visibilitychange', onVis)
    return () => document.removeEventListener('visibilitychange', onVis)
  }, [shouldAttempt, active, tryPlay])

  const onCanPlay = (i) => {
    const el = videoRefs.current[i]
    if (i === active && el && el.paused) tryPlay(i)
  }

  const onEnded = (i) => {
    if (i === active) advance(i)
  }

  const onError = (i) => {
    failedRef.current.add(i)
    if (i === active) advance(i)
    else if (failedRef.current.size >= sources.length) setStatus('failed')
  }

  if (!shouldAttempt || status === 'failed') return null

  return (
    <div className={`site-bg ${status === 'ready' ? 'is-ready' : ''}`} aria-hidden="true">
      {sources.map((src, i) => (
        <video
          key={src}
          ref={(el) => {
            videoRefs.current[i] = el
          }}
          className={i === active ? 'is-active' : ''}
          src={src}
          poster={SITE_VIDEO.poster || undefined}
          muted
          playsInline
          preload="auto"
          tabIndex={-1}
          onEnded={() => onEnded(i)}
          onCanPlay={() => onCanPlay(i)}
          onError={() => onError(i)}
        />
      ))}
      <div
        className="site-bg-veil"
        style={{ '--site-veil': SITE_VIDEO.overlayOpacity }}
      />
    </div>
  )
}
