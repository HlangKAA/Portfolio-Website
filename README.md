<div align="center">

# ✨ Portfolio Website

**My personal portfolio showcasing skills, projects, leadership, and education**

Built with **React**, **Vite**, **Tailwind CSS** & **Framer Motion**

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

</div>

---

## 📋 Overview

A modern, responsive portfolio website with smooth animations, interactive UI elements, and a clean design. Features scroll-triggered animations, stacked project cards, smooth page transitions, and a polished dark theme.

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🌑 **Dark Theme** | Sleek dark-mode design with accent colors |
| 🎞️ **Smooth Animations** | Scroll-triggered animations powered by Framer Motion |
| 📱 **Fully Responsive** | Optimized for mobile, tablet, and desktop |
| 🃏 **Stacked Project Cards** | Parallax scroll-based project showcase |
| ☁️ **3D Icon Cloud** | Interactive tech stack visualization |
| ✨ **Sparkle Effects** | Dynamic text sparkle and meteor animations |
| 🔗 **Multi-page Routing** | Client-side routing with React Router |
| ⚡ **Smooth Scrolling** | Lenis smooth scroll integration |
| 🖥️ **Code Preview** | Syntax-highlighted code snippet on Hero |

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| **Hero / About** | `/` | Introduction, about me, and code preview |
| **Skills** | `/skills` | Tech stack with interactive icon cloud |
| **Leadership** | `/leadership` | Leadership activities and experiences |
| **Education** | `/education` | Academic background |
| **Projects** | `/projects` | Featured projects with stacked card design |
| **Contact** | `/contact` | Contact information and links |

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | React 18 |
| **Build Tool** | Vite 7 |
| **Styling** | Tailwind CSS 4 |
| **Animation** | Framer Motion |
| **Routing** | React Router v7 |
| **Smooth Scroll** | Lenis |
| **Icons** | React Icons, Lucide React |
| **UI Components** | Radix UI (Tooltip, Slot) |
| **Code Highlight** | Prism.js |
| **Deployment** | Vercel |

## 📂 Project Structure

```
Portfolio-Website/
├── src/
│   ├── pages/
│   │   ├── Hero/Hero.jsx              # Hero section + About
│   │   ├── About/About.jsx            # About me details
│   │   ├── Skills/Skills.jsx          # Skills & tech stack
│   │   ├── Experience/Experience.jsx  # Leadership activities
│   │   ├── Education/Education.jsx    # Education background
│   │   ├── Projects/Projects.jsx      # Project showcase
│   │   ├── Contact/Contact.jsx        # Contact info
│   │   └── Header/Header.jsx         # Navigation header
│   ├── components/
│   │   ├── ui/                        # Reusable UI components
│   │   │   ├── sparkles-text.jsx
│   │   │   ├── flip-words.jsx
│   │   │   ├── meteors.jsx
│   │   │   ├── icon-cloud.jsx
│   │   │   └── ...
│   │   ├── enhanced-portfolio-card.jsx
│   │   ├── AnimatedGrid.jsx
│   │   └── globe.jsx
│   ├── lib/utils.js
│   ├── assets/css/
│   ├── App.jsx                        # Main app with routing
│   └── main.jsx                       # Entry point
├── public/
├── tailwind.config.js
├── vite.config.js
├── vercel.json
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) 18+ LTS
- [Git](https://git-scm.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/HlangKAA/Portfolio-Website.git
cd Portfolio-Website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open your browser and visit **http://localhost:5173/** 🎉

### Build for Production

```bash
npm run build
npm run preview
```

## 🌐 Deployment

This project is deployed on **Vercel**. Push to `main` branch to trigger auto-deployment.

## 📄 License

This project is for personal use.

---

<div align="center">

**Made with ❤️ by HlangKAA**

</div>
