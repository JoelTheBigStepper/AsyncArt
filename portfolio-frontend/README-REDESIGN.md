# AsyncArt Redesign — Setup Notes

## What changed
Full visual redesign: neo-brutalist system (thick black borders, hard offset
shadows, color-blocked sections) with a new palette (cobalt/flame/acid on
black+white), Archivo Black + Hanken Grotesk + JetBrains Mono typography, and
a tech-stack marquee ticker. Works now has two modes: **Client & Demo Work**
(still pulled from your existing API) and **Real-World Products** (static,
curated — MedVerify, MomCare, Velastrux, Resoary).

## To install
1. **Merge `tailwind.config.js`** into your existing config — copy the
   `colors`, `fontFamily`, `boxShadow`, `keyframes`, and `animation` entries
   under `theme.extend`. If you already have `outfit` or other fonts
   registered, keep them alongside the new ones (nothing here removes them).
2. **Replace `src/index.css`** with the version here (or merge the
   `@import` font line and the `@layer` blocks into your existing file).
3. **Drop in every file** under `src/` — same paths as your current project,
   so they overwrite directly:
   - `src/App.jsx`
   - `src/pages/Home.jsx`, `About.jsx`, `Works.jsx`, `Contact.jsx`, `Admin.jsx`
   - `src/components/Header.jsx`, `Footer.jsx`, `Modal.jsx`,
     `WorkProjectCard.jsx`, `AboutMoreModal.jsx`, `ScrollToTopButton.jsx`,
     `SkillTicker.jsx` (new), `ProjectModeToggle.jsx` (new)
   - `src/data/realWorldProjects.js` (new)
4. No new npm packages needed — everything uses `lucide-react`,
   `react-icons/si`, `framer-motion`, `react-helmet`, and `react-router-dom`,
   which your project already has.
5. Fill in the `demo` and `code` URLs in `src/data/realWorldProjects.js` once
   those products have public links.

## Notes
- Brand/tech logos (React, Node, MongoDB, etc.) still use `react-icons/si`
  since Lucide doesn't include brand marks — every other icon (nav, social,
  buttons) now uses `lucide-react` only.
- The "pressed button" shadow effect (`.press` utility in `index.css`) is the
  one consistent motion signature used everywhere instead of per-element hover
  fades — keep it that way if you extend the design.
- Dark mode still toggles the `dark` class on `<html>` exactly as before.
