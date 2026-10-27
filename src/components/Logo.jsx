/**
 * Official GRAPH IOTTA logo — public/images/logo.png (1254x1254 master).
 * Rendered from pre-resized copies at native proportions; never stretch,
 * recolor, or redraw the artwork.
 */
export default function Logo({ variant = 'nav' }) {
  const isFooter = variant === 'footer'
  return (
    <span className={`logo logo-${variant}`}>
      <img
        src={isFooter ? 'images/logo-192.png' : 'images/logo-96.png'}
        alt="GRAPH IOTTA — الشعار الرسمي / official logo"
        width={isFooter ? 64 : 44}
        height={isFooter ? 64 : 44}
        decoding="async"
      />
    </span>
  )
}
