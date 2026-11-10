import { useEffect, useState } from 'react'
import { profile } from '../data.js'

const links = [
  ['Work', '#work'],
  ['About', '#about'],
  ['Archive', '#archive'],
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`nav${open ? ' nav--open' : ''}`}>
      <a href="#top" className="nav__logo" aria-label="Vishal Singh, home" onClick={() => setOpen(false)}>
        VS<span>.</span>
      </a>

      <button
        className="nav__burger"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span /> <span />
      </button>

      <nav id="menu" className="nav__links">
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a href={`mailto:${profile.email}`} className="nav__cta" onClick={() => setOpen(false)}>
          <i className="dot" /> Say hi
        </a>
      </nav>
    </header>
  )
}
