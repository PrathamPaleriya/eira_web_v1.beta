import React from 'react';
import { motion } from 'framer-motion';
import ctaImage from '../assets/eira_cta_section.webp';
import Telegram_logo from '../assets/Telegram_logo.svg';

const CTASection = () => {
    return (
        <section className="relative py-32 w-full overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center gap-12">

                {/* Heading & Subheading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center space-y-4 mb-4"
                >
                    <h2 className="font-serif text-3xl md:text-5xl text-indigo-950 mb-4">
                        Ready when you are
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg">
                        You can start a conversation with Eira on the platform you're most comfortable with.
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 w-full">

                    {/* WhatsApp Button - Left (Desktop) / Second (Mobile) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="order-2 md:order-1"
                    >
                        <a
                            href="#" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full transition-all shadow-lg hover:shadow-green-500/30  justify-center"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.232-.298.347-.497.114-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            <span className="text-sm font-semibold">Try on WhatsApp</span>
                        </a>
                    </motion.div>

                    {/* Center Image with Enhanced Glow */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 md:order-2 relative"
                    >
                        {/* Enhanced Glow Effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-purple-400/30 to-blue-400/30 rounded-full blur-[80px] -z-10 animate-pulse-slow" />

                        <img
                            src={ctaImage}
                            alt="Eira App Interface"
                            className="w-[280px] sm:w-[320px] md:w-[380px] h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-700 ease-out"
                            draggable="false"
                        />
                    </motion.div>

                    {/* Telegram Button - Right (Desktop) / Third (Mobile) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="order-3 md:order-3"
                    >
                        <a
                            href="#" // Replace with actual Telegram Link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-full transition-all shadow-lg hover:shadow-blue-300/30  justify-center"
                        >
                            <img src={Telegram_logo} alt="Telegram Logo" className="w-6 h-6" />
                            <span className="font-semibold">Try on Telegram</span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
