import { useEffect, useRef } from 'react'
import { useInView } from '../hooks/useReveal'
import { useReducedMotion, useIsMobile } from '../hooks/useEnvironment'

/**
 * Lightweight canvas particle + light-trail field.
 * Chosen over Three.js: same atmospheric depth at a fraction of the cost,
 * no dependency, and a guaranteed static fallback (the CSS background shows
 * through whenever the canvas is paused, reduced-motion is set, or 2D
 * context creation fails).
 */
export default function ParticleField() {
  const canvasRef = useRef(null)
  const pointerRef = useRef({ x: 0.5, y: 0.5 })
  const { ref: wrapRef, inView } = useInView('200px')
  const reduced = useReducedMotion()
  const isMobile = useIsMobile()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || reduced || !inView) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return // static CSS fallback remains visible

    const count = isMobile ? 34 : 72
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let raf = 0
    let w = 0
    let h = 0

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    const rand = (a, b) => a + Math.random() * (b - a)
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: rand(0.5, 1.8),
      vx: rand(-0.12, 0.12),
      vy: rand(-0.22, -0.04),
      depth: rand(0.25, 1),
      warm: Math.random() < 0.22,
      phase: rand(0, Math.PI * 2),
    }))

    // A few slow blue light trails crossing the scene.
    const trails = Array.from({ length: isMobile ? 2 : 4 }, (_, i) => ({
      t: -0.2 - i * 0.28,
      speed: rand(0.0016, 0.0032),
      yBase: rand(0.2, 0.85),
      amp: rand(18, 46),
      len: rand(90, 190),
    }))

    const onPointer = (e) => {
      pointerRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      }
    }
    window.addEventListener('pointermove', onPointer, { passive: true })

    let last = performance.now()
    const tick = (now) => {
      const dt = Math.min((now - last) / 16.7, 2.4)
      last = now
      ctx.clearRect(0, 0, w, h)

      const px = (pointerRef.current.x - 0.5) * 2
      const py = (pointerRef.current.y - 0.5) * 2

      for (const p of particles) {
        p.x += (p.vx + px * 0.14 * p.depth) * dt
        p.y += p.vy * dt * p.depth
        if (p.y < -6) {
          p.y = h + 6
          p.x = Math.random() * w
        }
        if (p.x < -6) p.x = w + 6
        if (p.x > w + 6) p.x = -6

        const tw = 0.55 + 0.45 * Math.sin(p.phase + now * 0.0012)
        ctx.beginPath()
        ctx.arc(
          p.x + px * 6 * p.depth,
          p.y + py * 5 * p.depth,
          p.r,
          0,
          Math.PI * 2,
        )
        ctx.fillStyle = p.warm
          ? `rgba(124,196,255,${(0.5 * p.depth * tw).toFixed(3)})`
          : `rgba(169,180,199,${(0.34 * p.depth * tw).toFixed(3)})`
        ctx.fill()
      }

      for (const t of trails) {
        t.t += t.speed * dt
        if (t.t > 1.35) {
          t.t = -0.35
          t.yBase = rand(0.2, 0.85)
        }
        const headX = t.t * (w + 200) - 100
        const headY = t.yBase * h + Math.sin(t.t * 5 + t.yBase * 9) * t.amp
        const grad = ctx.createLinearGradient(headX - t.len, headY, headX, headY)
        grad.addColorStop(0, 'rgba(61,127,247,0)')
        grad.addColorStop(1, 'rgba(61,127,247,0.34)')
        ctx.strokeStyle = grad
        ctx.lineWidth = 1.1
        ctx.beginPath()
        ctx.moveTo(headX - t.len, headY + 6)
        ctx.lineTo(headX, headY)
        ctx.stroke()
        ctx.beginPath()
        ctx.arc(headX, headY, 1.4, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(124,196,255,0.7)'
        ctx.fill()
      }

      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const onResize = () => resize()
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onPointer)
      window.removeEventListener('resize', onResize)
    }
  }, [reduced, isMobile, inView])

  if (reduced) return null
  return (
    <div className="particle-field" ref={wrapRef} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  )
}
