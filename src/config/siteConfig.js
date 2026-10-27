/**
 * Central site configuration — edit values here to update the whole website.
 */

export const BRAND = {
  name: 'GRAPH IOTTA',
  phoneDisplay: '01013791517',
  whatsappNumber: '201013791517',
  facebook: 'https://www.facebook.com/profile.php?id=61577891248948&locale=ar_AR',
  // Instagram and TikTok are not created yet. When real URLs exist, set them
  // here and they will appear automatically. Leave null until then.
  instagram: null,
  tiktok: 'https://www.tiktok.com/@graphiotta',
  // Production domain is owned by the brand owner. Set it once confirmed to
  // enable the canonical URL and absolute og:url.
  domain: null,
}

/**
 * Site-wide background video(s) — play behind every section.
 * Multiple sources crossfade in sequence and loop.
 *
 * ► Current assets: public/videos/site-background.mp4  (loop A)
 *                   public/videos/site-background-2.mp4 (loop B)
 * ► To replace: overwrite those files (keep names), or edit `sources` here.
 *   Recommended per clip: seamless H.264 MP4, < ~8 MB.
 *
 * The site works without the files — a dark gradient shows through as the
 * fallback. Videos are skipped for reduced-motion users and on
 * data-saver / very slow connections.
 */
export const SITE_VIDEO = {
  sources: ['videos/site-background.mp4', 'videos/site-background-2.mp4'],
  poster: null, // e.g. 'images/video-poster.jpg'
  enabled: true, // set false to force the static gradient background
  // Dark veil opacity over the video (0–1). Raise it if text contrast drops.
  overlayOpacity: 0.72,
}

/** Opening splash: logo shown before the site fades in. */
export const SPLASH = {
  enabled: true,
  logoDurationMs: 3000, // how long the logo holds
  fadeOutMs: 900, // fade-to-site transition
}

export const WA_BASE = `https://wa.me/${BRAND.whatsappNumber}`
