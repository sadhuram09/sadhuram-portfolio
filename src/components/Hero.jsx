import { motion } from 'framer-motion'
import { Code2, Mail } from 'lucide-react'
import profileImg from '../assets/profile.jpeg'

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

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '0 24px',
        textAlign: 'center',
        background: '#080810',
      }}
    >
      {/* Planet orb */}
      <div
        style={{
          position: 'absolute',
          bottom: '-300px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '900px',
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse at center, rgba(6,182,212,0.13) 0%, rgba(99,102,241,0.07) 40%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', width: '100%' }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '999px',
            padding: '6px 18px',
            fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.6)',
            letterSpacing: '0.08em',
            marginBottom: '40px',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#22c55e',
              display: 'inline-block',
            }}
          />
          Open to opportunities · 2026
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ marginBottom: '32px' }}
        >
          <div
            style={{
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              color: 'rgba(255,255,255,0.4)',
              lineHeight: 1.05,
              marginBottom: '4px',
            }}
          >
            Systems that
          </div>
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300,
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              color: '#F0F0F5',
              lineHeight: 1.05,
            }}
          >
            actually ship.
          </div>
        </motion.div>

        {/* Inline intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.55)',
            marginBottom: '48px',
            flexWrap: 'wrap',
          }}
        >
          <span>Hello, I&apos;m Sadhuram</span>
          <img
            src={profileImg}
            alt="Sadhuram"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              objectFit: 'cover',
              objectPosition: 'top',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          />
          <span>an AI/ML Engineer</span>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '56px',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="#contact"
            style={{
              background: 'white',
              color: '#080810',
              borderRadius: '999px',
              padding: '12px 28px',
              fontWeight: 500,
              fontSize: '0.9rem',
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.85'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1'
            }}
          >
            Let&apos;s Connect →
          </a>
          <a
            href="mailto:sadhuramyk7@gmail.com"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'rgba(255,255,255,0.45)',
              fontSize: '0.85rem',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'white'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(255,255,255,0.45)'
            }}
          >
            <Mail size={14} />
            sadhuramyk7@gmail.com
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '28px' }}
        >
          {[
            { icon: <GitHubIcon size={20} />, href: 'https://github.com/sadhuram09', label: 'GitHub' },
            {
              icon: <LinkedInIcon size={20} />,
              href: 'https://www.linkedin.com/in/sadhuram-agarwal-175249279/',
              label: 'LinkedIn',
            },
            {
              icon: <Code2 size={20} />,
              href: 'https://leetcode.com/u/SADHURAMAGARWAL/',
              label: 'LeetCode',
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              style={{
                color: 'rgba(255,255,255,0.35)',
                transition: 'color 0.2s',
                display: 'flex',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'white'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.35)'
              }}
            >
              {s.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
