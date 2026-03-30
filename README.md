# MacSlapApp Website

Landing page for [MacSlapApp](https://github.com/AbdullahFID/MacSlapApp) — the open-source app that makes your MacBook scream when you slap it.

**Live at [macslap.app](https://macslap.app)**

## Tech Stack

- **Next.js 16** with App Router
- **Tailwind CSS v4**
- **Framer Motion** for scroll animations, spring physics, and hover interactions
- **Lucide React** for icons
- **TypeScript**
- Hosted on **Vercel**

## Features

- Dark glassmorphism design with animated background blobs
- Floating pill navbar (desktop: centered, mobile: bottom bar)
- Scroll-triggered entrance animations with spring physics
- Interactive hover effects on all cards and buttons
- Animated stat counters
- Terminal-style setup instructions
- FAQ accordion with smooth expand/collapse
- Feature comparison table vs SlapMac
- Full SEO: meta tags, OpenGraph, Twitter cards, JSON-LD structured data
- Mobile-responsive across all breakpoints

## Development

```bash
# Install dependencies
pnpm install

# Run dev server
pnpm dev

# Build for production
pnpm build
```

## Deployment

Connected to Vercel via GitHub. Pushes to `main` auto-deploy.

To deploy manually:

```bash
pnpm build
npx vercel --prod
```

## Related

- [MacSlapApp](https://github.com/AbdullahFID/MacSlapApp) — the actual app (Swift, IOKit, private macOS APIs)
- [SlapMac](https://slapmac.com/) — the original paid app that inspired this
- [taigrr/spank](https://github.com/taigrr/spank) — Go implementation that helped with accelerometer research

## License

MIT
