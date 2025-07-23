// src/app/page.tsx

import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import About from '../components/sections/About'
import Contact from '../components/sections/Contact'
import Footer from '../components/sections/Footer'

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
