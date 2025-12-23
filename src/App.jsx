import { useState } from 'react'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Features from './components/Features'
import Privacy from './components/Privacy'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white relative selection:bg-purple-100">
      <Hero />
      <Intro />
      <Features />
      <Privacy />
      <FAQ />
      <Footer />
    </div>
  )
}


export default App
