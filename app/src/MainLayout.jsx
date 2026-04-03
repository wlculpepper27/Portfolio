import { Outlet } from 'react-router-dom'
import Footer from './components/UI/Footer.jsx'
import NavBar from './components/UI/NavBar.jsx'

/**
 * Inner column matching mockup sections (hero, skills, projects inner):
 * max-w-7xl mx-auto px-8 — same horizontal padding and max width as mockup1/landing-page.html
 */
export function MainLayoutContainer({ children, className = '' }) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-8 ${className}`.trim()}>{children}</div>
  )
}

/**
 * Page shell matching mockup <body> + <main>: full-width, min-height, typography, light/dark base.
 * Use <Outlet /> for nested routes. Wrap section content with MainLayoutContainer when you need
 * the standard content column; use full-bleed sections (e.g. bg-black) without Container.
 */
export default function MainLayout() {
  return (
    <div className="font-body flex min-h-svh w-full flex-1 flex-col bg-white text-black antialiased dark:bg-black dark:text-white">
      <NavBar />
      <main className="flex min-h-0 w-full min-w-0 flex-1 flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
