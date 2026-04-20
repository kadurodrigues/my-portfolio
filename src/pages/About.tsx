import PageContainer from '../components/layout/PageContainer'

export default function About() {
  return (
    <PageContainer>
      <div className="grid gap-10 md:gap-14">
        <section className="content-stack">
          <p className="eyebrow">About</p>
          <h1 className="page-title !max-w-[24ch]">
            Frontend engineer from <span className="accent-text">Brazil</span>, building scalable UI systems from Dublin to Dallas.
          </h1>
          <p className="meta-text">14+ years across three countries — and counting.</p>
        </section>

        <section className="grid gap-5">
          <h2 className="section-title">My Journey</h2>
          <div className="space-y-6 leading-relaxed text-gray-600">
            <p>
              I'm a Frontend Engineer specializing in building scalable UI applications and
              design systems, with experience working across <span className="font-semibold">Brazil</span>,
              <span className="font-semibold"> Ireland</span>, and the
              <span className="font-semibold"> United States</span>.
            </p>
            <p>
              I started my career in <span className="font-semibold">Brazil</span> as a web developer at a digital agency,
              where I was first exposed to the world of frontend development. Early on, I
              was deeply focused on crafting pixel-perfect interfaces using HTML, CSS,
              and jQuery. That foundation helped me develop strong attention to detail
              and a solid understanding of how users interact with interfaces. Over time,
              I expanded into JavaScript frameworks like AngularJS, Ionic, and
              PhoneGap, building hybrid applications and gaining experience with more
              complex frontend architectures.
            </p>
            <p>
              In 2017, I made a decision that would shape both my career and personal
              growth: I moved to <span className="font-semibold">Ireland</span> to improve my English and develop my
              communication skills. What started as a language goal quickly turned into
              a professional opportunity when I joined <span className="font-semibold">Equifax</span> as a Software Developer.
              Working in a multicultural environment pushed me to adapt quickly; this
              became my real "English class," where I learned how to communicate
              effectively, collaborate across cultures, and operate in a global
              engineering environment.
            </p>
            <p>
              In 2020, I joined <span className="font-semibold">Citibank</span> as a <span className="font-semibold">UI Tech Lead</span>, marking my first experience
              leading a frontend team. In this role, I worked closely with developers,
              product managers, and UX teams to build internal platforms such as a
              <span className="font-semibold">Workflow Designer</span> for automating business processes and a
              <span className="font-semibold">Task Inbox</span> for
              managing operational workflows. Alongside these applications, I led the
              development of a <span className="font-semibold">UI Design System</span> that became the foundation for
              consistency, scalability, and reuse across our products.
            </p>
            <p>
              This experience strengthened not only my technical skills in frontend
              architecture and system design but also my ability to lead, mentor, and
              collaborate effectively within a team. It reinforced the importance of
              building solutions that are not just technically sound, but also
              maintainable and aligned with real business needs.
            </p>
            <p>
              In 2024, I took another major step in my journey by leaving <span className="font-semibold">Ireland</span> after
              being approved for the <span className="font-semibold">EB2-NIW</span> visa, a U.S. green card category for
              professionals whose work is considered to have national interest impact.
              In early 2025, I moved to the <span className="font-semibold">United States</span> and started a new chapter of
              my career in <span className="font-semibold">Dallas, Texas</span>.
            </p>
            <p>
              Today, I bring together strong frontend expertise with a global perspective
              combining technical depth, adaptability, and a product-oriented mindset to
              build scalable systems and contribute effectively to diverse teams.
            </p>
          </div>
        </section>

        <section className="grid gap-4">
          <h2 className="section-title">Beyond Code</h2>
          <p className="leading-relaxed text-gray-600">
            When I am not building interfaces, you will usually find me exploring new
            cities, learning from different cultures, and diving into good technical
            writing. I am always chasing the next challenge that helps me grow as an
            engineer and as a person.
          </p>
        </section>
      </div>
    </PageContainer>
  )
}
