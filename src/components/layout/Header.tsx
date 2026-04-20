import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/case-studies', label: 'Case Studies' },
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

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev)
  }

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-6 px-6 py-6">
        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl font-semibold tracking-tight text-gray-900 no-underline"
        >
          CR
        </Link>
        <div className="flex items-center gap-4 sm:gap-8">
          <nav className="hidden items-center gap-8 sm:flex">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `group relative text-base no-underline transition-colors ${
                    isActive
                      ? 'text-gray-900'
                      : 'text-gray-500 hover:text-gray-900'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{label}</span>
                    <span
                      aria-hidden="true"
                      className={`absolute -bottom-1 left-0 h-px w-full origin-left bg-[rgb(var(--color-accent))] transition-transform duration-200 ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>
          <button
            type="button"
            onClick={toggleTheme}
            title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="rounded-full border border-gray-200 p-2 text-base leading-none text-gray-500 transition-colors hover:text-gray-900"
          >
            {isDarkMode ? (
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current">
                <circle cx="12" cy="12" r="4" strokeWidth="1.8" />
                <path strokeWidth="1.8" strokeLinecap="round" d="M12 2.5v2.4M12 19.1v2.4M21.5 12h-2.4M4.9 12H2.5M18.7 5.3l-1.7 1.7M7 17l-1.7 1.7M18.7 18.7 17 17M7 7 5.3 5.3" />
              </svg>
            ) : (
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M20.4 15.3a8.9 8.9 0 0 1-11.7-11 9 9 0 1 0 11.7 11z" />
              </svg>
            )}
          </button>
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            className="rounded-full border border-gray-200 p-2 text-base leading-none text-gray-500 transition-colors hover:text-gray-900 sm:hidden"
          >
            {isMenuOpen ? (
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current">
                <path strokeWidth="1.8" strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current">
                <path strokeWidth="1.8" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      <nav
        id="mobile-nav"
        className={`absolute inset-x-0 top-full sm:hidden ${isMenuOpen ? 'block' : 'hidden'} border-y border-gray-200 bg-white/90 shadow-lg backdrop-blur`}
      >
        <ul className="mx-auto flex max-w-4xl flex-col gap-1 px-6 py-4">
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block rounded-md border-l-2 px-3 py-2 text-base no-underline transition-colors ${
                    isActive
                      ? 'border-[rgb(var(--color-accent))] bg-[rgb(var(--color-accent)/0.1)] font-medium text-[rgb(var(--color-accent))]'
                      : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
