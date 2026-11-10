import { useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Work from './components/Work.jsx'
import About from './components/About.jsx'
import Archive from './components/Archive.jsx'
import Contact from './components/Contact.jsx'
import Lightbox from './components/Lightbox.jsx'

export default function App() {
  const [open, setOpen] = useState(null)

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Work onOpen={setOpen} />
        <About />
        <Archive />
        <Contact />
      </main>
      <Lightbox project={open} onClose={() => setOpen(null)} />
    </>
  )
}
