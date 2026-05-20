import CaseStudyHero from '../components/case-study/CaseStudyHero'
import CaseStudySection from '../components/case-study/CaseStudySection'

export default function DesignSystem() {
  return (
    <article className="case-stack">
      <CaseStudyHero
        title="Design System"
        description={
          <>
            A{' '}
            <em className="display-accent">shared component library</em> so four product
            teams could stop reinventing the same buttons, modals, and form fields in
            slightly different ways.
          </>
        }
        role="Senior Frontend Engineer"
        stack={['Vue.js', 'TypeScript', 'Storybook', 'SCSS', 'Design Tokens']}
      />

      <CaseStudySection index={1} title="Overview">
        <p>
          As the product portfolio grew, every team was building the same things
          independently: buttons, modals, form fields, each one a little different and
          all of them subtly wrong in their own way. Design and engineering didn&apos;t
          have a shared vocabulary, so we kept relitigating the same decisions.
        </p>
        <p>
          I led the work to pull these patterns into a single, versioned component
          library that every product would consume.
        </p>
      </CaseStudySection>

      <CaseStudySection index={2} title="Problem">
        <p>Concretely:</p>
        <ul>
          <li>Three different button components, none of them quite the same.</li>
          <li>Color, spacing, and type values hard-coded in every product.</li>
          <li>No shared conventions for new engineers to learn from.</li>
          <li>Every visual fix had to be done in four places.</li>
          <li>Designers were redrawing the same primitives in every Figma file.</li>
        </ul>
      </CaseStudySection>

      <CaseStudySection index={3} title="Approach">
        <p>
          Instead of designing the whole system on paper first, I worked backwards from
          what already existed: audit the products, pull out the components that were
          being reimplemented most often, and extract those into a shared library.
        </p>
        <ul>
          <li>Audited the existing UI across all four products.</li>
          <li>Defined design tokens for spacing, color, and typography.</li>
          <li>Started with the foundational components: Button, Input, Modal, Card, Badge.</li>
          <li>Documented every component in Storybook, with usage examples and the &ldquo;don&apos;t do this&rdquo; cases too.</li>
          <li>Wrote contribution guidelines so teams could extend the system instead of forking it.</li>
        </ul>
      </CaseStudySection>

      <CaseStudySection index={4} title="Challenges">
        <p>
          The technical work was the easy part. Adoption was where the real work was.
        </p>
        <ul>
          <li>Teams that had already built their own components didn&apos;t want to throw them away.</li>
          <li>Some enterprise screens needed escape hatches the library wasn&apos;t built for.</li>
          <li>Third-party widgets (date pickers, charts) refused to honour the tokens.</li>
          <li>Holding the line between &ldquo;strict enough to be useful&rdquo; and &ldquo;flexible enough to actually ship the edge cases&rdquo;.</li>
        </ul>
      </CaseStudySection>

      <CaseStudySection index={5} title="Solution">
        <p>
          The library shipped as a standalone Vue package, published to the internal
          npm registry with semver. A few decisions ended up mattering more than the
          rest:
        </p>
        <ul>
          <li>Token-based theming, so products could customise without forking the components.</li>
          <li>Slot-based component APIs &mdash; composition over configuration.</li>
          <li>Automated visual regression testing in CI so visual drift didn&apos;t sneak in.</li>
          <li>A written migration guide, and pairing sessions with each adopting team.</li>
        </ul>
      </CaseStudySection>

      <p className="case-coda" aria-hidden="true">Coda</p>

      <CaseStudySection index={6} title="Impact">
        <ul>
          <li>One UI language across four product teams.</li>
          <li>Component duplication dropped by around 60% in the first year.</li>
          <li>New feature work could start from existing patterns instead of designing primitives again.</li>
          <li>New frontend hires were shipping their first PRs in days rather than weeks.</li>
          <li>Design and engineering started using the same words for the same things.</li>
        </ul>
      </CaseStudySection>

      <CaseStudySection index={7} title="Key learnings">
        <ul>
          <li>A design system is a product. If you treat it as a library, no one adopts it.</li>
          <li>Adoption is harder than building. Budget for migration support before you budget for new components.</li>
          <li>Tokens first. If the primitives are wrong, every component built on them is wrong.</li>
          <li>The most useful artefact is the &ldquo;don&apos;t do this&rdquo; section of the docs.</li>
          <li>Ship one component all the way before you start the second one.</li>
        </ul>
      </CaseStudySection>
    </article>
  )
}
