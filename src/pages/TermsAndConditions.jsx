import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const TermsAndConditions = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white text-[#111111] py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12">
                    <Link to="/" className="text-[#AAAAAA] hover:text-[#111111] transition-colors text-sm font-medium">
                        &larr; Back to Home
                    </Link>
                </div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="font-serif text-4xl md:text-6xl mb-8"
                >
                    Terms & Conditions
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="prose prose-lg text-gray-700 space-y-8 font-sans"
                >
                    <p className="text-xl">
                        Welcome to Eira. By accessing or using our website and services, you agree to be bound by these terms.
                    </p>

                    <section>
                        <h2 className="text-2xl font-serif mb-4 text-[#111111]">1. Acceptance of Terms</h2>
                        <p>
                            By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations,
                            and agree that you are responsible for compliance with any applicable local laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif mb-4 text-[#111111]">2. Use License</h2>
                        <p>
                            Permission is granted to temporarily download one copy of the materials (information or software) on Eira's website for personal,
                            non-commercial transitory viewing only.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif mb-4 text-[#111111]">3. Disclaimer</h2>
                        <p>
                            The materials on Eira's website are provided "as is". Eira makes no warranties, expressed or implied, and hereby disclaims and negates
                            all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose,
                            or non-infringement of intellectual property or other violation of rights.
                        </p>
                    </section>

                    <section>
                        <p className="italic text-sm text-gray-500 mt-12">
                            Last updated: December 2025
                        </p>
                    </section>

                </motion.div>
            </div>
        </div>
    )
}

export default TermsAndConditions
