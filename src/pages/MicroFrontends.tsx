import CaseStudyHero from '../components/case-study/CaseStudyHero'
import CaseStudySection from '../components/case-study/CaseStudySection'
import HighlightBox from '../components/case-study/HighlightBox'

export default function MicroFrontends() {
  return (
    <>
      <CaseStudyHero
        title="Micro-Frontends"
        description={
          <>
            Architecting a <span className="accent-text">micro-frontend strategy</span> that enabled independent teams to build, test, and deploy frontend applications autonomously within a large-scale enterprise platform.
          </>
        }
        role="Senior Frontend Engineer"
        stack={['Vue.js', 'TypeScript', 'Webpack Module Federation', 'REST APIs', 'CI/CD']}
      />

      <CaseStudySection title="Overview">
        <p>
          The platform consisted of a monolithic frontend serving multiple product areas —
          Workflow Designer, Task Inbox, and several internal tools. As teams grew, the
          monolith became a bottleneck: merge conflicts were constant, deployments were
          risky, and teams couldn't ship independently.
        </p>
        <p>
          I led the architectural shift to micro-frontends, breaking the monolith into
          independently deployable applications that could be developed and released by
          separate teams without coordination overhead.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Problem">
        <p>
          The monolithic frontend was holding teams back:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>A single codebase shared by 3+ teams caused frequent merge conflicts</li>
          <li>One team's bug could block deployments for everyone</li>
          <li>Release cycles were slow — every change required a full regression</li>
          <li>No clear ownership boundaries between product areas</li>
          <li>Scaling the team meant scaling the coordination cost</li>
        </ul>
      </CaseStudySection>

      <CaseStudySection title="Approach">
        <p>
          We needed to decouple without rewriting from scratch. The approach was
          pragmatic — slice along product boundaries and migrate incrementally.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Mapped the monolith to identify natural seams between product areas</li>
          <li>Defined clear contracts and interfaces between micro-frontends</li>
          <li>Built a lightweight shell application to orchestrate loading and routing</li>
          <li>Migrated Workflow Designer as the first pilot micro-frontend</li>
          <li>Established shared libraries for cross-cutting concerns (auth, theming, i18n)</li>
        </ul>
      </CaseStudySection>

      <CaseStudySection title="Challenges">
        <p>
          Micro-frontends solved the independence problem but introduced new complexity:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Versioning — keeping shared dependencies in sync across apps</li>
          <li>Shared state — managing authentication and user context across boundaries</li>
          <li>Integration testing — ensuring micro-frontends worked together after independent deploys</li>
          <li>Bundle size — avoiding duplication of common libraries (Vue, utilities)</li>
          <li>Maintenance overhead — more repos, more CI pipelines, more infrastructure</li>
        </ul>
      </CaseStudySection>

      <CaseStudySection title="Solution">
        <p>
          Each product area became its own Vue.js application, independently built and
          deployed. Key architectural decisions:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Module Federation for runtime integration — no build-time coupling</li>
          <li>A shared library package with strict semver for common utilities</li>
          <li>Contract-based communication via custom events and a lightweight event bus</li>
          <li>Automated integration tests in a staging environment before production deploys</li>
          <li>A versioning strategy with compatibility matrices to prevent breaking changes</li>
        </ul>
      </CaseStudySection>

      {/* Architecture Diagram Placeholder */}
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-gray-900">Architecture</h2>
        <div className="flex items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50 p-12">
          <div className="text-center">
            <p className="text-sm font-medium text-gray-400">Architecture Diagram</p>
            <p className="mt-1 text-xs text-gray-400">Shell App → Workflow Designer | Task Inbox | Internal Tools</p>
          </div>
        </div>
      </section>

      <div className="mb-10 grid gap-6 sm:grid-cols-2">
        <HighlightBox
          title="Impact"
          items={[
            'Teams deployed independently — no more cross-team release coordination',
            'Reduced deployment risk — isolated failures to individual apps',
            'Faster delivery — feature lead time dropped significantly',
            'Clear ownership — each team owned their domain end-to-end',
            'Scalable architecture — onboarding new product areas became straightforward',
          ]}
          variant="accent"
        />
        <HighlightBox
          title="Key Learnings"
          items={[
            'Micro-frontends are an organizational solution as much as a technical one',
            'Shared dependencies need strict governance or they become a bottleneck',
            'Start with one pilot — prove the model before scaling',
            'Integration testing is non-negotiable in a distributed frontend',
            'The shell app should be as thin as possible — routing and auth only',
          ]}
        />
      </div>
    </>
  )
}
