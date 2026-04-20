import { Link } from 'react-router-dom'
import PageContainer from '../components/layout/PageContainer'

const techStack = [
  'JavaScript',
  'TypeScript',
  'Node.js',
  'HTML',
  'CSS',
  'React',
  'Next.js',
  'Vue',
  'Angular',
  'Vite',
  'Tailwind CSS',
  'Sass',
  'Material UI',
  'Redux',
  'Vuex',
  'Pinia',
  'RxJS',
  'Vitest',
  'Jest',
  'Cypress',
  'Playwright',
  'Testing Library',
  'Jenkins',
  'GitHub Actions',
  'SQL',
  'PostgreSQL',
  'MongoDB',
  'REST API',
  'Axios',
  'AWS',
  'Micro-frontend',
]

const caseStudies = [
  {
    eyebrow: 'design system',
    title: 'Building a scalable component library across product teams',
    to: '/case-studies/design-system',
  },
  {
    eyebrow: 'micro-frontends',
    title: 'Enabling autonomous teams with a federated frontend architecture',
    to: '/case-studies/micro-frontends',
  },
]

const heroPhoto = '/images/profile.png'

export default function Home() {
  return (
    <PageContainer>
      <div className="page-stack">
        <section className="grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-12">
          <div className="content-stack">
            <p className="eyebrow">Hi,</p>
            <h1 className="hero-title">
              I&apos;m Carlos Rodrigues
            </h1>
            <p className="text-xl font-medium text-gray-500">
              Senior Frontend Engineer building scalable UI systems.
            </p>
            <p className="lead-text">
              I help teams build <span className="accent-text">scalable frontend products</span>, design systems,
              and clean architecture that make shipping faster and collaboration easier. Over the last
              14+ years, I&apos;ve done this across Brazil <span aria-hidden="true">🇧🇷</span>, Ireland <span aria-hidden="true">🇮🇪</span>, and the US <span aria-hidden="true">🇺🇸</span>.
            </p>
          </div>
          <figure className="mx-auto w-full max-w-sm md:mx-0 md:justify-self-end">
            <img
              src={heroPhoto}
              alt="Portrait of Carlos Rodrigues"
              className="aspect-[2/3] w-full rounded-2xl object-cover object-top shadow-[0_20px_45px_-25px_rgba(17,24,39,0.45)]"
              loading="eager"
            />
            <figcaption className="mt-3 text-center text-xs text-gray-400 md:text-right">
              Howth, Ireland
            </figcaption>
          </figure>
        </section>

        <section className="content-stack">
          <h2 className="eyebrow">Work</h2>
          <ul className="flex flex-col">
            {caseStudies.map((item, index) => {
              const isLast = index === caseStudies.length - 1
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={`group flex items-baseline justify-between gap-6 border-t border-gray-200 py-6 no-underline transition-colors duration-200 hover:border-gray-300 ${
                      isLast ? 'border-b' : ''
                    }`}
                  >
                    <div className="flex flex-col gap-2">
                      <span className="meta-text uppercase tracking-[0.1em]">
                        {item.eyebrow}
                      </span>
                      <span className="section-title transition-colors duration-200 group-hover:text-[rgb(var(--color-accent))]">
                        {item.title}
                      </span>
                    </div>
                    <span
                      aria-hidden="true"
                      className="inline-block shrink-0 text-xl text-gray-400 transition-all duration-200 group-hover:translate-x-1 group-hover:text-[rgb(var(--color-accent))]"
                    >
                      →
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>

        <section className="content-stack">
          <h2 className="eyebrow">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-gray-200 px-4 py-1.5 text-sm text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>
    </PageContainer>
  )
}
