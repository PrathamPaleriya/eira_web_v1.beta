import React from 'react';
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <section className="my-64 flex items-center justify-center px-6 max-w-4xl mx-auto text-center relative z-10">
      
      {/* Background Orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-100/30 rounded-full blur-[80px] -z-10"></div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="font-serif text-4xl md:text-5xl lg:text-6xl text-indigo-950 leading-tight"
      >
        We know it's hard to understand what <br className="hidden md:block" />
        <span className="relative inline-block mx-2">
          <span className="relative z-10">you're feeling</span>
          <motion.span
            initial={{ width: '0%' }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            className="absolute left-0 bottom-1 h-3/4 w-full bg-[#EAD4FF] -z-0 -rotate-1 rounded-sm opacity-70"
          />
        </span>
        , find the right words, and make sense of it all.
      </motion.h2>
    </section>
  );
};

export default Intro;
