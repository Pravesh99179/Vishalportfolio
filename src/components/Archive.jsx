import { archive, profile } from '../data.js'

export default function Archive() {
  return (
    <section className="section" id="archive">
      <div className="section__head">
        <h2>
          The <em>archive</em>
        </h2>
        <p className="muted">
          Everything else lives in Google Drive, sorted into folders.{' '}
          <a href={profile.driveUrl} target="_blank" rel="noreferrer" className="link">
            Open the whole drive ↗
          </a>
        </p>
      </div>
      <ul className="folders">
        {archive.map((f, i) => (
          <li key={f.id}>
            <a href={f.url} target="_blank" rel="noreferrer" className="folder" style={{ '--i': i }}>
              <span className="folder__num">{String(i + 1).padStart(2, '0')}</span>
              <span className="folder__name">{f.title}</span>
              <span className="folder__arrow" aria-hidden>
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
