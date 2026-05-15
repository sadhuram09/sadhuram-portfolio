import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <footer className="px-6 py-16 text-center">
        <p className="text-[0.8rem] text-muted">
          Sadhuram Agarwal · Built with React · 2025
        </p>
      </footer>

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-8 right-8 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-glass-border bg-white/[0.06] text-muted transition-all duration-300 hover:text-cyan ${
          showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <ArrowUp size={18} strokeWidth={1.5} />
      </button>
    </>
  )
}
