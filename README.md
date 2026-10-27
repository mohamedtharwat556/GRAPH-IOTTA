# GRAPH IOTTA — Website

Premium bilingual (Arabic-first / English) website for GRAPH IOTTA, a digital
solutions and software development studio. Built with React + Vite, custom
CSS, and a dependency-free canvas particle field — no heavy 3D library.

## Run locally

```bash
npm install
npm run dev        # http://localhost:12000
npm run build      # production output in dist/
npm run preview    # serve the production build on http://localhost:12000
```

## Structure

```
src/
  components/    Navbar, Footer, Logo, icons, Reveal, ParticleField, SiteBackground,
                 Splash, HeadlineRotator, ProjectModal, chat/ (ChatWidget, AvatarOrb)…
  sections/      Hero, Services, Portfolio, About, Process, WhyUs, Quote, Builder, Faq, Contact
  data/          projects.js, services.js, process.js, faq.js  (bilingual content)
  i18n/          translations.js (UI strings) + LanguageContext.jsx
  hooks/         useReveal, useReducedMotion, device helpers
  config/        siteConfig.js  ← brand, WhatsApp, video settings
  styles/        global.css (design tokens + layout) + features.css (modal, builder, chat motion)
public/
  videos/        Site-wide background video (site-background.mp4)
  images/        project screenshots + social share image
  icons/         favicon.svg
```

## Replacing / adding assets

| Asset | Where | Notes |
|---|---|---|
| **Background videos** | `public/videos/site-background.mp4` + `site-background-2.mp4` | Play in sequence with a crossfade behind all sections (loop A→B→A). Edit the list in `src/config/siteConfig.js` → `SITE_VIDEO.sources` (also `overlayOpacity` for contrast). Overwrite a file to replace it; the site falls back to a dark gradient if all clips fail, and videos are skipped for reduced-motion / data-saver users. |
| **Opening splash** | `src/config/siteConfig.js` → `SPLASH` | Official logo + tagline ("بنقدّم أقوى الخدمات لراحة عملائنا") for 3 s, then fades into the site. Set `enabled: false` to remove, or adjust `logoDurationMs` / `fadeOutMs`. The tagline lives in `src/i18n/translations.js` → `splashTagline`. |
| **AI chat assistant** | `src/components/chat/` + `src/utils/chatBrain.js` | Floating animated orb mascot (canvas — blinking eyes, pointer tracking, thinking pulse) with a bilingual rule-based brain answering about services, pricing, portfolio, process, hosting, maintenance, and handoff to WhatsApp. Answers are **typed out character-by-character** with a live caret, then show contextual follow-up suggestion chips per intent. Replies are built only from the site's real data. Tuned in `chatBrain.js` (`responses` + `followUps`). |
| **Live project preview** | `src/components/ProjectModal.jsx` | Clicking any work card opens a cinematic modal with a browser-chrome frame embedding the real published site via `<iframe>` (loading spinner + fade-in). Some hosts send `X-Frame-Options` and refuse embedding, so the toolbar always offers "open in a new tab" and a note explains this. Esc / backdrop / ✕ close it and unlock scroll. |
| **Project builder** | `src/sections/Builder.jsx` (`#builder`) | A 4-step wizard — project type (from the six services) → feature chips → timing + optional notes → a generated order card — ending in a single WhatsApp button that opens a fully URL-encoded, bilingual request built by `builderMessage()` in `src/utils/whatsapp.js`. No backend, no invented prices. |
| **Rotating hero headlines** | `src/components/HeadlineRotator.jsx` | The headline cycles five bilingual lines (3 s each) with a soft fade/rise. Lines live in `translations.js` → `hero.headlines`. Stacked in one grid cell so there is no layout shift; static first line under reduced-motion. |
| **Official logo** | `public/images/logo.png` (master 1254×1254) | Added. Nav/footer render pre-resized copies (`logo-96/192/512.png`, favicon `icons/favicon-64.png`). Never stretch or recolor the artwork. If a new master arrives, regenerate copies with sharp (see git history of this README) or re-export. |
| **Favicon** | `public/icons/favicon-64.png` | Generated from the official logo. |
| **Social share image** | currently `og:image` → `images/logo-512.png` | Optional upgrade: a 1200×630 branded `social-share.jpg`, then update `og:image` in `index.html`. |
| **Project screenshots** | `public/images/projects/<id>.jpg` then set `preview` in `src/data/projects.js` | Real screenshots are in place for all five projects (1200×750, generated with sharp). To replace one, drop a new `<id>.jpg` and rebuild. If a project has no image, a neutral preview panel renders instead. Never use unrelated stock imagery. |
| **Instagram / TikTok** | `src/config/siteConfig.js` → `BRAND` | Left `null` — links appear automatically once real URLs exist. |
| **Production domain** | `src/config/siteConfig.js` → `BRAND.domain` and the commented `<link rel="canonical">` in `index.html` | Not guessed; fill in when confirmed. |

## Editing content

- All Arabic/English UI copy: `src/i18n/translations.js`.
- Services, projects, process, FAQ: files under `src/data/` — each field is
  `{ ar, en }`.
- WhatsApp number and message templates: `src/config/siteConfig.js` and
  `src/utils/whatsapp.js` (messages are URL-encoded per language).

## Deployment (existing hosting / Vercel)

The build is fully static with **relative asset paths** (`base: './'`), so
`dist/` works on any host, including shared hosting subfolders.

- **Vercel:** framework preset "Vite" — build command `npm run build`,
  output directory `dist`. Add the real domain in project settings, then set
  `BRAND.domain` and the canonical link and redeploy.
- **Any static host:** run `npm run build` and upload the contents of `dist/`.

No environment variables or credentials are required.

## Accessibility & motion

- `prefers-reduced-motion`: particles and the background video are disabled, reveals
  show instantly, smooth scrolling off.
- Keyboard focus rings, skip link, labelled form fields with bilingual errors,
  ARIA states on menu/FAQ, semantic landmarks.
- The inquiry form has **no backend**: it validates, keeps entered data on
  error, and opens WhatsApp with the composed message.

## Known limitations

- Visual regression screenshots could not be captured in this environment
  (no browser surface); functional checks (build, RTL/LTR toggle, form
  validation, WhatsApp URL encoding, all five project URLs) were verified in
  a real DOM via the preview server.
- Portfolio card thumbnails show the real published-site screenshots (the
  browser chrome was cropped from the one windowed capture).
- Canonical URL and `og:url` are intentionally omitted until the production
  domain is confirmed.
