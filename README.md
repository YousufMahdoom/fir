# FIR SPORTS - Pro Performance Gear Store

Elite Athletic E-Commerce Storefront featuring high-velocity football boots, mastercrafted English willow cricket bats, smart biometric telemetry gadgets, and graduated compression recovery gear.

## 🚀 Live Demo & Static Deployment

This website is **100% static and zero-backend dependent**. It can be deployed directly to:
- **GitHub Pages**
- **Netlify / Vercel**
- Or opened directly in any browser by double-clicking `index.html`.

### How to Deploy to GitHub Pages:
1. Create a new GitHub repository (e.g. `fir-sports-shop`).
2. Push or upload the files from this folder (`index.html`, `assets/`, `data/`, etc.).
3. On GitHub, go to **Settings** → **Pages**.
4. Under **Branch**, select `main` (or `master`) and folder `/ (root)`, then click **Save**.
5. Your live client demo URL will be ready at:
   `https://<your-username>.github.io/<repo-name>/`

---

## ⚡ Core Features Built-in

- **Interactive 3D Mouse Parallax & Dynamic Aura Glow Orbs**
- **Hero Gear Mode Switcher** (Football Boots, Cricket Bats, Smart Gadgets)
- **Persistent Shopping Bag Drawer** with real-time $150 free shipping progress meter
- **Wishlist Drawer** with instant state synchronization across all cards and modals
- **Multi-Variant Engine**:
  - Football Boots: Choose US / EU sizes (US 8, 9, 10, 11, 12)
  - English Willow Bats: Pick weights (Light 2lb 7oz, Balanced 2lb 8.5oz, Monster 2lb 10oz)
  - Smart Gadgets: Solo Pod vs Dual Vest Pod Bundle
  - Compression Gear: Size S, M, L, XL Pro
- **Catalog Controls Toolbar**:
  - Instant Price Range Chips (`All`, `<$100`, `$100-$250`, `>$250`)
  - Real-time Sorting (`Featured`, `Price: Low to High`, `Price: High to Low`, `Rating`)
  - Live search filtering
- **Live Satellite Order Tracking Modal**:
  - Test with demo order: `FIR-SAMPLE`
  - Any placed order is saved in browser storage and can be tracked in real-time with visual milestones
- **Quick View Modal** with Technical Specs & Athlete Reviews system + Leave a Review form
- **Interactive Telemetry Drill Simulator** with animated HUD gauge bars (Counter Sprint, Boundary Pull, Free-Kick Curler, High-Load Stamina)
- **Cyberpunk Theme Accent Switcher** (Volt Lime, Cyber Cyan, Hyper Crimson)
- **Promo Coupon Engine** (Supports `CHAMPION20` for 20% off)

---

## 📁 File Structure

```
├── index.html                 # Primary static entry point (GitHub Pages ready)
├── index.php                  # Local Apache / PHP bridge
├── data/
│   ├── products.json          # Static products catalog (9 pro items)
│   ├── categories.json        # 4 sports disciplines
│   └── reviews.json           # Verified athlete reviews dataset
├── assets/
│   ├── css/
│   │   └── style.css          # Glassmorphic cyber design system
│   ├── js/
│   │   └── main.js            # Complete interactive application logic
│   └── images/                # Pro gear imagery
└── README.md
```
