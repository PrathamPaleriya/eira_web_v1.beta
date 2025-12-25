import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const PrivacyPolicy = () => {
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
                    Privacy Policy
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="prose prose-lg text-gray-700 space-y-8 font-sans"
                >
                    <p className="text-xl">
                        Your privacy is critically important to us. At Eira, we have a few fundamental principles:
                    </p>

                    <section>
                        <h2 className="text-2xl font-serif mb-4 text-[#111111]">1. Information We Collect</h2>
                        <p>
                            We only ask for personal information when we truly need it to provide a service to you.
                            We collect it by fair and lawful means, with your knowledge and consent.
                            We also let you know why we’re collecting it and how it will be used.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif mb-4 text-[#111111]">2. Retention of Information</h2>
                        <p>
                            We only retain collected information for as long as necessary to provide you with your requested service.
                            What data we store, we’ll protect within commercially acceptable means to prevent loss and theft,
                            as well as unauthorized access, disclosure, copying, use or modification.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif mb-4 text-[#111111]">3. Sharing of Information</h2>
                        <p>
                            We don’t share any personally identifying information publicly or with third-parties, except when required to by law.
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

export default PrivacyPolicy
