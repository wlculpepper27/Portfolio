import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// --- Edit these to change the site name and menu links ---
const brand = {
  title: 'Weston Culpepper',
  homePath: '/',
}

// ADD OR DELETE nav bar options here
const navLinks = [
  { label: 'Bio', to: '/#bio' },
  { label: 'Projects', to: '/#projects' },
  { label: 'Skills', to: '/#skills' },
  { label: 'Resume', to: '/#resume' },
]

const contactButton = {
  label: 'Contact',
  to: '/contact',
}

// Shared look for desktop text links (matches the mockup)
const desktopLinkClass =
  'border-b-2 border-transparent pb-1 font-[Inter] font-bold uppercase tracking-tight text-gray-500 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white'

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

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

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <>
      {/* Top bar (always visible) */}
      <nav className="sticky top-0 z-40 flex w-full shrink-0 items-center justify-between bg-white px-8 py-6 dark:bg-black">
        <Link
          to={brand.homePath}
          className="text-2xl font-black tracking-tighter text-black dark:text-white"
        >
          {brand.title}
        </Link>

        {/* Desktop: show links in a row */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link key={item.label} to={item.to} className={desktopLinkClass}>
              {item.label}
            </Link>
          ))}
          <Link
            to={contactButton.to}
            className="bg-black px-6 py-2 font-bold uppercase tracking-tight text-white transition-all hover:bg-gray-800 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            {contactButton.label}
          </Link>
        </div>

        {/* Mobile: burger button */}
        <button
          type="button"
          className="md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="material-symbols-outlined text-3xl text-black dark:text-white">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {/*
        Mobile-only drawer (hidden on md+ screens).
        When menuOpen is false: overlay ignores clicks; panel is slid off-screen (translate-x-full).
        When menuOpen is true: overlay fades in; panel slides in from the right (translate-x-0).
      */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${menuOpen ? '' : 'pointer-events-none'}`}
      >
        {/* Semi-transparent layer behind the panel — tap anywhere here to dismiss the menu */}
        <button
          type="button"
          aria-label="Close menu"
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMenu}
        />

        {/* White column that holds the mobile links; slides horizontally with CSS transition-transform */}
        <aside
          className={`absolute top-0 right-0 flex h-full w-full max-w-sm flex-col bg-white shadow-xl transition-transform duration-300 ease-out dark:bg-black ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Top row: X button (same as closing — some users look for an explicit close control) */}
          <div className="flex justify-end border-b border-gray-200 px-6 py-5 dark:border-gray-800">
            <button type="button" aria-label="Close menu" onClick={closeMenu}>
              <span className="material-symbols-outlined text-3xl text-black dark:text-white">
                close
              </span>
            </button>
          </div>

          {/* Same navLinks array as desktop — .map() renders one Link per item */}
          <div className="flex flex-col gap-1 px-6 pt-4 pb-8">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="border-b border-gray-100 py-4 text-lg font-bold uppercase tracking-tight text-gray-600 dark:border-gray-900 dark:text-gray-300"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}

            {/* Contact is separate from navLinks so it can look like a button (matches desktop) */}
            <Link
              to={contactButton.to}
              className="mt-6 bg-black px-6 py-3 text-center font-bold uppercase tracking-tight text-white dark:bg-white dark:text-black"
              onClick={closeMenu}
            >
              {contactButton.label}
            </Link>
          </div>
        </aside>
      </div>
    </>
  )
}
