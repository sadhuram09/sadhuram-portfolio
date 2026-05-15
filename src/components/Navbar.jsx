import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) {
          setActiveHref(`#${visible.target.id}`)
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5] }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [drawerOpen])

  const handleNavClick = (href) => {
    setActiveHref(href)
    setDrawerOpen(false)
  }

  const linkStyle = (href, isActive) => ({
    padding: '8px 18px',
    borderRadius: '999px',
    fontSize: '0.82rem',
    color: isActive ? 'white' : 'rgba(255,255,255,0.55)',
    textDecoration: 'none',
    background: isActive ? 'rgba(255,255,255,0.08)' : 'transparent',
    transition: 'background 0.2s, color 0.2s',
  })

  const handleLinkHover = (e, href, entering) => {
    if (activeHref === href) return
    if (entering) {
      e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
      e.currentTarget.style.color = 'white'
    } else {
      e.currentTarget.style.background = 'transparent'
      e.currentTarget.style.color = 'rgba(255,255,255,0.55)'
    }
  }

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'background 0.3s',
          ...(scrolled
            ? {
                background: 'rgba(8,8,16,0.7)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }
            : { background: 'transparent' }),
        }}
      >
        <nav
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '20px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
          }}
        >
          <a
            href="#home"
            onClick={() => handleNavClick('#home')}
            style={{
              fontSize: '1.1rem',
              fontWeight: 300,
              letterSpacing: '0.1em',
              color: 'white',
              textDecoration: 'none',
              position: 'relative',
              zIndex: 10,
            }}
          >
            SA
          </a>

          <div
            className="nav-pill-desktop"
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(255,255,255,0.06)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '999px',
              padding: '6px 8px',
              gap: '4px',
              alignItems: 'center',
            }}
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                style={linkStyle(link.href, activeHref === link.href)}
                onMouseEnter={(e) => handleLinkHover(e, link.href, true)}
                onMouseLeave={(e) => handleLinkHover(e, link.href, false)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', position: 'relative', zIndex: 10 }}>
            <a
              href="#contact"
              className="hire-btn-desktop"
              onClick={() => handleNavClick('#contact')}
              style={{
                background: 'white',
                color: '#080810',
                borderRadius: '999px',
                padding: '8px 20px',
                fontSize: '0.82rem',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.9'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1'
              }}
            >
              Hire Me →
            </a>

            <button
              type="button"
              className="nav-menu-mobile"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(255,255,255,0.6)',
                cursor: 'pointer',
                padding: '4px',
              }}
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </header>

      <style>{`
        .nav-pill-desktop { display: none; }
        .hire-btn-desktop { display: none; }
        .nav-menu-mobile { display: flex; }
        @media (min-width: 768px) {
          .nav-pill-desktop { display: flex; }
          .hire-btn-desktop { display: inline-flex; }
          .nav-menu-mobile { display: none; }
        }
      `}</style>

      {drawerOpen && (
        <button
          type="button"
          className="fixed inset-0 z-[60] bg-black/50 md:hidden"
          onClick={() => setDrawerOpen(false)}
          aria-label="Close menu overlay"
        />
      )}

      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-[min(320px,85vw)] flex-col border-l border-white/10 bg-[#080810] p-8 transition-transform duration-300 md:hidden ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          type="button"
          className="mb-10 self-end text-white/60 transition-colors hover:text-white"
          onClick={() => setDrawerOpen(false)}
          aria-label="Close menu"
        >
          <X size={22} strokeWidth={1.5} />
        </button>
        <ul className="flex flex-col gap-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                style={linkStyle(link.href, activeHref === link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          onClick={() => handleNavClick('#contact')}
          style={{
            marginTop: '32px',
            display: 'inline-flex',
            justifyContent: 'center',
            background: 'white',
            color: '#080810',
            borderRadius: '999px',
            padding: '12px 20px',
            fontSize: '0.82rem',
            fontWeight: 500,
            textDecoration: 'none',
          }}
        >
          Hire Me →
        </a>
      </aside>
    </>
  )
}
