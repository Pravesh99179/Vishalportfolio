import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { highlights, profile, stickers, verbs } from '../data.js'

function RotatingWord() {
  const [i, setI] = useState(0)
  const reduce = useReducedMotion()
  useEffect(() => {
    if (reduce) return
    const t = setInterval(() => setI((n) => (n + 1) % verbs.length), 1900)
    return () => clearInterval(t)
  }, [reduce])

  return (
    <span className="rotator">
      <AnimatePresence mode="wait">
        <motion.span
          key={verbs[i]}
          initial={{ y: '0.6em', opacity: 0, rotate: -4 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: '-0.6em', opacity: 0, rotate: 4 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
        >
          {verbs[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

function StickerBoard() {
  const board = useRef(null)
  const [z, setZ] = useState(stickers.map((_, i) => i))
  const bump = (i) => setZ((prev) => prev.map((v, k) => (k === i ? Math.max(...prev) + 1 : v)))

  return (
    <div className="board" ref={board}>
      {stickers.map((s, i) => (
        <motion.div
          key={s.label}
          className="sticker"
          role="img"
          aria-label={`${s.label} by Vishal Singh`}
          drag
          dragConstraints={board}
          dragElastic={0.15}
          dragMomentum
          onPointerDown={() => bump(i)}
          initial={{ scale: 0, rotate: s.r * 3 }}
          animate={{ scale: 1, rotate: s.r }}
          transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.25 + i * 0.08 }}
          whileHover={{ scale: 1.04, rotate: s.r * -0.5 }}
          whileDrag={{ scale: 1.08, rotate: 0, cursor: 'grabbing' }}
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            zIndex: z[i],
            '--w': `${s.w}px`,
            aspectRatio: s.ratio,
            backgroundImage: `url(${s.src})`,
            backgroundSize: `${s.size} auto`,
            backgroundPosition: s.pos,
          }}
        />
      ))}
      <p className="board__hint">
        psst… drag the stickers <span aria-hidden>↗</span>
      </p>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__text">
        <p className="eyebrow">
          <i className="dot" /> {profile.role} · {profile.location}
        </p>
        <h1 className="hero__name">
          Vishal
          <br />
          Singh<span className="accent">*</span>
        </h1>
        <p className="hero__line">
          I design <RotatingWord />
          <br />
          that make people <em>curious.</em>
        </p>
        <p className="hero__foot">
          <span className="accent">*</span> Five years across brand, swag, campaigns and social. Now designing at{' '}
          {profile.current}, after nearly four years at Meesho.
        </p>
        <div className="hero__ctas">
          <a href="#work" className="btn btn--ink">
            See the work ↓
          </a>
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn">
            Resume
          </a>
        </div>
        <dl className="stats">
          {highlights.map((h) => (
            <div key={h.label}>
              <dt>{h.n}</dt>
              <dd>{h.label}</dd>
            </div>
          ))}
        </dl>
      </div>
      <StickerBoard />
    </section>
  )
}
