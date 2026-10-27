import { useEffect, useRef, useState } from 'react'

/** Adds an `is-visible` state once the element enters the viewport (one-shot). */
export function useReveal(options = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px', ...options },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [options])

  return { ref, visible }
}

/** True while the element is within the viewport — used to pause expensive animation. */
export function useInView(margin = '0px') {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: margin },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [margin])

  return { ref, inView }
}
