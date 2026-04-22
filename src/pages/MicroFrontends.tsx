import CaseStudyHero from '../components/case-study/CaseStudyHero'
import CaseStudySection from '../components/case-study/CaseStudySection'

export default function MicroFrontends() {
  return (
    <article className="case-stack">
      <CaseStudyHero
        title="Micro-Frontends"
        description={
          <>
            Architecting a{' '}
            <em className="display-accent">micro-frontend strategy</em> that
            enabled independent teams to build, test, and deploy frontend
            applications autonomously within a large-scale enterprise platform.
          </>
        }
        role="Senior Frontend Engineer"
        stack={[
          'Vue.js',
          'TypeScript',
          'Module Federation',
          'REST APIs',
          'CI/CD',
        ]}
      />

      <CaseStudySection index={1} title="Overview">
        <p>
          The platform consisted of a monolithic frontend serving multiple
          product areas &mdash; Workflow Designer, Task Inbox, and several
          internal tools. As teams grew, the monolith became a bottleneck: merge
          conflicts were constant, deployments were risky, and teams couldn&apos;t
          ship independently.
        </p>
        <p>
          I led the architectural shift to micro-frontends, breaking the monolith
          into independently deployable applications that could be developed and
          released by separate teams without coordination overhead.
        </p>
      </CaseStudySection>

      <CaseStudySection index={2} title="Problem">
        <p>The monolithic frontend was holding teams back:</p>
        <ul>
          <li>A single codebase shared by 3+ teams caused frequent merge conflicts.</li>
          <li>One team&apos;s bug could block deployments for everyone.</li>
          <li>Release cycles were slow &mdash; every change required a full regression.</li>
          <li>No clear ownership boundaries between product areas.</li>
          <li>Scaling the team meant scaling the coordination cost.</li>
        </ul>
      </CaseStudySection>

      <CaseStudySection index={3} title="Approach">
        <p>
          We needed to decouple without rewriting from scratch. The approach was
          pragmatic &mdash; slice along product boundaries and migrate
          incrementally.
        </p>
        <ul>
          <li>Mapped the monolith to identify natural seams between product areas.</li>
          <li>Defined clear contracts and interfaces between micro-frontends.</li>
          <li>Built a lightweight shell application to orchestrate loading and routing.</li>
          <li>Migrated Workflow Designer as the first pilot micro-frontend.</li>
          <li>
            Established shared libraries for cross-cutting concerns (auth,
            theming, i18n).
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudySection index={4} title="Challenges">
        <p>
          Micro-frontends solved the independence problem but introduced new
          complexity:
        </p>
        <ul>
          <li>Versioning &mdash; keeping shared dependencies in sync across apps.</li>
          <li>
            Shared state &mdash; managing authentication and user context across
            boundaries.
          </li>
          <li>
            Integration testing &mdash; ensuring micro-frontends worked together
            after independent deploys.
          </li>
          <li>Bundle size &mdash; avoiding duplication of common libraries.</li>
          <li>
            Maintenance overhead &mdash; more repos, more CI pipelines, more
            infrastructure.
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudySection index={5} title="Solution">
        <p>
          Each product area became its own Vue.js application, independently
          built and deployed. Key architectural decisions:
        </p>
        <ul>
          <li>Module Federation for runtime integration &mdash; no build-time coupling.</li>
          <li>A shared library package with strict semver for common utilities.</li>
          <li>
            Contract-based communication via custom events and a lightweight
            event bus.
          </li>
          <li>
            Automated integration tests in a staging environment before
            production deploys.
          </li>
          <li>
            A versioning strategy with compatibility matrices to prevent
            breaking changes.
          </li>
        </ul>
        <figure className="case-figure">
          <figcaption className="case-figure__caption">Architecture</figcaption>
          <pre className="case-figure__diagram">{`Shell App
├── Workflow Designer
├── Task Inbox
└── Internal Tools`}</pre>
        </figure>
      </CaseStudySection>

      <p className="case-coda" aria-hidden="true">Coda</p>

      <CaseStudySection index={6} title="Impact">
        <ul>
          <li>Teams deployed independently &mdash; no more cross-team release coordination.</li>
          <li>Reduced deployment risk &mdash; isolated failures to individual apps.</li>
          <li>Faster delivery &mdash; feature lead time dropped significantly.</li>
          <li>Clear ownership &mdash; each team owned their domain end-to-end.</li>
          <li>
            Scalable architecture &mdash; onboarding new product areas became
            straightforward.
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudySection index={7} title="Key learnings">
        <ul>
          <li>
            Micro-frontends are an organisational solution as much as a
            technical one.
          </li>
          <li>
            Shared dependencies need strict governance or they become a
            bottleneck.
          </li>
          <li>Start with one pilot &mdash; prove the model before scaling.</li>
          <li>Integration testing is non-negotiable in a distributed frontend.</li>
          <li>The shell app should be as thin as possible &mdash; routing and auth only.</li>
        </ul>
      </CaseStudySection>
    </article>
  )
}
