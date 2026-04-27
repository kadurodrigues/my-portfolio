import type { CSSProperties, ReactNode } from 'react'

interface CaseStudyHeroProps {
  title: string
  description: ReactNode
  role: string
  stack: string[]
}

const enterIndex = (i: number): CSSProperties =>
  ({ ['--i' as string]: i } as CSSProperties)

export default function CaseStudyHero({
  title,
  description,
  role,
  stack,
}: CaseStudyHeroProps) {
  return (
    <header className="case-hero">
      <p className="meta-line" data-enter style={enterIndex(0)}>
        Case study
      </p>
      <h1 className="display-lg case-hero__title" data-enter style={enterIndex(1)}>
        {title}
      </h1>
      <p className="case-hero__standfirst" data-enter style={enterIndex(2)}>
        {description}
      </p>
      <dl className="case-hero__meta" data-enter style={enterIndex(3)}>
        <dt>Role</dt>
        <dd>{role}</dd>
        <dt>Stack</dt>
        <dd>
          <ul className="case-hero__stack">
            {stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </dd>
      </dl>
    </header>
  )
}
