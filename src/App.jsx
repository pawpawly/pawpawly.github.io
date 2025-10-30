import React from 'react'
import BubbleMenu from './components/BubbleMenu'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <BubbleMenu />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <Projects />
        <Skills />
        <Contacts />
      </main>
      <Footer />
    </div>
  )
}
