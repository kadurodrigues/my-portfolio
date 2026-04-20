import { Link } from 'react-router-dom'

interface CardProps {
  title: string
  description: string
  to: string
  tags?: string[]
}

export default function Card({ title, description, to, tags }: CardProps) {
  return (
    <Link
      to={to}
      className="group block rounded-lg border border-gray-200 p-6 no-underline transition-colors hover:border-gray-300 hover:bg-gray-50"
    >
      <h3 className="entry-title transition-colors group-hover:accent-text">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
      {tags && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  )
}
