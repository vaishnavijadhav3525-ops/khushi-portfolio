# Futuristic AI & ML Portfolio

A premium, agency-grade, responsive developer portfolio designed with a futuristic AI-inspired theme. Built utilizing React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Futuristic AI Theme**: Smooth dark/light modes, floating neon ambient nodes, glassmorphic cards, and cursor tracking glow effects.
- **Cyber Core Hero**: Animated keyframe typing effects, reactive sub-systems status, and custom SVG dashboard elements.
- **Responsive Navigation**: Hamburger drawer menus and scroll progress indicators synced dynamically with viewport height.
- **Learning Journey Pathway**: A structured visual timeline outlining coursework, self-study modules, hackathons, and practice habits.
- **Dynamic Projects Grid**: Dynamic category filtering with detail viewing overlay modals.
- **Academic Stats Counter**: Count-up animation modules triggered dynamically on scroll intersect.
- **Fully Configured Routing**: Robust navigation schema containing dedicated index routes and custom 404 pages.
- **Validated Contact System**: Integrated forms validating input fields and simulating secure backend transmissions.

---

## 📁 Folder Structure

```text
portfolio/
├── public/                 # Static assets (favicons, icons mapping)
├── src/
│   ├── assets/             # Vector images & visual resources
│   ├── components/         # Custom UI elements & page blocks
│   │   ├── ui/             # Reusable design primitives (Buttons, Badges)
│   │   ├── Navbar.tsx      # Responsive header layout
│   │   ├── Hero.tsx        # Dashboard entry section
│   │   ├── About.tsx       # Core focus panels
│   │   ├── Education.tsx   # Coursework timeline
│   │   ├── Stats.tsx       # Count-up modules
│   │   ├── Skills.tsx      # Interactive skill tabs
│   │   ├── LearningJourney.tsx # Learning roadmap
│   │   ├── Projects.tsx    # Card grids & filter controls
│   │   ├── ProjectModal.tsx # Project expansion overlay
│   │   ├── Certifications.tsx # Verified licences
│   │   ├── Achievements.tsx # Milestones grid
│   │   ├── Contact.tsx     # Message forms & socials
│   │   ├── Footer.tsx      # Copyright & top triggers
│   │   ├── CursorGlow.tsx  # Cursor follow overlay
│   │   ├── ScrollToTop.tsx # Back to top button
│   │   └── LoadingScreen.tsx # Initialization screen
│   ├── data/               # Decoupled mock structures & models
│   ├── hooks/              # State listeners (Typing, Scroll, Theme)
│   ├── pages/              # Primary route entries (Home, NotFound)
│   ├── styles/             # Tailwind import definitions
│   ├── utils/              # Transition variants mapping
│   ├── App.tsx             # System router configuration
│   └── main.tsx            # App bootstrap lifecycle
├── tailwind.config.js      # Layout customization tokens
└── vite.config.ts          # Compilation settings
```

---

## 🛠️ Local Installation

Ensure [Node.js](https://nodejs.org) is installed on your local environment.

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/vaishnavi-jadhav/portfolio.git
   cd portfolio
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

4. **Build Production Bundle**:
   ```bash
   npm run build
   ```

---

## ⚡ Deployment to Vercel

### Option 1: Vercel CLI (Recommended)
1. Install Vercel globally:
   ```bash
   npm install -g vercel
   ```
2. Log in and deploy from project directory:
   ```bash
   vercel
   ```

### Option 2: GitHub Integration
1. Push your local workspace code to a fresh GitHub repository.
2. Link the repository to your [Vercel Dashboard](https://vercel.com).
3. Select **Vite** as the framework template. The build command `npm run build` and output directory `dist` are configured automatically.
