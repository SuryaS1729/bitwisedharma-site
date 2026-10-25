import {
  ArrowRight,
  ArrowUpRight,
  Browser,
  CalendarCheck,
  Check,
  Compass,
  DeviceMobile,
  Folder,
  Mail,
  MapPin,
  Stack,
  UsersThree,
} from './components/Icons'
import { Nav } from './components/Nav'
import { Reveal } from './components/Reveal'
import { TaglineReveal } from './components/TaglineReveal'
import './App.css'

const MAILTO =
  'mailto:bitwisedharma@gmail.com?subject=Project%20inquiry%20for%20BitwiseDharma'

const CURRENT_YEAR = new Date().getFullYear()

const proofPoints = [
  {
    Icon: UsersThree,
    title: 'Direct access',
    description: 'You talk to the people doing the work.',
  },
  {
    Icon: CalendarCheck,
    title: 'Weekly demos',
    description: 'Working software, not a status deck.',
  },
  {
    Icon: Folder,
    title: 'You own the work',
    description: 'Code, files, and documentation.',
  },
]

const benefits = [
  {
    Icon: Compass,
    title: 'Decisions that survive the build',
    description:
      'Product design and engineering sit in the same room, so what gets designed is what gets shipped.',
  },
  {
    Icon: Browser,
    title: 'Tools people actually use',
    description:
      'Web apps, customer portals, and internal tools built around the work your team already does.',
  },
  {
    Icon: DeviceMobile,
    title: 'One build, two platforms',
    description:
      'iOS and Android apps that share logic where it helps and stay native where it matters.',
  },
  {
    Icon: Stack,
    title: 'A system you can extend',
    description:
      'Design tokens, components, and docs your team can keep building with after we leave.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Tell us the problem',
    description:
      'A thirty minute call about what you are trying to solve, who it is for, and what has already been tried. No pitch deck needed.',
  },
  {
    number: '02',
    title: 'Scope the smallest useful version',
    description:
      'We write a short plan with milestones, tradeoffs, and a fixed price for the first build. You approve the number before work starts.',
  },
  {
    number: '03',
    title: 'Build in weekly loops',
    description:
      'You see working software every week, give feedback on the real thing, and we ship when it is ready.',
  },
]

const handoverPoints = [
  'Repository access from week one',
  'Design files in your workspace',
  'Written decisions, not tribal knowledge',
  'A recorded walkthrough for your team',
]

const faqs = [
  {
    question: 'What kinds of products do you build?',
    answer:
      'Web apps, mobile apps, customer portals, and internal tools. Most of our work starts as a rough idea or a product that has outgrown its first version.',
  },
  {
    question: 'How do projects start?',
    answer:
      'With a thirty minute call. You describe the problem, we ask questions, and then we send a short written scope with milestones and a price for the first build.',
  },
  {
    question: 'How much does a project cost?',
    answer:
      'We price by scope, not by the hour. After the first call you get a fixed price for the first milestone, so you know the number before any work begins.',
  },
  {
    question: 'Who will I work with?',
    answer:
      'The same two to four people from the first call to the final handover. There is no account layer between you and the build.',
  },
  {
    question: 'Do you work with teams outside India?',
    answer:
      'Yes. We are based in Hyderabad and work remotely with teams in other time zones. We agree on a shared overlap window before we start.',
  },
  {
    question: 'Do we own the work?',
    answer:
      'Yes. Code, design files, and documentation are yours. We transfer everything as we go, not at the end.',
  },
  {
    question: 'What happens after launch?',
    answer:
      'You can take a clean handover or keep us on a monthly support arrangement. Either way, you are not locked in.',
  },
  {
    question: 'Can you work with our existing team?',
    answer:
      'Yes. We can join your repository and rituals, or own a workstream end to end. We will tell you honestly which one fits.',
  },
]

function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="mock-browser">
        <div className="mock-chrome">
          <span className="mock-dots">
            <span className="mock-dot" />
            <span className="mock-dot" />
            <span className="mock-dot" />
          </span>
          <span className="mock-chrome-label">studio / build</span>
          <span className="mock-pill">Week 06</span>
        </div>

        <div className="mock-body">
          <p className="mock-kicker">Current build</p>
          <p className="mock-title">Onboarding flow</p>
          <div className="mock-progress">
            <span />
          </div>

          <ul className="mock-tasks">
            <li>
              <span className="mock-check is-done">
                <Check size={12} />
              </span>
              Welcome screen
            </li>
            <li>
              <span className="mock-check is-done">
                <Check size={12} />
              </span>
              Account setup
            </li>
            <li>
              <span className="mock-check">
                <span className="mock-check-dot" />
              </span>
              First project
            </li>
          </ul>

          <div className="mock-demo">
            <span className="mock-demo-icon">
              <CalendarCheck size={16} />
            </span>
            <div className="mock-demo-copy">
              <p>Demo Friday</p>
              <span>Working build, 11:30 IST</span>
            </div>
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>

      <div className="mock-side">
        <div className="mock-tokens">
          <p className="mock-kicker">Design tokens</p>
          <div className="mock-swatches">
            <span className="mock-swatch mock-swatch-accent" />
            <span className="mock-swatch mock-swatch-ink" />
            <span className="mock-swatch mock-swatch-line" />
          </div>
          <div className="mock-type-row">
            <span className="mock-aa">Aa</span>
            <span>Heading 60 / Body 16</span>
          </div>
        </div>

        <div className="mock-ship">
          <span className="mock-ship-icon">
            <Check size={16} />
          </span>
          <p>Demo ready</p>
          <span>Shipped to review</span>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-heading">
          <div className="container hero-inner">
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              Independent software studio, Hyderabad
            </p>

            <h1 id="hero-heading" className="hero-heading">
              One senior team,
              <br />
              from first sketch
              <br />
              to shipped product.
            </h1>

            <p className="hero-sub">
              BitwiseDharma is an independent studio in Hyderabad. We design and
              build web and mobile products for teams that need fewer handoffs
              and more working software.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href={MAILTO}>
                Start a project
                <ArrowRight size={20} />
              </a>
            </div>

            <div className="hero-proof">
              <span>
                <Check size={16} />
                Direct access to the people building your product.
              </span>
              <span>
                <Check size={16} />
                We reply within two business days.
              </span>
            </div>

            <HeroVisual />
          </div>
        </section>

        <section className="proof-section" aria-label="What you can expect">
          <div className="container">
            <Reveal>
              <div className="proof-panel">
                {proofPoints.map(({ Icon, title, description }) => (
                  <div className="proof-item" key={title}>
                    <span className="proof-icon">
                      <Icon size={20} />
                    </span>
                    <div>
                      <p className="proof-title">{title}</p>
                      <p className="proof-copy">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section" id="studio" aria-labelledby="studio-heading">
          <div className="container">
            <Reveal className="section-head">
              <p className="eyebrow">Studio</p>
              <h2 id="studio-heading">Fewer handoffs. More working software.</h2>
              <p className="section-intro">
                We keep the team small and the feedback loop short, so decisions
                turn into shipped code instead of another meeting.
              </p>
            </Reveal>

            <div className="benefit-grid">
              {benefits.map(({ Icon, title, description }, index) => (
                <Reveal
                  key={title}
                  className="benefit-cell"
                  delay={index * 50}
                >
                  <article className="benefit-card">
                    <span className="benefit-icon">
                      <Icon size={20} />
                    </span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <TaglineReveal />

        <section
          className="section"
          id="approach"
          aria-labelledby="approach-heading"
        >
          <div className="container">
            <Reveal className="section-head">
              <p className="eyebrow">Approach</p>
              <h2 id="approach-heading">A short path from problem to shipped.</h2>
              <p className="section-intro">
                No long discovery phase. No pitch theatre. We agree on the
                smallest useful version and start building.
              </p>
            </Reveal>

            <div className="step-grid">
              {steps.map((step, index) => (
                <Reveal key={step.number} className="step-cell" delay={index * 60}>
                  <article className="step-card">
                    <span className="step-number">{step.number}</span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section section-surface"
          id="handover"
          aria-labelledby="handover-heading"
        >
          <div className="container handover-grid">
            <Reveal className="handover-copy">
              <p className="eyebrow">After launch</p>
              <h2 id="handover-heading">The handover is part of the build.</h2>
              <p className="handover-lead">
                We do not disappear after the launch. Your repository, design
                files, and written decisions are yours from week one, with a
                walkthrough when the work is done.
              </p>
              <ul className="check-list">
                {handoverPoints.map((point) => (
                  <li key={point}>
                    <span className="check-list-icon">
                      <Check size={14} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="handover-art" delay={100}>
              <div className="file-window" aria-hidden="true">
                <div className="file-chrome">
                  <span className="mock-dots">
                    <span className="mock-dot" />
                    <span className="mock-dot" />
                    <span className="mock-dot" />
                  </span>
                  <span className="file-title">bitwisedharma / project</span>
                  <span className="file-badge">Yours from week one</span>
                </div>
                <pre className="file-tree">{`bitwisedharma/
  app/
    components/
    routes/
  design/
    tokens/
    screens/
  docs/
    decisions.md
    runbook.md
  README.md`}</pre>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section" id="faq" aria-labelledby="faq-heading">
          <div className="container faq-grid">
            <Reveal className="faq-head">
              <p className="eyebrow">FAQ</p>
              <h2 id="faq-heading">
                Questions we hear before the first call.
              </h2>
              <p className="section-intro">
                If yours is not here,{' '}
                <a href={MAILTO}>write to us</a>. We answer every note.
              </p>
            </Reveal>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <Reveal key={faq.question} className="faq-cell" delay={index * 35}>
                  <details className="faq-item">
                    <summary>
                      <span>{faq.question}</span>
                      <span className="faq-icon" aria-hidden="true">
                        <span />
                        <span />
                      </span>
                    </summary>
                    <p>{faq.answer}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section cta-section"
          id="contact"
          aria-labelledby="cta-heading"
        >
          <div className="container">
            <Reveal>
              <div className="cta-panel">
                <p className="eyebrow eyebrow-dark">Next step</p>
                <h2 id="cta-heading">Tell us what you are building.</h2>
                <p className="cta-copy">
                  A short note is enough. We will reply with honest questions and
                  a clear next step.
                </p>
                <div className="cta-actions">
                  <a className="button button-primary" href={MAILTO}>
                    Start a project
                    <ArrowRight size={20} />
                  </a>
                </div>
                <p className="cta-alt">
                  Or write to <a href={MAILTO}>bitwisedharma@gmail.com</a>
                </p>
                <p className="cta-meta">
                  Based in Hyderabad. Working with teams remotely.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer" aria-label="Site footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a className="brand" href="#top" aria-label="BitwiseDharma home">
                <span className="brand-mark" aria-hidden="true">
                  bd
                </span>
                <span className="brand-name">BitwiseDharma</span>
              </a>
              <p>Building thoughtful software experiences.</p>
            </div>

            <nav className="footer-col" aria-label="Footer">
              <p className="footer-label">Explore</p>
              <a href="#studio">Studio</a>
              <a href="#approach">Approach</a>
              <a href="#faq">FAQ</a>
              <a href="/privacy.html">Privacy</a>
              <a href="/terms.html">Terms</a>
            </nav>

            <div className="footer-col">
              <p className="footer-label">Contact</p>
              <a href={MAILTO}>
                <Mail size={16} />
                bitwisedharma@gmail.com
              </a>
              <p>
                <MapPin size={16} />
                Hyderabad, Telangana, India
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>Copyright © {CURRENT_YEAR} The BitwiseDharma Company.</p>
            <a href="#top">Back to top</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
