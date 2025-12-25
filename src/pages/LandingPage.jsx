import React from 'react'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Features from '../components/Features'
import Privacy from '../components/Privacy'
import FAQ from '../components/FAQ'
import CTASection from '../components/CTASection'

const LandingPage = () => {
    return (
        <>
            <Hero />
            <Intro />
            <Features />
            <Privacy />
            <FAQ />
            <CTASection />
        </>
    )
}

export default LandingPage
