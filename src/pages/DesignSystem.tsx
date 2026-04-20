import CaseStudyHero from '../components/case-study/CaseStudyHero'
import CaseStudySection from '../components/case-study/CaseStudySection'
import HighlightBox from '../components/case-study/HighlightBox'

export default function DesignSystem() {
  return (
    <>
      <CaseStudyHero
        title="Design System"
        description={
          <>
            Building a <span className="accent-text">scalable component library</span> to drive UI consistency, reduce duplication, and accelerate development across multiple product teams.
          </>
        }
        role="Senior Frontend Engineer"
        stack={['Vue.js', 'TypeScript', 'Storybook', 'SCSS', 'Design Tokens']}
      />

      <CaseStudySection title="Overview">
        <p>
          As the product portfolio grew, teams were building the same UI patterns independently —
          buttons, modals, form fields — each with slight visual and behavioral differences.
          There was no shared language between design and engineering, leading to inconsistent
          user experiences and duplicated effort.
        </p>
        <p>
          I led the creation of a design system that unified these patterns into a single,
          versioned component library used across all product teams.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Problem">
        <p>
          Multiple teams were shipping features with their own component implementations.
          This resulted in:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Visual inconsistencies across products</li>
          <li>Duplicated development effort for common UI elements</li>
          <li>No standardized design tokens (colors, spacing, typography)</li>
          <li>Difficulty onboarding new developers due to lack of shared conventions</li>
          <li>Increasing maintenance burden as the codebase grew</li>
        </ul>
      </CaseStudySection>

      <CaseStudySection title="Approach">
        <p>
          Rather than building the entire system upfront, I took an incremental approach —
          auditing existing patterns, identifying the most reused components, and extracting
          them into a shared library.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Conducted a UI audit across all products to identify common patterns</li>
          <li>Defined design tokens for spacing, color, and typography</li>
          <li>Built foundational components (Button, Input, Modal, Card, Badge)</li>
          <li>Documented every component in Storybook with usage examples</li>
          <li>Created contribution guidelines so teams could extend the system</li>
        </ul>
      </CaseStudySection>

      <CaseStudySection title="Challenges">
        <p>
          The technical work was only part of the effort. Adoption was the real challenge.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Resistance from teams who had already built their own components</li>
          <li>Complex enterprise requirements that demanded flexibility without sacrificing consistency</li>
          <li>Third-party integrations that didn't align with the design system's patterns</li>
          <li>Balancing strictness (enforcing standards) with flexibility (supporting edge cases)</li>
        </ul>
      </CaseStudySection>

      <CaseStudySection title="Solution">
        <p>
          The design system was built as a standalone Vue.js component library, published
          as an internal npm package with semantic versioning. Key decisions included:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Token-based theming so products could customize without forking</li>
          <li>Slot-based component APIs for maximum composability</li>
          <li>Automated visual regression testing to catch unintended changes</li>
          <li>A migration guide and pairing sessions to drive adoption across teams</li>
        </ul>
      </CaseStudySection>

      <div className="mb-10 grid gap-6 sm:grid-cols-2">
        <HighlightBox
          title="Impact"
          items={[
            'Unified UI across 4+ product teams',
            'Reduced component duplication by ~60%',
            'Cut new feature development time by shipping pre-built patterns',
            'Improved onboarding — new devs were productive within days',
            'Established a shared design-engineering language',
          ]}
          variant="accent"
        />
        <HighlightBox
          title="Key Learnings"
          items={[
            'A design system is a product — it needs advocacy, docs, and support',
            'Adoption is harder than building — invest in migration paths',
            'Start small, ship early, iterate based on real usage',
            'Tokens are the foundation — get them right first',
            'Cross-team collaboration is essential from day one',
          ]}
        />
      </div>
    </>
  )
}
