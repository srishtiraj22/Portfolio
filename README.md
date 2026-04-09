<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 8" />
  <img src="https://img.shields.io/badge/JavaScript-ES2024-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/CSS-Custom_Properties-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" />
</p>

<h1 align="center">✨ Srishti Raj — Portfolio</h1>

<p align="center">
  <strong>A modern, responsive, dark-themed personal portfolio website showcasing my projects, skills, and journey as a Full Stack Developer &amp; AI Enthusiast.</strong>
</p>

<p align="center">
  <a href="https://github.com/srishtiraj22">GitHub</a> •
  <a href="https://www.linkedin.com/in/srishti-raj-0a185120b/">LinkedIn</a> •
  <a href="mailto:srishti78900@gmail.com">Email</a>
</p>

---

## 📸 Preview

> A sleek, dark-themed portfolio with glassmorphic cards, gradient accents, smooth scroll-triggered animations, and a fully responsive layout across all devices.

---

## 🚀 Features

| Feature | Description |
| --- | --- |
| **🌗 Dark / Light Theme** | Persistent theme toggle with `localStorage`; applies across all sections instantly |
| **⚛️ Component Architecture** | Modular React components — each section is self-contained with its own `.jsx` + `.css` |
| **🎨 Glassmorphism & Gradients** | Premium UI with backdrop blur, subtle glows, and vibrant gradient text |
| **📱 Fully Responsive** | Mobile-first design that looks great from 320px to ultra-wide displays |
| **🎞️ Scroll Animations** | Intersection Observer–powered reveal animations on every section |
| **🔍 Project Filtering** | Filter projects by category (All / Web App / Mobile App) |
| **📄 Resume Download** | One-click PDF download directly from the contact section |
| **📬 Contact Form** | Client-side form with submission feedback animation |
| **🔗 Social Links** | Quick access to GitHub, LinkedIn, and email |
| **🏷️ SEO Optimised** | Meta tags, Open Graph, semantic HTML, and proper heading hierarchy |

---

## 🛠️ Tech Stack

| Layer | Technologies |
| --- | --- |
| **Framework** | [React 19](https://react.dev) |
| **Build Tool** | [Vite 8](https://vite.dev) |
| **Language** | JavaScript (ES2024) |
| **Styling** | Vanilla CSS with Custom Properties (design tokens) |
| **Fonts** | [Inter](https://fonts.google.com/specimen/Inter), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) |
| **Linting** | ESLint 9 with `react-hooks` and `react-refresh` plugins |

---

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg          # Site favicon
│   ├── icons.svg            # Shared SVG icon sprite
│   ├── profile.png          # Profile photo (hero section)
│   └── resume.pdf           # Downloadable resume
├── src/
│   ├── assets/              # Static assets (images, etc.)
│   ├── components/
│   │   ├── Navbar.jsx/.css   # Sticky nav with theme toggle & smooth scroll
│   │   ├── Hero.jsx/.css     # Animated hero with stats & floating badges
│   │   ├── About.jsx/.css    # Bio, highlights, and code-window card
│   │   ├── Projects.jsx/.css # Filterable project grid with glow cards
│   │   ├── Skills.jsx/.css   # Categorised skill bars (6 categories)
│   │   ├── Education.jsx/.css# Timeline-style academic history
│   │   ├── Contact.jsx/.css  # Contact form, socials & resume download
│   │   └── Footer.jsx/.css   # Site footer
│   ├── App.jsx              # Root component — layout & theme state
│   ├── App.css              # App-level styles
│   ├── index.css            # Global styles, CSS variables & design tokens
│   └── main.jsx             # React DOM entry point
├── index.html               # HTML shell with SEO meta tags
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint flat config
├── package.json             # Dependencies & scripts
└── README.md                # You are here!
```

---

## 🏗️ Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9 (or yarn / pnpm)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/srishtiraj22/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at **`http://localhost:XXXX`** by default.

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

---

## ✏️ Customisation Guide

### Personal Information

| What to change | Where |
| --- | --- |
| Name, tagline, bio | `Hero.jsx`, `About.jsx` |
| Projects | `Projects.jsx` — edit the `projects` array |
| Skills & proficiency | `Skills.jsx` — edit the `skillCategories` array |
| Education history | `Education.jsx` — edit the `timeline` array |
| Social links & email | `Contact.jsx` — edit the `socialLinks` array |
| Profile photo | Replace `public/profile.png` |
| Resume | Replace `public/resume.pdf` |
| SEO metadata | `index.html` — update `<title>`, `<meta>`, and OG tags |

---

## 🌐 Deployment

This is a static site — deploy it anywhere that serves static files:

| Platform | Command / Notes |
| --- | --- |
| **Vercel** | Connect your GitHub repo → auto-deploys on push |
| **Netlify** | Build command: `npm run build` · Publish dir: `dist` |
| **GitHub Pages** | Use `vite-plugin-gh-pages` or deploy the `dist/` folder |
| **Cloudflare Pages** | Build command: `npm run build` · Output dir: `dist` |

---

