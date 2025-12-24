import { useState } from 'react'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Features from './components/Features'
import Privacy from './components/Privacy'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Snow from './components/Snow'
import FloatingAudio from './components/FloatingAudio'
import CTASection from './components/CTASection'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white relative selection:bg-purple-100">
      <Snow />
      <Hero />
      <Intro />
      <Features />
      <Privacy />
      <FAQ />
      <CTASection />
      <Footer />
      <FloatingAudio />
    </div>
  )
}


export default App
