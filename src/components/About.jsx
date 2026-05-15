import { motion } from 'framer-motion'
import profileImg from '../assets/profile.jpeg'

const stats = ['8.92 GPA', '3× Hackathon Winner', '5+ Shipped Projects']

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export default function About() {
  return (
    <section id="about" className="px-6 py-section md:px-8">
      <div className="mx-auto grid max-w-about grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">
        <motion.div {...fadeUp} className="w-full">
          <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl border border-glass-border">
            <img
              src={profileImg}
              alt="Sadhuram Agarwal"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
        >
          <p className="section-label mb-4">// ABOUT</p>
          <h2 className="mb-6 text-[2rem] font-light text-heading">Who I Am</h2>
          <p className="mb-8 text-muted">
            I&apos;m Sadhuram — a developer and ML engineer based in Bengaluru,
            India. I build scalable AI systems, intelligent backends, and clean
            user interfaces. From real-time fraud detection engines to
            multilingual NLP pipelines, I work across the full stack — from model
            training to production deployment. I write C++, Python, and
            JavaScript — whichever one the problem deserves.
          </p>
          <motion.div
            className="flex flex-wrap gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {stats.map((stat) => (
              <motion.span
                key={stat}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="rounded-full border border-glass-border bg-glass px-4 py-1.5 text-[0.8rem] text-muted"
              >
                {stat}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
