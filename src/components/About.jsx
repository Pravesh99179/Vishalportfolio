import { motion } from 'framer-motion'
import { education, experience, profile } from '../data.js'

export default function About() {
  return (
    <section className="section about" id="about">
      <motion.figure
        className="polaroid"
        initial={{ rotate: -10, opacity: 0, y: 30 }}
        whileInView={{ rotate: -4, opacity: 1, y: 0 }}
        whileHover={{ rotate: 2 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 120, damping: 14 }}
      >
        <img src={profile.photo} alt="Vishal Singh, arms crossed, smiling" />
        <figcaption>that&apos;s me :)</figcaption>
        <span className="tape" aria-hidden />
      </motion.figure>

      <div className="about__text">
        <h2>
          Hello, I&apos;m <em>Vishal.</em>
        </h2>
        <blockquote>“{profile.quote}”</blockquote>
        <p className="muted">
          Since 2021 I&apos;ve made logos and identities, swag kits people actually keep, awards, event campaigns,
          social posts and the occasional video, for startups and for teams of thousands. I like work that has a
          little wink in it.
        </p>

        <h3 className="sub">Experience</h3>
        <ol className="xp">
          {experience.map((x) => (
            <li key={x.org + x.dates}>
              <div className="xp__head">
                <strong>{x.org}</strong>
                {x.type && <span className={`pill${x.type === 'Full-time' ? ' pill--solid' : ''}`}>{x.type}</span>}
              </div>
              <div className="xp__meta">
                {x.role} · {x.dates}
                {x.place && <> · {x.place}</>}
              </div>
              {x.points.length > 0 && (
                <ul>
                  {x.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>

        <h3 className="sub">Education</h3>
        <ul className="edu">
          {education.map((e) => (
            <li key={e.school}>
              <strong>{e.school}</strong>
              <span>
                {e.degree} · {e.years}
              </span>
            </li>
          ))}
        </ul>

        <div className="about__ctas">
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn btn--ink">
            Full resume ↗
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn">
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  )
}
