/**
 * Consistent custom line icons (24x24 stroke set). One visual language
 * across services, process, contact, and footer.
 */

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
}

export function IconBrowser(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <path d="M6.5 6.5h.01M9.5 6.5h.01" />
      <path d="M7 13h6M7 16.5h4" />
    </svg>
  )
}

export function IconMobile(props) {
  return (
    <svg {...base} {...props}>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M10.5 18.5h3" />
      <path d="M9.5 6h5" />
    </svg>
  )
}

export function IconCart(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 4h2.2l2 11.5a1.6 1.6 0 0 0 1.6 1.3h8.4a1.6 1.6 0 0 0 1.6-1.3L20.5 8H6" />
      <circle cx="9.5" cy="20" r="1.1" />
      <circle cx="16.5" cy="20" r="1.1" />
    </svg>
  )
}

export function IconSystem(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" />
      <path d="M17.25 13.5v7.5M13.5 17.25h7.5" />
    </svg>
  )
}

export function IconChart(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 20.5h17" />
      <path d="M6.5 20.5V13M11 20.5V8M15.5 20.5v-9M20 20.5V4.5" />
    </svg>
  )
}

export function IconPuzzle(props) {
  return (
    <svg {...base} {...props}>
      <path d="M10 3.5a2 2 0 1 1 4 0V6h3.5a2 2 0 1 1 0 4H16v3.5a2 2 0 1 1-4 0V10H8.5a2 2 0 1 1 0-4H10z" />
      <path d="M10 16v2.5a2 2 0 0 0 2 2h7.5a1 1 0 0 0 1-1V16" />
    </svg>
  )
}

export function IconWhatsApp(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 20.5l1.3-4.3A8.2 8.2 0 1 1 12 20.2a8.4 8.4 0 0 1-4-1l-4.5 1.3z" />
      <path d="M8.6 9c.2 2.2 3.3 5.4 5.6 5.7.8.1 1.6-.6 1.6-1.4 0-.4-.9-.9-1.4-1.1-.3-.1-.6.1-.8.4-.4.5-.9.5-1.4.1a7 7 0 0 1-1.9-2.1c-.3-.5-.2-1 .2-1.3.3-.3.5-.6.4-.9-.2-.5-.6-1.4-1-1.4-.9 0-1.4.7-1.3 1.6 0 .3 0 .6 0 .4z" />
    </svg>
  )
}

export function IconFacebook(props) {
  return (
    <svg {...base} {...props}>
      <path d="M14.5 8.5V6.8c0-.8.5-1 .9-1h1.9V3h-2.6c-2.8 0-3.7 2-3.7 3.7v1.8H9v3h1.9V21h3.6v-9.5h2.5l.4-3z" />
    </svg>
  )
}

export function IconInstagram(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M16.9 7.1h.01" />
    </svg>
  )
}

export function IconTikTok(props) {
  return (
    <svg {...base} {...props}>
      <path d="M14.5 3v9.9a3.4 3.4 0 1 1-3-3.4" />
      <path d="M14.5 3c.4 2.6 2 4.3 4.5 4.6" />
    </svg>
  )
}

export function IconPhone(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5.5 3.5h3.2L10 7 8.2 8.5a12 12 0 0 0 5.6 5.6L15 12.3l3.5 1.3v3.2a1.8 1.8 0 0 1-2 1.8C9.7 18.1 4.2 12.6 3.7 5.5a1.8 1.8 0 0 1 1.8-2z" />
    </svg>
  )
}

export function IconArrowDown(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4.5v15M6 14l6 6 6-6" />
    </svg>
  )
}

export function IconExternal(props) {
  return (
    <svg {...base} {...props}>
      <path d="M14 4h6v6M20 4l-8.5 8.5" />
      <path d="M18 14v4.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10" />
    </svg>
  )
}

export function IconCheck(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 12.5l5 5 10-11" />
    </svg>
  )
}

export function IconPlay(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8.5l6 3.5-6 3.5z" />
    </svg>
  )
}

export const serviceIcons = {
  browser: IconBrowser,
  mobile: IconMobile,
  cart: IconCart,
  system: IconSystem,
  chart: IconChart,
  puzzle: IconPuzzle,
}
