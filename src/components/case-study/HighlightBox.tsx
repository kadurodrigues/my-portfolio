interface HighlightBoxProps {
  title: string
  items: string[]
  variant?: 'default' | 'accent'
}

export default function HighlightBox({ title, items, variant = 'default' }: HighlightBoxProps) {
  const styles = {
    default: 'border-gray-200 bg-gray-50',
    accent: 'border-gray-300 bg-gray-100',
  }

  return (
    <div className={`rounded-lg border p-6 ${styles[variant]}`}>
      <h3 className="mb-3 text-lg font-semibold text-gray-900">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-600">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
