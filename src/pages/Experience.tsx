import type { CSSProperties } from 'react'
import PageContainer from '../components/layout/PageContainer'

type Role = {
  title: string
  company: string
  location: string
  period: string
  current?: boolean
  highlights: string[]
}

const roles: Role[] = [
  {
    title: 'Frontend Engineer',
    company: 'Citibank',
    location: 'Dallas, TX',
    period: '2025 — Present',
    current: true,
    highlights: [
      'Leading the modernization of Accounts Master Central (AMC), re-creating a legacy .NET desktop product as an Angular 18 web application with signals, computed values, and standalone components.',
      'Converted more than 80% of legacy .NET functionality into modular TypeScript components, improving scalability and long-term maintainability.',
      'Introduced a micro-frontend structure and CI/CD automation across squads, enabling reliable integration and faster enterprise delivery.',
    ],
  },
  {
    title: 'Frontend Engineer',
    company: 'Citibank',
    location: 'Dublin, Ireland',
    period: '2020 — 2025',
    highlights: [
      'Led development of Workflow Designer and Task Inbox, high-impact SaaS tools used by 5,000+ users to automate business processes.',
      'Created a custom Vue + TypeScript design system and guided micro-frontend architecture decisions to keep teams aligned and delivery consistent.',
      'Improved decision-making speed by 30% through workflow streamlining, while mentoring engineers and maintaining high code-quality standards.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Equifax Credit Bureau',
    location: 'Dublin, Ireland',
    period: '2017 — 2020',
    highlights: [
      'Built customer-facing features for myEquifax using Angular, helping millions of users access credit reports and manage freezes securely.',
      'Contributed to an internal Angular design system adopted by 500+ developers, increasing UI consistency and development speed.',
      'Improved engagement and UX quality with accessibility and responsive design improvements, and earned 2nd place in the Equifax Global Hackathon.',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'TalentFour Consulting',
    location: 'São Paulo, Brazil',
    period: '2015 — 2017',
    highlights: [
      'Built the new Banco ABC Brasil internet-banking experience with React and Redux, improving usability and accessibility for customers.',
      'Developed React Native mobile products, including a widely adopted banking app that helped increase mobile transaction usage.',
      'Delivered a cross-platform internal time-tracking application with real-time synchronization to simplify reporting and payroll workflows.',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Inside Midia',
    location: 'São Paulo, Brazil',
    period: '2012 — 2014',
    highlights: [
      'Delivered the “Além da Beleza” portal for Allergan Pharmaceutical Products, increasing brand visibility and audience engagement.',
      'Designed landing pages for pharmaceutical clients, improving internal communications and employee satisfaction.',
      'Worked with WordPress, HTML, CSS, Bootstrap, JavaScript, and jQuery to deliver marketing and communication experiences.',
    ],
  },
]

const enterIndex = (i: number): CSSProperties => ({ ['--i' as string]: i } as CSSProperties)

const formatIndex = (i: number) => String(i + 1).padStart(2, '0')

export default function Experience() {
  return (
    <PageContainer>
      <article className="editorial-stack">
        <header className="about-hero">
          <p className="meta-line" data-enter style={enterIndex(0)}>
            Experience
          </p>
          <h1 className="display-xl" data-enter style={enterIndex(1)}>
            A <em className="display-accent">14+ year journey</em> across Brazil,
            Ireland, and the US building scalable frontend platforms.
          </h1>
          <p className="display-md display-italic" data-enter style={enterIndex(2)}>
            Currently a Frontend Engineer at Citibank &mdash; Dallas, TX.
          </p>
        </header>

        <ol className="roles">
          {roles.map((role, index) => (
            <li
              key={`${role.company}-${role.period}`}
              className="role"
              aria-labelledby={`role-${index}`}
            >
              <p className="meta-line chapter__head role__head">
                <span className="chapter__index">{formatIndex(index)}</span>
                {role.current && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="role__now">Now</span>
                  </>
                )}
              </p>
              <div className="role__body">
                <div className="role__meta">
                  <span className="role__period">{role.period}</span>
                  <span className="role__location">{role.location}</span>
                </div>
                <div className="role__content">
                  <h2 id={`role-${index}`} className="display-md">
                    {role.title}
                  </h2>
                  <p className="role__company">{role.company}</p>
                  <ul className="role__highlights">
                    {role.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </article>
    </PageContainer>
  )
}
