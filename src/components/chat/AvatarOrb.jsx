import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../../hooks/useEnvironment'

/**
 * Animated AI mascot: a glowing orb with eyes that blink, track the
 * pointer, and pulse while the assistant is "thinking".
 * Canvas 2D — no dependencies; renders a single static frame when
 * prefers-reduced-motion is set or the orb is off-screen.
 */
export default function AvatarOrb({ size = 56, thinking = false, awake = true }) {
  const canvasRef = useRef(null)
  const pointerRef = useRef({ x: 0.5, y: 0.4 })
  const reduced = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = size * dpr
    canvas.height = size * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    const onPointer = (e) => {
      pointerRef.current = { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight }
    }
    if (awake && !reduced) window.addEventListener('pointermove', onPointer, { passive: true })

    let raf = 0
    let blinkUntil = 0
    let nextBlink = performance.now() + 2200
    const start = performance.now()

    const draw = (now) => {
      const t = (now - start) / 1000
      const c = size / 2
      const r = size * 0.38
      const speed = thinking ? 2.6 : 1

      ctx.clearRect(0, 0, size, size)

      // Outer glow
      const glow = ctx.createRadialGradient(c, c, r * 0.2, c, c, r * 1.55)
      glow.addColorStop(0, 'rgba(61,127,247,0.34)')
      glow.addColorStop(1, 'rgba(61,127,247,0)')
      ctx.fillStyle = glow
      ctx.beginPath()
      ctx.arc(c, c, r * 1.55, 0, Math.PI * 2)
      ctx.fill()

      // Body sphere
      const body = ctx.createRadialGradient(c - r * 0.35, c - r * 0.4, r * 0.15, c, c, r)
      body.addColorStop(0, '#2a3a58')
      body.addColorStop(0.55, '#101a2e')
      body.addColorStop(1, '#05070c')
      ctx.fillStyle = body
      ctx.beginPath()
      ctx.arc(c, c, r, 0, Math.PI * 2)
      ctx.fill()

      // Rim light
      ctx.strokeStyle = 'rgba(124,196,255,0.75)'
      ctx.lineWidth = Math.max(1.2, size * 0.022)
      ctx.beginPath()
      ctx.arc(c, c, r - ctx.lineWidth / 2, -0.4, Math.PI * 1.35)
      ctx.stroke()

      // Orbiting sparks
      const sparks = 3
      for (let i = 0; i < sparks; i++) {
        const a = t * 0.9 * speed + (i * Math.PI * 2) / sparks
        const rr = r * (1.18 + 0.08 * Math.sin(t * 2 * speed + i))
        const x = c + Math.cos(a) * rr
        const y = c + Math.sin(a) * rr * 0.55
        ctx.beginPath()
        ctx.arc(x, y, Math.max(1, size * 0.026), 0, Math.PI * 2)
        ctx.fillStyle = i === 1 ? 'rgba(245,247,251,0.85)' : 'rgba(61,127,247,0.9)'
        ctx.fill()
      }

      // Eyes — track pointer, blink, squint while thinking
      const px = pointerRef.current.x - 0.5
      const py = pointerRef.current.y - 0.5
      const eyeR = r * (thinking ? 0.16 : 0.2)
      const eyeY = c - r * 0.12
      const gap = r * 0.42
      const blinking = now < blinkUntil
      const eyeOffsets = [-gap, gap]
      for (const ex of eyeOffsets) {
        const x = c + ex + px * r * 0.22
        const y = eyeY + py * r * 0.18
        ctx.beginPath()
        if (blinking) {
          ctx.moveTo(x - eyeR, y)
          ctx.lineTo(x + eyeR, y)
          ctx.strokeStyle = '#7cc4ff'
          ctx.lineWidth = Math.max(1.4, size * 0.03)
          ctx.lineCap = 'round'
          ctx.stroke()
        } else {
          const g = ctx.createRadialGradient(x, y, 0.5, x, y, eyeR)
          g.addColorStop(0, '#dceaff')
          g.addColorStop(1, '#3d7ff7')
          ctx.fillStyle = g
          ctx.arc(x, y, eyeR, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // Thinking ring
      if (thinking && !reduced) {
        ctx.beginPath()
        ctx.arc(c, c, r * 1.28, t * 3 % (Math.PI * 2), (t * 3 % (Math.PI * 2)) + Math.PI * 0.7)
        ctx.strokeStyle = 'rgba(124,77,255,0.6)'
        ctx.lineWidth = Math.max(1, size * 0.018)
        ctx.lineCap = 'round'
        ctx.stroke()
      }
    }

    const loop = (now) => {
      if (now > nextBlink) {
        blinkUntil = now + 130
        nextBlink = now + 2000 + Math.random() * 2600
      }
      draw(now)
      raf = requestAnimationFrame(loop)
    }

    if (reduced || !awake) {
      draw(performance.now())
    } else {
      raf = requestAnimationFrame(loop)
    }
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onPointer)
    }
  }, [size, thinking, awake, reduced])

  return (
    <canvas
      ref={canvasRef}
      className="avatar-orb"
      style={{ width: size, height: size }}
      aria-hidden="true"
    />
  )
}
