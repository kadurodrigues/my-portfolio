interface PageContainerProps {
  children: React.ReactNode
}

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-12 md:py-16">
      {children}
    </main>
  )
}
