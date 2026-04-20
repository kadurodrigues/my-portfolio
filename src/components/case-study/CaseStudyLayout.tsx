import { NavLink, Outlet } from 'react-router-dom'

const caseStudies = [
  { to: '/case-studies/design-system', label: 'Design System' },
  { to: '/case-studies/micro-frontends', label: 'Micro-Frontends' },
]

export default function CaseStudyLayout() {
  return (
    <div className="mx-auto flex w-full max-w-4xl gap-10 px-6 py-16">
      <aside className="hidden w-48 shrink-0 md:block">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Case Studies
        </h2>
        <nav className="flex flex-col gap-1">
          {caseStudies.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm no-underline transition-colors ${
                  isActive
                    ? 'bg-gray-100 font-medium text-gray-900'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <div className="min-w-0 flex-1">
        <Outlet />
      </div>
    </div>
  )
}
