import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { profile } from '../data.js'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <footer className="contact" id="contact">
      <p className="eyebrow eyebrow--light">
        <i className="dot" /> Open to new projects and roles
      </p>
      <h2>
        Got something that needs <em>a little curiosity?</em>
      </h2>
      <div className="contact__row">
        <button className="email" onClick={copy}>
          {profile.email}
          <AnimatePresence>
            {copied && (
              <motion.span
                className="toast"
                initial={{ opacity: 0, y: 8, rotate: -6 }}
                animate={{ opacity: 1, y: 0, rotate: -6 }}
                exit={{ opacity: 0 }}
              >
                copied!
              </motion.span>
            )}
          </AnimatePresence>
        </button>
        <a href={`mailto:${profile.email}`} className="btn btn--sun">
          Write an email ↗
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn--ghost">
          LinkedIn ↗
        </a>
      </div>
      <div className="contact__foot">
        <span>© {new Date().getFullYear()} Vishal Singh</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}
