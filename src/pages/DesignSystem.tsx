import CaseStudyHero from '../components/case-study/CaseStudyHero'
import CaseStudySection from '../components/case-study/CaseStudySection'

export default function DesignSystem() {
  return (
    <article className="case-stack">
      <CaseStudyHero
        title="Design System"
        description={
          <>
            Building a{' '}
            <em className="display-accent">scalable component library</em> to drive
            UI consistency, reduce duplication, and accelerate development across
            multiple product teams.
          </>
        }
        role="Senior Frontend Engineer"
        stack={['Vue.js', 'TypeScript', 'Storybook', 'SCSS', 'Design Tokens']}
      />

      <CaseStudySection index={1} title="Overview">
        <p>
          As the product portfolio grew, teams were building the same UI patterns
          independently &mdash; buttons, modals, form fields &mdash; each with
          slight visual and behavioral differences. There was no shared language
          between design and engineering, leading to inconsistent user experiences
          and duplicated effort.
        </p>
        <p>
          I led the creation of a design system that unified these patterns into a
          single, versioned component library used across all product teams.
        </p>
      </CaseStudySection>

      <CaseStudySection index={2} title="Problem">
        <p>
          Multiple teams were shipping features with their own component
          implementations. This resulted in:
        </p>
        <ul>
          <li>Visual inconsistencies across products.</li>
          <li>Duplicated development effort for common UI elements.</li>
          <li>No standardized design tokens (colors, spacing, typography).</li>
          <li>Difficulty onboarding new developers due to lack of shared conventions.</li>
          <li>Increasing maintenance burden as the codebase grew.</li>
        </ul>
      </CaseStudySection>

      <CaseStudySection index={3} title="Approach">
        <p>
          Rather than building the entire system upfront, I took an incremental
          approach &mdash; auditing existing patterns, identifying the most reused
          components, and extracting them into a shared library.
        </p>
        <ul>
          <li>Conducted a UI audit across all products to identify common patterns.</li>
          <li>Defined design tokens for spacing, color, and typography.</li>
          <li>Built foundational components (Button, Input, Modal, Card, Badge).</li>
          <li>Documented every component in Storybook with usage examples.</li>
          <li>Created contribution guidelines so teams could extend the system.</li>
        </ul>
      </CaseStudySection>

      <CaseStudySection index={4} title="Challenges">
        <p>
          The technical work was only part of the effort. Adoption was the real
          challenge.
        </p>
        <ul>
          <li>Resistance from teams who had already built their own components.</li>
          <li>
            Complex enterprise requirements that demanded flexibility without
            sacrificing consistency.
          </li>
          <li>
            Third-party integrations that didn&apos;t align with the design
            system&apos;s patterns.
          </li>
          <li>
            Balancing strictness (enforcing standards) with flexibility
            (supporting edge cases).
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudySection index={5} title="Solution">
        <p>
          The design system was built as a standalone Vue.js component library,
          published as an internal npm package with semantic versioning. Key
          decisions included:
        </p>
        <ul>
          <li>Token-based theming so products could customize without forking.</li>
          <li>Slot-based component APIs for maximum composability.</li>
          <li>Automated visual regression testing to catch unintended changes.</li>
          <li>
            A migration guide and pairing sessions to drive adoption across teams.
          </li>
        </ul>
      </CaseStudySection>

      <p className="case-coda" aria-hidden="true">Coda</p>

      <CaseStudySection index={6} title="Impact">
        <ul>
          <li>Unified UI across 4+ product teams.</li>
          <li>Reduced component duplication by ~60%.</li>
          <li>Cut new-feature development time by shipping pre-built patterns.</li>
          <li>Improved onboarding &mdash; new devs were productive within days.</li>
          <li>Established a shared design-engineering language.</li>
        </ul>
      </CaseStudySection>

      <CaseStudySection index={7} title="Key learnings">
        <ul>
          <li>A design system is a product &mdash; it needs advocacy, docs, and support.</li>
          <li>Adoption is harder than building &mdash; invest in migration paths.</li>
          <li>Start small, ship early, iterate based on real usage.</li>
          <li>Tokens are the foundation &mdash; get them right first.</li>
          <li>Cross-team collaboration is essential from day one.</li>
        </ul>
      </CaseStudySection>
    </article>
  )
}
