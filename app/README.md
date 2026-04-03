# Portfolio app — guide for new developers

This folder is a **React** single-page app built with **Vite**. Styling uses **Tailwind CSS** (utility classes in `className` strings) plus a small design-token file for colors and fonts. You do **not** need to be an expert in React or Tailwind to customize content and layout—start with the files called out below.

---

## How the app boots (big picture)

1. **`index.html`** loads one root `<div id="root">`.
2. **`src/main.jsx`** mounts the React app into that div and imports global styles from **`src/index.css`**.
3. **`src/App.jsx`** sets up **routes** (which URL shows which page) and wraps most pages in **`MainLayout`** (shared nav + main area + footer).

So: **main → App → layout → page → sections/components.**

---

## Folder and file structure

```
app/
├── index.html              # Browser entry; links to main.jsx
├── public/                 # Static files copied as-is to the site root
│   ├── projects/
│   │   └── projects.json   # Project cards data (fetched at runtime)
│   └── favicon.svg
├── package.json            # Dependencies and npm scripts
├── vite.config.js          # Vite + Tailwind plugin
└── src/
    ├── main.jsx            # Renders <App /> into #root
    ├── App.jsx             # Router: which path → which page
    ├── MainLayout.jsx      # Shell: NavBar, <Outlet />, Footer + MainLayoutContainer helper
    ├── index.css           # Tailwind import, design tokens, global tweaks
    ├── styles/
    │   └── design-tokens.css   # Color + font tokens (used by Tailwind theme)
    ├── pages/              # One file per “screen” (route target)
    │   ├── LandingPage.jsx
    │   └── ContactPage.jsx
    ├── components/
    │   ├── UI/             # Site-wide pieces
    │   │   ├── NavBar.jsx
    │   │   └── Footer.jsx
    │   └── LandingPage/    # Sections used only on the home page
    │       ├── HeroSection.jsx
    │       ├── BioSection.jsx
    │       ├── SkillsSection.jsx
    │       ├── ProjectsSection.jsx
    │       └── ProjectCard.jsx
    └── mockups/            # Reference HTML/images (not imported by the app)
```

### What each part is for

| Area | Purpose |
|------|--------|
| **`src/pages/`** | Top-level screens tied to URLs in `App.jsx`. Usually **compose** sections; keep them thin. |
| **`src/components/LandingPage/`** | Reusable chunks of the home page (hero, bio, skills, projects). Edit text/data in **constants at the top** of each file where possible. |
| **`src/components/UI/`** | Navigation and footer used on every page inside `MainLayout`. |
| **`MainLayout.jsx`** | Shared frame: nav, scrollable `<main>`, footer. **`<Outlet />`** is where the current page’s content appears. |
| **`src/index.css` + `design-tokens.css`** | Global CSS and Tailwind theme (colors like `bg-surface-container-low`, fonts like `font-label`). |
| **`public/projects/projects.json`** | List of projects for the projects section. **JSON cannot have `//` comments**—see `_comment` and `_schemaExample` inside that file. |

---

## React in one minute

- **Components** are functions that **return** UI (HTML-like **JSX**).
- **`className="..."`** is like HTML `class`, but in JSX it’s called `className`.
- **`import X from './path'`** brings in another component or data.
- **`{variable}`** in JSX inserts a JavaScript value.

Routing: **`App.jsx`** maps paths such as `/` and `/contact` to page components. Those pages render **inside** `MainLayout`, so you usually **do not** wrap each page in the layout again.

---

## Tailwind in one minute

Tailwind uses **small class names** in `className` instead of writing separate CSS files for every rule.

Examples:

- `flex` → display flex  
- `gap-4` → spacing between flex children  
- `text-black` → text color  
- `md:flex-wrap` → apply **flex-wrap** only from the **md** breakpoint and up  

Colors and fonts from the design system use names like `bg-surface-container-low` or `text-on-surface-variant`—they are defined in **`src/styles/design-tokens.css`**.

To learn a class, search the [Tailwind docs](https://tailwindcss.com/docs).

---

## Recommended workflow

### 1. Run the app locally

```bash
cd app
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`). The page updates as you save files (**hot reload**).

### 2. Change content before architecture

- **Home page sections:** edit **`src/components/LandingPage/*.jsx`** (constants at the top of `HeroSection`, `BioSection`, etc.).
- **Projects:** edit **`public/projects/projects.json`** (see `_schemaExample` and the `projects` array).
- **Nav links / brand:** **`src/components/UI/NavBar.jsx`**.
- **Footer social links:** **`src/components/UI/Footer.jsx`**.

### 3. Add a new page (route)

1. Create **`src/pages/YourPage.jsx`**.
2. Add a **`<Route>`** in **`src/App.jsx`** inside the existing `MainLayout` parent, e.g. `path="/your"` `element={<YourPage />}`.
3. Import `YourPage` at the top of `App.jsx`.

### 4. Add a new section to the home page

1. Create **`src/components/LandingPage/YourSection.jsx`** (or reuse patterns from `BioSection`).
2. Import and render it in **`src/pages/LandingPage.jsx`** in the order you want.

### 5. Build for production

```bash
npm run build
npm run preview   # optional: test the production build locally
```

---

## Where to look first (common tasks)

| Task | Start here |
|------|------------|
| Change site title / fonts in HTML | `index.html` |
| Global colors / Tailwind theme | `src/styles/design-tokens.css`, `src/index.css` |
| Layout (nav + footer + main) | `src/MainLayout.jsx` |
| URLs and routes | `src/App.jsx` |
| Home page order & sections | `src/pages/LandingPage.jsx` |
| Project cards JSON | `public/projects/projects.json` |

---

## Reference mockup

The **`src/mockups/mockup1/`** folder holds the original static HTML and screenshot. Use it as a visual reference when adjusting Tailwind classes in components.
