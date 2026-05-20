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
    title: 'Senior Frontend Engineer',
    company: 'Citibank',
    location: 'Dallas, TX',
    period: '2025 — Present',
    current: true,
    highlights: [
      'Working on the redesign of Accounts Master Central (AMC) — Citibank’s record of legal-entity data, consumed by hundreds of downstream systems across the bank.',
      'Migrating a legacy .NET desktop client into an Angular 18 web app. Signals, standalone components, and a much smaller mental model for the team.',
      'Personally converted over 80% of the legacy .NET codebase into TypeScript and Angular components so far.',
      'Splitting the heavier modules into separately-built UI packages so other Citi apps can consume only the parts they need, rather than embedding the whole thing.',
      'Set up the CI/CD on Citi’s internal LightSpeed pipelines for the new app.',
      'Working across four squads to keep contracts and data shapes consistent as each team migrates its slice.',
    ],
  },
  {
    title: 'UI Tech Lead',
    company: 'Citibank',
    location: 'Dublin, Ireland',
    period: '2020 — 2025',
    highlights: [
      'Led the frontend for two internal SaaS products — Workflow Designer and Task Inbox — used by roughly 5,000 people across the bank to model and run business processes. Started on Vue 2, finished on Vue 3.',
      'Built the shared design system both apps were assembled from. Vue, TypeScript, Tailwind, design tokens, Storybook for docs.',
      'Set up the micro-frontend boundaries between the two products and the surrounding internal tools, and wrote the conventions that kept three teams shipping into the same UI without stepping on each other.',
      'Owned the Jenkins pipelines for the UI apps. Weekly release cadence onto the bank’s internal cloud, with one rollback in five years (and I still think about it).',
      'Mentored a handful of junior and mid-level frontend engineers. Pairing, design reviews, the bit before code review where you can actually still change shape.',
      'Wrote some of the Spring Boot endpoints the frontends called when no one else had time, mostly to keep the contract honest.',
      'Internal measurements credited the platform with cutting time-to-decision on the workflows it ran by roughly 30%. The metric the bank cared about; I’m slightly suspicious of how it was measured, but the orders of magnitude were real.',
      'Ran code review for the UI group and held the line on what we’d accept into the design system.',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: 'Equifax Credit Bureau',
    location: 'Dublin, Ireland',
    period: '2017 — 2020',
    highlights: [
      'Worked on the myEquifax consumer portal in Angular 8 — credit reports, freezes, and the customer-facing flows millions of US users hit each month.',
      'Shipped from a small cross-functional squad: designers, BE, FE, QA, all sitting in the same Slack channel.',
      'A round of accessibility and mobile-layout work landed a measured 20% bump in engagement on the screens we touched.',
      'Placed second in the Equifax global hackathon for a credit-management prototype.',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'TalentFour Consulting',
    location: 'São Paulo, Brazil',
    period: '2015 — 2017',
    highlights: [
      'Rebuilt the Banco ABC Brasil internet banking front end on React and Redux.',
      'Shipped the bank’s first React Native mobile app — same product, much smaller team than the original web build.',
      'Built an internal React Native app for tracking consultant hours, synced against the back-office system.',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Inside Midia',
    location: 'São Paulo, Brazil',
    period: '2012 — 2014',
    highlights: [
      'Built the “Além da Beleza” consumer portal for Allergan.',
      'Designed and shipped landing pages and small internal microsites for a handful of pharma clients.',
      'Stack: WordPress, HTML, CSS, Bootstrap, JavaScript, jQuery. The era of getting things to render.',
    ],
  },
]

const enterIndex = (i: number): CSSProperties => ({ ['--i' as string]: i } as CSSProperties)

export default function Experience() {
  return (
    <PageContainer>
      <article className="editorial-stack">
        <header className="about-hero">
          <p className="meta-line" data-enter style={enterIndex(0)}>
            Experience
          </p>
          <h1 className="display-lg" data-enter style={enterIndex(1)}>
            <em className="display-accent">Fourteen years</em> of frontend, across Brazil,
            Ireland, and the United States.
          </h1>
          <p className="display-md display-italic" data-enter style={enterIndex(2)}>
            Currently a Senior Frontend Engineer at Citibank &mdash; Dallas, TX.
          </p>
        </header>

        <ol className="roles">
          {roles.map((role, index) => (
            <li
              key={`${role.company}-${role.period}`}
              className="role"
              aria-labelledby={`role-${index}`}
            >
              {role.current && (
                <p className="meta-line chapter__head role__head">
                  <span className="role__now">Now</span>
                </p>
              )}
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
