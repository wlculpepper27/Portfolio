import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

// --- Edit these to change the site name and menu links ---
const brand = {
  title: 'WC Xperience',
  homePath: '/',
}

// ADD OR DELETE nav bar options here
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

// Shared look for desktop text links
const desktopLinkClass =
  'border-b-2 border-transparent pb-1 font-[Inter] font-bold uppercase tracking-tight text-gray-400 transition-colors hover:text-white'

/** True if `to` is a same-page anchor like "/#bio". */
function isAnchor(to) {
  return to.startsWith('/#')
}

/** Extract the "#bio" part from "/#bio". */
function anchorId(to) {
  return to.slice(1) // "/#bio" -> "#bio"
}

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  // When the mobile menu is open: lock page scroll + close menu with Escape
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

  // Scroll to the anchor after navigating to "/" (or if already there).
  useEffect(() => {
    if (location.pathname !== '/') return
    if (!location.hash) return

    const id = location.hash.slice(1)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [location.pathname, location.hash])

  // Scroll to top when the pathname changes (but not when only the hash changes).
  useEffect(() => {
    if (location.hash) return
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname, location.hash])

  function closeMenu() {
    setMenuOpen(false)
  }

  /** Handle click on a nav item — either route, anchor, or both. */
  function handleNavClick(e, to) {
    if (!isAnchor(to)) return // let React Router handle normal routes

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
      {/* Top bar (always visible) */}
      <nav className="sticky top-0 z-40 flex w-full shrink-0 items-center justify-between bg-black px-8 py-6">
        <Link to={brand.homePath} className="flex items-center">
          <img
            src="/WCremovebg.png"
            alt="WC Xperience"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop: show links in a row */}
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
            className="bg-white px-6 py-2 font-bold uppercase tracking-tight text-black transition-all hover:bg-gray-200 active:scale-95"
          >
            {contactButton.label}
          </a>
        </div>

        {/* Mobile: burger button */}
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

      {/* Mobile-only drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${menuOpen ? '' : 'pointer-events-none'}`}
      >
        {/* Semi-transparent layer behind the panel */}
        <button
          type="button"
          aria-label="Close menu"
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMenu}
        />

        {/* Column that holds the mobile links */}
        <aside
          className={`absolute top-0 right-0 flex h-full w-full max-w-sm flex-col bg-black shadow-xl transition-transform duration-300 ease-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Top row: X button */}
          <div className="flex justify-end border-b border-gray-800 px-6 py-5">
            <button type="button" aria-label="Close menu" onClick={closeMenu}>
              <span className="material-symbols-outlined text-3xl text-white">
                close
              </span>
            </button>
          </div>

          {/* Same navLinks array as desktop */}
          <div className="flex flex-col gap-1 px-6 pt-4 pb-8">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="border-b border-gray-900 py-4 text-lg font-bold uppercase tracking-tight text-gray-300"
                onClick={(e) => handleNavClick(e, item.to)}
              >
                {item.label}
              </Link>
            ))}

            {/* Contact button */}
            <a
              href={contactButton.to}
              className="mt-6 bg-white px-6 py-3 text-center font-bold uppercase tracking-tight text-black"
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