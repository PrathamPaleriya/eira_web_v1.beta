import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-32 lg:py-48 px-6 bg-[#FAFAF9]">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-indigo-950 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            Everything you need to know about eira
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-3 text-left cursor-pointer hover:bg-gray-50/50 transition-colors"
              >
                <span className="font-sans font-medium text-base text-indigo-950">
                  {faq.question}
                </span>
                <span className={`text-indigo-400 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-3 pb-3 text-gray-500 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

const faqs = [
  {
    question: "What is eira?",
    answer: "Eira is your personal AI wellness companion, designed to help you organize your thoughts, track your mood, and find mental clarity through supportive, judgment-free conversation."
  },
  {
    question: "Is my data private and secure?",
    answer: "Absolutely. We prioritize your privacy above all else. Your conversations are encrypted and are never sold to third parties. You have full control over your data at all times."
  },
  {
    question: "Can eira replace a therapist?",
    answer: "No, Eira is a self-help tool and not a replacement for professional therapy. While it provides support and emotional tracking, we encourage seeking professional help for clinical needs—and we can help connect you to the right one."
  },
  {
    question: "Is eira available 24/7?",
    answer: "Yes, Eira is always available whenever you need to talk, day or night, providing immediate support in moments when you need it most."
  },
  {
    question: "How does eira learn about my needs?",
    answer: "Eira learns from your conversations and mood patterns over time to provide more personalized insights and support, adapting to what works best for you."
  },
  {
    question: "What therapeutic approaches does eira use?",
    answer: "Eira draws inspiration from evidence-based approaches like CBT and mindfulness to guide conversations, helping you reframe negative thoughts and build emotional resilience."
  }
];

export default FAQ;
