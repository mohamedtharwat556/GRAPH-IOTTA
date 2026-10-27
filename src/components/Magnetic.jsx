import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../hooks/useEnvironment'

/**
 * Wraps a CTA so it leans toward the cursor while nearby and springs back
 * on leave. Window-level listening gives the "magnetic field" feel; the
 * effect arms itself only for fine pointers without reduced motion.
 */
export default function Magnetic({ children, strength = 0.32, radius = 130, className = '' }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || reduced) return
    if (!window.matchMedia('(pointer: fine)').matches) return
    let lastX = null
    let lastY = null
    const move = (e) => {
      if (e.clientX === lastX && e.clientY === lastY) return
      lastX = e.clientX
      lastY = e.clientY
      const r = el.getBoundingClientRect()
      if (!r.width || !r.height) return
      const dx = e.clientX - (r.left + r.width / 2)
      const dy = e.clientY - (r.top + r.height / 2)
      const dist = Math.hypot(dx, dy)
      const reach = radius + Math.max(r.width, r.height) / 2
      if (dist > reach) {
        if (!el.dataset.magOff) {
          el.dataset.magOff = '1'
          el.style.transition = 'transform 0.45s cubic-bezier(0.2, 0.7, 0.2, 1)'
          el.style.transform = 'translate3d(0, 0, 0)'
        }
        return
      }
      delete el.dataset.magOff
      // pull hard near the center, ease off at the edge of the field
      const k = strength * (1 - Math.min(dist / reach, 1))
      el.style.transition = 'transform 0.08s linear'
      el.style.transform = `translate3d(${(dx * k).toFixed(1)}px, ${(dy * k).toFixed(1)}px, 0)`
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => {
      window.removeEventListener('pointermove', move)
      el.style.transition = ''
      el.style.transform = ''
    }
  }, [reduced, strength, radius])

  return (
    <span ref={ref} className={`magnet ${className}`.trim()} style={{ display: 'inline-block' }}>
      {children}
    </span>
  )
}
