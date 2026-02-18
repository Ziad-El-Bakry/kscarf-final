# k. SCARF — Social Links Page

> Developed by programmer **Ziad El-Bakry**

---

## 🗂 Project Structure

```
kscarf/
├── index.html                  ← HTML entry point
├── package.json                ← Dependencies & scripts
├── vite.config.js              ← Vite bundler config
├── tailwind.config.js          ← Tailwind CSS config
├── postcss.config.js           ← PostCSS config
└── src/
    ├── main.jsx                ← React entry point
    ├── App.jsx                 ← Root component (assembles all)
    │
    ├── data/
    │   ├── constants.js        ← Store info + all social links data
    │   └── logo.js             ← Logo base64 asset
    │
    ├── components/
    │   ├── Background.jsx      ← Animated bg: particles, blobs, grid, cursor glow
    │   ├── StoreHeader.jsx     ← Logo, store name, tagline, divider
    │   ├── SocialCard.jsx      ← Individual social link card (hover effects)
    │   ├── SparkleBanner.jsx   ← ✨ Interactive developer section (spark explosion)
    │   ├── Icons.jsx           ← All SVG social icons + getIcon() helper
    │   └── Footer.jsx          ← Copyright + developer credit
    │
    ├── hooks/
    │   └── useAnimations.js    ← useMousePosition() + usePageLoaded()
    │
    └── styles/
        └── global.css          ← Fonts, reset, scrollbar, keyframes
```

---

## 🚀 Getting Started

```bash
npm install
npm run dev      # → http://localhost:3000
npm run build    # → dist/
```

---

## ✏️ How to Update Social Links

Open `src/data/constants.js` and edit the `SOCIAL_LINKS` array.  
Each link has: `id · name · handle · badge · description · url · color`

## 🖼 How to Update Logo

Open `src/data/logo.js` and replace `LOGO_BASE64` with a new base64 string.

---

## 🎨 Tech Stack

- **React 18** — UI framework
- **Vite 5** — Fast bundler & dev server
- **Tailwind CSS 3** — Utility-first styling
- **CSS Animations** — No extra animation libraries

---

_© 2025 k. SCARF — All rights reserved_
