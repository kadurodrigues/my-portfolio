import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/case-studies', label: 'Case studies' },
  { to: '/articles', label: 'Articles' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = window.localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return storedTheme ? storedTheme === 'dark' : prefersDark
  })
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
    window.localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  useEffect(() => {
    if (!isMenuOpen) return
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isMenuOpen])

  const toggleTheme = () => setIsDarkMode((prev) => !prev)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" onClick={closeMenu} className="site-logo" aria-label="Home">
          CR
        </Link>
        <div className="site-header__actions">
          <nav className="site-nav" aria-label="Primary">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `site-nav__link${isActive ? ' is-active' : ''}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="theme-toggle"
          >
            {isDarkMode ? (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="theme-toggle__svg fill-none stroke-current"
              >
                <circle cx="12" cy="12" r="4" strokeWidth="1.6" />
                <path
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  d="M12 2.5v2.4M12 19.1v2.4M21.5 12h-2.4M4.9 12H2.5M18.7 5.3l-1.7 1.7M7 17l-1.7 1.7M18.7 18.7 17 17M7 7 5.3 5.3"
                />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="theme-toggle__svg fill-current"
              >
                <path d="M20.4 15.3a8.9 8.9 0 0 1-11.7-11 9 9 0 1 0 11.7 11z" />
              </svg>
            )}
          </button>
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            className="menu-toggle"
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav
          id="mobile-nav"
          className="site-nav-mobile"
          aria-label="Primary mobile"
        >
          <ul>
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `site-nav-mobile__link${isActive ? ' is-active' : ''}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
