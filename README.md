# Divanshu — DevOps Portfolio

A production-grade, fully static developer portfolio website built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: React 18 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Syne (display) + DM Mono (monospace)

## Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, About, Skills, Experience, Projects, Certifications, Contact
│   └── ui/           # SectionWrapper, SectionHeader (reusable)
├── data/
│   └── portfolio.ts  # All content — edit this file to update the portfolio
├── hooks/
│   ├── useActiveSection.ts
│   └── useScrollProgress.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Getting Started

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Customization

All portfolio content is in `src/data/portfolio.ts`. Update:
- `personalInfo` — name, email, links, bio
- `aboutContent` — paragraphs and highlights
- `skills` — categories and items
- `experience` — work history
- `projects` — project cards
- `certifications` — cert cards
- `education` — education details

---

## Deployment

### Vercel

```bash
npm i -g vercel
vercel --prod
```

Or connect your GitHub repo on [vercel.com](https://vercel.com) — it auto-detects Vite.

**vercel.json** (optional, for SPA routing):
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

### Netlify

```bash
npm run build
```

Upload the `dist/` folder at [app.netlify.com](https://app.netlify.com), or use the CLI:

```bash
npm i -g netlify-cli
netlify deploy --dir=dist --prod
```

Create `public/_redirects` for SPA routing:
```
/*  /index.html  200
```

---

### Coolify

1. Push code to a Git repository (GitHub/GitLab/Gitea)
2. In Coolify dashboard → New Resource → Static Site
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

---

### Dokploy

1. Push to a Git repository
2. In Dokploy → New Application → Static
3. Set build command: `npm install && npm run build`
4. Set output directory: `dist`
5. Configure your domain and deploy

---

## SEO

Meta tags are configured in `index.html`. Update:
- `<title>` — page title
- `<meta name="description">` — search snippet
- `<meta property="og:url">` — your actual domain

---

## Performance

- Fully static — no server needed
- Code-split by Vite
- Optimized fonts with `font-display: swap`
- Framer Motion animations only run `once` (no re-triggering on scroll)

---

## License

MIT © Divanshu
