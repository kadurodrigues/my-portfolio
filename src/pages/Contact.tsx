import PageContainer from '../components/layout/PageContainer'

type ContactLink = {
  label: string
  hint: string
  href: string
  ariaLabel: string
  external?: boolean
  download?: boolean
}

const links: ContactLink[] = [
  {
    label: 'LinkedIn',
    hint: 'linkedin.com/in/carloss-rodrigues',
    href: 'https://www.linkedin.com/in/carloss-rodrigues/',
    ariaLabel: 'Open LinkedIn profile in a new tab',
    external: true,
  },
  {
    label: 'GitHub',
    hint: 'github.com/kadurodrigues',
    href: 'https://github.com/kadurodrigues',
    ariaLabel: 'Open GitHub profile in a new tab',
    external: true,
  },
  {
    label: 'Email',
    hint: 'carlos.m.rodrigues86@gmail.com',
    href: 'mailto:carlos.m.rodrigues86@gmail.com',
    ariaLabel: 'Send an email',
  },
  {
    label: 'Resume',
    hint: 'PDF',
    href: '/resume.pdf',
    ariaLabel: 'Download resume as PDF',
    download: true,
  },
  {
    label: 'Behance',
    hint: 'UI & front-end archive · 2012–2017',
    href: 'https://www.behance.net/kduln2edcc',
    ariaLabel: 'Open Behance portfolio in a new tab',
    external: true,
  },
]

export default function Contact() {
  return (
    <PageContainer>
      <div className="page-stack">
        <section className="content-stack">
          <p className="eyebrow">Contact</p>
          <h1 className="page-title !max-w-[24ch]">
            Let&apos;s talk about <span className="accent-text">frontend architecture</span>, design systems, or one of my hobbies like exploring new cities and good coffee?
          </h1>
          <p className="meta-text">Based in Dallas, TX — open to remote and on-site.</p>
        </section>

        <section aria-label="Contact links" className="mt-4">
          {links.map((link, index) => {
            const isLast = index === links.length - 1
            const rel = link.external ? 'noopener noreferrer' : undefined
            const target = link.external ? '_blank' : undefined

            return (
              <a
                key={link.label}
                href={link.href}
                target={target}
                rel={rel}
                download={link.download || undefined}
                aria-label={link.ariaLabel}
                className={`group flex items-baseline justify-between gap-6 border-t border-gray-200 py-6 no-underline transition-colors duration-200 hover:border-gray-300 ${
                  isLast ? 'border-b' : ''
                }`}
              >
                <span className="section-title transition-colors duration-200 group-hover:text-[rgb(var(--color-accent))]">
                  {link.label}
                </span>
                <span className="flex items-baseline gap-3 text-right">
                  <span className="meta-text hidden sm:inline">{link.hint}</span>
                  <span
                    aria-hidden="true"
                    className="inline-block text-xl text-gray-400 transition-all duration-200 group-hover:translate-x-1 group-hover:text-[rgb(var(--color-accent))]"
                  >
                    →
                  </span>
                </span>
              </a>
            )
          })}
        </section>
      </div>
    </PageContainer>
  )
}
