import { forwardRef, useId, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects } from '../data.js'

const Card = forwardRef(function Card({ p, big, onOpen, index }, ref) {
  return (
    <motion.button
      ref={ref}
      layout
      type="button"
      className={`card${big ? ' card--big' : ''}${p.wide ? ' card--wide' : ''}`}
      style={{ '--c': p.color }}
      onClick={() => onOpen(p)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
    >
      <div className="card__img">
        <picture>
          {p.coverSm && <source media="(max-width: 720px)" srcSet={p.coverSm} />}
          <img src={p.cover ?? p.images[0]} alt="" loading="lazy" />
        </picture>
        {p.images.length > 1 && <span className="card__count">+{p.images.length - 1}</span>}
      </div>
      <div className="card__meta">
        <h3>{p.title}</h3>
        <span className="tag">{p.kind}</span>
      </div>
    </motion.button>
  )
})

export default function Work({ onOpen }) {
  const [open, setOpen] = useState(false)
  const [cat, setCat] = useState('All')
  const panelId = useId()

  const highlights = useMemo(() => projects.filter((p) => p.featured), [])
  const rest = useMemo(() => projects.filter((p) => !p.featured), [])
  // only offer filters that actually have something in the hidden layer
  const cats = useMemo(() => ['All', ...new Set(rest.map((p) => p.cat))], [rest])
  const shown = rest.filter((p) => cat === 'All' || p.cat === cat)

  return (
    <section className="section" id="work">
      <div className="section__head">
        <h2>
          Selected <em>work</em>
        </h2>
        <p className="muted">A few favourites first. Tap any project to flip through it.</p>
      </div>

      <p className="label">01 / Highlights</p>
      <div className="grid grid--featured">
        {highlights.map((p, i) => (
          <Card key={p.id} p={p} big onOpen={onOpen} index={i} />
        ))}
      </div>

      {rest.length > 0 && (
        <div className="vault">
          <button
            type="button"
            className={`vault__btn${open ? ' vault__btn--open' : ''}`}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="vault__stack" aria-hidden>
              {rest.slice(0, 5).map((p, i) => (
                <img key={p.id} src={p.images[0]} alt="" loading="lazy" style={{ '--i': i, '--c': p.color }} />
              ))}
            </span>
            <span className="vault__txt">
              <b>{open ? 'Tuck the rest away' : `${rest.length} more projects`}</b>
              <small>
                {open ? 'Back to the highlights' : 'Certificates, calendars, videos and the odd experiment'}
              </small>
            </span>
            <span className="vault__plus" aria-hidden>
              {open ? '−' : '+'}
            </span>
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                id={panelId}
                className="vault__panel"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <p className="label">02 / The rest</p>
                <div className="chips" role="tablist" aria-label="Filter the rest of the work">
                  {cats.map((c) => (
                    <button
                      key={c}
                      role="tab"
                      aria-selected={cat === c}
                      className={`chip${cat === c ? ' chip--on' : ''}`}
                      onClick={() => setCat(c)}
                    >
                      {c}
                    </button>
                  ))}
                </div>
                <motion.div layout className="grid grid--rest">
                  <AnimatePresence mode="popLayout">
                    {shown.map((p, i) => (
                      <Card key={p.id} p={p} onOpen={onOpen} index={i} />
                    ))}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </section>
  )
}
