import PageContainer from '../components/layout/PageContainer'

interface Role {
  title: string
  company: string
  location: string
  period: string
  current?: boolean
  bullets: string[]
}

const roles: Role[] = [
  {
    title: 'Frontend Engineer',
    company: 'Citibank',
    location: 'Dallas, United States',
    period: 'Jun 2025 — Present',
    current: true,
    bullets: [
      'Leading the modernization of Accounts Master Central (AMC), re-creating a legacy .NET desktop product as an Angular 18 web application with signals, computed values, and standalone components.',
      'Converted more than 80% of legacy .NET functionality into modular TypeScript components, improving scalability and long-term maintainability.',
      'Introduced a micro-frontend structure and CI/CD automation across squads, enabling reliable integration and faster enterprise delivery.',
    ],
  },
  {
    title: 'Frontend Engineer',
    company: 'Citibank',
    location: 'Dublin, Ireland',
    period: 'Apr 2020 — Mar 2025',
    bullets: [
      'Led development of Workflow Designer and Task Inbox, high-impact SaaS tools used by 5,000+ users to automate business processes.',
      'Created a custom Vue + TypeScript design system and guided micro-frontend architecture decisions to keep teams aligned and delivery consistent.',
      'Improved decision-making speed by 30% through workflow streamlining, while mentoring engineers and maintaining high code quality standards.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Equifax Credit Bureau',
    location: 'Dublin, Ireland',
    period: 'Nov 2017 — Apr 2020',
    bullets: [
      'Built customer-facing features for myEquifax using Angular, helping millions of users access credit reports and manage freezes securely.',
      'Contributed to an internal Angular design system adopted by 500+ developers, increasing UI consistency and development speed.',
      'Improved engagement and UX quality with accessibility and responsive design improvements, and earned 2nd place in the Equifax Global Hackathon.',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'TalentFour Consulting',
    location: 'Sao Paulo, Brazil',
    period: 'Mar 2015 — Jul 2017',
    bullets: [
      'Built the new Banco ABC Brasil internet banking experience with React and Redux, improving usability and accessibility for customers.',
      'Developed React Native mobile products, including a widely adopted banking app that helped increase mobile transaction usage.',
      'Delivered a cross-platform internal time-tracking application with real-time synchronization to simplify reporting and payroll workflows.',
    ],
  },
  {
    title: 'Front-End Developer',
    company: 'Inside Midia',
    location: 'Sao Paulo, Brazil',
    period: 'May 2012 — Dec 2014',
    bullets: [
      'Delivered the "Alem da Beleza" portal for Allergan Pharmaceutical Products, increasing brand visibility and audience engagement.',
      'Designed landing pages for pharmaceutical clients, improving internal communications and employee satisfaction.',
      'Worked with WordPress, HTML, CSS, Bootstrap, JavaScript, and jQuery to deliver marketing and communication experiences.',
    ],
  },
]

export default function Experience() {
  return (
    <PageContainer>
      <div className="page-stack">
        <section className="content-stack">
          <p className="eyebrow">Experience</p>
          <h1 className="page-title !max-w-[24ch]">
            A <span className="accent-text">14+ year journey</span> across Brazil, Ireland, and the US building scalable frontend platforms.
          </h1>
          <p className="meta-text">Currently a Frontend Engineer at Citibank — Dallas, TX.</p>
        </section>

        <ol className="relative ml-2 border-l border-gray-200">
          {roles.map((role, index) => {
            const isLast = index === roles.length - 1
            return (
              <li
                key={role.period}
                className={`relative pl-8 ${isLast ? '' : 'pb-12'}`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute -left-[7px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-white bg-white ring-1 ${
                    role.current
                      ? 'ring-[rgb(var(--color-accent))]'
                      : 'ring-gray-300'
                  }`}
                >
                  {role.current ? (
                    <>
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[rgb(var(--color-accent)/0.4)]" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[rgb(var(--color-accent))]" />
                    </>
                  ) : (
                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-gray-300" />
                  )}
                </span>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="meta-text uppercase tracking-[0.1em] text-gray-500">
                    {role.period}
                  </span>
                  {role.current && (
                    <span className="accent-pill rounded-full px-2.5 py-0.5 text-xs font-medium">
                      Now
                    </span>
                  )}
                </div>
                <h2 className="entry-title mt-2">{role.title}</h2>
                <p className="meta-text mt-1 text-gray-500">
                  {role.company} · {role.location}
                </p>
                <ul className="mt-4 space-y-3">
                  {role.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </li>
            )
          })}
        </ol>
      </div>
    </PageContainer>
  )
}
