interface CaseStudySectionProps {
  title: string
  children: React.ReactNode
}

export default function CaseStudySection({ title, children }: CaseStudySectionProps) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-2xl font-semibold text-gray-900">{title}</h2>
      <div className="text-gray-600 leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  )
}
