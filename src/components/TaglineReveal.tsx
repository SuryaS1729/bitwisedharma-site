import { useEffect, useRef } from 'react'

const TEXT =
  'We would rather ship one thing well than ten things loudly.'

const WORDS = TEXT.split(' ')

export function TaglineReveal() {
  const ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const heading = ref.current
    if (!heading) return

    const words = Array.from(
      heading.querySelectorAll<HTMLSpanElement>('.tagline-word'),
    )

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      words.forEach((word) => word.classList.add('is-on'))
      return
    }

    if (!('IntersectionObserver' in window)) {
      words.forEach((word) => word.classList.add('is-on'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-on')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px -30% 0px' },
    )

    words.forEach((word) => observer.observe(word))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="tagline-section"
      aria-labelledby="tagline-heading"
      id="principle"
    >
      <div className="container">
        <p className="eyebrow eyebrow-dark">What we believe</p>
        <h2
          id="tagline-heading"
          ref={ref}
          className="tagline-reveal"
          aria-label={TEXT}
        >
          {WORDS.map((word, index) => (
            <span key={`${word}-${index}`} className="tagline-word">
              {word}
              {index < WORDS.length - 1 ? ' ' : ''}
            </span>
          ))}
        </h2>
      </div>
    </section>
  )
}
