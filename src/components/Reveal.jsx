import { useReveal } from '../hooks/useReveal'

/** Wrapper that reveals children with a restrained rise+fade on scroll. */
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const { ref, visible } = useReveal()
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
