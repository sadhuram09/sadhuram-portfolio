import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center"
    >
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(6,182,212,0.06)] blur-[100px]"
        aria-hidden="true"
      />
      <motion.div
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={item}
          className="mb-8 flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-cyan"
        >
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-[#22c55e]" />
          // AVAILABLE FOR OPPORTUNITIES
        </motion.div>

        <motion.h1
          variants={item}
          className="mb-6 text-heading"
          style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            lineHeight: 1.1,
            fontWeight: 300,
          }}
        >
          AI/ML Engineer
        </motion.h1>

        <motion.p variants={item} className="mb-10 max-w-xl text-[1.1rem] text-muted">
          Building AI systems that solve real problems.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4">
          <a href="#projects" className="btn-primary">
            View Projects →
          </a>
          <a href="#contact" className="btn-secondary">
            Let&apos;s Talk
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
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
