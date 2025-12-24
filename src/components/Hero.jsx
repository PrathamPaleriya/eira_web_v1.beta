import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/eira_logo_light.svg';

const Hero = () => {
  // Phase 0: Logo triggers (start immediately)
  // Phase 1: Logo moves to header (after delay)
  // Phase 2: Content appears (after logo settles)

  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    // Start moving logo after initial pause
    const moveTimer = setTimeout(() => {
      setAnimationPhase(1);
    }, 1200);

    // Show content after logo is in place
    const contentTimer = setTimeout(() => {
      setAnimationPhase(2);
    }, 2200); // 1200 + 1000 (roughly transition time)

    return () => {
      clearTimeout(moveTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  const isLogoCentered = animationPhase === 0;
  const showContent = animationPhase === 2;

  return (
    <div className="relative w-full h-[100svh] min-h-[600px] flex flex-col items-center">

      {/* Top Gradient - Large Blue Semi-circle (Cuts in half) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100%] h-[90%] md:w-[90%] md:h-[85%] bg-[#3E9EDA] rounded-full blur-[80px] md:blur-[120px] -translate-y-[38%] pointer-events-none opacity-90"></div>

      {/* Bottom Gradient - Full Purple Circle */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[60%] md:w-[60%] md:h-[60%] bg-[#A29EE3] rounded-full blur-[80px] md:blur-[120px] translate-y-[5%] pointer-events-none opacity mix-blend-multiply z-3"></div>

      {/* Initial Centered Logo Container */}
      {isLogoCentered && (
        <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
          <motion.img
            layoutId="hero-logo"
            src={logo}
            alt="Eira Logo"
            className="h-24 md:h-32 opacity-100 placeholder:invisible"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ willChange: "transform, opacity" }} // Optimize for iOS
          />
        </div>
      )}

      {/* Header */}
      <header className="relative z-20 w-full flex justify-center py-6 md:py-8 min-h-[80px]">
        {!isLogoCentered && (
          <motion.img
            layoutId="hero-logo"
            src={logo}
            alt="Eira Logo"
            className="h-8 md:h-10"
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 20,
              duration: 1.0
            }}
            style={{ willChange: "transform, opacity" }} // Optimize for iOS
          />
        )}
      </header>

      {/* Hero Content */}
      <motion.main
        initial="hidden"
        animate={showContent ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
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
              transition: { duration: 0.8, ease: "easeOut" }
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
              transition: { duration: 0.8, ease: "easeOut" }
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
              transition: { duration: 0.8, ease: "easeOut" }
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
              transition: { duration: 1.0, delay: 1.0 }
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
