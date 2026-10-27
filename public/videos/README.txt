The site-wide background videos live here:

  site-background.mp4    (clip A)
  site-background-2.mp4  (clip B)

They play in sequence with a crossfade behind every section (fixed layer +
dark veil for readability), looping A -> B -> A forever. Settings in
src/config/siteConfig.js -> SITE_VIDEO (sources list, overlayOpacity);
sequencing + fallback logic in src/components/SiteBackground.jsx.

To replace a clip: overwrite its file (keep the name). Add more clips by
appending to `sources`. Recommended per clip: seamless H.264 MP4 < ~8 MB.
The site still works if all files are removed (dark gradient fallback).
