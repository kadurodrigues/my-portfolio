import type { ReactNode } from 'react'

interface CaseStudyHeroProps {
  title: string
  description: ReactNode
  role: string
  stack: string[]
}

export default function CaseStudyHero({ title, description, role, stack }: CaseStudyHeroProps) {
  return (
    <section className="mb-12 content-stack">
      <p className="eyebrow">Case Study</p>
      <h1 className="page-title !max-w-[24ch]">{title}</h1>
      <p className="lead-text">{description}</p>
      <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:gap-12">
        <div>
          <span className="meta-text uppercase tracking-[0.1em] text-gray-400">Role</span>
          <p className="mt-1 text-gray-700">{role}</p>
        </div>
        <div>
          <span className="meta-text uppercase tracking-[0.1em] text-gray-400">Stack</span>
          <div className="mt-1 flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
