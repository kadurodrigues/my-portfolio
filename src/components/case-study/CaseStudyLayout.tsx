import { NavLink, Outlet } from 'react-router-dom'
import PageContainer from '../layout/PageContainer'

const caseStudies = [
  { to: '/case-studies/design-system', label: 'Design System' },
  { to: '/case-studies/micro-frontends', label: 'Micro-Frontends' },
]

export default function CaseStudyLayout() {
  return (
    <PageContainer>
      <div className="grid gap-10 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-14">
        <aside className="case-nav hidden md:block">
          <p className="case-nav__label">Case studies</p>
          <ol className="case-nav__list">
            {caseStudies.map(({ to, label }, i) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `case-nav__link${isActive ? ' is-active' : ''}`
                  }
                >
                  <span className="case-nav__link-index">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="case-nav__link-title">{label}</span>
                </NavLink>
              </li>
            ))}
          </ol>
        </aside>
        <div className="min-w-0">
          <nav
            className="case-nav-mobile md:hidden"
            aria-label="Case studies"
          >
            {caseStudies.map(({ to, label }, i) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `case-nav-mobile__link${isActive ? ' is-active' : ''}`
                }
              >
                <span className="case-nav-mobile__index">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="case-nav-mobile__title">{label}</span>
              </NavLink>
            ))}
          </nav>
          <Outlet />
        </div>
      </div>
    </PageContainer>
  )
}
