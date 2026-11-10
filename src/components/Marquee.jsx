import { skills } from '../data.js'

export default function Marquee() {
  const row = skills.map((s) => (
    <span key={s}>
      {s} <b aria-hidden>✺</b>
    </span>
  ))
  return (
    <div className="marquee" aria-label={`Skills: ${skills.join(', ')}`}>
      <div className="marquee__track" aria-hidden>
        {row}
        {row}
      </div>
    </div>
  )
}
