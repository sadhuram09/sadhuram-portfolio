import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import profileImg from '../assets/profile.jpeg'

const ease = [0.25, 0.1, 0.25, 1]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease, delay },
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
  { label: 'GitHub', href: 'https://github.com/sadhuram09', Icon: GitHubIcon },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sadhuram-agarwal-175249279/',
    Icon: LinkedInIcon,
  },
  { label: 'LeetCode', href: 'https://leetcode.com/u/SADHURAMAGARWAL/', Icon: LeetCodeIcon },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#080810] px-6 pb-24 pt-28 text-center"
      style={{ minHeight: '100vh' }}
    >
      <div
        className="pointer-events-none absolute bottom-[-200px] left-1/2 z-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(6,182,212,0.12) 0%, rgba(99,102,241,0.06) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-[1] mx-auto flex w-full max-w-5xl flex-col items-center">
        <motion.div
          {...fadeUp(0)}
          className="mb-10 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-[0.75rem] text-white/60"
        >
          ✦ Open to opportunities · 2026
        </motion.div>

        <motion.h1
          {...fadeUp(0.08)}
          className="mb-8 font-sans font-light tracking-tight text-[#F0F0F5]"
          style={{
            fontSize: 'clamp(3.5rem, 7vw, 6rem)',
            lineHeight: 1.05,
            fontWeight: 300,
          }}
        >
          AI/ML Engineer
        </motion.h1>

        <motion.div
          {...fadeUp(0.16)}
          className="mb-10 flex flex-wrap items-center justify-center text-[1.1rem] text-white/60"
          style={{ gap: '12px' }}
        >
          <span>Hello, I&apos;m Sadhuram</span>
          <img
            src={profileImg}
            alt="Sadhuram Agarwal"
            className="h-10 w-10 shrink-0 rounded-full border border-white/20 object-cover"
            width={40}
            height={40}
          />
          <span>an AI/ML Engineer</span>
        </motion.div>

        <motion.div
          {...fadeUp(0.24)}
          className="mb-12 flex flex-wrap items-center justify-center gap-5"
        >
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-white px-7 py-3 text-[0.9rem] font-medium text-[#080810] transition-colors duration-200 hover:bg-white/90"
          >
            Let&apos;s Connect →
          </a>
          <a
            href="mailto:sadhuramyk7@gmail.com"
            className="inline-flex items-center gap-2 text-[0.85rem] text-white/50 transition-colors duration-200 hover:text-white"
          >
            <Mail size={16} strokeWidth={1.5} />
            sadhuramyk7@gmail.com
          </a>
        </motion.div>

        <motion.div
          {...fadeUp(0.32)}
          className="flex items-center justify-center"
          style={{ gap: '24px' }}
        >
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-white/40 transition-colors duration-200 hover:text-white/90"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 z-[1] -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6, ease }}
        aria-hidden="true"
      >
        <div className="hero-scroll-line" />
      </motion.div>
    </section>
  )
}
