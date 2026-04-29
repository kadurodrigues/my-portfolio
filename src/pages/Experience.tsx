import type { CSSProperties } from 'react'
import PageContainer from '../components/layout/PageContainer'

type Role = {
  title: string
  company: string
  location: string
  period: string
  current?: boolean
  highlights: string[]
}

const roles: Role[] = [
  {
    title: 'Frontend Engineer',
    company: 'Citibank',
    location: 'Dallas, TX',
    period: '2025 — Present',
    current: true,
    highlights: [
      'Contribute to the redesign of Accounts Master Central (AMC), a global Citibank application serving as the central repository for entity data utilized by numerous downstream systems worldwide.',
      'Re-architect a legacy .NET desktop application into a modern Angular 18 web application, leveraging advanced framework features such as signals, computed values, and standalone components to elevate performance, usability, and maintainability.',
      'Implement automated CI/CD pipelines with LightSpeed to streamline testing, continuous deployment, and delivery processes across development environments.',
      'Collaborate with multiple cross-functional teams, spanning four development squads, to ensure seamless integration, consistent data handling, and adherence to enterprise standards.',
      'Successfully convert over 80% of the legacy .NET codebase into modern Angular components using TypeScript, enhancing scalability and front-end maintainability.',
      'Introduce a modular micro-frontend architecture by partitioning large modules into standalone UI projects, enabling on-demand integration of specific functionalities as dependencies.'
    ],
  },
  {
    title: 'Frontend Engineer',
    company: 'Citibank',
    location: 'Dublin, Ireland',
    period: '2020 — 2025',
    highlights: [
      'Led the development of the Workflow Designer and Task Inbox applications, SaaS products built initially with Vue 2 and later migrated to Vue 3, empowering over 5,000 users to automate business processes through workflow design and management.',
      'Engineered a Custom UI Design System using Vue.js, TypeScript, and Tailwind CSS, ensuring a cohesive visual identity across the Workflow Designer and Task Inbox, thereby accelerating development cycles and enhancing user experience.',
      'Architected front-end applications and a custom design system, managing multiple Vue-based micro-frontends and ensuring consistent integration through the definition of scalable component structures, enforcement of coding standards, and promotion of cross-team reusability.',
      'Established CI/CD pipelines within Jenkins, automating the build, configuration, and deployment of UI applications to the internal cloud platform on a weekly basis, guaranteeing reliable and efficient releases.',
      'Mentored junior and mid-level engineers, providing guidance on best practices, code architecture, and project management, thereby fostering a culture of knowledge sharing and professional growth within the development team.',
      'Contributed to backend development initiatives using Java and Spring Boot to build and maintain APIs, facilitating efficient data processing and seamless front-end and back-end communication.',
      'Accelerated Citibank’s decision-making velocity by 30% through the implementation of streamlined workflows via the Workflow Designer and Task Inbox, minimizing manual approvals and expediting task completion.',
      'Ensured superior project quality by conducting consistent code reviews, championing clean code principles, and enforcing coding standards across all teams.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Equifax Credit Bureau',
    location: 'Dublin, Ireland',
    period: '2017 — 2020',
    highlights: [
      'Developed pivotal features for the myEquifax platform utilizing Angular 8, enabling millions of users to seamlessly access credit reports and manage credit freezes.',
      'Participated in a cross-functional squad to deliver secure, intuitive user experiences for credit management, thereby enhancing users financial control.',
      'Drove a 20% increase in user engagement by optimizing the platforms UI/UX, improving accessibility, and implementing responsive design principles.',
      'Earned 2nd place in the Equifax Global Hackathon for developing a cutting-edge credit management solution using Angular and TypeScript.',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'TalentFour Consulting',
    location: 'São Paulo, Brazil',
    period: '2015 — 2017',
    highlights: [
      'Designed and implemented the new Banco ABC Brasil Internet Banking platform using React.js and Redux, enhancing user experience and accessibility for thousands of customers.',
      'Developed a hybrid mobile banking solution with React Native, which led to a notable increase in mobile transactions and customer adoption rates.',
      'Constructed a React Native application for tracking collaborator hours, enabling real-time reporting and synchronized updates with internal systems.',
      'Successfully launched the Banco ABC Brasil App, achieving widespread customer adoption and a subsequent rise in mobile transactions.',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Inside Midia',
    location: 'São Paulo, Brazil',
    period: '2012 — 2014',
    highlights: [
      'Delivered the “Além da Beleza” portal for Allergan Pharmaceutical Products, increasing brand visibility and audience engagement.',
      'Designed landing pages for pharmaceutical clients, improving internal communications and employee satisfaction.',
      'Worked with WordPress, HTML, CSS, Bootstrap, JavaScript, and jQuery to deliver marketing and communication experiences.',
    ],
  },
]

const enterIndex = (i: number): CSSProperties => ({ ['--i' as string]: i } as CSSProperties)

export default function Experience() {
  return (
    <PageContainer>
      <article className="editorial-stack">
        <header className="about-hero">
          <p className="meta-line" data-enter style={enterIndex(0)}>
            Experience
          </p>
          <h1 className="display-lg" data-enter style={enterIndex(1)}>
            A <em className="display-accent">10+ year journey</em> across Brazil,
            Ireland, and the US building scalable frontend platforms.
          </h1>
          <p className="display-md display-italic" data-enter style={enterIndex(2)}>
            Currently a Frontend Engineer at Citibank &mdash; Dallas, TX.
          </p>
        </header>

        <ol className="roles">
          {roles.map((role, index) => (
            <li
              key={`${role.company}-${role.period}`}
              className="role"
              aria-labelledby={`role-${index}`}
            >
              {role.current && (
                <p className="meta-line chapter__head role__head">
                  <span className="role__now">Now</span>
                </p>
              )}
              <div className="role__body">
                <div className="role__meta">
                  <span className="role__period">{role.period}</span>
                  <span className="role__location">{role.location}</span>
                </div>
                <div className="role__content">
                  <h2 id={`role-${index}`} className="display-md">
                    {role.title}
                  </h2>
                  <p className="role__company">{role.company}</p>
                  <ul className="role__highlights">
                    {role.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </article>
    </PageContainer>
  )
}
