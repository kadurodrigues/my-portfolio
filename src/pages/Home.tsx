import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import PageContainer from '../components/layout/PageContainer'

const heroPhoto = '/images/profile.png'

type CaseStudy = {
  eyebrow: string
  title: string
  meta: string
  to: string
}

const caseStudies: CaseStudy[] = [
  {
    eyebrow: 'Design system',
    title: 'A scalable component library across product teams',
    meta: '2021–24 · Citibank · Web components, tokens',
    to: '/case-studies/design-system',
  },
  {
    eyebrow: 'Micro-frontends',
    title: 'Enabling autonomous teams with a federated architecture',
    meta: '2022–24 · Citibank · Module Federation, runtime',
    to: '/case-studies/micro-frontends',
  },
]

type StackGroup = {
  label: string
  items: string[]
}

const stackGroups: StackGroup[] = [
  { label: 'Core', items: ['JavaScript', 'TypeScript', 'Node.js', 'HTML', 'CSS'] },
  { label: 'Frameworks', items: ['React', 'Next.js', 'Vue', 'Angular', 'Vite', 'RxJS'] },
  { label: 'Styling', items: ['Tailwind CSS', 'Sass', 'Material UI'] },
  { label: 'State', items: ['Redux', 'Vuex', 'Pinia'] },
  { label: 'Testing', items: ['Vitest', 'Jest', 'Cypress', 'Playwright', 'Testing Library'] },
  { label: 'Data', items: ['SQL', 'PostgreSQL', 'MongoDB', 'REST', 'Axios'] },
  { label: 'Infra', items: ['AWS', 'Jenkins', 'GitHub Actions', 'Micro-frontends'] },
]

const enterIndex = (i: number): CSSProperties => ({ ['--i' as string]: i } as CSSProperties)

export default function Home() {
  return (
    <PageContainer>
      <div className="editorial-stack">
        <header className="home-hero">
          <div className="home-hero__text">
            <p className="meta-line home-hero__meta" data-enter style={enterIndex(0)}>
              Dallas, TX · 2026
            </p>
            <h1 className="display-xl" data-enter style={enterIndex(1)}>
              Carlos Rodrigues.
            </h1>
            <p className="display-md display-italic" data-enter style={enterIndex(2)}>
              Senior frontend engineer building{' '}
              <span className="display-accent">scalable UI systems</span>.
            </p>
            <p className="lede" data-enter style={enterIndex(3)}>
              For fourteen years &mdash; in São Paulo, Dublin, and Dallas &mdash; I&apos;ve
              helped teams ship scalable frontend products, design systems, and clean
              architecture that make collaboration easier.
            </p>
          </div>
          <figure className="home-hero__figure" data-enter style={enterIndex(2)}>
            <img
              src={heroPhoto}
              alt="Portrait of Carlos Rodrigues, Howth, Ireland, 2023"
              className="home-hero__image"
              loading="eager"
            />
            <figcaption className="home-hero__caption">Howth · 2023</figcaption>
          </figure>
        </header>

        <section aria-labelledby="work-heading">
          <p
            id="work-heading"
            className="meta-line home-section-head"
            data-enter
            style={enterIndex(4)}
          >
            Selected work
          </p>
          <ol className="work-list" data-enter style={enterIndex(5)}>
            {caseStudies.map((item, index) => (
              <li key={item.to} className="work-item">
                <Link to={item.to} className="work-link">
                  <span className="work-index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="work-body">
                    <span className="work-eyebrow">{item.eyebrow}</span>
                    <span className="display-md work-title">{item.title}</span>
                    <span className="work-meta">{item.meta}</span>
                  </span>
                  <span className="work-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="stack-heading">
          <p
            id="stack-heading"
            className="meta-line home-section-head"
            data-enter
            style={enterIndex(6)}
          >
            Stack
          </p>
          <dl className="kit" data-enter style={enterIndex(7)}>
            {stackGroups.map((group) => (
              <div key={group.label} className="kit-row">
                <dt className="kit-label">{group.label}</dt>
                <dd>
                  <ul className="kit-items" aria-label={`${group.label}: ${group.items.join(', ')}`}>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </PageContainer>
  )
}
