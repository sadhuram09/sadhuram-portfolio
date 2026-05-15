import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'

export default function Resume() {
  return (
    <section id="resume" className="px-6 py-section md:px-8">
      <motion.div
        className="mx-auto max-w-content text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p className="section-label mb-4">// RESUME</p>

        <h2 className="mb-3 text-3xl font-light text-heading">
          See the Full Picture
        </h2>

        <p className="mb-12 text-muted">
          Download my resume or view it directly in your browser.
        </p>

        <motion.div
          className="glass-card glass-card-hover glass-card-reflect mx-auto max-w-resume p-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          <FileText
            className="mx-auto mb-6 text-cyan"
            size={48}
            strokeWidth={1.25}
          />

          <h3 className="mb-2 text-xl font-light text-heading">
            Sadhuram Agarwal — Resume
          </h3>

          <p className="mb-8 text-sm text-muted">
            AI/ML Engineer · Updated 2026
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">

            {/* Download Resume */}
            <a
              href="https://drive.google.com/uc?export=download&id=1974874fiIm3AJzhTqDS5TGH6FOUY2_z4"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Download PDF ↓
            </a>

            {/* View Resume */}
            <a
              href="https://drive.google.com/file/d/1974874fiIm3AJzhTqDS5TGH6FOUY2_z4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              View in Browser ↗
            </a>

          </div>
        </motion.div>

        <p className="mt-8 text-sm text-muted">
          Last updated · May 2026
        </p>
      </motion.div>
    </section>
  )
}