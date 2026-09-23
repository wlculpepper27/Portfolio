import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const brand = {
  title: 'WC Xperience',
  homePath: '/',
}

const navLinks = [
  { label: 'Bio', to: '/#bio' },
  { label: 'Skills', to: '/#skills' },
  { label: 'Projects', to: '/#projects' },
  { label: 'Resume', to: '/resume' },
]

const contactButton = {
  label: 'Contact',
  to: 'mailto:westonculpepper27@gmail.com',
}

const desktopLinkClass =
  'border-b-2 border-transparent pb-1 font-[Inter] font-bold uppercase tracking-tight text-accent transition-colors hover:border-accent hover:text-accent-hover'

function isAnchor(to) {
  return to.startsWith('/#')
}

function anchorId(to) {
  return to.slice(1)
}

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (!menuOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    function onEscape(e) {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onEscape)
    }
  }, [menuOpen])

  useEffect(() => {
    if (location.pathname !== '/') return
    if (!location.hash) return
    const id = location.hash.slice(1)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (location.hash) return
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname, location.hash])

  function closeMenu() {
    setMenuOpen(false)
  }

  function handleNavClick(e, to) {
    if (!isAnchor(to)) return
    e.preventDefault()
    closeMenu()
    const hash = anchorId(to)
    if (location.pathname !== '/') {
      navigate('/' + hash)
    } else {
      const el = document.getElementById(hash.slice(1))
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.replaceState(null, '', hash)
    }
  }

  return (
    <>
      <nav className="sticky top-0 z-40 flex w-full shrink-0 items-center justify-between bg-black px-8 py-6">
        <Link to={brand.homePath} className="flex items-center">
          <img
            src="/WCremovebg.png"
            alt="WC Xperience"
            className="h-10 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={desktopLinkClass}
              onClick={(e) => handleNavClick(e, item.to)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={contactButton.to}
            className="bg-accent px-6 py-2 font-bold uppercase tracking-tight text-white transition-all hover:bg-accent-hover active:scale-95"
          >
            {contactButton.label}
          </a>
        </div>

        <button
          type="button"
          className="md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="material-symbols-outlined text-3xl text-white">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-50 md:hidden ${menuOpen ? '' : 'pointer-events-none'}`}
      >
        <button
          type="button"
          aria-label="Close menu"
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMenu}
        />

        <aside
          className={`absolute top-0 right-0 flex h-full w-full max-w-sm flex-col bg-black shadow-xl transition-transform duration-300 ease-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-end border-b border-gray-800 px-6 py-5">
            <button type="button" aria-label="Close menu" onClick={closeMenu}>
              <span className="material-symbols-outlined text-3xl text-white">
                close
              </span>
            </button>
          </div>

          <div className="flex flex-col gap-1 px-6 pt-4 pb-8">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="border-b border-gray-900 py-4 text-lg font-bold uppercase tracking-tight text-accent hover:text-accent-hover"
                onClick={(e) => handleNavClick(e, item.to)}
              >
                {item.label}
              </Link>
            ))}

            <a
              href={contactButton.to}
              className="mt-6 bg-accent px-6 py-3 text-center font-bold uppercase tracking-tight text-white hover:bg-accent-hover"
              onClick={closeMenu}
            >
              {contactButton.label}
            </a>
          </div>
        </aside>
      </div>
    </>
  )
}