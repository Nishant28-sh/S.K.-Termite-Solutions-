# SK Termite Solutions — Premium Business Website

A production-ready lead-generation website built with Next.js 15 (App Router),
React 19, TypeScript, Tailwind CSS and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

To build for production:

```bash
npm run build
npm run start
```

## ⚠️ Before you go live — replace these placeholders

All real business details still need to be filled in. Everything is centralised
in **one file** for convenience:

`lib/utils.ts` → the `SITE` object:

- `phone` / `phoneDisplay` — real business phone number
- `whatsapp` — WhatsApp number in international format, no `+` or spaces (e.g. `919876543210`)
- `email` — real business email
- `address` — real office/warehouse address
- `hours` — real business hours
- `domain` — your real live domain (used for SEO metadata, sitemap, JSON-LD)
- `mapEmbed` — your actual Google Maps embed URL (Google Maps → Share → Embed a map)

Also update `app/layout.tsx`'s JSON-LD block (`streetAddress`, `addressLocality`,
`postalCode`, `areaServed`) to match your real service area for local SEO.

## What's included

- **11 pages**: Home, About, Services, Projects, Gallery, Testimonials, FAQ,
  Contact, Privacy Policy, Terms & Conditions, custom 404
- **Home page sections**: glassmorphism sticky navbar, full-screen **video**
  hero with word-reveal headline and cursor-spotlight, scrolling trust
  marquee, 3D-tilt service cards, why-choose-us timeline with floating
  ambient orbs, animated 6-step process, a "See Us In Action" video
  showcase with custom play/pause/mute controls, interactive before/after
  slider, projects preview, testimonials carousel, FAQ accordion, final CTA
- **Gallery** mixes real photography with two playable video tiles (click to
  play in a lightbox), each tile animating in with a clip-path reveal on scroll
- **Contact form** with React Hook Form + Zod validation and a success
  animation (currently logs to console — wire up `components/home/ContactForm.tsx`'s
  `onSubmit` to your email/CRM endpoint of choice, e.g. Resend, Formspree, or
  a custom API route)
- **SEO**: per-page metadata, Open Graph, Twitter cards, JSON-LD LocalBusiness
  schema, `sitemap.ts`, `robots.ts`, canonical URLs
- **Floating call/WhatsApp buttons**, scroll progress bar, back-to-top, and a
  one-time premium loading screen
- Fully responsive, keyboard-accessible (visible focus rings), and respects
  `prefers-reduced-motion`

## Project structure

```
app/                 → routes (App Router)
components/layout/   → Navbar, Footer, FloatingButtons, ScrollProgress, Loader
components/home/     → all section components used across pages
components/ui/        → Button, Counter, PageHero (shared primitives)
lib/data.ts          → all site copy: services, testimonials, FAQs, process steps, projects
lib/utils.ts         → SITE config (contact details) + cn() helper
```

## Images & Videos

Hero, project, gallery, and video-showcase footage currently use royalty-free
Unsplash photos and Mixkit stock video clips as placeholders (see
`lib/media.ts` and `lib/data.ts`). Swap these with real project photography
and footage of your own team/sites for the strongest trust signal — this is
the single highest-impact change you can make before launch. The Mixkit clips
are free for personal use; if you keep using stock footage in production,
check the license on the linked Mixkit page for each clip in `lib/media.ts`
and consider the "Premium Download" for commercial rights.

## Deployment

This project deploys cleanly to Vercel, Netlify, or any Node hosting that
supports Next.js 15. Remember to set your real `domain` in `lib/utils.ts`
before generating your final sitemap/OG tags.
