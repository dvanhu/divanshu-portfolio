<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=28&pause=1000&color=00D4FF&center=true&vCenter=true&width=700&lines=Divanshu+%E2%80%94+DevOps+%26+Cloud+Engineer;AWS+%7C+Docker+%7C+Kubernetes+%7C+Terraform;Automating+Infrastructure%2C+One+Pipeline+at+a+Time." alt="Typing SVG" />

<br/>

[![Portfolio](https://img.shields.io/badge/🌐%20Live%20Portfolio-divanshu--portfolio.onrender.com-00D4FF?style=for-the-badge&logoColor=white)](https://divanshu-portfolio.onrender.com/#hero)
[![GitHub](https://img.shields.io/badge/GitHub-dvanhu-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/dvanhu)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-dvanhu-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dvanhu/)

<br/>

![TypeScript](https://img.shields.io/badge/TypeScript-91.3%25-3178C6?style=flat-square&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-Build_Tool-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-Styling-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![MIT License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white)

</div>

---

## Overview

**Divanshu Portfolio** is a production-grade, fully static personal portfolio built to reflect the standards of a serious DevOps and Cloud Infrastructure engineer. It is not a template — it is a deliberately engineered, containerizable, CI/CD-integrated web application designed for recruiters, open-source contributors, and the engineering community.

Built with **React 18**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Framer Motion**, it is optimized for performance, accessibility, and zero-dependency deployment across cloud platforms including **Render**, **Vercel**, **Netlify**, **Coolify**, and **Dokploy**.

> **Live:** [divanshu-portfolio.onrender.com](https://divanshu-portfolio.onrender.com/#hero)

---

## About Me

I'm **Divanshu**, a B.Tech CSE student at **JECRC University** pursuing a career as a **DevOps Engineer** and **AWS Cloud Solutions Architect**. My focus is infrastructure automation, container orchestration, and building reliable deployment pipelines that scale.

I work at the intersection of **development velocity** and **operational stability** — designing systems that are reproducible, observable, and deployable with a single command.

---

## 🛠️ Tech Stack

### Portfolio Application

| Layer | Technology |
|---|---|
| **Framework** | React 18 + Vite |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Fonts** | Syne (display) · DM Mono (monospace) |
| **Build Output** | Static (`dist/`) — zero runtime server required |

### DevOps & Cloud Skillset

![AWS](https://img.shields.io/badge/AWS-Cloud-FF9900?style=flat-square&logo=amazonaws&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Containers-2496ED?style=flat-square&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-Orchestration-326CE5?style=flat-square&logo=kubernetes&logoColor=white)
![Terraform](https://img.shields.io/badge/Terraform-IaC-7B42BC?style=flat-square&logo=terraform&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI%2FCD-2088FF?style=flat-square&logo=github-actions&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-Systems-FCC624?style=flat-square&logo=linux&logoColor=black)
![Nginx](https://img.shields.io/badge/Nginx-Web_Server-009639?style=flat-square&logo=nginx&logoColor=white)
![Python](https://img.shields.io/badge/Python-Scripting-3776AB?style=flat-square&logo=python&logoColor=white)
![Bash](https://img.shields.io/badge/Bash-Automation-4EAA25?style=flat-square&logo=gnu-bash&logoColor=white)

---

## Key Features

- **Blazing Fast** — Vite-powered static build with code splitting and tree shaking; sub-second load times
- **Smooth Animations** — Framer Motion entrance animations triggered once on scroll; no performance regression
- **Fully Responsive** — Mobile-first layout engineered across all breakpoints
- **Accessible** — Semantic HTML, ARIA-compliant components, keyboard navigable
- **Zero Server Dependency** — Fully static `dist/` output; deployable to any CDN or object storage
- **Docker-Ready** — Containerized with Nginx for consistent local and production behaviour
- **CI/CD Integrated** — Automated build, lint, and deployment via GitHub Actions
- **SEO Optimized** — Configured meta tags, Open Graph, and structured title/description

---

## Project Structure

```
divanshu-portfolio/
│
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD pipeline
│
├── public/                     # Static assets (favicon, OG image, robots.txt)
│
├── src/
│   ├── components/
│   │   ├── layout/             # Navbar, Footer
│   │   ├── sections/           # Hero, About, Skills, Experience,
│   │   │                       # Projects, Certifications, Contact
│   │   └── ui/                 # SectionWrapper, SectionHeader (reusable primitives)
│   │
│   ├── data/
│   │   └── portfolio.ts        # ← Single source of truth for all content
│   │
│   ├── hooks/
│   │   ├── useActiveSection.ts # Scroll-based section tracking
│   │   └── useScrollProgress.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── index.html                  # Entry point with SEO meta configuration
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── vercel.json                 # SPA routing rewrite rules
```

> **To update portfolio content:** edit only `src/data/portfolio.ts`. No other files need to change.

---

## Local Development Setup

### Prerequisites

| Requirement | Version |
|---|---|
| Node.js | `≥ 18.x` |
| npm | `≥ 9.x` |
| Git | Latest |

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/dvanhu/divanshu-portfolio.git
cd divanshu-portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The dev server starts at `http://localhost:5173` with HMR enabled.

### Available Scripts

```bash
npm run dev        # Start local dev server with hot reload
npm run build      # Type-check + produce optimised static build in dist/
npm run preview    # Locally preview the production build
npm run lint       # Run ESLint across all TypeScript source files
```

---


### Build & Run

```bash
# Build the Docker image
docker build -t divanshu-portfolio:latest .

# Run the container
docker run -d -p 8080:80 --name portfolio divanshu-portfolio:latest

# Open in browser
open http://localhost:8080
```

---

## Cloud Deployment

### Vercel *(Recommended — Zero Config)*

```bash
npm i -g vercel
vercel --prod
```

Or connect the GitHub repository directly at [vercel.com](https://vercel.com). Vercel auto-detects Vite and configures the build. SPA routing is handled by `vercel.json`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

### Render *(Current Production Host)*

1. Connect the GitHub repository in the [Render dashboard](https://render.com)
2. Set **Build Command:** `npm install && npm run build`
3. Set **Publish Directory:** `dist`
4. Deploy — Render handles HTTPS, CDN, and auto-deploy on push

> **Live on Render:** [divanshu-portfolio.onrender.com](https://divanshu-portfolio.onrender.com/#hero)

---

### Netlify

```bash
npm run build
npm i -g netlify-cli
netlify deploy --dir=dist --prod
```

Add `public/_redirects` for SPA routing:

```
/*  /index.html  200
```

---

### Coolify *(Self-Hosted)*

1. Push code to GitHub/GitLab/Gitea
2. In Coolify → **New Resource** → **Static Site**
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Set your custom domain and deploy

---

### Dokploy *(Self-Hosted)*

1. Push to any Git repository
2. In Dokploy → **New Application** → **Static**
3. Build command: `npm install && npm run build`
4. Output directory: `dist`
5. Configure domain → Deploy

> **Note:** Both Coolify and Dokploy support custom SSL, reverse proxy configuration, and webhook-triggered deployments — making them suitable for self-hosted infrastructure setups.

---

## CI/CD Pipeline

This repository uses **GitHub Actions** for automated build validation and deployment on every push to `main`.

### Workflow: `.github/workflows/deploy.yml`

```yaml
name: CI/CD — Build & Deploy

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    name: Build & Lint
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Lint
        run: npm run lint

      - name: Build
        run: npm run build

      - name: Upload build artifact
        uses: actions/upload-artifact@v4
        with:
          name: dist
          path: dist/
```

### Pipeline Flow

```
git push → GitHub Actions triggered
               │
               ├── Install dependencies (npm ci)
               ├── Lint TypeScript source
               ├── Compile & bundle (Vite)
               └── Upload dist/ artifact
                          │
                          └── Render / Vercel auto-deploy via webhook
```

> Pull requests trigger a build-only check. Pushes to `main` trigger the full deploy pipeline.

---
## Customisation

All portfolio content is managed from a single file:

**`src/data/portfolio.ts`**

| Key | Description |
|---|---|
| `personalInfo` | Name, email, bio, social links |
| `aboutContent` | About section paragraphs and highlights |
| `skills` | Skill categories and individual items |
| `experience` | Work and internship history |
| `projects` | Project cards with descriptions and links |
| `certifications` | AWS and other certification cards |
| `education` | University and course details |

No component files need to be modified for content updates.

---

## Contributing

Contributions, issues, and forks are welcome. If you find a bug or want to suggest an improvement:

1. **Fork** the repository
2. Create a feature branch: `git checkout -b feat/your-improvement`
3. Commit your changes: `git commit -m "feat: describe your change"`
4. Push to your branch: `git push origin feat/your-improvement`
5. Open a **Pull Request** with a clear description

Please follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.

---

## License

This project is licensed under the **MIT License**.
You are free to fork, modify, and use this as a base for your own portfolio — attribution appreciated but not required.

---

<div align="center">

**Built with precision by [Divanshu](https://github.com/dvanhu)**

*Aspiring DevOps Engineer · AWS Cloud Solutions Architect · B.Tech CSE, JECRC University*

[![GitHub](https://img.shields.io/badge/GitHub-dvanhu-181717?style=flat-square&logo=github)](https://github.com/dvanhu)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-dvanhu-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/dvanhu/)
[![Portfolio](https://img.shields.io/badge/Portfolio-Live-00D4FF?style=flat-square)](https://divanshu-portfolio.onrender.com/#hero)

</div>
