import { Outlet, useLocation } from 'react-router-dom'
import Footer from './components/UI/Footer.jsx'
import NavBar from './components/UI/NavBar.jsx'

export function MainLayoutContainer({ children, className = '' }) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-8 ${className}`.trim()}>{children}</div>
  )
}

export default function MainLayout() {
  const location = useLocation()
  const hideFooter = location.pathname === '/resume'

  return (
    <div className="font-body flex h-svh w-full flex-col bg-white text-black antialiased dark:bg-black dark:text-white">
      <NavBar />
      <main className="flex min-h-0 w-full min-w-0 flex-1 flex-col">
        <Outlet />
      </main>
      {!hideFooter && <Footer />}
    </div>
  )
}