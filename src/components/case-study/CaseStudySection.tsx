interface CaseStudySectionProps {
  index: string | number
  title: string
  children: React.ReactNode
}

const formatIndex = (index: string | number) =>
  typeof index === 'number' ? String(index).padStart(2, '0') : index

export default function CaseStudySection({
  index,
  title,
  children,
}: CaseStudySectionProps) {
  const formatted = formatIndex(index)
  const id = `case-section-${formatted}`
  return (
    <section className="chapter" aria-labelledby={id}>
      <h2 id={id} className="meta-line chapter__head">
        <span className="chapter__index">{formatted}</span>
        <span aria-hidden="true">·</span>
        <span>{title}</span>
      </h2>
      <div className="prose-editorial">{children}</div>
    </section>
  )
}
