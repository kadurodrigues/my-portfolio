import type { CSSProperties } from 'react'
import PageContainer from '../components/layout/PageContainer'

type Article = {
  eyebrow: string
  title: string
  description: string
  url: string
  source: string
  date: string
}

const articles: Article[] = [
  {
    eyebrow: 'Performance · Vue.js',
    title: 'Performance in Vue.js: Breaking down conditional code',
    description:
      'A practical performance-focused breakdown of conditional rendering patterns in Vue.js, with TypeScript-friendly ideas for cleaner and faster code.',
    url: 'https://dev.to/kaduln2/performance-in-vuejs-breaking-down-conditional-code-3emh',
    source: 'Dev.to',
    date: 'April 2025',
  },
  {
    eyebrow: 'Components · Vue.js',
    title: 'Passing lots of props in Vue.js, as a pro',
    description:
      'A concise guide for structuring and passing larger prop sets in Vue.js while keeping components maintainable and readable.',
    url: 'https://dev.to/kaduln2/passing-lots-of-props-in-vuejs-as-a-pro-418k',
    source: 'Dev.to',
    date: 'March 2022',
  },
]

const enterIndex = (i: number): CSSProperties =>
  ({ ['--i' as string]: i } as CSSProperties)

export default function Articles() {
  return (
    <PageContainer>
      <article className="editorial-stack">
        <header className="about-hero">
          <p className="meta-line" data-enter style={enterIndex(0)}>
            Articles
          </p>
          <h1 className="display-xl" data-enter style={enterIndex(1)}>
            Notes on <em className="display-accent">frontend architecture</em>,
            design systems, and lessons from building at scale.
          </h1>
          <p
            className="display-md display-italic"
            data-enter
            style={enterIndex(2)}
          >
            Technical writing, published on dev.to.
          </p>
        </header>

        <section aria-labelledby="articles-heading">
          <p
            id="articles-heading"
            className="meta-line home-section-head"
            data-enter
            style={enterIndex(3)}
          >
            Selected writing
          </p>
          <ol className="work-list" data-enter style={enterIndex(4)}>
            {articles.map((article, index) => (
              <li key={article.url} className="work-item">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-link"
                >
                  <span className="work-index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="work-body">
                    <span className="work-eyebrow">{article.eyebrow}</span>
                    <span className="display-md work-title">
                      {article.title}
                    </span>
                    <span className="work-description">
                      {article.description}
                    </span>
                    <span className="work-meta">
                      {article.source} · {article.date}
                    </span>
                  </span>
                  <span className="work-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </section>
      </article>
    </PageContainer>
  )
}
