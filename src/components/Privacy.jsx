import React from 'react';
import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <section className="bg-[#111111] mt-24 text-[#F5F5F7] py-24 md:py-48 px-6 relative overflow-hidden min-h-[600px] md:h-[80svh] flex items-center">
      <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-24">

        {/* Left Side: Main Heading */}
        <div className="flex-1 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-4xl sm:text-5xl md:text-7xl leading-tight"
          >
            We prioritize you <br />
            and your <span className="italic text-gray-400">privacy</span>
          </motion.h2>
        </div>

        {/* Right Side: Checklist */}
        <div className="flex-1 w-full max-w-lg">
          <div className="space-y-6 md:space-y-8">
            {privacyItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                className="flex items-center justify-center lg:justify-start lg:items-start gap-4"
              >
                <div className="mt-1 w-6 h-6 rounded-full border border-green-500/30 flex items-center justify-center bg-green-900/10 text-green-400 shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-lg md:text-2xl font-light text-gray-200">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

const privacyItems = [
  "Your conversations are private.",
  "Your emotions are not data to sell.",
  "You are always in control."
];

export default Privacy;
