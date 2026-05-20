import CaseStudyHero from '../components/case-study/CaseStudyHero'
import CaseStudySection from '../components/case-study/CaseStudySection'

export default function MicroFrontends() {
  return (
    <article className="case-stack">
      <CaseStudyHero
        title="Micro-Frontends"
        description={
          <>
            Breaking a single Vue{' '}
            <em className="display-accent">monolith</em> into independently
            deployable apps so three product teams could ship without waiting on
            each other.
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
          The platform was one large Vue codebase covering several products:
          Workflow Designer, Task Inbox, and a handful of internal tools. As more
          teams started contributing, the monolith stopped being convenient and
          started being expensive. Merge conflicts were a daily fact of life,
          every deploy was a coordinated event, and no one could ship without
          someone else&apos;s permission.
        </p>
        <p>
          I led the move to micro-frontends: splitting the monolith into apps each
          team could build, test, and deploy on its own.
        </p>
      </CaseStudySection>

      <CaseStudySection index={2} title="Problem">
        <p>The shared codebase was costing more than it was saving:</p>
        <ul>
          <li>Three teams committing to the same trunk meant constant merge conflicts.</li>
          <li>A bug in one product&apos;s code could block everyone else&apos;s release.</li>
          <li>Every change triggered a full regression pass, so release cycles dragged.</li>
          <li>No one really owned a given module &mdash; everyone owned all of it, which is the same as no one owning any of it.</li>
          <li>Adding people to the team mostly added coordination cost.</li>
        </ul>
      </CaseStudySection>

      <CaseStudySection index={3} title="Approach">
        <p>
          A rewrite was off the table. The realistic path was to slice along the
          product boundaries that already existed in people&apos;s heads and migrate
          one piece at a time.
        </p>
        <ul>
          <li>Mapped the monolith to find the natural seams between product areas.</li>
          <li>Defined explicit contracts at each boundary so the apps could be developed in isolation.</li>
          <li>Built a thin shell app that handled routing, auth, and loading the right child app.</li>
          <li>Migrated Workflow Designer first, as the pilot.</li>
          <li>Pulled the cross-cutting concerns &mdash; auth, theming, i18n &mdash; into shared packages.</li>
        </ul>
      </CaseStudySection>

      <CaseStudySection index={4} title="Challenges">
        <p>
          Micro-frontends solved the team-coupling problem. They were happy to
          replace it with a new set of problems:
        </p>
        <ul>
          <li>Keeping shared dependencies aligned across apps without forcing lockstep upgrades.</li>
          <li>Sharing auth state and user context across boundaries that were now real.</li>
          <li>Integration testing &mdash; each app passes its own CI; that doesn&apos;t mean they work together after independent deploys.</li>
          <li>Bundle size &mdash; the same library getting shipped three times once each team picked it up.</li>
          <li>More repos, more CI pipelines, more infrastructure. The operational footprint roughly tripled.</li>
        </ul>
      </CaseStudySection>

      <CaseStudySection index={5} title="Solution">
        <p>
          Each product area ended up as its own Vue app, built and deployed on its
          own pipeline. The decisions that mattered:
        </p>
        <ul>
          <li>Module Federation for runtime integration. No build-time coupling between apps.</li>
          <li>A shared library, versioned with strict semver, for utilities every app needed.</li>
          <li>Cross-app communication via a small event bus and well-defined custom events &mdash; no shared global state.</li>
          <li>Integration tests in staging before anything was promoted to production.</li>
          <li>A compatibility matrix so we knew which versions of which apps were safe to run together.</li>
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
          <li>Teams started deploying on their own schedule. The weekly release call shrank to a status check.</li>
          <li>A bug in one app stopped being a bug in everyone&apos;s app.</li>
          <li>Lead time on a typical feature dropped from two weeks to a few days, depending on the team.</li>
          <li>Ownership got clearer: each team had a domain to defend, not a corner of a shared trunk.</li>
          <li>Adding a new product area became a normal piece of work rather than an architectural decision.</li>
        </ul>
      </CaseStudySection>

      <CaseStudySection index={7} title="Key learnings">
        <ul>
          <li>Micro-frontends are an org-chart fix as much as a technical one. If the teams aren&apos;t really independent, the architecture won&apos;t make them so.</li>
          <li>Shared dependencies need an owner. Without one they slowly become everyone&apos;s problem.</li>
          <li>Pilot one product before splitting the rest. The first migration finds the assumptions you didn&apos;t know you were making.</li>
          <li>Integration testing isn&apos;t optional once the apps deploy on their own clocks.</li>
          <li>Keep the shell thin. Routing, auth, layout chrome &mdash; nothing else belongs there.</li>
        </ul>
      </CaseStudySection>
    </article>
  )
}
