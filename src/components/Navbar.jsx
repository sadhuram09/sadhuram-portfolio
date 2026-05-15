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

  const navLinkClass = (href) =>
    `rounded-full px-5 py-2 text-[0.85rem] transition-all duration-200 ${
      activeHref === href
        ? 'bg-white/10 text-white'
        : 'text-white/60 hover:bg-white/10 hover:text-white'
    }`

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'navbar-glass' : 'bg-transparent'
        }`}
      >
        <nav className="relative mx-auto flex max-w-content items-center justify-between px-6 py-5 md:px-8">
          <a
            href="#home"
            className="relative z-10 text-lg font-light tracking-mono text-heading"
            onClick={() => handleNavClick('#home')}
          >
            SA
          </a>

          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 rounded-full border border-white/10 bg-white/[0.06] px-2 py-1.5 backdrop-blur-[20px] md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={navLinkClass(link.href)}
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="relative z-10 flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full bg-white px-5 py-2 text-[0.85rem] font-medium text-[#080810] transition-colors duration-200 hover:bg-white/90 md:inline-flex"
              onClick={() => handleNavClick('#contact')}
            >
              Hire Me →
            </a>

            <button
              type="button"
              className="text-muted transition-colors hover:text-cyan md:hidden"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </header>

      {drawerOpen && (
        <button
          type="button"
          className="fixed inset-0 z-[60] bg-black/50 md:hidden"
          onClick={() => setDrawerOpen(false)}
          aria-label="Close menu overlay"
        />
      )}

      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-[min(320px,85vw)] flex-col border-l border-glass-border bg-[rgba(8,8,16,0.95)] p-8 backdrop-blur-glass transition-transform duration-300 md:hidden ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          type="button"
          className="mb-10 self-end text-muted transition-colors hover:text-cyan"
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
                className={`block rounded-full px-4 py-3 text-lg transition-colors duration-200 ${
                  activeHref === link.href
                    ? 'bg-white/10 text-white'
                    : 'text-muted hover:bg-white/10 hover:text-cyan'
                }`}
                onClick={() => handleNavClick(link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="mt-8 inline-flex justify-center rounded-full bg-white px-5 py-3 text-[0.85rem] font-medium text-[#080810] transition-colors hover:bg-white/90"
          onClick={() => handleNavClick('#contact')}
        >
          Hire Me →
        </a>
      </aside>
    </>
  )
}
