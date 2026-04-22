import type { CSSProperties } from 'react'
import PageContainer from '../components/layout/PageContainer'

type LinkKind = 'external' | 'email' | 'download'

type ContactLink = {
  label: string
  hint: string
  href: string
  ariaLabel: string
  kind: LinkKind
}

const links: ContactLink[] = [
  {
    label: 'LinkedIn',
    hint: 'linkedin.com/in/carloss-rodrigues',
    href: 'https://www.linkedin.com/in/carloss-rodrigues/',
    ariaLabel: 'Open LinkedIn profile in a new tab',
    kind: 'external',
  },
  {
    label: 'GitHub',
    hint: 'github.com/kadurodrigues',
    href: 'https://github.com/kadurodrigues',
    ariaLabel: 'Open GitHub profile in a new tab',
    kind: 'external',
  },
  {
    label: 'Email',
    hint: 'carlos.m.rodrigues86@gmail.com',
    href: 'mailto:carlos.m.rodrigues86@gmail.com',
    ariaLabel: 'Send an email',
    kind: 'email',
  },
  {
    label: 'Résumé',
    hint: 'Download · PDF',
    href: '/resume.pdf',
    ariaLabel: 'Download résumé as PDF',
    kind: 'download',
  },
  {
    label: 'Behance',
    hint: 'UI & frontend archive · 2012–2017',
    href: 'https://www.behance.net/kduln2edcc',
    ariaLabel: 'Open Behance portfolio in a new tab',
    kind: 'external',
  },
]

const arrowFor = (kind: LinkKind) => {
  switch (kind) {
    case 'download':
      return '↓'
    case 'external':
      return '↗'
    default:
      return '→'
  }
}

const enterIndex = (i: number): CSSProperties =>
  ({ ['--i' as string]: i } as CSSProperties)

export default function Contact() {
  return (
    <PageContainer>
      <article className="editorial-stack">
        <header className="about-hero">
          <p className="meta-line" data-enter style={enterIndex(0)}>
            Contact
          </p>
          <h1 className="display-xl" data-enter style={enterIndex(1)}>
            Let&apos;s talk about frontend architecture, design systems, or{' '}
            <em className="display-accent">coffee in a new city</em>.
          </h1>
          <p
            className="display-md display-italic"
            data-enter
            style={enterIndex(2)}
          >
            Based in Dallas, TX &mdash; open to remote and on-site.
          </p>
        </header>

        <section aria-labelledby="contact-heading">
          <p
            id="contact-heading"
            className="meta-line home-section-head"
            data-enter
            style={enterIndex(3)}
          >
            Where to find me
          </p>
          <ul className="contact-list" data-enter style={enterIndex(4)}>
            {links.map((link) => {
              const isExternal = link.kind === 'external'
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    download={link.kind === 'download' || undefined}
                    aria-label={link.ariaLabel}
                    data-kind={link.kind}
                    className="contact-link"
                  >
                    <span className="contact-body">
                      <span className="contact-label">{link.label}</span>
                      <span className="contact-hint">{link.hint}</span>
                    </span>
                    <span className="contact-arrow" aria-hidden="true">
                      {arrowFor(link.kind)}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </section>
      </article>
    </PageContainer>
  )
}
