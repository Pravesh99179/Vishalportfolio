import { forwardRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { categories, projects } from '../data.js'

const Card = forwardRef(function Card({ p, big, onOpen, index }, ref) {
  return (
    <motion.button
      ref={ref}
      layout
      type="button"
      className={`card${big ? ' card--big' : ''}`}
      style={{ '--c': p.color }}
      onClick={() => onOpen(p)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
    >
      <div className="card__img">
        <img src={p.images[0]} alt="" loading="lazy" />
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
  const [cat, setCat] = useState('All')
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured && (cat === 'All' || p.cat === cat))
  const featuredShown = featured.filter((p) => cat === 'All' || p.cat === cat)

  return (
    <section className="section" id="work">
      <div className="section__head">
        <h2>
          Selected <em>work</em>
        </h2>
        <p className="muted">Tap any project to flip through it.</p>
      </div>

      <div className="chips" role="tablist" aria-label="Filter projects">
        {categories.map((c) => (
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

      {featuredShown.length > 0 && (
        <>
          <p className="label">01 / Top projects</p>
          <motion.div layout className="grid grid--featured">
            <AnimatePresence mode="popLayout">
              {featuredShown.map((p, i) => (
                <Card key={p.id} p={p} big onOpen={onOpen} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </>
      )}

      {rest.length > 0 && (
        <>
          <p className="label">{featuredShown.length ? '02' : '01'} / More projects</p>
          <motion.div layout className="grid">
            <AnimatePresence mode="popLayout">
              {rest.map((p, i) => (
                <Card key={p.id} p={p} onOpen={onOpen} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </section>
  )
}
