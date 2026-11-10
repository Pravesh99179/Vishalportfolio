import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Lightbox({ project, onClose }) {
  const [i, setI] = useState(0)
  const closeBtn = useRef(null)
  const n = project?.images.length ?? 0

  useEffect(() => setI(0), [project])

  useEffect(() => {
    if (!project) return
    const prevFocus = document.activeElement
    closeBtn.current?.focus()
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setI((v) => (v + 1) % n)
      if (e.key === 'ArrowLeft') setI((v) => (v - 1 + n) % n)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      prevFocus?.focus?.()
    }
  }, [project, n, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="lb"
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="lb__panel"
            style={{ '--c': project.color }}
            initial={{ y: 40, scale: 0.97 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 40, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lb__top">
              <div>
                <span className="tag">{project.kind}</span>
                <h3>{project.title}</h3>
              </div>
              <button ref={closeBtn} className="lb__close" onClick={onClose} aria-label="Close">
                ✕
              </button>
            </div>

            <div className="lb__stage">
              <AnimatePresence mode="wait">
                <motion.img
                  key={project.images[i]}
                  src={project.images[i]}
                  alt={`${project.title}, slide ${i + 1} of ${n}`}
                  draggable={false}
                  drag={n > 1 ? 'x' : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.4}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -60) setI((i + 1) % n)
                    else if (info.offset.x > 60) setI((i - 1 + n) % n)
                  }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                />
              </AnimatePresence>
              {n > 1 && (
                <>
                  <button className="lb__nav lb__nav--l" onClick={() => setI((i - 1 + n) % n)} aria-label="Previous">
                    ←
                  </button>
                  <button className="lb__nav lb__nav--r" onClick={() => setI((i + 1) % n)} aria-label="Next">
                    →
                  </button>
                </>
              )}
            </div>

            <div className="lb__bottom">
              <p>{project.blurb}</p>
              <div className="lb__side">
                {n > 1 && (
                  <div className="dots">
                    {project.images.map((src, k) => (
                      <button
                        key={src}
                        className={k === i ? 'on' : ''}
                        onClick={() => setI(k)}
                        aria-label={`Slide ${k + 1}`}
                      />
                    ))}
                  </div>
                )}
                {project.links?.map((l) => (
                  <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className="btn btn--small">
                    ▶ {l.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
