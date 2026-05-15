import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

function GitHubIcon({ size = 18 }) {
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

function LinkedInIcon({ size = 18 }) {
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

const contacts = [
  {
    Icon: Mail,
    lucide: true,
    label: 'Email',
    value: 'sadhuramyk7@gmail.com',
    href: 'mailto:sadhuramyk7@gmail.com',
    external: false,
  },
  {
    Icon: Phone,
    lucide: true,
    label: 'Phone',
    value: '+91-9874840130',
    href: 'tel:+919874840130',
    external: false,
  },
  {
    Icon: MapPin,
    lucide: true,
    label: 'Location',
    value: 'Bengaluru, India',
    href: null,
    external: false,
  },
  {
    Icon: GitHubIcon,
    lucide: false,
    label: 'GitHub',
    value: 'github.com/sadhuram09',
    href: 'https://github.com/sadhuram09',
    external: true,
  },
  {
    Icon: LinkedInIcon,
    lucide: false,
    label: 'LinkedIn',
    value: 'linkedin.com/in/sadhuram-agarwal-175249279',
    href: 'https://www.linkedin.com/in/sadhuram-agarwal-175249279/',
    external: true,
  },
]

function ContactRow({ item }) {
  const { Icon } = item

  const row = (
    <motion.div
      className="flex items-start gap-4"
      variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
    >
      <span className="mt-0.5 shrink-0 text-muted">
        {item.lucide ? <Icon size={18} strokeWidth={1.5} /> : <Icon size={18} />}
      </span>
      <div>
        <p className="mb-0.5 text-xs text-muted/70">{item.label}</p>
        <p className="text-[0.9rem] text-muted transition-colors duration-200 group-hover:text-heading">
          {item.value}
        </p>
      </div>
    </motion.div>
  )

  if (item.href) {
    return (
      <a
        href={item.href}
        className="group"
        {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {row}
      </a>
    )
  }

  return <div className="group">{row}</div>
}

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.target
    const data = new FormData(form)

    try {
      // TODO: replace with your Formspree endpoint
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="px-6 py-section md:px-8">
      <motion.div
        className="mx-auto max-w-content"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p className="section-label mb-4">// CONTACT</p>
        <h2 className="mb-3 text-3xl font-light text-heading">Let&apos;s Build Something</h2>
        <p className="mb-12 text-muted">
          Open to full-time roles, internships, freelance projects, and hackathon collabs.
        </p>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <motion.div
            className="glass-card glass-card-hover flex flex-col gap-6 p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {contacts.map((item) => (
              <ContactRow key={item.label} item={item} />
            ))}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="glass-card glass-card-hover flex flex-col gap-4 p-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            <input type="text" name="name" placeholder="Name" required className="input-field" />
            <input type="email" name="email" placeholder="Email" required className="input-field" />
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              required
              className="input-field resize-none"
            />
            <button type="submit" className="btn-primary h-12 w-full rounded-[10px]">
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="text-center text-sm text-cyan">Message sent. I&apos;ll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="text-center text-sm text-red-400">
                Something went wrong. Please email me directly.
              </p>
            )}
          </motion.form>
        </div>
      </motion.div>
    </section>
  )
}
