import type { CSSProperties, ReactNode } from 'react'
import PageContainer from '../components/layout/PageContainer'

type Chapter = {
  index: string
  title: string
  body: ReactNode
}

const chapters: Chapter[] = [
  {
    index: '01',
    title: 'Brazil',
    body: (
      <>
        <p>
          I started my career in <strong>Brazil</strong> as a web developer at a digital
          agency, where I was first exposed to the world of frontend development. Early on,
          I was deeply focused on crafting pixel-perfect interfaces using HTML, CSS, and
          jQuery. That foundation helped me develop strong attention to detail and a solid
          understanding of how users interact with interfaces. Over time, I expanded into
          JavaScript frameworks like AngularJS, Ionic, and PhoneGap &mdash; building
          hybrid applications and gaining experience with more complex frontend
          architectures.
        </p>
      </>
    ),
  },
  {
    index: '02',
    title: 'Ireland',
    body: (
      <>
        <p>
          In 2017, I made a decision that would shape both my career and personal growth:
          I moved to <strong>Ireland</strong> to improve my English and develop my
          communication skills. What started as a language goal quickly turned into a
          professional opportunity when I joined <strong>Equifax</strong> as a Software
          Developer. Working in a multicultural environment pushed me to adapt quickly;
          this became my real &ldquo;English class&rdquo;, where I learned how to
          communicate effectively, collaborate across cultures, and operate in a global
          engineering environment.
        </p>
        <p>
          In 2020, I joined <strong>Citibank</strong> as a <strong>UI Tech Lead</strong>,
          marking my first experience leading a frontend team. In this role, I worked
          closely with developers, product managers, and UX teams to build internal
          platforms such as a <strong>Workflow Designer</strong> for automating business
          processes and a <strong>Task Inbox</strong> for managing operational workflows.
          Alongside these applications, I led the development of a{' '}
          <strong>UI Design System</strong> that became the foundation for consistency,
          scalability, and reuse across our products.
        </p>
        <p>
          This experience strengthened not only my technical skills in frontend
          architecture and system design but also my ability to lead, mentor, and
          collaborate effectively within a team. It reinforced the importance of building
          solutions that are not just technically sound, but also maintainable and aligned
          with real business needs.
        </p>
      </>
    ),
  },
  {
    index: '03',
    title: 'United States',
    body: (
      <>
        <p>
          In 2024, I took another major step in my journey by leaving{' '}
          <strong>Ireland</strong> after being approved for the <strong>EB2-NIW</strong>{' '}
          visa &mdash; a U.S. green card category for professionals whose work is
          considered to have national-interest impact. In early 2025, I moved to the{' '}
          <strong>United States</strong> and started a new chapter of my career in{' '}
          <strong>Dallas, Texas</strong>.
        </p>
        <p>
          Today, I bring together strong frontend expertise with a global perspective
          &mdash; combining technical depth, adaptability, and a product-oriented mindset
          to build scalable systems and contribute effectively to diverse teams.
        </p>
      </>
    ),
  },
  {
    index: '04',
    title: 'Beyond code',
    body: (
      <>
        <p>
          When I am not building interfaces, you will usually find me exploring new
          cities, learning from different cultures, and diving into good technical
          writing. I am always chasing the next challenge that helps me grow as an
          engineer and as a person.
        </p>
      </>
    ),
  },
]

const enterIndex = (i: number): CSSProperties => ({ ['--i' as string]: i } as CSSProperties)

export default function About() {
  return (
    <PageContainer>
      <article className="editorial-stack">
        <header className="about-hero">
          <p className="meta-line" data-enter style={enterIndex(0)}>
            About
          </p>
          <h1 className="display-lg about-hero__title" data-enter style={enterIndex(1)}>
            Frontend engineer <em className="display-accent">from Brazil</em>, building
            scalable UI systems from Dublin to Dallas.
          </h1>
          <p className="display-md display-italic" data-enter style={enterIndex(2)}>
            14+ years across three countries &mdash; and counting.
          </p>
          <div className="prose-editorial" data-enter style={enterIndex(3)}>
            <p>
              I&apos;m a frontend engineer specialising in scalable UI applications and
              design systems, with experience working across <strong>Brazil</strong>,{' '}
              <strong>Ireland</strong>, and the <strong>United States</strong>.
            </p>
          </div>
        </header>

        {chapters.map((chapter) => (
          <section
            key={chapter.index}
            aria-labelledby={`chapter-${chapter.index}`}
            className="chapter"
          >
            <h2
              id={`chapter-${chapter.index}`}
              className="meta-line chapter__head"
            >
              <span className="chapter__index">{chapter.index}</span>
              <span aria-hidden="true">·</span>
              <span>{chapter.title}</span>
            </h2>
            <div className="prose-editorial">{chapter.body}</div>
          </section>
        ))}
      </article>
    </PageContainer>
  )
}
