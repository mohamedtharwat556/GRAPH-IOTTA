import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../hooks/useEnvironment'

/**
 * Pointer-driven perspective tilt. Only arms itself on fine pointers
 * (mouse/stylus); touch devices and reduced-motion users get a static
 * block, so the headline is never stuck mid-tilt.
 */
export default function Tilt3D({ children, className = '', max = 6, shine = false }) {
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
      const px = (e.clientX - r.left) / r.width - 0.5
      const py = (e.clientY - r.top) / r.height - 0.5
      el.style.setProperty('--tilt-y', `${(px * -2 * max).toFixed(2)}deg`)
      el.style.setProperty('--tilt-x', `${(py * 2 * max).toFixed(2)}deg`)
      if (shine) {
        el.style.setProperty(
          '--sx',
          `${(((e.clientX - r.left) / r.width) * 100).toFixed(1)}%`,
        )
        el.style.setProperty(
          '--sy',
          `${(((e.clientY - r.top) / r.height) * 100).toFixed(1)}%`,
        )
      }
    }
    const leave = () => {
      lastX = null
      lastY = null
      el.style.setProperty('--tilt-x', '0deg')
      el.style.setProperty('--tilt-y', '0deg')
    }
    el.addEventListener('pointermove', move)
    el.addEventListener('pointerleave', leave)
    return () => {
      el.removeEventListener('pointermove', move)
      el.removeEventListener('pointerleave', leave)
    }
  }, [reduced, max, shine])

  return (
    <div className={`tilt-scene ${className}`.trim()}>
      <div ref={ref} className={`tilt-3d${shine ? ' has-shine' : ''}`}>
        {children}
        {shine ? <span className="tilt-shine" aria-hidden="true" /> : null}
      </div>
    </div>
  )
}
