import { Outlet, useLocation } from 'react-router-dom'
import Footer from './components/UI/Footer.jsx'
import NavBar from './components/UI/NavBar.jsx'

export default function MainLayout() {
  const location = useLocation()
  const hideFooter = location.pathname === '/resume'

  return (
    <div className="font-body flex h-svh w-full flex-col bg-black text-white antialiased">
      <NavBar />
      <main className="flex min-h-0 w-full min-w-0 flex-1 flex-col">
        <Outlet />
      </main>
      {!hideFooter && <Footer />}
    </div>
  )
}