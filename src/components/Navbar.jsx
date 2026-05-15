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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [drawerOpen])

  const handleNavClick = () => setDrawerOpen(false)

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'navbar-glass' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-5 md:px-8">
          <a
            href="#home"
            className="text-lg font-light tracking-mono text-heading"
            onClick={handleNavClick}
          >
            SA
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[0.85rem] text-muted transition-colors duration-200 hover:text-cyan"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="text-muted transition-colors hover:text-cyan md:hidden"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
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
        <ul className="flex flex-col gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-lg text-muted transition-colors duration-200 hover:text-cyan"
                onClick={handleNavClick}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}
