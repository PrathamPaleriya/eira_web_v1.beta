import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/eira_logo_light.svg';

const Hero = () => {
  return (
    <div className="relative w-full h-[100svh] min-h-[600px] flex flex-col items-center">
        
        {/* Top Gradient - Large Blue Semi-circle (Cuts in half) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100%] h-[90%] md:w-[90%] md:h-[85%] bg-[#3E9EDA] rounded-full blur-[80px] md:blur-[120px] -translate-y-[38%] pointer-events-none opacity-90"></div>
        
        {/* Bottom Gradient - Full Purple Circle */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[60%] md:w-[60%] md:h-[60%] bg-[#A29EE3] rounded-full blur-[80px] md:blur-[120px] translate-y-[5%] pointer-events-none opacity mix-blend-multiply z-3"></div>

        {/* Header */}
        <header className="relative z-20 w-full flex justify-center py-6 md:py-8">
            <motion.img 
              src={logo} 
              alt="Eira Logo" 
              className="h-8 md:h-10"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1.0, ease: "easeOut" }}
            />
        </header>

        {/* Hero Content */}
        <motion.main 
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2, // Start content almost immediately
              }
            }
          }}
          className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 w-full  mx-auto -mt-10"
        >
          
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 1.0, ease: "easeOut" }
              }
            }}
            className="font-serif text-5xl sm:text-7xl md:text-7xl lg:text-8xl text-white mb-6 drop-shadow-sm"
          >
            You don't have to figure it out alone
          </motion.h1>
          
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 1.0, ease: "easeOut" }
              }
            }}
            className="font-sans text-white text-sm md:text-base lg:text-xl max-w-lg mx-auto mb-10 font-medium"
          >
             A safe space to talk, feel heard, and make sense of what you're feeling.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 1, ease: "easeOut" }
              }
            }}
          >
            <button className="bg-white hover:bg-white/100 text-[#726DC5] px-14 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer min-w-[160px]">
              Talk to Eira
            </button>
            <div className='text-sm mt-2 text-white'>( currently in beta )</div>
          </motion.div>

          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1, 
                transition: { duration: 1.5, delay: 1 } 
              }
            }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
          >
             <div className="text-white/80 text-sm  font-medium lowercase mb-2">
               swipe down
             </div>
          </motion.div>
        </motion.main>
      </div>
  );
};

export default Hero;
