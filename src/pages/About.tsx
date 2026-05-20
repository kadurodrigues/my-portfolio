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
          I started in <strong>S&atilde;o Paulo</strong> at a digital agency, mostly
          building marketing sites in HTML, CSS, and jQuery, and later hybrid mobile apps
          with AngularJS, Ionic, and PhoneGap. The work was unglamorous &mdash; making
          things behave the same way across Safari, IE9, and a half-dozen Android
          browsers &mdash; but it&apos;s where I learned to actually look at an interface
          instead of just shipping it.
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
          In 2017 I moved to <strong>Dublin</strong> to improve my English. I expected a
          year of language school and a working-holiday job; I stayed eight, joined{' '}
          <strong>Equifax</strong> as a Software Developer within months, and discovered
          that the real English class was a standup with engineers from five different
          countries trying to agree on what &ldquo;done&rdquo; meant.
        </p>
        <p>
          In 2020 I joined <strong>Citibank</strong> as a{' '}
          <strong>UI Tech Lead</strong>. It was the first time I was responsible for
          what a frontend team shipped rather than my own piece of it. Over the next four
          years we built the <strong>Workflow Designer</strong> and{' '}
          <strong>Task Inbox</strong>, two internal SaaS products used by around five
          thousand people across the bank to model and run business processes, and the
          shared <strong>design system</strong> the rest of the portfolio eventually ran
          on. The design system is the work I&apos;m most proud of from Dublin; the rest
          of it is where I learned how to lead.
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
          In 2024 I left Dublin after being approved for the{' '}
          <strong>EB2-NIW</strong> visa, a U.S. green card track for people whose work
          is judged to be in the national interest. In early 2025 I moved to{' '}
          <strong>Dallas, Texas</strong> &mdash; still at Citibank, now on the U.S. side
          of the same product family.
        </p>
        <p>
          Three countries, three working cultures, and the same job underneath all of
          them: making big frontend systems feel small to the people using them.
        </p>
      </>
    ),
  },
  {
    index: '04',
    title: 'Outside work',
    body: (
      <>
        <p>
          When I&apos;m not in front of an editor, I&apos;m usually walking around a city
          I haven&apos;t seen before, reading something longer than a blog post, or
          trying to cook a dish from one of the three countries I&apos;ve lived in. Most
          of what makes me a better engineer happens away from the keyboard.
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
            Fourteen years of frontend work. Three countries. One job description.
          </p>
          <div className="prose-editorial" data-enter style={enterIndex(3)}>
            <p>
              I work on scalable UI applications and design systems, mostly inside large
              engineering organisations. The career has run through{' '}
              <strong>Brazil</strong>, <strong>Ireland</strong>, and the{' '}
              <strong>United States</strong>, in that order.
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
