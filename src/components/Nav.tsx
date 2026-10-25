import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Mail, MapPin } from './Icons'

const MAILTO =
  'mailto:bitwisedharma@gmail.com?subject=Project%20inquiry%20for%20BitwiseDharma'

const links = [
  { href: '#studio', label: 'Studio' },
  { href: '#approach', label: 'Approach' },
  { href: '#faq', label: 'FAQ' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 901px)')
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false)
    }

    desktop.addEventListener('change', closeOnDesktop)

    return () => desktop.removeEventListener('change', closeOnDesktop)
  }, [])

  useEffect(() => {
    if (!open) return

    const previous = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'
    firstLinkRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        return
      }

      if (event.key !== 'Tab' || !overlayRef.current) return

      const focusable = Array.from(
        overlayRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        ),
      )

      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
      previous?.focus()
    }
  }, [open])

  return (
    <header className="site-header">
      <nav className="nav" aria-label="Primary">
        <a
          className="brand"
          href="#top"
          aria-label="BitwiseDharma home"
          aria-current="page"
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark" aria-hidden="true">
            bd
          </span>
          <span className="brand-name">BitwiseDharma</span>
        </a>

        <div className="nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <a className="button button-primary nav-cta" href={MAILTO}>
          Start a project
          <ArrowUpRight size={16} />
        </a>

        <button
          type="button"
          className={`nav-toggle${open ? ' is-open' : ''}`}
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="nav-toggle-line" />
          <span className="nav-toggle-line" />
        </button>
      </nav>

      <div
        id="site-menu"
        ref={overlayRef}
        className={`menu${open ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!open}
      >
        <div className="menu-inner">
          <p className="menu-eyebrow">Menu</p>

          <div className="menu-links">
            {links.map((link, index) => (
              <a
                key={link.href}
                ref={index === 0 ? firstLinkRef : undefined}
                href={link.href}
                style={{ transitionDelay: `${100 + index * 50}ms` }}
                onClick={() => setOpen(false)}
              >
                <span>{link.label}</span>
                <span className="menu-index">0{index + 1}</span>
              </a>
            ))}
          </div>

          <div className="menu-footer" style={{ transitionDelay: '300ms' }}>
            <a
              className="button button-primary menu-cta"
              href={MAILTO}
              onClick={() => setOpen(false)}
            >
              Start a project
              <ArrowUpRight size={16} />
            </a>
            <a className="menu-contact" href={MAILTO}>
              <Mail size={16} />
              bitwisedharma@gmail.com
            </a>
            <p className="menu-location">
              <MapPin size={16} />
              Hyderabad, Telangana, India
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
