import {
  ArrowRight,
  ArrowUpRight,
  Browser,
  CalendarCheck,
  Compass,
  DeviceMobile,
  Folder,
  Mail,
  MapPin,
  Stack,
  UsersThree,
} from './components/Icons'
import { BitField } from './components/BitField'
import { Nav } from './components/Nav'
import { Reveal } from './components/Reveal'
import { TaglineReveal } from './components/TaglineReveal'
import './App.css'

const EMAIL = 'bitwisedharma@gmail.com'
const MAILTO = `mailto:${EMAIL}?subject=Project%20inquiry%20for%20BitwiseDharma`

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

/* Flags, not bullet points: each capability is one bit. */
const benefits = [
  {
    flag: '0x01',
    Icon: Compass,
    title: 'Decisions that survive the build',
    description:
      'Product design and engineering sit in the same room, so what gets designed is what gets shipped.',
  },
  {
    flag: '0x02',
    Icon: Browser,
    title: 'Tools people actually use',
    description:
      'Web apps, customer portals, and internal tools built around the work your team already does.',
  },
  {
    flag: '0x04',
    Icon: DeviceMobile,
    title: 'One build, two platforms',
    description:
      'iOS and Android apps that share logic where it helps and stay native where it matters.',
  },
  {
    flag: '0x08',
    Icon: Stack,
    title: 'A system you can extend',
    description:
      'Design tokens, components, and docs your team can keep building with after we leave.',
  },
]

const steps = [
  {
    when: 'Day 0',
    title: 'Tell us the problem',
    description:
      'A thirty minute call about what you are trying to solve, who it is for, and what has already been tried. No pitch deck needed.',
  },
  {
    when: 'Week 1',
    title: 'Scope the smallest useful version',
    description:
      'A short plan with milestones, tradeoffs, and a fixed price for the first build. You approve the number before work starts.',
  },
  {
    when: 'Every Friday',
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
      'Yes. We are based in Bengaluru and work remotely with teams in other time zones. We agree on a shared overlap window before we start.',
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

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-heading">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="meta">
                <span className="meta-bit" aria-hidden="true" />
                Independent software studio · Bengaluru, IN
              </p>

              <h1 id="hero-heading" className="hero-heading">
                One senior team, from first sketch to{' '}
                <mark className="marker">shipped product.</mark>
              </h1>

              <p className="hero-sub">
                We design and build web and mobile products for teams that need
                fewer handoffs and more working software.
              </p>

              <div className="hero-actions">
                <a className="button button-signal" href={MAILTO}>
                  Start a project
                  <ArrowRight size={18} />
                </a>
                <a className="text-link" href="#approach">
                  See how we work
                </a>
              </div>

              <p className="hero-note">
                Replies within two business days, from the people who will build
                it.
              </p>
            </div>

            <figure className="hero-figure">
              <div className="bitfield">
                <BitField />
              </div>
              <figcaption>
                <span>fig. 01 — the studio, in bits</span>
                <span className="hero-figure-hint">move to flip</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="ledger" aria-label="What you can expect">
          <div className="container ledger-grid">
            {proofPoints.map(({ Icon, title, description }, index) => (
              <Reveal className="ledger-item" key={title} delay={index * 60}>
                <span className="ledger-index">0{index + 1}</span>
                <Icon size={20} />
                <p className="ledger-title">{title}</p>
                <p className="ledger-copy">{description}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section" id="studio" aria-labelledby="studio-heading">
          <div className="container">
            <Reveal className="section-head">
              <p className="meta">§ 1 — Studio</p>
              <h2 id="studio-heading">Fewer handoffs. More working software.</h2>
              <p className="section-intro">
                We keep the team small and the feedback loop short, so decisions
                turn into shipped code instead of another meeting.
              </p>
            </Reveal>

            <div className="flag-grid">
              {benefits.map(({ flag, Icon, title, description }, index) => (
                <Reveal key={title} className="flag-cell" delay={index * 50}>
                  <article className="flag-card">
                    <div className="flag-top">
                      <Icon size={22} />
                      <span className="flag-code">{flag}</span>
                    </div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <p className="flag-sum" aria-hidden="true">
              0x01 | 0x02 | 0x04 | 0x08 = <strong>0x0F</strong>
              <span> · all of it, one team</span>
            </p>
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
              <p className="meta">§ 2 — Approach</p>
              <h2 id="approach-heading">A short path from problem to shipped.</h2>
              <p className="section-intro">
                No long discovery phase. No pitch theatre. We agree on the
                smallest useful version and start building.
              </p>
            </Reveal>

            <ol className="timeline">
              {steps.map((step, index) => (
                <li className="timeline-step" key={step.title}>
                  <Reveal delay={index * 80}>
                    <div className="timeline-rail" aria-hidden="true">
                      <span className="timeline-node" />
                    </div>
                    <p className="timeline-when">{step.when}</p>
                    <h3>{step.title}</h3>
                    <p className="timeline-copy">{step.description}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className="section section-band"
          id="handover"
          aria-labelledby="handover-heading"
        >
          <div className="container handover-grid">
            <Reveal className="handover-copy">
              <p className="meta">§ 3 — After launch</p>
              <h2 id="handover-heading">The handover is part of the build.</h2>
              <p className="section-intro">
                We do not disappear after the launch. Your repository, design
                files, and written decisions are yours from week one, with a
                walkthrough when the work is done.
              </p>
              <ul className="check-list">
                {handoverPoints.map((point) => (
                  <li key={point}>
                    <span className="check-box" aria-hidden="true">
                      x
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="terminal-wrap" delay={100}>
              <div className="terminal" aria-hidden="true">
                <div className="terminal-bar">
                  <span className="terminal-dots">
                    <span />
                    <span />
                    <span />
                  </span>
                  <span>your-org / product</span>
                </div>
                <pre className="terminal-body">
                  <span className="t-dim">$ </span>git log --oneline -4{'\n'}
                  <span className="t-hash">a41f2c9</span> docs: handover runbook{'\n'}
                  <span className="t-hash">9be07d1</span> feat: onboarding flow{'\n'}
                  <span className="t-hash">5c3a8e0</span> design: tokens v2{'\n'}
                  <span className="t-hash">01d7f44</span> chore: repo in your org{'\n'}
                  {'\n'}
                  <span className="t-dim">$ </span>tree -L 2{'\n'}
                  {`app/
├─ components/
└─ routes/
design/
├─ tokens/
└─ screens/
docs/
├─ decisions.md
└─ runbook.md
README.md`}
                  {'\n\n'}
                  <span className="t-ok">✓ owner: you, since week one</span>
                </pre>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section" id="faq" aria-labelledby="faq-heading">
          <div className="container faq-grid">
            <Reveal className="faq-head">
              <p className="meta">§ 4 — FAQ</p>
              <h2 id="faq-heading">Questions we hear before the first call.</h2>
              <p className="section-intro">
                If yours is not here, <a href={MAILTO}>write to us</a>. We answer
                every note.
              </p>
            </Reveal>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details className="faq-item" key={faq.question}>
                  <summary>
                    <span className="faq-index" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="faq-q">{faq.question}</span>
                    <span className="faq-icon" aria-hidden="true" />
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="cta" id="contact" aria-labelledby="cta-heading">
          <div className="container">
            <Reveal className="cta-inner">
              <p className="meta">§ 5 — Next step</p>
              <h2 id="cta-heading">Tell us what you are building.</h2>
              <div className="cta-row">
                <p className="cta-copy">
                  A short note is enough. We will reply with honest questions and
                  a clear next step.
                </p>
                <div className="cta-actions">
                  <a className="button button-ink" href={MAILTO}>
                    Start a project
                    <ArrowUpRight size={18} />
                  </a>
                  <a className="cta-email" href={MAILTO}>
                    {EMAIL}
                  </a>
                </div>
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
                {EMAIL}
              </a>
              <p>
                <MapPin size={16} />
                Bengaluru, Karnataka, India
              </p>
            </div>
          </div>

          <p className="footer-wordmark" aria-hidden="true">
            bitwise<span>dharma</span>
          </p>

          <div className="footer-bottom">
            <p>© {CURRENT_YEAR} The BitwiseDharma Company.</p>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
