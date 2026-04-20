import PageContainer from '../components/layout/PageContainer'

interface Article {
  title: string
  description: string
  url: string
  date: string
}

const articles: Article[] = [
  {
    title: 'Performance in Vue.js: Breaking Down Conditional Code ⚡️',
    description:
      'A practical performance-focused breakdown of conditional rendering patterns in Vue.js, with TypeScript-friendly ideas for cleaner and faster code.',
    url: 'https://dev.to/kaduln2/performance-in-vuejs-breaking-down-conditional-code-3emh',
    date: 'Apr 18, 2025',
  },
  {
    title: 'Passing lots of props in Vue.js as a Pro 🧑🏼‍🚀',
    description:
      'A concise guide for structuring and passing larger prop sets in Vue.js while keeping components maintainable and readable.',
    url: 'https://dev.to/kaduln2/passing-lots-of-props-in-vuejs-as-a-pro-418k',
    date: 'Mar 22, 2022',
  },
]

export default function Articles() {
  return (
    <PageContainer>
      <div className="page-stack">
        <section className="content-stack">
          <p className="eyebrow">Articles</p>
          <h1 className="page-title !max-w-[24ch]">
            Notes on <span className="accent-text">frontend architecture</span>, design systems, and lessons from building at scale.
          </h1>
          <p className="meta-text">Published on dev.to — a growing collection of technical writing.</p>
        </section>

        <div className="content-stack">
          {articles.map((article) => (
            <a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg border border-gray-200 p-6 no-underline transition-colors hover:border-gray-300 hover:bg-gray-50"
            >
              <div className="meta-text">{article.date}</div>
              <h2 className="entry-title mt-2">{article.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {article.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </PageContainer>
  )
}
