import { motion } from 'framer-motion'

const ease = [0.25, 0.1, 0.25, 1]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease, delay },
})

function GitHubIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

function LinkedInIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function LeetCodeIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13.483 2.004h-1.966L9.66 5.823l-1.857-3.819H5.837l3.29 6.77L5.837 16.77h1.966l1.857-3.819 1.857 3.819h1.966l-3.29-6.77 3.29-6.77zm-1.966 9.543l1.857 3.819h-1.966l-1.857-3.819 1.966-3.819z" />
    </svg>
  )
}

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/sadhuram09',
    Icon: GitHubIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sadhuram-agarwal-175249279/',
    Icon: LinkedInIcon,
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/SADHURAMAGARWAL/',
    Icon: LeetCodeIcon,
  },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center"
      style={{ minHeight: '100vh' }}
    >
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: 'rgba(6, 182, 212, 0.07)',
          filter: 'blur(120px)',
        }}
        aria-hidden="true"
      />

      <motion.div className="relative z-[1] mx-auto flex w-full max-w-4xl flex-col items-center">
        <motion.div
          {...fadeUp(0)}
          className="mb-8 flex items-center justify-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-cyan"
        >
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-[#22c55e]" />
          // AVAILABLE FOR OPPORTUNITIES
        </motion.div>

        <motion.h1
          {...fadeUp(0.08)}
          className="mb-6 font-light text-heading"
          style={{
            fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
            lineHeight: 1.1,
            fontWeight: 300,
          }}
        >
          AI/ML Engineer
          <br />
          &amp; Full-Stack Dev
        </motion.h1>

        <motion.p
          {...fadeUp(0.16)}
          className="mb-10 max-w-xl text-[1.1rem] text-muted"
        >
          Building scalable AI systems that solve real problems.
        </motion.p>

        <motion.div
          {...fadeUp(0.24)}
          className="mb-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#projects" className="btn-primary">
            View Projects →
          </a>
          <a href="#contact" className="btn-secondary">
            Let&apos;s Talk
          </a>
        </motion.div>

        <motion.div
          {...fadeUp(0.32)}
          className="flex items-center justify-center gap-6"
        >
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted transition-colors duration-200 hover:text-cyan"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6, ease }}
        aria-hidden="true"
      >
        <motion.div
          className="h-10 w-px bg-muted/40"
          animate={{ scaleY: [0.6, 1, 0.6], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  )
}
